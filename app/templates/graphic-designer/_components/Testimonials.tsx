"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

const SLIDE_DURATION = 5000;

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function Testimonials() {
  const [[index, dir], setIndex] = useState([0, 1]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (next: number, direction: number) => {
    const clamped = ((next % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length;
    setIndex([clamped, direction]);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex(([i]) => [((i + 1) % TESTIMONIALS.length), 1]);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNav = (direction: number) => {
    go(index + direction, direction);
    startTimer();
  };

  const handleDot = (i: number) => {
    go(i, i > index ? 1 : -1);
    startTimer();
  };

  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <motion.div
          className={`${styles.sectionHeader} ${styles.sectionHeaderCenter}`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className={styles.eyebrow}>Testimonials</span>
          <h2 className={styles.sectionTitle}>
            What clients <em>say</em>
          </h2>
        </motion.div>

        <div className={styles.testimonialWrap}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              className={styles.testimonialCard}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className={styles.testimonialStars}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className={styles.testimonialStar}>★</span>
                ))}
              </div>

              <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>

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

          <div className={styles.testimonialNav}>
            <div className={styles.testimonialDots}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                  onClick={() => handleDot(i)}
                />
              ))}
            </div>

            <div className={styles.testimonialBtns}>
              <button
                type="button"
                aria-label="Previous testimonial"
                className={styles.testimonialBtn}
                onClick={() => handleNav(-1)}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                className={styles.testimonialBtn}
                onClick={() => handleNav(1)}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
