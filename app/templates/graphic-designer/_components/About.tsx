"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PROFILE, STATS } from "../_data/portfolio";
import { fadeLeft, fadeRight, fadeUp, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

function useCounter(target: string, active: boolean) {
  const [value, setValue] = useState("0");

  useEffect(() => {
    if (!active) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix = target.replace(/[0-9.]/g, "");
    if (isNaN(num)) { setValue(target); return; }

    const duration = 1500;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(`${Math.round(ease * num)}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target]);

  return value;
}

function StatCounter({ value, label, active }: { value: string; label: string; active: boolean }) {
  const displayed = useCounter(value, active);
  return (
    <div className={styles.aboutStat}>
      <span className={styles.aboutStatValue}>{displayed}</span>
      <span className={styles.aboutStatLabel}>{label}</span>
    </div>
  );
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>

          {/* Left: image (sticky on desktop) */}
          <motion.div
            className={styles.aboutImageCol}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className={styles.aboutImgWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PROFILE.workspaceImage}
                alt={`${PROFILE.name} workspace`}
                className={styles.aboutImg}
                loading="lazy"
              />
              <div className={styles.aboutImgAccent} />
              <div className={styles.aboutAccentLine} />
            </div>
            <div className={styles.availBadge}>
              <span className={styles.availDot} />
              {PROFILE.status}
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            className={styles.aboutContent}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <span className={styles.eyebrow}>About Me</span>
            <h2 className={styles.sectionTitle}>
              The person behind<br />the <em>pixels</em>
            </h2>
            <p className={styles.aboutBio}>{PROFILE.bio1}</p>
            <p className={styles.aboutBio}>{PROFILE.bio2}</p>

            <div ref={statsRef} className={styles.aboutStats}>
              {STATS.map((s) => (
                <StatCounter
                  key={s.label}
                  value={s.value}
                  label={s.label}
                  active={statsVisible}
                />
              ))}
            </div>

            <a href="#contact" className={styles.btnPrimary}>
              Work with me <ArrowIcon />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
    </svg>
  );
}
