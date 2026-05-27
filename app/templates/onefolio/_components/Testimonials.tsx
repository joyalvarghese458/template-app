"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

const INTERVAL = 6000; // auto-advance ms

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  const next = useCallback(() => setActive((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setActive((p) => (p - 1 + total) % total), [total]);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  const t = TESTIMONIALS[active];

  return (
    <section className={`${styles.section} ${styles.testimonialsSection}`}>
      <div className={styles.container}>

        {/* Header */}
        <motion.div
          className={`${styles.sectionHeader} ${styles.sectionHeaderCenter}`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className={styles.eyebrow}>Testimonials</span>
          <h2 className={styles.sectionTitle}>
            Words from <em>happy clients</em>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          className={styles.testimonialWrap}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Giant quote mark */}
              <span className={styles.testimonialQuoteMark} aria-hidden="true">&ldquo;</span>

              {/* Stars */}
              <div className={styles.testimonialStars}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className={styles.testimonialStar}>⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className={styles.testimonialAuthor}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={styles.testimonialAvatar}
                  loading="lazy"
                />
                <div>
                  <p className={styles.testimonialName}>{t.name}</p>
                  <p className={styles.testimonialRole}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className={styles.testimonialNav}>
            {/* Dots */}
            <div className={styles.testimonialDots} role="tablist" aria-label="Testimonials">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className={styles.testimonialBtns}>
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className={styles.testimonialBtn}
              >
                <ChevronLeft />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className={styles.testimonialBtn}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
