"use client";

import { WALL_PHOTOS } from "../_data/portfolio";
import styles from "../theme.module.css";

export default function PhotoWall() {
  const doubled = [...WALL_PHOTOS, ...WALL_PHOTOS];
  const half = Math.ceil(doubled.length / 2);
  const row1 = doubled.slice(0, half);
  const row2 = doubled.slice(half);
  const row1All = [...row1, ...row1];
  const row2All = [...row2, ...row2];

  return (
    <div className={styles.photoWall}>
      <p className={styles.wallLabel}>A selection of moments</p>

      {/* Row 1 — left to right */}
      <div className={styles.wallRow}>
        <div className={styles.wallInner}>
          {row1All.map((photo, i) => (
            <div key={i} className={styles.wallPhoto}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className={styles.wallPhotoImg}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className={styles.wallRow}>
        <div className={`${styles.wallInner} ${styles.wallInnerReverse}`}>
          {row2All.map((photo, i) => (
            <div key={i} className={styles.wallPhoto}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className={styles.wallPhotoImg}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
