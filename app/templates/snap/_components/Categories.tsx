"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CATEGORIES } from "../_data/portfolio";
import { stagger, scaleIn, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function Categories() {
  return (
    <section id="categories" className={styles.categoriesSection}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${styles.sectionHeaderCenter}`}>
          <div className={styles.eyebrow}>The Work</div>
          <h2 className={styles.sectionTitle}>
            Every frame, <em>a story</em>
          </h2>
          <p className={styles.sectionLead}>
            From intimate weddings to wildlife expeditions — each category
            represents a world I have explored with purpose and passion.
          </p>
        </div>

        <motion.div
          className={styles.categoriesGrid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {CATEGORIES.map((cat) => (
            <motion.div key={cat.id} variants={scaleIn}>
              <Link href={cat.href} className={styles.categoryCard} data-cursor-hover>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt={cat.label}
                  className={styles.categoryImg}
                  loading="lazy"
                  draggable={false}
                />
                <div className={styles.categoryOverlay} />

                <div className={styles.categoryContent}>
                  <span className={styles.categoryCount}>{cat.count}</span>
                  <h3 className={styles.categoryLabel}>{cat.label}</h3>
                  <p className={styles.categoryDesc}>{cat.description}</p>
                </div>

                <div className={styles.categoryCta} aria-hidden="true">
                  <ArrowDiagIcon />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ArrowDiagIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
