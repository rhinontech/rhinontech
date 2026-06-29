---
title: Knowledge base
description: Read and configure the knowledge base that grounds the AI chatbot.
order: 8
---

Mounted at `/api/kb`. The knowledge base is the content your chatbot is trained on; its embeddings
are stored in Postgres via **pgvector** and queried by [backendai](/saleszium/developers/guides/ai-service).

## Endpoints

```text
GET    /api/kb/org              # the KB for your org (auth)
GET    /api/kb/create           # create a KB for your org (auth)
PUT    /api/kb/theme            # update KB portal theme (auth)
GET    /api/kb/:identifier      # public KB by identifier (the sz-kb portal reads this)
```

## Training sources

Adding and (re)training sources is driven through the **automations** endpoints:

```text
POST /api/automations/analyze-url        # crawl/analyse a URL source
POST /api/automations/trigger-training   # (re)train on selected sources
POST /api/automations/delete-source      # remove a source
GET  /api/automations/get-article        # fetch a KB article
```

When training completes, backendai calls the
[training webhook](/saleszium/developers/guides/webhooks#ai-training-callback-internal) and the
source flips to "trained".

:::tip Public portal
`GET /api/kb/:identifier` powers the standalone **sz-kb** knowledge-base site — the same content,
browsable by your customers without the chat widget.
:::
