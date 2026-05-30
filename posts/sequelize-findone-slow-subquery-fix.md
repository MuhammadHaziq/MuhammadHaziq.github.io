---
title: "Why Sequelize findOne with Multiple Includes Is Slow (and How to Fix It)"
date: "2026-05-30"
description: "A real production fix: replacing a slow Sequelize findOne with nested includes (which generates a subquery) with findAll using inner joins — cutting query time from seconds to milliseconds."
tags: ["Sequelize", "Node.js", "MySQL", "Performance", "NestJS", "Backend"]
readTime: "7 min read"
---

At InsuranceMarket.ae, we had an API endpoint that returned a fully populated insurance policy — with associated payment records, user details, and coverage items. It worked fine in development. In production, under load, it was taking 3–8 seconds to respond.

The culprit: a single `findOne` call with four nested `include` associations.

Here is exactly what was happening, and how we fixed it.

## The Original Code

```typescript
const policy = await Policy.findOne({
  where: { id: policyId },
  include: [
    {
      model: Payment,
      where: { status: 'completed' },
    },
    {
      model: User,
      attributes: ['id', 'email', 'phone'],
    },
    {
      model: Coverage,
      include: [
        {
          model: CoverageItem,
        },
      ],
    },
  ],
});
```

Clean, readable, and completely standard Sequelize usage. The problem is invisible until you look at what SQL it actually generates.

## What SQL Sequelize Actually Generates

Run your query with `logging: console.log` or check your database slow query log. Here is the simplified version of what Sequelize generates for `findOne` with multiple includes:

```sql
SELECT
  `Policy`.`id`,
  `Policy`.`status`,
  `Payment`.`id` AS `Payment.id`,
  `Payment`.`status` AS `Payment.status`,
  `User`.`id` AS `User.id`,
  `User`.`email` AS `User.email`,
  `Coverage`.`id` AS `Coverage.id`
FROM (
  SELECT `Policy`.`id`
  FROM `policies` AS `Policy`
  WHERE `Policy`.`id` = 42
  LIMIT 1
) AS `Policy`

LEFT OUTER JOIN `payments` AS `Payment`
  ON `Policy`.`id` = `Payment`.`policy_id`
  AND `Payment`.`status` = 'completed'

LEFT OUTER JOIN `users` AS `User`
  ON `Policy`.`id` = `User`.`policy_id`

LEFT OUTER JOIN `coverages` AS `Coverage`
  ON `Policy`.`id` = `Coverage`.`policy_id`
```

See that inner `SELECT` with `LIMIT 1` at the top? That is the problem.

Sequelize wraps the primary table selection in a **derived subquery** before performing the joins. MySQL has to:

1. Execute the inner subquery to get the matching `id`
2. Create a temporary derived table from that result
3. Join every included model against that derived table

Derived tables — unlike real tables — **cannot use indexes on the join columns**. MySQL has no statistics on them. With large associated tables (hundreds of thousands of payment rows, for example), the joins against an unindexed derived table become full scans.

That is why your query is slow. Not because the data is big, but because the join strategy Sequelize chose prevents index usage.

## The Fix: findAll with subQuery: false

Replace `findOne` with `findAll`, add `subQuery: false`, add `limit: 1`, and add `required: true` on the includes that always have data.

```typescript
const results = await Policy.findAll({
  where: { id: policyId },
  include: [
    {
      model: Payment,
      where: { status: 'completed' },
      required: true,   // INNER JOIN instead of LEFT OUTER JOIN
    },
    {
      model: User,
      attributes: ['id', 'email', 'phone'],
      required: true,
    },
    {
      model: Coverage,
      required: false,  // LEFT JOIN — coverage may not exist
      include: [
        {
          model: CoverageItem,
          required: false,
        },
      ],
    },
  ],
  limit: 1,
  subQuery: false,  // the key change
});

const policy = results[0] ?? null;
```

Now look at the SQL this generates:

```sql
SELECT
  `Policy`.`id`,
  `Policy`.`status`,
  `Payment`.`id` AS `Payment.id`,
  `Payment`.`status` AS `Payment.status`,
  `User`.`id` AS `User.id`,
  `User`.`email` AS `User.email`,
  `Coverage`.`id` AS `Coverage.id`
FROM `policies` AS `Policy`

INNER JOIN `payments` AS `Payment`
  ON `Policy`.`id` = `Payment`.`policy_id`
  AND `Payment`.`status` = 'completed'

INNER JOIN `users` AS `User`
  ON `Policy`.`id` = `User`.`policy_id`

LEFT OUTER JOIN `coverages` AS `Coverage`
  ON `Policy`.`id` = `Coverage`.`policy_id`

WHERE `Policy`.`id` = 42

LIMIT 1
```

