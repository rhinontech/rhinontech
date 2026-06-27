---
title: Authentication
description: Tokens, scopes, refresh flows and SSO for production deployments.
order: 1
featured: true
---

# Authentication

Rhinon uses scoped bearer tokens for every request. This guide covers token types, how
scopes work, and the refresh flow for long‑lived integrations.

## Token types

| Type | Prefix | Use for |
| --- | --- | --- |
| Live | `rk_live_` | Production traffic |
| Test | `rk_test_` | Local development and CI |
| Session | `rs_` | Short‑lived, user‑delegated access |

## Scopes

Scopes are space‑separated and follow a `resource:action` shape. Request the narrowest set
your integration needs:

```ts
const token = await rhinon.tokens.create({
  scopes: ["projects:read", "events:write"],
  expires_in: 3600,
});
```

:::info Principle of least privilege
A read‑only dashboard should never hold a `:write` scope. Mint separate tokens per surface.
:::

## The refresh flow

Session tokens expire. Exchange a refresh token for a new session token before expiry:

```ts showLineNumbers
async function withFreshSession() {
  const { access_token, expires_at } = await rhinon.auth.refresh({
    refresh_token: process.env.RHINON_REFRESH_TOKEN!,
  });
  return new Rhinon({ token: access_token });
}
```

## Single sign‑on

Enterprise workspaces can enforce SSO via SAML or OIDC. Once configured, members
authenticate through your IdP and Rhinon issues scoped session tokens automatically.

:::warning
Enabling SSO enforcement immediately invalidates password‑based logins for the workspace.
Roll it out during a maintenance window.
:::
