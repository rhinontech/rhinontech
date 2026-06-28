---
title: Tickets & email
description: Create, update and resolve support tickets, and handle inbound/outbound email.
order: 4
---

Mounted at `/api/tickets`. Tickets track support requests with `status` (`Open` | `Resolved` |
`Closed`) and `priority` (`Low` | `Medium` | `High`).

## Endpoints

```text
GET    /api/tickets                          # list tickets (auth)
GET    /api/tickets/ticket/:ticket_id        # one ticket (auth)
GET    /api/tickets/tickets/:ticket_id/history  # ticket history (auth)
POST   /api/tickets/create-ticket            # create (public — e.g. from the widget)
PUT    /api/tickets/update-ticket/:ticket_id # update status/assignee (auth)
DELETE /api/tickets/tickets/:ticket_id       # delete (auth)
POST   /api/tickets/reply-email/:ticket_id   # send an email reply (auth)
POST   /api/tickets/ticket-rating            # rate a ticket (public)
POST   /api/tickets/webhook                  # inbound email → ticket
GET    /api/tickets/emails                   # list emails (auth)
```

## Example — update a ticket

```bash
curl -X PUT https://your-server/api/tickets/update-ticket/TKT-1042 \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "status": "Resolved", "assigned_user_id": 88 }'
```

```json
{
  "ticket_id": "TKT-1042",
  "subject": "Refund question",
  "status": "Resolved",
  "priority": "Medium",
  "assigned_user_id": 88,
  "rating": null
}
```

Inbound email creates tickets via the [webhook](/saleszium/developers/guides/webhooks#inbound-email-tickets);
outbound replies go through `POST /reply-email/:ticket_id`.
