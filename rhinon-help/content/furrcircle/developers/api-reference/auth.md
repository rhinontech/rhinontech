---
title: Auth & users
description: Registration, login, OTP, profile and user search endpoints.
order: 2
---

## Auth (`/api/auth`)

```text
GET    /api/auth/check-username?username=        # availability
POST   /api/auth/send-email-otp
POST   /api/auth/send-phone-otp
POST   /api/auth/verify-email-otp                # → returns a token
POST   /api/auth/register
POST   /api/auth/login                           # email/phone + password
POST   /api/auth/login-otp
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
POST   /api/auth/change-password                 # (protected)
GET    /api/auth/profile                          # (protected)
PUT    /api/auth/profile                          # (protected)
DELETE /api/auth/profile                          # delete account (protected)
POST   /api/auth/onboarding-complete              # (protected)
GET    /api/auth/me                               # current actor (protected)
```

## Example — login

```bash
curl https://api.furrcircle.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "identifier": "you@example.com", "password": "••••••••" }'
```

```json
{ "token": "eyJ...", "user": { "id": "uuid", "username": "amanp", "userType": "user" } }
```

## Users (`/api/users`)

```text
PATCH  /api/users/profile           # update profile
GET    /api/users/search            # search users
GET    /api/users/followers-search  # search your followers
GET    /api/users/:handle           # public profile (optionalAuth)
```

:::tip Two actor types
`register` / `login` work for both **users** and **vets**; the resulting token's `userType` decides
which tables and guards apply downstream.
:::
