---
title: CRM — pipelines
description: Manage pipelines and stages, move entities through a Kanban, and reorder stages.
order: 6
---

Mounted at `/api/crm/pipelines`. Pipelines organise CRM entities into ordered **stages** and power
the Kanban board.

## Endpoints

```text
GET    /api/crm/pipelines/view/:view_id/pipelines        # pipelines for a view
POST   /api/crm/pipelines/view/:view_id/pipeline         # create a pipeline
PUT    /api/crm/pipelines/pipeline/:pipeline_id          # update
DELETE /api/crm/pipelines/pipeline/:pipeline_id          # delete
PATCH  /api/crm/pipelines/pipeline/:pipeline_id/reorder  # reorder stages
GET    /api/crm/pipelines/pipeline/:pipeline_id/kanban   # kanban view
DELETE /api/crm/pipelines/pipeline/:pipeline_id/stage/:stage_id  # remove a stage

# move an entity between stages
POST   /api/crm/pipelines/entity/:entity_type/:entity_id/move
GET    /api/crm/pipelines/entity/:entity_type/:entity_id/pipelines
DELETE /api/crm/pipelines/entity/:entity_type/:entity_id
```

`entity_type` is one of `people`, `company`, `deal`, `customer`.

## Example — move a deal to a stage

```bash
curl https://your-server/api/crm/pipelines/entity/deal/5099/move \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "pipeline_id": 12, "stage_id": "negotiation" }'
```

A pipeline stores its stages as JSONB:

```json
{
  "id": 12,
  "name": "Sales",
  "stages": [
    { "name": "Prospecting", "order": 0, "entities": [] },
    { "name": "Negotiation", "order": 1, "entities": [5099] }
  ]
}
```

:::tip Kanban in one call
`GET /pipeline/:id/kanban` returns stages with their entities already grouped — ideal for rendering
a board without N+1 lookups.
:::
