"use client";

import { useEffect } from "react";

type LenisInstance = {
  raf: (time: number) => void;
  destroy: () => void;
};

export default function MotionShell({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousOverflowX = html.style.overflowX;
    const previousHtmlBackground = html.style.backgroundColor;
    const previousBodyBackground = body.style.backgroundColor;
    html.style.overflowX = "hidden";
    html.style.backgroundColor = "#0c0c0c";
    body.style.backgroundColor = "#0c0c0c";

    let lenis: LenisInstance | null = null;
    let rafId = 0;
    let active = true;

    (async () => {
      const { default: Lenis } = await import("lenis");
      if (!active) return;

      lenis = new Lenis({
        duration: 0.85,
        touchMultiplier: 1.2,
      }) as LenisInstance;

      function tick(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(tick);
      }

      rafId = requestAnimationFrame(tick);
    })();

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      html.style.overflowX = previousOverflowX;
      html.style.backgroundColor = previousHtmlBackground;
      body.style.backgroundColor = previousBodyBackground;
    };
  }, []);

  return <>{children}</>;
}
