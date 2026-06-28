---
title: Local setup
description: Run the full Saleszium stack locally with Docker — server, AI service, Postgres and Redis.
order: 1
---

The fastest way to run Saleszium locally is Docker Compose, which brings up the server, AI service,
Postgres (with pgvector) and Redis together.

## Prerequisites

- Docker + Docker Compose
- Node.js (to run `sz-app` / `bot-sdk` outside containers, if needed)

## Bring up the stack

```bash
docker-compose up -d
```

This starts:

| Container | Published port |
| --- | --- |
| `sz-server` | `5001` |
| `backendai` | `5002` |
| `postgres` (pgvector) | `5435` → 5432 |
| `redis` | `6380` → 6379 |

The frontend (`sz-app`) runs separately:

```bash
cd sz-app
npm install
npm run dev   # http://localhost:4000
```

## Environment

`sz-server` reads its config from `.env`. The important groups:

```bash title=".env"
# Core
NODE_ENV=development
PORT=5001

# Database (Postgres + pgvector) — note the separate CRM database
DB_HOST=postgres
DB_PORT=5432
DB_NAME=saleszium_beta
CRM_DB_NAME=saleszium_crm_beta
DB_USERNAME=postgres
DB_PASSWORD=...

# Redis
REDIS_HOST=redis
REDIS_PORT=6379

# Service URLs
FRONT_END_URL=http://localhost:4000
AI_API_URL=http://localhost:5002
INTERNAL_AI_API_URL=http://backendai:5002

# Auth
JWT_SECRET=...
JWT_REFRESH_SECRET=...
```

Integrations add more keys — `OPENAI_API_KEY` / `GOOGLE_API_KEY` (LLMs), `AWS_*` + `S3_BUCKET_NAME`
(storage/email), `RAZORPAY_KEY_*` (billing), `APP_ID` / `APP_SECRET` (WhatsApp/Meta),
`MICROSOFT_CLIENT_*` (Outlook). See [Integrations](/saleszium/guide/introduction) and the API
reference for where each is used.

:::warning Two databases
CRM data (people, companies, deals, pipelines) lives in a **separate** database
(`saleszium_crm_beta`) from the core app data. Keep both configured.
:::

## Verify

```bash
curl http://localhost:5001/api/health   # or open http://localhost:5001/docs for Swagger
```

Next: [Authentication](/saleszium/developers/getting-started/authentication).
