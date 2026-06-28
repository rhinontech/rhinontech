---
title: Local setup (backend)
description: Run the Furrcircle backend locally — install, configure env, seed data.
order: 1
---

## Prerequisites

- Node.js (the backend runs TypeScript directly via `--experimental-strip-types`)
- PostgreSQL (local or an RDS instance)
- AWS S3 bucket + credentials (for uploads)
- Firebase service account (`google-services.json`) for push

## Install & run

```bash
cd backend
npm install
npm run dev      # watch mode on http://localhost:5001
```

Sequelize auto-syncs the schema on boot (`alter: true`), so the tables are created/updated for you.

## Seed scripts

```bash
npm run bootstrap-admin   # create the first admin user
npm run seed-demo         # demo users/pets/posts
npm run seed-circles      # seed circles
```

## Environment

```bash title="backend/.env"
PORT=5001
NODE_ENV=development
JWT_SECRET=...

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=furrcircle
DB_USERNAME=postgres
DB_PASSWORD=...

# CORS / web
CORS_ORIGINS=http://localhost:4000
FRONTEND_URL=http://localhost:4000

# AWS S3
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_S3_BUCKET_NAME=...
AWS_S3_FOLDER_NAME=...

# Email (Gmail) + integrations
GMAIL_USER=...
GMAIL_APP_PASSWORD=...
GOOGLE_PLACES_API_KEY=...
```

Firebase push reads a service account file (`config/firebase.ts` loads `google-services.json`).

## Verify

```bash
curl http://localhost:5001/api/auth/check-username?username=demo
```

Next: [Run the mobile app](/furrcircle/developers/getting-started/running-the-mobile-app).
