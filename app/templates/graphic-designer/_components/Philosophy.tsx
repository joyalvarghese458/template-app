"use client";

import { motion } from "framer-motion";
import { PROFILE } from "../_data/portfolio";
import { fadeUp, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function Philosophy() {
  const words = PROFILE.philosophy.split(" ");

  return (
    <section className={styles.philosophy} aria-label="Design philosophy">
      <div className={styles.container}>
        <motion.div
          className={styles.philosophyInner}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className={styles.philosophyQuote}>
            {words.slice(0, 3).join(" ")}{" "}
            <em>{words.slice(3, 4).join(" ")}</em>{" "}
            {words.slice(4).join(" ")}
          </p>
          <div className={styles.philosophyDivider} aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
