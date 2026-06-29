---
title: Webhooks
description: The inbound webhooks Saleszium exposes — WhatsApp, inbound email/tickets and AI training callbacks.
order: 3
---

Saleszium receives several **inbound** webhooks. These are endpoints *other* systems call — most are
unauthenticated (verified by signature/challenge or used internally), so treat them carefully.

## WhatsApp (Meta Business API)

```text
GET  /api/whatsapp/webhook    # verification challenge (hub.challenge)
POST /api/whatsapp/webhook    # inbound messages + status updates
```

Inbound messages are saved to `support_conversations` and broadcast over Socket.IO to the relevant
`org_{organization_id}` / conversation room. Configure this URL in your Meta app, with the verify
token you set in the WhatsApp settings.

## Inbound email → tickets

```text
POST /api/email/incoming      # inbound email (SES / forwarded Gmail)
POST /api/tickets/webhook     # create/append a ticket from an inbound message
```

These turn inbound email into [tickets](/saleszium/developers/api-reference/tickets) (or append to an
existing thread).

## AI training callback (internal)

```text
POST /api/automations/training-webhook
```

Called by **backendai** when a knowledge-base training job finishes, so the dashboard can flip the
source to "trained". Internal service-to-service — not for public use.

:::warning Secure your webhook URLs
Inbound webhooks are reachable without a user token. Verify provider signatures / challenge tokens,
keep the training callback on an internal network, and never expose secrets in these handlers.
:::
