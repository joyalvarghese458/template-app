"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { PROFILE } from "../_data/portfolio";
import { scaleIn, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function Resume() {
  return (
    <section id="resume" className={styles.resumeSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.resumeCard}
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className={styles.resumeGlowBlob} aria-hidden="true" />

          <div className={styles.resumeContent}>
            <span className={styles.eyebrow}>Resume</span>
            <h2 className={styles.resumeTitle}>Get the full picture</h2>
            <p className={styles.resumeDesc}>
              9 years of work history, client case studies, D&amp;AD recognition, and
              references — all in one polished PDF.
            </p>
            <a
              href={PROFILE.resumeUrl}
              className={styles.btnPrimary}
              download
              aria-label="Download resume PDF"
            >
              Download Resume <Download size={15} aria-hidden="true" />
            </a>
          </div>

          {/* Decorative document */}
          <div className={styles.resumeDoc} aria-hidden="true">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className={styles.resumeDocLine} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
