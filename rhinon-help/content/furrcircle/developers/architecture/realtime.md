---
title: Realtime
description: Socket.IO rooms and events for notifications, chat and presence.
order: 3
---

Realtime runs on the same HTTP server as the API (`backend/services/realtimeService.ts`).

## Connect & auth

The client connects with its JWT:

```ts
import { io } from "socket.io-client";
const socket = io(API_ORIGIN, { auth: { token } });
```

On connect, the server decodes the token and joins the socket to one room:

```text
actor:{userType}:{userId}     e.g. actor:user:abc123  ·  actor:vet:xyz789
```

## Server → client events

| Event | Payload |
| --- | --- |
| `notification:new` | the full notification object |
| `notification:counts` | `{ activity, campaign, total }` |
| `chat:unread` | `{ conversationId, at }` |
| `presence:online` | `{ userId, userType }` |
| `presence:offline` | `{ userId, userType }` |

## Presence

The server tracks `onlineUsers: Map<userId, Set<socketId>>` and exposes `isUserOnline(userId)`. A
user is online while at least one socket is connected.

## Pattern on the client

The mobile app subscribes in `app/_layout.tsx`: a `notification:new` bumps the badge and a toast;
`chat:unread` updates the conversation list; presence drives online dots. Messages themselves are
**persisted** (the `messages` table) and fetched over REST — sockets deliver the *signal*, REST
delivers the *data*.

:::tip Idempotent UI updates
Because messages are persisted and also signalled over the socket, dedupe by message `id` on the
client to avoid double-rendering when both arrive.
:::
