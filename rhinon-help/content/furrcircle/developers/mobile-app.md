---
title: The mobile app
description: How the Expo / React Native app is structured and how it talks to the backend.
order: 4
---

`furrcircle-expo` is the main client — Expo 54, React Native 0.81, React 19.

## Stack

- **Expo Router** — file-based routing under `app/`
- **NativeWind** — Tailwind for React Native
- **TanStack React Query** — server-state / data fetching
- **Zustand** — local state
- **socket.io-client** — realtime
- **Firebase** — auth + messaging
- **expo-secure-store** — token storage

## Structure

```text
app/
  _layout.tsx        # root: Socket.io + Firebase + Auth context init
  (tabs)/            # bottom-tab navigation
  community/ circle/ events/ post/ thread/ u/ vets/ ...   # feature screens
  login.tsx signup.tsx onboarding.tsx compose.tsx chat.tsx notifications.tsx ...
services/
  auth/authApi.ts          # login, register, OTP, reset
  pet/petApi.ts            # pets
  community/feedApi.ts     # posts / feed
  community/storyApi.ts    # stories
  community/circleApi.ts   # circles
  community/questionApi.ts # Q&A
  chat/chatApi.ts          # messaging
  match/matchApi.ts        # playdate matching
  socket/socketService.ts  # singleton Socket.io
helpers/PrivateAxios.ts    # Public/Private axios instances
```

## API client pattern

```ts
// helpers/PrivateAxios.ts (shape)
export const PrivateAxios = axios.create({ baseURL: process.env.EXPO_PUBLIC_API_URL });
PrivateAxios.interceptors.request.use(async (config) => {
  const token = await getToken();           // SecureStore (native) / AsyncStorage (web)
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

## Socket service

`services/socket/socketService.ts` is a singleton:

```ts
connectSocket(token);                  // connect with auth
onSocketEvent("notification:new", fn); // subscribe
offSocketEvent("notification:new", fn);
disconnectSocket();
```

Subscriptions are wired in `app/_layout.tsx` so notifications, chat unread badges and presence work
app-wide. See [Realtime](/furrcircle/developers/architecture/realtime).

:::tip React Query + sockets
Data is fetched with React Query and **invalidated** when a relevant socket event arrives — sockets
signal "something changed", queries refetch the source of truth.
:::
