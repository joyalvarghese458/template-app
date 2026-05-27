"use client";

import { useEffect, useRef } from "react";
import styles from "../theme.module.css";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let curX = 0, curY = 0;
    let targetX = 0, targetY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      const dot = dotRef.current;
      if (dot) {
        dot.style.left = `${targetX}px`;
        dot.style.top  = `${targetY}px`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      curX = lerp(curX, targetX, 0.12);
      curY = lerp(curY, targetY, 0.12);
      const ring = ringRef.current;
      if (ring) {
        ring.style.left = `${curX}px`;
        ring.style.top  = `${curY}px`;
      }
      rafId = requestAnimationFrame(loop);
    };

    const onEnter = () => ringRef.current?.classList.add(styles.cursorActive);
    const onLeave = () => ringRef.current?.classList.remove(styles.cursorActive);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={styles.cursor} aria-hidden="true" />
      <div ref={dotRef}  className={styles.cursorDot} aria-hidden="true" />
    </>
  );
}
