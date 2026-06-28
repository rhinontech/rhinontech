---
title: Developer Docs
description: Architecture, REST API, realtime, the chatbot SDK and webhooks for building on Saleszium.
order: 1
featured: true
---

The technical companion to the [public guide](/saleszium/guide/introduction). Here you'll find the
**architecture**, the **REST API**, **Socket.IO** realtime, the **chatbot SDK** and **webhooks** for
building on and integrating with Saleszium.

:::info Private docs
You're seeing this because your email was granted developer access. The
[guide](/saleszium/guide/introduction) is public; this API reference is not.
:::

## System architecture

Saleszium is a small set of services:

| Service | Stack | Port | Role |
| --- | --- | --- | --- |
| **sz-server** | Express 5 + Sequelize + Socket.IO | `5001` | The REST API + realtime gateway |
| **sz-app** | Next.js + Zustand | `4000` | The dashboard frontend |
| **backendai** | FastAPI (Python) | `5002` | AI / RAG / LLM service |
| **bot-sdk** (`rhinontech`) | React → web component | — | The embeddable chat widget |
| **sz-kb** | Next.js | — | Public knowledge-base portal |

Backing services: **PostgreSQL 15 + pgvector** (relational data + embeddings) and **Redis 7**
(cache + realtime pub/sub).

```text
 sz-app ──REST/WS──▶ sz-server ──▶ PostgreSQL + pgvector
   ▲                    │  ▲           Redis
 bot-sdk ──REST/WS──────┘  └──HTTP──▶ backendai (FastAPI, RAG/LLM)
```

## API at a glance

- **Base URL:** `http://localhost:5001/api` (dev) — production is your deployed `sz-server`.
- **Auth:** JWT bearer tokens — see [Authentication](/saleszium/developers/getting-started/authentication).
- **Realtime:** Socket.IO on the same origin — see [Realtime](/saleszium/developers/guides/realtime).
- **Interactive reference:** `sz-server` serves Swagger UI at **`/docs`** with the live, generated
  schema — treat that as the source of truth for exact request/response shapes.

## Where to go next

1. Stand up the stack locally — [Local setup](/saleszium/developers/getting-started/local-setup).
2. Authenticate and make your first call — [Quickstart](/saleszium/developers/getting-started/quickstart).
3. Embed the widget — [Embed the chatbot](/saleszium/developers/guides/embed-the-chatbot).
4. Browse the [API reference](/saleszium/developers/api-reference/overview).

:::note Source of truth
These pages are derived from the `sz-server` source. Endpoint paths and the data model are real;
confirm exact field names against Swagger (`/docs`) before depending on them.
:::
