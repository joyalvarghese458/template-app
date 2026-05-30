"use client";

import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    type LenisInstance = { raf: (t: number) => void; destroy: () => void };
    type GsapInstance = typeof import("gsap")["default"];

    let lenis: LenisInstance | null = null;
    let tick: ((time: number) => void) | null = null;
    let gsapInstance: GsapInstance | null = null;
    let active = true;

    (async () => {
      const [{ default: Lenis }, { default: gsap }] = await Promise.all([
        import("lenis"),
        import("gsap"),
      ]);

      if (!active) return;

      gsapInstance = gsap;

      lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      }) as LenisInstance;

      tick = (time: number) => {
        if (lenis) lenis.raf(time * 1000);
      };

      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    })();

    return () => {
      active = false;
      // Remove tick from GSAP before destroying lenis to prevent
      // "Cannot read properties of null (reading 'raf')" after unmount.
      if (gsapInstance && tick) gsapInstance.ticker.remove(tick);
      if (lenis) lenis.destroy();
      lenis = null;
      tick = null;
      gsapInstance = null;
    };
  }, []);
}
