---
title: Overview
description: Conventions for the Saleszium REST API — base URL, auth, scoping, and the route map.
order: 1
---

The Saleszium REST API is served by `sz-server` under `/api`.

- **Base URL:** `http://localhost:5001/api` (dev)
- **Auth:** `Authorization: Bearer <token>` — see [Authentication](/saleszium/developers/getting-started/authentication)
- **Tenant scoping:** every authenticated request is scoped to your token's `organization_id`
- **Content type:** `application/json` (file endpoints use `multipart/form-data`)
- **Live schema:** Swagger UI at **`/docs`** on `sz-server`

## Route map

| Area | Mount | Reference |
| --- | --- | --- |
| Auth | `/api/auth` | [Authentication](/saleszium/developers/getting-started/authentication) |
| Chatbot config & keys | `/api/chatbot` | [Chatbot](/saleszium/developers/api-reference/chatbot) |
| Conversations | `/api/conversations` | [Conversations](/saleszium/developers/api-reference/conversations) |
| Tickets & email | `/api/tickets` | [Tickets](/saleszium/developers/api-reference/tickets) |
| CRM entities | `/api/crm/entities` | [CRM entities](/saleszium/developers/api-reference/crm-entities) |
| CRM pipelines | `/api/crm/pipelines` | [CRM pipelines](/saleszium/developers/api-reference/crm-pipelines) |
| WhatsApp | `/api/whatsapp` | [WhatsApp](/saleszium/developers/api-reference/whatsapp) |
| Knowledge base | `/api/kb` | [Knowledge base](/saleszium/developers/api-reference/knowledge-base) |
| Files (S3) | `/api/aws` | below |
| Billing | `/api/transactions` | below |
| Automations | `/api/automations` | below |

Other mounts: `/api/crm/groups`, `/api/crm/tables`, `/api/linkedin` + `/api/linkedin-campaigns`,
`/api/email`, `/api/teamchat`, `/api/tasks`, `/api/user-management`, `/api/onboarding`.

## Errors

Errors return a non-2xx status with a JSON body. Common cases:

| Status | Meaning |
| --- | --- |
| `400` | Validation failed |
| `401` | Missing/expired token |
| `403` | Not allowed for this role/plan |
| `404` | Not found in your organization |
| `500` | Server error |

:::note Confirm exact shapes
Field names below come from the `sz-server` source and are accurate, but request/response bodies
vary by endpoint — check Swagger (`/docs`) for the authoritative schema.
:::