No subquery. No derived table. Direct joins against the real indexed tables. MySQL can now use the foreign key indexes on `policy_id` for every join, and the `WHERE` clause filters on the primary key before any join work is done.

In our case, this dropped the query from 3–8 seconds to under 50 milliseconds.

## Why subQuery: false Works

When Sequelize uses `findOne` or `findAll` with a `LIMIT`, it wraps the primary table selection in a subquery to ensure the limit is applied before the joins — otherwise a `LIMIT 1` on a joined result set would not reliably give you exactly one *parent* record if the parent has multiple associated children.

That is a legitimate concern. `subQuery: false` disables this protection. So there is a trade-off you need to understand:

**When `subQuery: false` is safe:**
- You are filtering by a unique column (`id`, unique slug, etc.) that guarantees at most one parent row
- Your associations are many-to-one (each policy has one user, one payment record per query)
- You are applying `required: true` on includes that have strict one-to-one or one-to-many relationships you are filtering down

**When `subQuery: false` is NOT safe:**
- You use `LIMIT 5` to get the "top 5 policies" and each policy has multiple payments — without the subquery, the LIMIT may cut across the joined rows and return fewer than 5 policies
- Your primary table `WHERE` does not uniquely identify a small set of rows

For a typical `findOne`-equivalent (looking up a single record by ID), `subQuery: false` with `limit: 1` is always safe.

## required: true — LEFT JOIN vs INNER JOIN

The second change is adding `required: true` on includes where you know the association always exists.

`required: false` (the default) generates a `LEFT OUTER JOIN`. MySQL must check every row in the left table and fill in NULL for missing matches. With large tables, this is expensive even when the data is almost always present.

`required: true` generates an `INNER JOIN`. MySQL only returns rows where the join condition matches. This is faster when the association is always expected to exist, because:

- The query engine can use the join condition to filter rows early
- The result set is smaller from the start
- The execution plan is simpler

Use `required: false` only for truly optional associations — where a parent record can exist without children. Use `required: true` for everything else.

## The Complete Pattern for a Service Method

Here is the clean reusable pattern in a NestJS service:

```typescript
async findPolicyWithDetails(policyId: number): Promise<Policy | null> {
  const results = await this.policyRepository.findAll({
    where: { id: policyId, deletedAt: null },
    include: [
      {
        model: Payment,
        where: { status: 'completed' },
        required: true,
        attributes: ['id', 'amount', 'gateway', 'paidAt'],
      },
      {
        model: User,
        required: true,
        attributes: ['id', 'email', 'phone', 'fullName'],
      },
      {
        model: Coverage,
        required: false,
        include: [
          {
            model: CoverageItem,
            required: false,
            attributes: ['id', 'type', 'limit'],
          },
        ],
      },
    ],
    limit: 1,
    subQuery: false,
  });

  return results[0] ?? null;
}
```

A few details worth noting:

- Always specify `attributes` arrays on includes. Without them, Sequelize `SELECT *` on every joined table. That is a lot of data transferred for columns you never use.
- Keep `required: false` on `Coverage` and `CoverageItem` — a policy in certain states may not have coverage items yet.
- The `deletedAt: null` in the `where` clause assumes soft deletes. Add whatever your base filter conditions are.

## Measuring Before and After

Always measure with your actual production data, not a development dataset with ten rows. The difference is invisible on small data.

Enable Sequelize logging temporarily and run `EXPLAIN` on both queries in MySQL:

```sql
EXPLAIN SELECT ...  -- paste the generated SQL
```

In the slow version you will see `derived` in the `select_type` column for the subquery rows — that is the unindexed temporary table.

In the fast version you will see `ref` or `eq_ref` in the `type` column for the join rows — that means MySQL is using indexes. `eq_ref` is the best possible join type.

## Summary

| | `findOne` with includes | `findAll` + `subQuery: false` |
|---|---|---|
| Join strategy | Joins against a derived subquery | Direct joins against indexed tables |
| Index usage on joins | None (derived table) | Full (real table indexes) |
| Join type | LEFT OUTER JOIN by default | INNER JOIN with `required: true` |
| Typical performance | 1–8s on large tables | 10–100ms on same data |
| Safe for single-row lookup | Yes | Yes (with `limit: 1` on unique `WHERE`) |
| Safe for paginated lists | Yes | Only when associations are one-to-one per parent |

If you have a Sequelize query with three or more includes that is running slowly, check the generated SQL first. If you see a derived subquery wrapping the primary table, this fix will likely drop your query time by an order of magnitude.
