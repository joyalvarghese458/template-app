"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

// SSR-safe "are we mounted on the client" check (no setState-in-effect needed):
// false during server render/hydration, true once running in the browser.
export function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

// SSR-safe media query subscription. Reads `window.matchMedia` directly as
// the external source of truth instead of mirroring it into local state via
// an effect (which would call setState synchronously on mount).
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}
