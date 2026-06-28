---
title: Quickstart
description: Log in, call the API, and embed the chatbot — end to end in a few minutes.
order: 3
featured: true
---

This walks from login to your first API call and a live chat widget.

## 1. Get a token

```bash
curl https://your-server/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "email": "you@company.com", "password": "••••••••" }'
```

Copy the `Token` from the response. Full details:
[Authentication](/saleszium/developers/getting-started/authentication).

## 2. Call the API

List your conversations:

```bash
curl https://your-server/api/conversations \
  -H "Authorization: Bearer YOUR_TOKEN"
```

Fetch your chatbots (each has a 6-character `chatbot_id` / `app_id`):

```bash
curl https://your-server/api/chatbot/chatbots \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## 3. Embed the chatbot

Drop the widget onto any site with the SDK and your `app_id`:

```ts
import Rhinontech from "@saleszium/botsdk";

Rhinontech({ app_id: "OS9BTL" });
```

Full options (React/Next.js, custom containers):
[Embed the chatbot](/saleszium/developers/guides/embed-the-chatbot).

## 4. Go realtime (optional)

Connect to Socket.IO to receive live messages and visitor events:

```ts
import { io } from "socket.io-client";

const socket = io("https://your-server", { transports: ["websocket"] });
socket.emit("join_conversation", { chatbot_history: "CONVERSATION_UUID" });
socket.on("message", (msg) => console.log(msg));
```

See [Realtime](/saleszium/developers/guides/realtime).

## Where to go next

- [API reference](/saleszium/developers/api-reference/overview)
- [Webhooks](/saleszium/developers/guides/webhooks)
- [Data model](/saleszium/developers/data-model)
