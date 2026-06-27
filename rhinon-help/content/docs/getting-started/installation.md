---
title: Installation
description: Install the Rhinon CLI and SDK and configure your first project.
order: 2
---

# Installation

Get the Rhinon CLI and SDK onto your machine. The CLI handles auth, scaffolding and
deploys; the SDK is what you import in your application code.

## Install the CLI

Install globally with your package manager of choice:

```bash
# npm
npm install -g @rhinon/cli

# pnpm
pnpm add -g @rhinon/cli

# homebrew
brew install rhinon
```

Verify the install:

```bash
rhinon --version
# rhinon/1.4.0 darwin-arm64 node-20.11.0
```

## Add the SDK

Inside your project, add the SDK for your language:

```ts title="terminal"
npm install @rhinon/sdk
```

:::note
The SDK ships with full TypeScript types. No `@types/*` package is required.
:::

## Configure your project

Run `init` from your project root to create a `rhinon.config.ts`:

```bash
rhinon init
```

This writes a config file you can commit to version control:

```ts title="rhinon.config.ts" showLineNumbers
import { defineConfig } from "@rhinon/sdk";

export default defineConfig({
  project: "acme-app",
  region: "us-east",
  // Tokens are read from RHINON_TOKEN at runtime — never commit secrets.
});
```

## Requirements

- Node.js 18 or newer
- A Rhinon account (request access from your workspace admin)

You're ready to [make your first request](/docs/getting-started/quickstart).
