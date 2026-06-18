"use client";

import { useRef } from "react";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "../../styles.module.css";

type ProgressBarProps = {
  label: string;
  value: number;
};

export default function ProgressBar({ label, value }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useScrollReveal(ref);

  return (
    <div ref={ref} className={styles.progressItem}>
      <div className={styles.progressMeta}>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className={styles.progressTrack}>
        <span
          className={styles.progressFill}
          style={{ width: isVisible ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}
