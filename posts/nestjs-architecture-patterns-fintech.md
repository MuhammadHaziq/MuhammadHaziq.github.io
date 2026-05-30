---
title: "NestJS Architecture Patterns for Fintech Applications"
date: "2026-04-28"
description: "Practical NestJS patterns for building reliable fintech backends — module organization, payment flow design, error handling, and observability."
tags: ["NestJS", "Architecture", "Fintech", "TypeScript", "Node.js", "Backend"]
readTime: "10 min read"
---

NestJS is the dominant framework for enterprise Node.js development in 2025. Its opinionated structure — modules, dependency injection, decorators — maps well onto the domain-driven design patterns that fintech applications need. But the framework gives you structure, not architecture. The decisions that matter are still yours to make.

After building payment systems at InsuranceMarket.ae and FinanceThat, here are the patterns that have proven reliable in production fintech environments.

## Module Organization: Domain-First, Not Layer-First

The instinct in many NestJS tutorials is to organize by technical layer: a `controllers/` folder, a `services/` folder, a `repositories/` folder. This works fine for small applications. It breaks down when the domain grows.

Organize by domain instead:

```
src/
  payments/
    payments.module.ts
    payments.controller.ts
    payments.service.ts
    payments.repository.ts
    dto/
    entities/
    events/
  policies/
    policies.module.ts
    ...
  users/
    users.module.ts
    ...
  shared/
    database/
    events/
    guards/
    interceptors/
```

Each domain module owns its own controller, service, and repository. Cross-domain communication happens through the `shared/events/` layer, not through direct service injection. This keeps modules independently testable and deployable.

## Payment State Machines with Explicit Transitions

The biggest architectural mistake in payment systems is implicit state. When an order can be `pending`, `processing`, `paid`, `failed`, or `refunded`, every possible transition needs to be explicit — and transitions that don't make sense should be impossible.

```typescript
// payments/payment-state-machine.ts
type OrderStatus = 'pending' | 'processing' | 'paid' | 'failed' | 'refunded';

const VALID_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  pending:    ['processing', 'failed'],
  processing: ['paid', 'failed'],
  paid:       ['refunded'],
  failed:     [],
  refunded:   [],
};

export function validateTransition(
  from: OrderStatus,
  to: OrderStatus
): void {
  if (!VALID_TRANSITIONS[from].includes(to)) {
    throw new Error(`Invalid transition: ${from} → ${to}`);
  }
}
```

Calling `validateTransition` before every status update means that invalid state transitions fail loudly with a clear error, not silently with data corruption.

In the service:

```typescript
async processPayment(orderId: string): Promise<void> {
  const order = await this.ordersRepo.findOneOrFail({ where: { id: orderId } });

  validateTransition(order.status, 'processing');

  await this.ordersRepo.update(
    { id: orderId, status: 'pending' },    // atomic transition
    { status: 'processing' }
  );

  // ... call gateway
}
```

## Typed Error Handling with Domain Exceptions

NestJS's built-in HTTP exceptions are fine for simple APIs. For fintech, you need domain-level exceptions that carry enough context for logging and retry decisions.

```typescript
// shared/exceptions/payment.exceptions.ts
export class PaymentGatewayException extends Error {
  constructor(
    public readonly gatewayName: string,
    public readonly gatewayCode: string,
    public readonly isRetryable: boolean,
    message: string,
  ) {
    super(message);
    this.name = 'PaymentGatewayException';
  }
}

export class InsufficientFundsException extends PaymentGatewayException {
  constructor(gatewayName: string) {
    super(gatewayName, 'INSUFFICIENT_FUNDS', false, 'Payment declined: insufficient funds');
  }
}

export class GatewayTimeoutException extends PaymentGatewayException {
  constructor(gatewayName: string) {
    super(gatewayName, 'TIMEOUT', true, 'Payment gateway timeout — safe to retry');
  }
}
```

The `isRetryable` flag is critical: it tells the calling code whether this failure should be retried or surfaced to the user immediately. A timeout is retryable. A declined card is not.

An exception filter then handles these uniformly:

```typescript
@Catch(PaymentGatewayException)
export class PaymentExceptionFilter implements ExceptionFilter {
  catch(exception: PaymentGatewayException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const statusCode = exception.isRetryable ? 503 : 402;

    this.logger.error('Payment gateway error', {
      gateway: exception.gatewayName,
      code: exception.gatewayCode,
      retryable: exception.isRetryable,
    });

    response.status(statusCode).json({
      statusCode,
      message: exception.message,
      retryable: exception.isRetryable,
    });
  }
}
```

