"use client";

import styles from "../theme.module.css";

export default function GrainOverlay() {
  return (
    <svg
      className={styles.grain}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="gd-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#gd-grain)" />
    </svg>
  );
}
