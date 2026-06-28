---
title: Auth & admin
description: How we gate admin areas — JWT in an httpOnly cookie, verified by middleware with jose.
order: 7
---

Client sites often ship a small admin area (e.g. lead management). We protect it with a JWT cookie
verified in middleware.

## The pattern

1. **Login** — an admin login page POSTs credentials to a login route; on success it sets an
   **httpOnly** `admin_token` cookie containing a signed JWT.
2. **Gate** — `proxy.ts` (Next middleware) runs on `/admin/*` (except `/admin/login`), reads the
   cookie, and verifies the JWT with **jose**:

```ts
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);
try {
  await jwtVerify(token, secret);
  // allow
} catch {
  // redirect to /admin/login
}
```

3. **Redirect** — invalid/missing token → redirect to the login page.

## Why jose

`jose` is edge-runtime compatible, so verification runs in Next middleware (which is edge) without
Node crypto. Keep `JWT_SECRET` server-only (no `NEXT_PUBLIC_` prefix).

## Conventions

- Admin routes live under a clearly separated segment (`/admin` or `/_admin`).
- The token is **httpOnly** + `secure` in production — never readable from client JS.
- Login/logout are route handlers that set/clear the cookie.

:::warning Don't gate sensitive data with middleware alone
Middleware controls *navigation*. Any admin **API** must independently verify the token server-side —
never trust that the request only arrived because middleware let the page through.
:::
