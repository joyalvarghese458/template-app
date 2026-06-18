"use client";

import { useEffect } from "react";

export function useParallax<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  speed = 0.4
) {
  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let frame = 0;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const offset = (window.innerHeight - rect.top) * speed * 0.25;
      element.style.transform = `translateY(${offset.toFixed(2)}px)`;
      frame = 0;
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, speed]);
}
