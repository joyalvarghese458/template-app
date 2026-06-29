"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsClient, useMediaQuery } from "./hooks";

export default function Cursor() {
  const isClient = useIsClient();
  const enabled = useMediaQuery("(pointer: fine)");
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 28, stiffness: 280, mass: 0.4 });
  const ringY = useSpring(y, { damping: 28, stiffness: 280, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [enabled, x, y]);

  if (!isClient || !enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#8a5a2b",
          translateX: x,
          translateY: y,
          x: "-50%",
          y: "-50%",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
      <motion.div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          borderRadius: "50%",
          border: "1px solid rgba(138,90,43,0.55)",
          translateX: ringX,
          translateY: ringY,
          x: "-50%",
          y: "-50%",
          zIndex: 9998,
          pointerEvents: "none",
          transition: "width 0.25s ease, height 0.25s ease",
        }}
      />
    </>
  );
}
