"use client";

import { motion } from "framer-motion";
import { BRANDS } from "../_data/portfolio";
import { fadeUp, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

const doubled = [...BRANDS, ...BRANDS];

export default function Brands() {
  return (
    <section className={styles.brands} aria-label="Brands worked with">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className={styles.brandsLabel}
      >
        Trusted by world-class brands
      </motion.p>

      <div className={styles.marqueeOuter}>
        <div className={styles.marqueeInner} aria-hidden="true">
          {doubled.map((brand, i) => (
            <span key={i} className={styles.brandItem}>
              {brand}
              <span className={styles.brandSep}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
