"use client";

import { useEffect, useRef, useState } from "react";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "../../styles.module.css";

type StatCounterProps = {
  label: string;
  target: number;
  suffix?: string;
};

export default function StatCounter({
  label,
  target,
  suffix = "",
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useScrollReveal(ref);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [isVisible, target]);

  return (
    <div ref={ref} className={styles.statItem}>
      <span className={styles.statValue}>
        {value}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}
