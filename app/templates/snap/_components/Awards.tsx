"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AWARDS, PROFILE } from "../_data/portfolio";
import { fadeLeft, fadeRight, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function Awards() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLElement>(`.${styles.awardItem}`);
    if (!items) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.awardItemVisible);
          }
        });
      },
      { threshold: 0.25 }
    );

    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="awards" className={styles.awardsSection}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${styles.sectionHeaderCenter}`}>
          <div className={styles.eyebrow}>Recognition</div>
          <h2 className={styles.sectionTitle}>
            Awards &amp; <em>Accolades</em>
          </h2>
        </div>

        <div className={styles.awardsLayout}>
          {/* Left: sticky portrait */}
          <motion.div
            className={styles.awardsLeft}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className={styles.awardsPhotoWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PROFILE.studioImage}
                alt="Studio"
                className={styles.awardsPhoto}
                loading="lazy"
                draggable={false}
              />
            </div>
          </motion.div>

          {/* Right: awards list */}
          <motion.div
            ref={listRef}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className={styles.awardsList}>
              {AWARDS.map((award) => (
                <div key={award.title + award.year} className={styles.awardItem}>
                  <div className={styles.awardYear}>{award.year}</div>
                  <div className={styles.awardContent}>
                    <h3 className={styles.awardTitle}>{award.title}</h3>
                    <div className={styles.awardMeta}>
                      <span className={styles.awardCategory}>{award.category}</span>
                      <span className={styles.awardIssuer}>{award.issuer}</span>
                    </div>
                    <p className={styles.awardDesc}>{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
