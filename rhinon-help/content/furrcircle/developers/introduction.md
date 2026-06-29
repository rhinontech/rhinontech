---
title: Engineering Docs
description: Internal architecture, API, data model and runbooks for the Furrcircle platform.
order: 1
featured: true
---

The internal engineering companion to the [public guide](/furrcircle/guide/introduction) — the
**architecture**, **REST API**, **data model**, **realtime** and **runbooks** for working on
Furrcircle.

:::info Internal & private
These docs are for the Furrcircle team and trusted contributors. The
[guide](/furrcircle/guide/introduction) is public; this section requires developer access.
:::

## The monorepo

Furrcircle is four apps that share one backend:

| App | Stack | Port | Role |
| --- | --- | --- | --- |
| **backend** | Express + TypeScript, Sequelize | `5001` | REST API + Socket.IO |
| **furrcircle-expo** | Expo / React Native | `8082` | The mobile app (primary client) |
| **frontend** | Next.js 16 + React 19 | `4000` | Marketing / web |
| **admin-panel** | Next.js | — | Moderation & ops dashboard |

Backing services: **PostgreSQL** (Sequelize, UUID PKs, auto-sync), **AWS S3** (media), **Firebase
Cloud Messaging** (push), and **Google Places** (vet/place discovery).

```text
 furrcircle-expo ──REST/WS──▶ backend ──▶ PostgreSQL
 admin-panel ────REST───────▶   │   ├──▶ AWS S3 (media)
 frontend ───────REST───────▶   │   └──▶ Firebase FCM (push)
```

## Key facts

- **API base:** `http://localhost:5001/api` (dev) · `https://api.furrcircle.com/api` (prod)
- **Auth:** JWT bearer, payload `{ id, userType }` where `userType` is `user` or `vet` —
  see [Authentication](/furrcircle/developers/architecture/authentication)
- **Two actor types:** regular **users** and **vets** live in separate tables and share most flows
- **Realtime:** Socket.IO for notifications, chat and presence —
  see [Realtime](/furrcircle/developers/architecture/realtime)

## Where to go next

1. [Local setup](/furrcircle/developers/getting-started/local-setup)
2. [Run the mobile app](/furrcircle/developers/getting-started/running-the-mobile-app)
3. [Authentication](/furrcircle/developers/architecture/authentication) and the
   [data model](/furrcircle/developers/architecture/data-model)
4. [API reference](/furrcircle/developers/api-reference/overview)

:::note Source of truth
These pages are derived from the codebase (`backend/routes`, `backend/models`). Routes and models
are real; confirm exact request/response bodies in the route handlers before depending on them.
:::
