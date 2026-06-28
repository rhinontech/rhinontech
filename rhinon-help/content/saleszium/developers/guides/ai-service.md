---
title: The AI service
description: How backendai (FastAPI) powers RAG answers, support drafting and image generation.
order: 4
---

AI features are handled by a separate Python service, **backendai** (FastAPI, port `5002`).
`sz-server` calls it over HTTP; you rarely call it directly.

## What it does

- **RAG** — standard and realtime retrieval-augmented answering over your knowledge base
  (embeddings stored in Postgres via **pgvector**).
- **Support drafting** — GPT/Gemini-backed reply generation for conversations and tickets.
- **Image generation** and **LinkedIn AI** helpers.

## Providers

The service is provider-agnostic and selects a model from config:

```bash
AI_PROVIDER=openai        # or "gemini"
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
GOOGLE_API_KEY=AIza...
TEMPERATURE=0.7
MAX_TOKENS=500
```

## How a chatbot answer flows

1. A visitor message hits `sz-server` (REST or Socket.IO).
2. `sz-server` calls **backendai** (`INTERNAL_AI_API_URL`) with the chatbot + conversation context.
3. backendai retrieves the most relevant knowledge (pgvector) and asks the LLM.
4. The grounded answer streams back and is broadcast to the conversation room.

## Training

Knowledge sources are ingested and embedded asynchronously. When a job finishes, backendai calls the
[training webhook](/saleszium/developers/guides/webhooks#ai-training-callback-internal) so the
dashboard updates. Trigger training via `POST /api/automations/trigger-training`.

:::note Internal service
backendai isn't part of the public API surface. Integrate through `sz-server` endpoints; the AI
service is an implementation detail behind them.
:::
