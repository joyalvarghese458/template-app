"use client";

import { motion } from "framer-motion";
import { WORKS } from "../_data/portfolio";
import { fadeUp, scaleIn, staggerFast, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

const ACCENT_MAP: Record<string, { category: string; card: string; cta: string }> = {
  purple: { category: styles.accentPurple, card: styles.cardAccentPurple, cta: styles.accentPurple },
  orange: { category: styles.accentOrange,  card: styles.cardAccentOrange,  cta: styles.accentOrange  },
  pink:   { category: styles.accentPink,    card: styles.cardAccentPink,    cta: styles.accentPink    },
  yellow: { category: styles.accentYellow,  card: styles.cardAccentYellow,  cta: styles.accentYellow  },
};

export default function FeaturedWork() {
  return (
    <section id="work" className={`${styles.section} ${styles.workSection}`}>
      <div className={styles.container}>

        {/* Section header */}
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
            A curated showcase of brand identity, packaging, campaigns, and art direction — 2024–2026.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className={styles.workGrid}
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {WORKS.map((work) => {
            const accent = ACCENT_MAP[work.accent] ?? ACCENT_MAP.purple;
            return (
              <motion.a
                key={work.id}
                href="#"
                aria-label={`${work.title} — ${work.category}`}
                className={`${styles.workCard} ${work.wide ? styles.workCardWide : ""} ${accent.card}`}
                variants={scaleIn}
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
                    <span className={`${styles.workCategory} ${accent.category}`}>
                      {work.category} · {work.year}
                    </span>
                    <h3 className={styles.workTitle}>{work.title}</h3>
                    <span className={`${styles.workCta} ${accent.cta}`}>
                      View project ↗
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          style={{ textAlign: "center", marginTop: "3rem" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <a href="#" className={styles.btnGhost}>
            View All Projects ↗
          </a>
        </motion.div>

      </div>
    </section>
  );
}