## Interceptors for Consistent Response Shaping

Every API response should have a consistent envelope — status, data, and pagination metadata where applicable. A transform interceptor handles this once rather than in every controller method.

```typescript
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}
```

Applied globally in `main.ts`:

```typescript
app.useGlobalInterceptors(new TransformInterceptor());
```

## Observability: Structured Logging from Day One

The biggest mistake I see in early-stage fintech APIs is adding logging "later." In payment systems, you need structured logs from day one — because when something goes wrong at 2am, the logs are what you have.

Use NestJS's built-in logger with a structured format:

```typescript
@Injectable()
export class PaymentsService {
  private readonly logger = new Logger(PaymentsService.name);

  async processPayment(orderId: string, gatewayName: string) {
    this.logger.log('Payment initiated', {
      orderId,
      gateway: gatewayName,
      timestamp: new Date().toISOString(),
    });

    try {
      // ...
      this.logger.log('Payment confirmed', { orderId, gateway: gatewayName });
    } catch (error) {
      this.logger.error('Payment failed', {
        orderId,
        gateway: gatewayName,
        error: error.message,
        stack: error.stack,
      });
      throw error;
    }
  }
}
```

For production, pipe this to a structured logging service. At InsuranceMarket.ae we use Axiom. Papertrail and Datadog also work well. The key is that every log entry for a payment carries the `orderId` — which lets you reconstruct the complete lifecycle of any payment in seconds.

## Health Checks for Each Gateway

Payment gateways go down. They go into maintenance mode. They return 200 OK with an error body. A health check endpoint that verifies each gateway is reachable saves you from discovering downtime via customer complaints.

```typescript
@Controller('health')
export class HealthController {
  constructor(
    private readonly checkoutService: CheckoutService,
    private readonly tapService: TapService,
  ) {}

  @Get()
  async check() {
    const [checkout, tap] = await Promise.allSettled([
      this.checkoutService.ping(),
      this.tapService.ping(),
    ]);

    return {
      status: 'ok',
      gateways: {
        checkout: checkout.status === 'fulfilled' ? 'up' : 'down',
        tap: tap.status === 'fulfilled' ? 'up' : 'down',
      },
    };
  }
}
```

Expose this endpoint to your monitoring system and page on it. A gateway being down is recoverable. Being down for 3 hours without knowing is not.

## Testing Strategy

Unit tests for business logic (state machine, calculations, validation). Integration tests for the service layer against a real test database. No mocking the database in integration tests — that's how mock/prod divergence causes production incidents.

For payment gateway calls, use their official sandbox environments rather than mocking. If a gateway doesn't have a sandbox, build a minimal stub that returns the same response shapes as the real API.

```typescript
// Unit test: business logic
describe('validateTransition', () => {
  it('allows pending → processing', () => {
    expect(() => validateTransition('pending', 'processing')).not.toThrow();
  });
  it('rejects paid → processing', () => {
    expect(() => validateTransition('paid', 'processing')).toThrow();
  });
});

// Integration test: service against real DB
describe('PaymentsService (integration)', () => {
  it('transitions order to paid exactly once under concurrency', async () => {
    const orderId = await createTestOrder({ status: 'pending' });

    // Simulate concurrent webhook + poll
    const results = await Promise.allSettled([
      service.confirmPayment(orderId),
      service.confirmPayment(orderId),
    ]);

    const successCount = results.filter(r => r.status === 'fulfilled').length;
    const order = await ordersRepo.findOne({ where: { id: orderId } });

    expect(order.status).toBe('paid');
    expect(successCount).toBe(1); // only one transition succeeds
  });
});
```

## Summary

The patterns that matter most in fintech NestJS applications:

- **Domain-first module organization** — avoids cross-cutting dependencies
- **Explicit state machines** — invalid transitions fail loudly
- **Domain exceptions with `isRetryable`** — makes error handling consistent
- **Structured logging with entity IDs** — essential for production debugging
- **Integration tests against real databases** — catches what mocks miss

None of these are novel ideas. They're standard patterns applied to the specific reliability requirements of payment systems. NestJS gives you the scaffolding to implement them cleanly. The decisions that make them work are still engineering decisions.
