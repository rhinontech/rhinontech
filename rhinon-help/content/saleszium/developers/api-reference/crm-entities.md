---
title: CRM — entities
description: CRUD for people, companies, deals and customers in the CRM.
order: 5
---

Mounted at `/api/crm/entities`. CRM data lives in the **separate** `saleszium_crm_beta` database.
Four entity types share the same CRUD shape: **people**, **company**, **deal**, **customers**.

## Endpoints

```text
# people  (also: company, deal, customers)
POST   /api/crm/entities/people
GET    /api/crm/entities/people
GET    /api/crm/entities/people/:id
PUT    /api/crm/entities/people/:id
DELETE /api/crm/entities/people/:id
```

All require auth and are scoped to your `organization_id`.

## Example — create a person

```bash
curl https://your-server/api/crm/entities/people \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Aman Gupta",
    "emails": ["aman@acme.com"],
    "company_id": 77,
    "job_title": "CTO",
    "custom_fields": { "source": "API" }
  }'
```

```json
{
  "id": 5012,
  "organization_id": 456,
  "full_name": "Aman Gupta",
  "emails": ["aman@acme.com"],
  "company_id": 77,
  "job_title": "CTO",
  "tags": [],
  "custom_fields": { "source": "API" }
}
```

## Fields by entity

- **people** — `full_name`, `emails[]`, `phones[]`, `company_id`, `job_title`, `tags[]`, `custom_fields`
- **company** — `name`, `industry`, `website`, `emails[]`, `phones[]`, `addresses[]`, `custom_fields`
- **deal** — `title`, `company_id`, `owner_id`, `value`, `currency`, `probability`, `stage`, `custom_fields`
- **customers** — `email`, `custom_data`

:::tip Flexible schema
Anything not a core column goes in `custom_fields` (JSONB). Define your own fields per workspace
without a migration.
:::
