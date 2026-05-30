"use client";

import { useEffect, useRef } from "react";
import styles from "../theme.module.css";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = barRef.current;
      if (!el) return;
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = scrollTop / (scrollHeight - clientHeight);
      el.style.transform = `scaleX(${pct})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className={styles.scrollProgress}
      style={{ width: "100%", transform: "scaleX(0)" }}
      aria-hidden="true"
    />
  );
}
