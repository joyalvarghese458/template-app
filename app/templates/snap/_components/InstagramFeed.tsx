"use client";

import { motion } from "framer-motion";
import { INSTAGRAM_POSTS, PROFILE } from "../_data/portfolio";
import { stagger, scaleIn, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function InstagramFeed() {
  return (
    <section className={styles.instaSection}>
      <div className={styles.container}>
        <div className={styles.instaHeader}>
          <div>
            <div className={styles.eyebrow}>Follow Along</div>
            <h2 className={styles.sectionTitle}>
              @camillemoreau<em>studio</em>
            </h2>
          </div>
          <a
            href={PROFILE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instaCta}
          >
            <IgIcon />
            Follow on Instagram
          </a>
        </div>

        <motion.div
          className={styles.instaGrid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {INSTAGRAM_POSTS.map((post, i) => (
            <motion.a
              key={i}
              href={PROFILE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instaPost}
              variants={scaleIn}
              data-cursor-hover
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.src}
                alt={post.alt}
                className={styles.instaPostImg}
                loading="lazy"
                draggable={false}
              />
              <div className={styles.instaOverlay}>
                <span className={styles.instaHandle}>View on Instagram</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function IgIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
