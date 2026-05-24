"use client";

import { motion } from "framer-motion";
import { WORKS } from "../_data/portfolio";
import { fadeUp, scaleIn, staggerFast, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function FeaturedWork() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className={styles.eyebrow}>Featured Work</span>
          <h2 className={styles.sectionTitle}>
            Selected <em>Projects</em>
          </h2>
          <p className={styles.sectionLead}>
            A curated showcase of brand identity, editorial, and motion work from 2023–2026.
          </p>
        </motion.div>

        <motion.div
          className={styles.workGrid}
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {WORKS.map((work) => (
            <motion.a
              key={work.id}
              href="#"
              className={`${styles.workCard} ${work.wide ? styles.workCardWide : ""}`}
              variants={scaleIn}
              aria-label={`${work.title} — ${work.category}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={work.image}
                alt={work.title}
                className={styles.workImg}
                loading="lazy"
              />
              <div className={styles.workOverlay}>
                <div className={styles.workMeta}>
                  <span className={styles.workCategory}>
                    {work.category} · {work.year}
                  </span>
                  <h3 className={styles.workTitle}>{work.title}</h3>
                  <span className={styles.workCta}>
                    View project ↗
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
