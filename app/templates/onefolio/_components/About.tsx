"use client";

import { motion } from "framer-motion";
import { PROFILE, STATS } from "../_data/portfolio";
import { fadeUp, fadeLeft, stagger, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

const VALUES = [
  { text: "Precision over decoration — every element must earn its place.", color: styles.aboutValueDotPurple },
  { text: "Strategy first, aesthetics second — beauty that works harder.", color: styles.aboutValueDotOrange },
  { text: "Craft at every scale — from a logotype to a global campaign.", color: styles.aboutValueDotPink },
  { text: "Collaboration as fuel — the best work lives in the space between.", color: styles.aboutValueDotYellow },
];

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>

          {/* ── Left: sticky image ── */}
          <motion.div
            className={styles.aboutImageCol}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className={styles.aboutImgWrap}>
              <div className={styles.aboutImgInner}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PROFILE.workspaceImage}
                  alt={`${PROFILE.name} workspace`}
                  className={styles.aboutImg}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Availability badge */}
            <div className={styles.availBadge}>
              <span className={styles.availDot} />
              {PROFILE.status} — {PROFILE.availability}
            </div>
          </motion.div>

          {/* ── Right: content ── */}
          <motion.div
            className={styles.aboutContent}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <span className={styles.eyebrow}>About Me</span>
              <h2 className={styles.sectionTitle}>
                Designing brands that <em>feel</em> as good as they look
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className={styles.aboutBio}>
              {PROFILE.bio1}
            </motion.p>
            <motion.p variants={fadeUp} className={styles.aboutBio}>
              {PROFILE.bio2}
            </motion.p>

            {/* Design values */}
            <motion.div variants={fadeUp} className={styles.aboutValues}>
              {VALUES.map((v, i) => (
                <div key={i} className={styles.aboutValue}>
                  <span className={`${styles.aboutValueDot} ${v.color}`} />
                  {v.text}
                </div>
              ))}
            </motion.div>

            {/* Stats grid */}
            <motion.div variants={fadeUp} className={styles.aboutStats}>
              {STATS.map((s) => (
                <div key={s.label}>
                  <span className={styles.aboutStatValue}>{s.value}</span>
                  <span className={styles.aboutStatLabel}>{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} style={{ marginTop: "2rem" }}>
              <a href="#contact" className={styles.btnPrimary}>
                <span>Start a Project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
