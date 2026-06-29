"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { VENTURES } from "../_data/content";
import { IMAGES } from "../_data/images";
import { useMediaQuery } from "../_components/hooks";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

export default function VenturesIndex() {
  const hoverEnabled = useMediaQuery("(pointer: fine) and (min-width: 1280px)");
  const [active, setActive] = useState<number | null>(null);

  const y = useMotionValue(0);
  const springY = useSpring(y, { damping: 24, stiffness: 220, mass: 0.5 });

  const activeVenture = active !== null ? VENTURES[active] : null;

  return (
    <div
      className={styles.indexWrap}
      onPointerLeave={() => setActive(null)}
      onPointerMove={(e) => {
        const clamped = Math.min(Math.max(e.clientY, 160), window.innerHeight - 180);
        y.set(clamped);
      }}
    >
      <ol className={styles.indexList}>
        {VENTURES.map((v, i) => (
          <li
            key={v.slug}
            className={styles.indexRow}
            onPointerEnter={() => hoverEnabled && setActive(i)}
          >
            <span className={`${theme.display} ${theme.numeral} ${styles.indexNumber}`}>
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className={styles.indexMain}>
              <h3 className={`${theme.display} ${styles.indexTitle}`}>{v.title}</h3>
              <p className={styles.indexDesc}>{v.description}</p>

              {/* Inline image — the only image shown on touch devices, where
                  hover previews don't make sense. */}
              <div className={styles.indexImageMobile}>
                <Image
                  src={IMAGES[v.image as keyof typeof IMAGES]}
                  alt={v.title}
                  fill
                  sizes="90vw"
                  className={styles.indexImageMobileImg}
                />
              </div>
            </div>

            <div className={styles.indexMeta}>
              <span className={styles.indexSector}>{v.sector}</span>
              <span className={styles.indexYear}>{v.year}</span>
              <span className={styles.indexMetric}>{v.metric}</span>
            </div>
          </li>
        ))}
      </ol>

      {hoverEnabled && (
        <motion.div
          className={styles.floatPreview}
          style={{ top: springY }}
          animate={{ opacity: activeVenture ? 1 : 0, scale: activeVenture ? 1 : 0.92 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="wait">
            {activeVenture && (
              <motion.div
                key={activeVenture.slug}
                className={styles.floatPreviewImageWrap}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={IMAGES[activeVenture.image as keyof typeof IMAGES]}
                  alt={activeVenture.title}
                  fill
                  sizes="320px"
                  className={styles.floatPreviewImage}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
