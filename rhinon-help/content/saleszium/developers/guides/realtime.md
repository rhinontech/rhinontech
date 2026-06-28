---
title: Realtime (Socket.IO)
description: Connect to the Saleszium Socket.IO gateway for live messages, visitor presence and team chat.
order: 2
---

`sz-server` runs a **Socket.IO** gateway on the same origin as the REST API. It powers live chat,
visitor presence, dashboard updates and team chat.

## Connect

```ts
import { io } from "socket.io-client";

const socket = io("https://your-server", { transports: ["websocket"] });
```

## Rooms

Clients join rooms to receive scoped events:

| Room | Purpose |
| --- | --- |
| `conv:{conversation_id}:{organization_id}` | A single conversation |
| `dashboard:{chatbot_id}` | Live dashboard updates for a chatbot |
| `org_{organization_id}` | Org-wide updates (e.g. WhatsApp) |
| `id:{user_id}` / `user:{user_id}` | Per-user notifications / team chat |
| `channel:{channel_id}` · `dm:{dm_id}` | Team-chat channels / DMs |

## Conversation events

```ts
// join a visitor conversation
socket.emit("join_conversation", { chatbot_history: "CONVERSATION_UUID" });

// receive messages
socket.on("message", (msg) => {
  // { user_email, role, chatbot_id, chatbot_history, text, timestamp, user_id, organization_id }
});

// new conversation / visitor presence (dashboard)
socket.on("newConversation", (conv) => {});
socket.on("visitor_update", (visitor) => {});
socket.on("conversation:closed", ({ conversation_id }) => {});
```

A message payload:

```json
{
  "user_email": "visitor@example.com",
  "role": "user",
  "chatbot_id": "OS9BTL",
  "chatbot_history": "conv-uuid",
  "text": "Hello!",
  "timestamp": "2026-06-28T10:00:00Z",
  "organization_id": 456
}
```

`role` is one of `user`, `assistant` or `admin`.

## Team chat events

```text
join_team_chat · join_channel · join_dm
typing_indicator → user_typing
update_presence  → user_presence
```

:::info One gateway
Realtime and REST share the same server and auth context. Visitor (widget) sockets are anonymous;
dashboard/team-chat sockets are tied to an authenticated user.
:::
