"use client";

import { useEffect, useRef } from "react";
import theme from "./theme.module.css";

export default function Cursor() {
  const ring = useRef<HTMLDivElement | null>(null);
  const dot = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let targetX = 0, targetY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dot.current) {
        dot.current.style.left = `${targetX}px`;
        dot.current.style.top = `${targetY}px`;
      }
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.12;
      ringY += (targetY - ringY) * 0.12;
      dotX += (targetX - dotX) * 0.5;
      dotY += (targetY - dotY) * 0.5;
      if (ring.current) {
        ring.current.style.left = `${ringX}px`;
        ring.current.style.top = `${ringY}px`;
      }
      if (dot.current) {
        dot.current.style.left = `${dotX}px`;
        dot.current.style.top = `${dotY}px`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnterLink = () => {
      if (ring.current) {
        ring.current.style.width = "56px";
        ring.current.style.height = "56px";
        ring.current.style.borderColor = "rgba(200, 169, 110, 0.8)";
      }
    };

    const onLeaveLink = () => {
      if (ring.current) {
        ring.current.style.width = "32px";
        ring.current.style.height = "32px";
        ring.current.style.borderColor = "rgba(240, 235, 228, 0.5)";
      }
    };

    tick();
    window.addEventListener("mousemove", onMove);

    const links = document.querySelectorAll("a, button, [data-cursor='expand']");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={ring} className={theme.cursor} aria-hidden="true" />
      <div ref={dot} className={theme.cursorDot} aria-hidden="true" />
    </>
  );
}
