"use client";

import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    type LenisInstance = { raf: (t: number) => void; destroy: () => void };
    type GsapInstance = { ticker: { add: (fn: (t: number) => void) => void; remove: (fn: (t: number) => void) => void; lagSmoothing: (v: number) => void } };

    let lenis: LenisInstance | null = null;
    let tick: ((time: number) => void) | null = null;
    let gsapRef: GsapInstance | null = null;
    let active = true;

    (async () => {
      const [{ default: Lenis }, { default: gsap }] = await Promise.all([
        import("lenis"),
        import("gsap"),
      ]);

      if (!active) return;

      gsapRef = gsap as unknown as GsapInstance;

      lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2.2,
      }) as LenisInstance;

      tick = (time: number) => lenis!.raf(time * 1000);
      gsapRef.ticker.add(tick);
      gsapRef.ticker.lagSmoothing(0);
    })();

    return () => {
      active = false;
      // Remove tick from GSAP's loop BEFORE nulling lenis — this is the critical order
      if (tick && gsapRef) gsapRef.ticker.remove(tick);
      if (lenis) lenis.destroy();
      lenis = null;
      tick = null;
      gsapRef = null;
    };
  }, []);
}
