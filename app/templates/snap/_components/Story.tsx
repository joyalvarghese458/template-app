"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROFILE, STATS } from "../_data/portfolio";
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function Story() {
  return (
    <section id="story" className={styles.storySection}>
      <div className={styles.container}>
        <div className={styles.storyGrid}>
          {/* Image column */}
          <motion.div
            className={styles.storyImageCol}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className={styles.storyImgWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className={styles.storyImg}
                loading="lazy"
                draggable={false}
              />
              <div className={styles.storyImgBorder} />
              <div className={styles.storyAccentCorner} />
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            className={styles.storyContent}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <div className={styles.eyebrow}>The Story</div>
              <h2 className={styles.sectionTitle}>
                {PROFILE.name}
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className={styles.storyBio}>
              {PROFILE.bio1}
            </motion.p>

            <motion.p variants={fadeUp} className={styles.storyBio}>
              {PROFILE.bio2}
            </motion.p>

            <motion.p variants={fadeUp} className={styles.storySignature}>
              "{PROFILE.philosophy}"
            </motion.p>

            <motion.div variants={fadeUp} className={styles.storyStats}>
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.storyStat}>
                  <span className={styles.storyStatValue}>{stat.value}</span>
                  <span className={styles.storyStatLabel}>{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className={styles.availBadge}>
                <span className={styles.availDot} />
                {PROFILE.availability}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} style={{ marginTop: "2rem" }}>
              <Link href="/templates/snap/contact" className={styles.btnPrimary}>
                Book a Session
                <ArrowIcon />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}
