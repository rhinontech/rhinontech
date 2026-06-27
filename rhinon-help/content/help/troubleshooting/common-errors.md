---
title: Common errors and fixes
description: Resolve the errors teams hit most often.
order: 1
featured: true
---

# Common errors and fixes

A quick reference for the errors we see most, and how to resolve them.

## 401 Unauthorized

Your token is missing, expired or malformed.

- Confirm `RHINON_TOKEN` is set in the current environment.
- Check the token hasn't expired or been revoked.
- Make sure you're using a live token in production, not a test token.

## 403 Forbidden

The token is valid but lacks the required scope.

:::tip
Mint a new token that includes the scope named in the error message, e.g. `events:write`.
:::

## 429 Too Many Requests

You've hit a rate limit. Back off and retry using the `Retry-After` header:

```ts
if (err.status === 429) {
  const wait = Number(err.headers["retry-after"] ?? 1) * 1000;
  await new Promise((r) => setTimeout(r, wait));
}
```

## Still stuck?

Gather the request ID from the error response and [contact support](/help) — it lets us
trace the exact request on our side.
