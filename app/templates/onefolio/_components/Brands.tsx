"use client";

import { motion } from "framer-motion";
import { BRANDS } from "../_data/portfolio";
import { fadeIn, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

// Double the list so the marquee loops seamlessly
const doubled = [...BRANDS, ...BRANDS];

export default function Brands() {
  return (
    <section className={styles.brands} aria-label="Brands worked with">
      {/* Label */}
      <motion.p
        className={styles.brandsLabel}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        Trusted by world-class brands
      </motion.p>

      {/* Row 1 — left to right */}
      <div className={styles.marqueeOuter}>
        <div className={styles.marqueeInner} aria-hidden="true">
          {doubled.map((brand, i) => (
            <span key={`a${i}`} className={styles.brandItem}>
              {brand}
              <span className={styles.brandSep} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
