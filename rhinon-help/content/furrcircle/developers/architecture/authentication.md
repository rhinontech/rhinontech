---
title: Authentication
description: JWT auth with two actor types (users and vets), and the route guard middleware.
order: 1
---

Furrcircle uses **JWT bearer tokens**. The defining wrinkle: there are **two actor types** —
regular **users** and **vets** — in separate tables, distinguished by `userType` in the token.

## Token

```json
{ "id": "uuid", "userType": "user" }   // or "vet"
```

Send it as a bearer token:

```text
Authorization: Bearer <token>
```

## Getting a token

Auth is email/phone + password or OTP (`backend/routes` → `/api/auth`):

```text
POST /api/auth/send-email-otp      → POST /api/auth/verify-email-otp   (returns token)
POST /api/auth/register
POST /api/auth/login               # email/phone + password
POST /api/auth/login-otp
POST /api/auth/forgot-password     → /api/auth/reset-password
```

## Route guards

Middleware lives in `backend/middleware/authMiddleware.ts`:

| Guard | Allows |
| --- | --- |
| `protect` | any authenticated user or vet (attaches `req.user`) |
| `optionalAuth` | attaches the user if a token is present, else continues anonymously |
| `userAccountOnly` | regular users only |
| `vetOnly` | vets only |
| `verifiedVetOnly` | vets with `isVerified = true` |
| `adminOnly` | admin role only |

`protect` resolves the actor by checking **both** the `users` and `vets` tables based on `userType`.

## Socket auth

Socket.IO authenticates from `socket.handshake.auth.token` (or the `Authorization` header). The
decoded `id` + `userType` become `socket.data.actorId` / `actorType`, and the socket joins
`actor:{userType}:{userId}`. See [Realtime](/furrcircle/developers/architecture/realtime).

:::tip Verified vets unlock endpoints
Booking-management and stats endpoints are gated by `verifiedVetOnly` — a vet must be verified by an
admin (`PATCH /api/admin/vets/:vetId/verify`) before they take appointments.
:::
