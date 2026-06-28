---
title: Authentication
description: How the Saleszium API authenticates requests — JWT bearer tokens, login, and the token payload.
order: 2
---

The Saleszium REST API uses **JWT bearer tokens**. You log in once to get a token, then send it on
every authenticated request.

## Log in

```bash
curl https://your-server/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "email": "you@company.com", "password": "••••••••" }'
```

Response:

```json
{
  "Result": "SUCCESS",
  "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "Role": "Admin",
  "is_onboarded": true
}
```

Social login is also available: `POST /api/auth/google-login` and
`POST /api/auth/microsoft-login` (exchange an OAuth `code` for a token).

## Send the token

Add it as a bearer token in the `Authorization` header:

```bash
curl https://your-server/api/conversations \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## The token payload

Decoded, a Saleszium JWT carries the identity and tenant context the API uses for scoping:

```json
{
  "user_id": 123,
  "email": "you@company.com",
  "organization_id": 456,
  "role": "Admin",
  "is_onboarded": true
}
```

Every authenticated request is scoped to the token's `organization_id` — you only ever see your
own workspace's data.

:::info Token lifetime
Access tokens are short-lived (~2 hours). Re-authenticate (or use the refresh flow) when a request
returns `401 Unauthorized`.
:::

## Password reset endpoints

```text
POST /api/auth/send-change-password-token     # email a reset token
POST /api/auth/verify-change-password-token   # verify it
POST /api/auth/change-password                # set the new password
```

Next: [Quickstart](/saleszium/developers/getting-started/quickstart).
