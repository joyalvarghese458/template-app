"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let ringX = 0, ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
      // Lerp the ring to follow with slight delay
      const lerpRing = () => {
        ringX += (x - ringX) * 0.12;
        ringY += (y - ringY) * 0.12;
        if (ringRef.current) {
          ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
        }
        raf = requestAnimationFrame(lerpRing);
      };
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(lerpRing);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // Expand ring on interactive elements
    const expand = () => ringRef.current?.classList.add("cursor-expand");
    const shrink = () => ringRef.current?.classList.remove("cursor-expand");

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#818cf8",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "difference",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid rgba(129, 140, 248, 0.5)",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
        }}
      />
    </>
  );
}
