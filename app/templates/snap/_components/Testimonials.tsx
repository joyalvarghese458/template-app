"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeIn, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = TESTIMONIALS.length;

  const go = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total]
  );

  useEffect(() => {
    timerRef.current = setTimeout(() => go(current + 1), 6000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, go]);

  const t = TESTIMONIALS[current];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${styles.sectionHeaderCenter}`}>
          <div className={styles.eyebrow}>Kind Words</div>
          <h2 className={styles.sectionTitle}>
            What clients <em>say</em>
          </h2>
        </div>

        <motion.div
          className={styles.testimonialWrap}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className={styles.testimonialCard}
            >
              <div className={styles.testimonialQuoteMark}>&ldquo;</div>

              <div className={styles.testimonialStars}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className={styles.testimonialStar}>★</span>
                ))}
              </div>

              <p className={styles.testimonialText}>{t.text}</p>

              <div className={styles.testimonialAuthor}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={styles.testimonialAvatar}
                  loading="lazy"
                  draggable={false}
                />
                <div>
                  <div className={styles.testimonialName}>{t.name}</div>
                  <div className={styles.testimonialRole}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.testimonialNav}>
            <div className={styles.testimonialDots}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className={styles.testimonialBtns}>
              <button
                className={styles.testimonialBtn}
                onClick={() => go(current - 1)}
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon />
              </button>
              <button
                className={styles.testimonialBtn}
                onClick={() => go(current + 1)}
                aria-label="Next testimonial"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
