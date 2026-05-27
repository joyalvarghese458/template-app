"use client";

import { motion } from "framer-motion";
import { PROFILE } from "../_data/portfolio";
import { fadeUp, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function Resume() {
  return (
    <section className={`${styles.section} ${styles.resumeSection}`}>
      <div className={styles.container}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className={styles.resumeCard}>
            {/* Decorative glow blobs */}
            <div className={styles.resumeGlow1} aria-hidden="true" />
            <div className={styles.resumeGlow2} aria-hidden="true" />

            {/* Text content */}
            <div className={styles.resumeContent}>
              <span className={styles.eyebrow}>Resume</span>
              <h2 className={styles.resumeTitle}>
                Ready to build something <em>unforgettable?</em>
              </h2>
              <p className={styles.resumeDesc}>
                Download my full resume to explore 8+ years of brand identity work, art direction,
                and creative direction — from global agencies to independent practice.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href={PROFILE.resumeUrl}
                  className={styles.btnPrimary}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DownloadIcon />
                  <span>Download Resume</span>
                </a>
                <a href="#contact" className={styles.btnGhost}>
                  Let&apos;s Talk First
                </a>
              </div>
            </div>

            {/* Decorative doc illustration */}
            <div className={styles.resumeDoc} aria-hidden="true">
              {[...Array(7)].map((_, i) => (
                <div key={i} className={styles.resumeDocLine} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
