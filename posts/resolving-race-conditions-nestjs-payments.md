---
title: "Resolving Race Conditions in NestJS Payment Flows"
date: "2026-05-20"
description: "A practical guide to identifying and fixing race conditions in async payment processing — based on real fintech production experience at InsuranceMarket.ae."
tags: ["NestJS", "Node.js", "Fintech", "TypeScript", "Payments"]
readTime: "8 min read"
---

Race conditions in payment systems are silent, expensive, and notoriously hard to reproduce in development. They tend to surface under production load — usually on a Friday.

At InsuranceMarket.ae, I spent several weeks tracking down intermittent payment failures across three concurrent gateways: Apple Pay, Checkout.com, and TAP. The failures occurred in roughly 0.3% of transactions — infrequent enough to dismiss as a third-party issue, frequent enough to cost real money and erode user trust.

This is what I found and how I fixed it.

## What the Problem Looked Like

The symptom was deceptively simple: a user would complete checkout, the gateway would confirm payment, but the insurance policy would either not be issued — or would be issued twice.

The root cause was that two separate code paths were both reacting to the same payment confirmation event:

1. **The webhook handler** — called by the gateway when payment completes
2. **A polling job** — checking payment status every 30 seconds as a fallback

Both paths used the same read-check-write pattern:

```typescript
// Webhook handler
async handleWebhook(payload: WebhookPayload) {
  const order = await this.ordersService.findOne(payload.orderId);
  if (order.status === 'pending') {
    await this.ordersService.update(payload.orderId, { status: 'paid' });
    await this.policiesService.issue(payload.orderId); // may run twice
  }
}

// Polling job (running every 30s)
async pollPaymentStatus(orderId: string) {
  const order = await this.ordersService.findOne(orderId);
  if (order.status === 'pending') {
    const status = await this.gatewayService.checkStatus(orderId);
    if (status === 'paid') {
      await this.ordersService.update(orderId, { status: 'paid' });
      await this.policiesService.issue(orderId); // may run twice
    }
  }
}
```

Under concurrent execution, both paths read `status: 'pending'`, both pass the check, and both attempt to issue the policy. The database `UPDATE` happens twice. The policy issuance happens twice.

## Fix 1: Atomic Status Transitions

The core fix is making the state transition atomic using a conditional `UPDATE ... WHERE` at the database level.

```typescript
async transitionOrderToPaid(orderId: string): Promise<boolean> {
  const [affectedRows] = await this.orderRepository.update(
    { id: orderId, status: 'pending' }, // WHERE — only matches if still pending
    { status: 'paid', paidAt: new Date() }
  );
  return affectedRows > 0; // true = we "won" the race
}

async handleWebhook(payload: WebhookPayload) {
  const updated = await this.transitionOrderToPaid(payload.orderId);

  if (updated) {
    // Only issue the policy if we transitioned the status
    await this.policiesService.issue(payload.orderId);
  }
}
```

MySQL (and every major SQL database) guarantees that an `UPDATE` with a `WHERE` clause is atomic. Only one concurrent process gets `affectedRows > 0`. The "loser" gets zero affected rows and skips the side effect entirely.

With Sequelize this looks like:

```typescript
const [affectedRows] = await Order.update(
  { status: 'paid', paidAt: new Date() },
  { where: { id: orderId, status: 'pending' } }
);
```

This single change eliminated the double-issuance problem.

## Fix 2: Idempotency Keys on Webhook Handlers

Most payment gateways (Checkout.com, Stripe, TAP) deliver webhooks with a unique event ID. Store processed event IDs to prevent double-processing of the same webhook — gateways often deliver the same event more than once.

```typescript
@Entity()
export class ProcessedWebhookEvent {
  @PrimaryColumn()
  eventId: string;

  @Column()
  processedAt: Date;
}

async handleWebhook(payload: WebhookPayload) {
  // Will throw a unique-constraint error if already processed
  await this.dataSource.transaction(async (manager) => {
    await manager.save(ProcessedWebhookEvent, {
      eventId: payload.eventId,
      processedAt: new Date(),
    });

    const [affected] = await manager.update(
      Order,
      { id: payload.orderId, status: 'pending' },
      { status: 'paid', paidAt: new Date() }
    );

    if (affected > 0) {
      await this.policiesService.issue(payload.orderId);
    }
  });
}
```

The transaction ensures that the idempotency check and the status transition are atomic together. If the same webhook arrives twice concurrently, one will throw on the unique constraint and the other will succeed cleanly.

## Fix 3: Replace Polling with a Queue

The most architecturally sound change was eliminating the polling job entirely.

Polling creates a persistent source of concurrency with the webhook handler. Even with the atomic update fix, the polling job adds unnecessary database load and complexity.

The better pattern: schedule a single delayed job when the payment is initiated. The job only fires if the webhook hasn't already confirmed by then.

```typescript
@Injectable()
export class PaymentService {
  constructor(
    @InjectQueue('payments') private paymentQueue: Queue,
  ) {}

  async initiatePayment(orderId: string) {
    const intent = await this.gatewayService.createIntent(orderId);

    // Schedule a one-time fallback check 5 minutes from now
    await this.paymentQueue.add(
      'verify-payment-status',
      { orderId, intentId: intent.id },
      {
        delay: 5 * 60 * 1000,
        attempts: 3,
        backoff: { type: 'exponential', delay: 30000 },
      }
    );

    return intent;
  }
}

@Processor('payments')
export class PaymentProcessor {
  async process(job: Job<{ orderId: string }>) {
    // Uses the same atomic transition — no-op if webhook already fired
    const updated = await this.transitionOrderToPaid(job.data.orderId);
    if (updated) {
      await this.policiesService.issue(job.data.orderId);
    }
  }
}
```

With this pattern, the polling job is gone. The fallback job runs at most once, and the atomic update ensures it's a no-op if the webhook already processed the payment. BullMQ with Redis is the standard choice for this in NestJS.

## What Was Deployed in Production

At InsuranceMarket.ae, all three approaches were deployed together:

- **Atomic `UPDATE ... WHERE`** on every status transition
- **Idempotency keys** stored per event ID, within a transaction
- **BullMQ delayed job** replacing the polling mechanism

Payment failure rate dropped from ~0.3% to effectively zero within the first 24 hours after deployment. No changes were required on the client side or in the gateway integrations themselves.

## Key Takeaways

- **Read-check-write is dangerous under concurrency.** Move the check into the `WHERE` clause of your `UPDATE`.
- **Treat webhooks as at-least-once delivery.** Always implement idempotency.
- **Polling and webhooks conflict.** Replace polling with a queue-based fallback.
- **Transactions tie idempotency and state transitions together** atomically.

These patterns apply to any payment gateway that uses asynchronous webhook confirmation — Stripe, PayPal, Checkout.com, TAP, or Apple Pay.
