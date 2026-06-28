---
title: Health & appointments
description: The pet health passport and the vet appointment lifecycle.
order: 7
---

## Health records (`/api/health`)

All keyed by `petId`:

```text
GET/POST   /api/health/vaccines/:petId
POST       /api/health/vaccines/:petId/:vaccineId/certificate   # generate a certificate
GET/POST   /api/health/vitals/:petId
GET/POST   /api/health/meds/:petId
DELETE     /api/health/meds/:petId/:medId
GET/POST   /api/health/records/:petId        # medical records
GET/POST   /api/health/allergies/:petId
```

```bash
curl https://api.furrcircle.com/api/health/vaccines/PET_ID \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "name": "Rabies", "dateAdministered": "2026-01-10", "nextDueDate": "2027-01-10" }'
```

A record's `addedByRole` notes whether the **owner** or a **vet** logged it.

## Vets & appointments (`/api/vets`, `/api/appointments`)

```text
GET    /api/vets                              # verified vets (discovery)

POST   /api/appointments                       # book
GET    /api/appointments/owner                 # my bookings
GET    /api/appointments/vet                   # vet's bookings (verifiedVetOnly)
GET    /api/appointments/vet/stats             # (verifiedVetOnly)
PATCH  /api/appointments/:id/status            # confirm / complete / cancel
PATCH  /api/appointments/:id/reschedule        # request reschedule
PATCH  /api/appointments/:id/reschedule/respond
POST   /api/appointments/:id/feedback          # rate the visit
```

The appointment model carries both sides' feedback (`ownerFeedback*`, `vetFeedback*`) and
reschedule proposal fields (`proposedDate`, `proposedTime`, `rescheduleRequestedBy`).

:::tip Verified vets only
Vet-side endpoints are gated by `verifiedVetOnly`. Owners book; vets manage and complete.
:::
