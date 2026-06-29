---
title: Run the mobile app
description: Start the Expo app and point it at your local backend.
order: 2
---

The primary client is the Expo / React Native app in `furrcircle-expo`.

## Install & start

```bash
cd furrcircle-expo
npm install
npm start          # Expo dev server (port 8082)
# then:
npm run ios        # iOS simulator
npm run android    # Android emulator
npm run web        # browser
npm run clean      # clear cache & restart
```

## Point it at your backend

The app reads a single public env var for the API base:

```bash title="furrcircle-expo/.env"
# Use your machine's LAN IP so a device/emulator can reach the backend
EXPO_PUBLIC_API_URL=http://192.168.0.2:5001/api
# prod: https://api.furrcircle.com/api
```

:::warning Use your LAN IP, not localhost
On a physical device or emulator, `localhost` points at the device itself. Use your computer's LAN
IP (e.g. `192.168.x.x`) so the app can reach the backend.
:::

## How it talks to the API

`helpers/PrivateAxios.ts` exposes two Axios instances:

- **`PublicAxios`** — no auth (login, register, OTP).
- **`PrivateAxios`** — injects the JWT as `Authorization: Bearer <token>`.

Tokens are stored in **`expo-secure-store`** on native and `AsyncStorage` on web (key `furr:auth`).
Feature API calls live under `services/` (e.g. `services/pet/petApi.ts`,
`services/community/feedApi.ts`).

## Push & realtime

`app/_layout.tsx` initialises Firebase, the auth context and the Socket.IO connection on launch.
See [Realtime](/furrcircle/developers/architecture/realtime) and the
[mobile app](/furrcircle/developers/mobile-app) page.
