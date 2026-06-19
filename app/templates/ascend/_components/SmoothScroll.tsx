"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let rafId: number;
    let active = true;

    (async () => {
      const { default: Lenis } = await import("lenis");
      if (!active) return;

      lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.4,
        syncTouch: true,
      });

      const raf = (time: number) => {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    })();

    return () => {
      active = false;
      html.style.scrollBehavior = previousScrollBehavior;
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return <>{children}</>;
}
