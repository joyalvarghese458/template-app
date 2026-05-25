"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { heroContainer, heroLine, ease } from "../_utils/motion";
import { PROFILE } from "../_data/portfolio";
import styles from "./Hero.module.css";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Orrery parallax — more movement
  const springX = useSpring(mouseX, { stiffness: 40, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 18 });

  // Hero image parallax — subtler, different depth layer
  const imgRawX = useTransform(mouseX, (v) => v * 0.45);
  const imgRawY = useTransform(mouseY, (v) => v * 0.45);
  const springImgX = useSpring(imgRawX, { stiffness: 28, damping: 22 });
  const springImgY = useSpring(imgRawY, { stiffness: 28, damping: 22 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 28);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 28);
    };
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => window.removeEventListener("mousemove", onMouse);
  }, [mouseX, mouseY]);

  return (
    <section className={styles.hero} id="hero">
      {/* Background */}
      <div className={styles.bg} />
      <motion.div className={`${styles.orb} ${styles.orb1}`} style={{ x: springX, y: springY }} />
      <motion.div className={`${styles.orb} ${styles.orb2}`} style={{ x: springX, y: springY }} />

      {/* Orbital orrery — parallax on mouse */}
      <motion.div className={styles.orbContainer} style={{ x: springX, y: springY }}>
        <div className={styles.orbit}>
          <div className={`${styles.ring} ${styles.ring1}`}>
            <div className={styles.dotA} />
          </div>
          <div className={`${styles.ring} ${styles.ring2}`}>
            <div className={styles.dotB} />
          </div>
          <div className={`${styles.ring} ${styles.ring3}`} />
          <div className={`${styles.ring} ${styles.ring4}`} />
          <div className={styles.glowCore} />
        </div>
      </motion.div>

      {/* Solo hero image — transparent PNG, bottom-anchored right side */}
      <motion.div
        className={styles.heroImgWrap}
        style={{ x: springImgX, y: springImgY }}
        initial={{ opacity: 0, scale: 0.97, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6, ease }}
      >
        <img
          src="/solo-hero.png"
          alt=""
          aria-hidden="true"
          className={styles.heroImg}
          draggable={false}
        />
        {/* Fade left edge into background so text stays readable */}
        <div className={styles.heroImgFade} />
        {/* Accent glow beneath the figure */}
        <div className={styles.heroImgGlow} />
      </motion.div>

      {/* Text content */}
      <div className={styles.content}>
        {/* Eyebrow */}
        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
        >
          <span className={styles.eyebrowDot} />
          {PROFILE.heroStatement}
        </motion.div>

        {/* Display title — staggered line reveal */}
        <motion.h1
          className={styles.heroTitle}
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <span className={styles.lineWrap}>
            <motion.span variants={heroLine} className={styles.titleLine}>
              {PROFILE.heroLine1}
            </motion.span>
          </span>
          <span className={styles.lineWrap}>
            <motion.span variants={heroLine} className={`${styles.titleLine} ${styles.italic}`}>
              {PROFILE.heroLine2}
            </motion.span>
          </span>
          <span className={styles.lineWrap}>
            <motion.span variants={heroLine} className={`${styles.titleLine} ${styles.dim}`}>
              {PROFILE.heroLine3}
            </motion.span>
          </span>
        </motion.h1>

        {/* Name + CTA */}
        <motion.div
          className={styles.heroMeta}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.5, ease }}
        >
          <span className={styles.heroName}>{PROFILE.name}</span>
          <a href="#reel" className={styles.reelBtn}>
            <span>Watch Reel</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.0 }}
        aria-hidden="true"
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </motion.div>
    </section>
  );
}
