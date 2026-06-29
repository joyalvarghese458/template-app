"use client";

import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflowX = html.style.overflowX;
    const previousBodyOverflowX = body.style.overflowX;
    const previousScrollBehavior = html.style.scrollBehavior;

    html.style.overflowX = "hidden";
    body.style.overflowX = "hidden";
    html.style.scrollBehavior = "auto";

    type LenisInstance = { raf: (t: number) => void; destroy: () => void };

    let lenis: LenisInstance | null = null;
    let rafId = 0;
    let active = true;

    (async () => {
      const { default: Lenis } = await import("lenis");

      if (!active) return;

      lenis = new Lenis({
        duration: 1.3,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.4,
        syncTouch: true,
      }) as LenisInstance;

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };
      rafId = window.requestAnimationFrame(raf);
    })();

    return () => {
      active = false;
      html.style.overflowX = previousHtmlOverflowX;
      body.style.overflowX = previousBodyOverflowX;
      html.style.scrollBehavior = previousScrollBehavior;
      if (rafId) window.cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
      lenis = null;
    };
  }, []);
}
