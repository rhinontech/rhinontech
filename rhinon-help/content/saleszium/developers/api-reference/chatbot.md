---
title: Chatbot
description: Fetch and configure chatbots, manage the public config and API keys.
order: 2
---

Mounted at `/api/chatbot`. A chatbot is identified by a 6-character `chatbot_id` (used as `app_id`
in the [SDK](/saleszium/developers/guides/embed-the-chatbot)).

## Endpoints

```text
GET    /api/chatbot/chatbots            # all chatbots for your org (auth)
GET    /api/chatbot/chatbot             # public config by app_id (used by the widget)
PATCH  /api/chatbot/chatbot-config      # update a chatbot's config (auth)
GET    /api/chatbot/get-api-key         # get/issue the trial API key (auth)
POST   /api/chatbot/update-api-key      # rotate the API key (auth)
POST   /api/chatbot/set-installed       # mark the widget as installed
GET    /api/chatbot/whatsapp-config     # public WhatsApp config
```

## Example — list chatbots

```bash
curl https://your-server/api/chatbot/chatbots \
  -H "Authorization: Bearer YOUR_TOKEN"
```

```json
[
  {
    "chatbot_id": "OS9BTL",
    "organization_id": 456,
    "chatbot_config": { "name": "Sales Bot", "color": "#111" },
    "api_key": "sz_..."
  }
]
```

The `chatbot_config` JSON drives the widget's name, colours, welcome message and suggested
questions. Update it with `PATCH /api/chatbot/chatbot-config`.

:::tip Public vs authed
`GET /chatbot` is public (the widget reads it by `app_id`). Everything that mutates config or keys
requires your bearer token.
:::
