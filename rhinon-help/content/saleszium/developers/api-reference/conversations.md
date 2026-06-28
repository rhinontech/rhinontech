---
title: Conversations
description: List, update, close and act on conversations across channels.
order: 3
---

Mounted at `/api/conversations`. A conversation thread is keyed by `chatbot_history` and stored in
`support_conversations`.

## Endpoints

```text
GET    /api/conversations                       # list conversations (auth)
GET    /api/conversations/socket                 # live socket conversations (auth)
GET    /api/conversations/chatbot                # the chatbot conversation (auth)
PATCH  /api/conversations/update-chats/:id       # update (e.g. is_pinned) (auth)
DELETE /api/conversations/delete-chats/:id       # delete a conversation (auth)
POST   /api/conversations/notification/:conversation_id   # notify (auth)
POST   /api/conversations/socketConversation/close        # close a conversation
POST   /api/conversations/submit-review          # post-chat review
```

## Example — list

```bash
curl https://your-server/api/conversations \
  -H "Authorization: Bearer YOUR_TOKEN"
```

```json
[
  {
    "id": 1201,
    "user_email": "visitor@example.com",
    "chatbot_id": "OS9BTL",
    "chatbot_history": "conv-uuid",
    "assigned_user_id": 88,
    "is_closed": false,
    "is_pinned": false
  }
]
```

## Sending & receiving messages

Messages flow over **Socket.IO**, not a REST POST — emit/receive `message` on the conversation
room. See [Realtime](/saleszium/developers/guides/realtime).

:::tip Pin / assign
Use `PATCH /update-chats/:id` to pin or reassign. Closing is also surfaced over the socket as
`conversation:closed`.
:::
