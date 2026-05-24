"use client";

import { useEffect, useRef } from "react";
import styles from "../theme.module.css";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const animate = () => {
      curX = lerp(curX, mouseX, 0.12);
      curY = lerp(curY, mouseY, 0.12);
      if (cursorRef.current) {
        cursorRef.current.style.left = `${curX}px`;
        cursorRef.current.style.top = `${curY}px`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const handleEnter = () => cursorRef.current?.classList.add(styles.cursorActive);
    const handleLeave = () => cursorRef.current?.classList.remove(styles.cursorActive);

    const interactables = "a, button, [data-cursor-hover]";

    const attachHovers = () => {
      document.querySelectorAll<HTMLElement>(interactables).forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);
    attachHovers();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} style={{ left: "-200px", top: "-200px" }} aria-hidden="true" />
      <div ref={dotRef} className={styles.cursorDot} style={{ left: "-200px", top: "-200px" }} aria-hidden="true" />
    </>
  );
}
