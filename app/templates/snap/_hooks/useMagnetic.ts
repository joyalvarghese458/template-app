"use client";

import { useRef, useEffect } from "react";

export function useMagnetic<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    let gsapInstance: typeof import("gsap")["default"] | null = null;

    import("gsap").then(({ default: gsap }) => {
      gsapInstance = gsap;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, {
          x: x * strength,
          y: y * strength,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.4)" });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      (el as HTMLElement & {
        _mmove?: EventListener;
        _mleave?: EventListener;
      })._mmove = handleMouseMove as EventListener;
      (el as HTMLElement & {
        _mmove?: EventListener;
        _mleave?: EventListener;
      })._mleave = handleMouseLeave as EventListener;
    });

    return () => {
      const _el = el as HTMLElement & {
        _mmove?: EventListener;
        _mleave?: EventListener;
      };
      if (_el._mmove) el.removeEventListener("mousemove", _el._mmove);
      if (_el._mleave) el.removeEventListener("mouseleave", _el._mleave);
      if (gsapInstance) gsapInstance.killTweensOf(el);
    };
  }, [strength]);

  return ref;
}
