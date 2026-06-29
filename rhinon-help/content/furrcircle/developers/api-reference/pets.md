---
title: Pets
description: Create and manage pets, memories and adoption/foster listings.
order: 3
---

Mounted at `/api/pets`.

```text
GET    /api/pets                  # my pets
POST   /api/pets                  # create a pet
GET    /api/pets/:id              # one pet
PUT    /api/pets/:id              # update
DELETE /api/pets/:id              # delete
GET    /api/pets/discover         # pets available for adoption
PATCH  /api/pets/:id/listing      # toggle adoption/foster/breeding status
GET    /api/pets/:id/memories     # memory vault
POST   /api/pets/:id/memories     # add a memory
```

## Example — create a pet

```bash
curl https://api.furrcircle.com/api/pets \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bruno",
    "species": "dog",
    "breed": "Indie",
    "gender": "male",
    "birth_date": "2023-04-01",
    "city": "Hyderabad"
  }'
```

## Listings

`PATCH /:id/listing` flips the adoption/foster/breeding flags that surface a pet in
[Match](/furrcircle/developers/api-reference/match-and-adoption) and `GET /pets/discover`:

```json
{ "isAdoptionOpen": true, "adoptionFee": 0 }
```

:::tip Health is per-pet
A pet's vaccines, vitals, meds and reminders live under
[`/api/health`](/furrcircle/developers/api-reference/health-and-appointments), keyed by `petId`.
:::
