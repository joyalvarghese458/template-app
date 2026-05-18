"use client";

import { useEffect, useState } from "react";
import styles from "./Loader.module.css";
import { usePageLoaded } from "./hooks";

export default function Loader() {
  const ready = usePageLoaded(1400);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (ready) {
      setCount(100);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = () => {
      const elapsed = performance.now() - start;
      const pct = Math.min(96, Math.round((elapsed / 1400) * 100));
      setCount(pct);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ready]);

  return (
    <div
      className={`${styles.loader} ${ready ? styles.loaderHidden : ""}`}
      aria-hidden={ready}
    >
      <div className={styles.logoWrap}>
        <svg
          className={styles.logoIcon}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="pureLogoGrad" x1="0" y1="0" x2="48" y2="48">
              <stop offset="0%" stopColor="#ff6b5b" />
              <stop offset="100%" stopColor="#ff8a7c" />
            </linearGradient>
          </defs>
          <path
            d="M24 4 L44 40 L4 40 Z"
            fill="url(#pureLogoGrad)"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
          <path d="M24 18 L34 36 L14 36 Z" fill="#0e0b2a" />
        </svg>
        <span className={styles.logoText}>
          Pur<span className={styles.logoTextAccent}>e</span>
        </span>
      </div>

      <div className={styles.ring}>
        <svg className={styles.ringSvg} viewBox="0 0 120 120">
          <defs>
            <linearGradient id="pureLoaderGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff6b5b" />
              <stop offset="100%" stopColor="#6c63ff" />
            </linearGradient>
          </defs>
          <circle className={styles.ringTrack} cx="60" cy="60" r="50" />
          <circle className={styles.ringFill} cx="60" cy="60" r="50" />
        </svg>
        <span className={styles.ringCount}>{count}%</span>
      </div>

      <p className={styles.tagline}>Crafting the experience</p>
    </div>
  );
}
