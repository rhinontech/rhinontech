---
title: Quickstart
description: Make your first authenticated request and handle the response.
order: 3
featured: true
---

# Quickstart

This guide gets you from zero to a working request in about five minutes. You'll create a
token, initialize the client and read your first resource.

## 1. Create a token

From the dashboard, open **Settings → API Tokens** and create a token scoped to `read`.
Copy it into your environment:

```bash
export RHINON_TOKEN="rk_live_xxxxxxxxxxxxxxxxx"
```

:::warning Keep tokens secret
Treat tokens like passwords. Use environment variables or a secrets manager — never commit
them to source control.
:::

## 2. Initialize the client

```ts title="index.ts" showLineNumbers
import { Rhinon } from "@rhinon/sdk";

const rhinon = new Rhinon({
  token: process.env.RHINON_TOKEN,
});
```

## 3. Make a request

```ts title="index.ts" {3-5} showLineNumbers
const projects = await rhinon.projects.list({ limit: 10 });

for (const project of projects.data) {
  console.log(project.id, project.name);
}
```

A successful call returns a typed, paginated payload:

```json
{
  "object": "list",
  "data": [{ "id": "proj_a1b2c3", "name": "Acme App", "region": "us-east" }],
  "has_more": false
}
```

## 4. Handle errors

Every error is a typed instance you can branch on:

```ts
import { RhinonError } from "@rhinon/sdk";

try {
  await rhinon.projects.retrieve("proj_missing");
} catch (err) {
  if (err instanceof RhinonError && err.status === 404) {
    console.warn("Project not found");
  }
}
```

:::success You're set
You've made your first authenticated request. Next, learn how tokens, scopes and refresh
flows work in [Authentication](/docs/guides/authentication).
:::
