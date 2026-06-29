---
title: WhatsApp
description: Connect WhatsApp Business accounts, send messages, manage templates and receive inbound messages.
order: 7
---

Mounted at `/api/whatsapp`. Wraps the WhatsApp Business (Meta) API so you can send and receive from
the same inbox.

## Endpoints

```text
POST   /api/whatsapp/exchange-code                 # OAuth code → connect account (auth)
GET    /api/whatsapp/accounts                      # connected accounts (auth)
PUT    /api/whatsapp/accounts/:account_id/set-default
DELETE /api/whatsapp/accounts/:account_id          # disconnect
GET    /api/whatsapp/templates                     # message templates (auth)
GET    /api/whatsapp/contacts                      # contacts (auth)
GET    /api/whatsapp/messages                      # messages (auth)
POST   /api/whatsapp/messages/send                 # send a message (auth)
POST   /api/whatsapp/upload-media                  # upload media (auth)
GET    /api/whatsapp/webhook                        # Meta verification challenge
POST   /api/whatsapp/webhook                        # inbound messages
```

## Example — send a message

```bash
curl https://your-server/api/whatsapp/messages/send \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "account_id": "wa_123",
    "to": "+919876543210",
    "type": "text",
    "text": "Your order has shipped! 📦"
  }'
```

Inbound messages arrive via the [webhook](/saleszium/developers/guides/webhooks#whatsapp-meta-business-api)
and are broadcast over Socket.IO to the org room.

:::info Templates & windows
Outside the 24-hour customer service window, WhatsApp requires an approved **template**. Fetch
yours via `GET /templates`.
:::
