"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROFILE, HERO_PHOTOS } from "../_data/portfolio";
import { heroContainer, heroLine } from "../_utils/motion";
import styles from "../theme.module.css";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const pctX = ((e.clientX / window.innerWidth) * 100).toFixed(1);
      const pctY = ((e.clientY / window.innerHeight) * 100).toFixed(1);

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--mouse-x", `${pctX}%`);
        spotlightRef.current.style.setProperty("--mouse-y", `${pctY}%`);
        spotlightRef.current.style.background = `radial-gradient(circle 420px at ${pctX}% ${pctY}%, rgba(200,169,110,0.065) 0%, transparent 70%)`;
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll<HTMLElement>(`.${styles.heroCard}`);
        const cx = e.clientX - window.innerWidth / 2;
        const cy = e.clientY - window.innerHeight / 2;
        cards.forEach((card, i) => {
          const depth = (i + 1) * 0.012;
          card.style.transform = `rotate(${i === 0 ? 2 : i === 1 ? -3 : 1.5}deg) translate(${cx * depth}px, ${cy * depth}px)`;
        });
      }
    };

    section.addEventListener("mousemove", onMove, { passive: true });
    return () => section.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="hero" ref={sectionRef} className={styles.hero}>
      <div className={styles.heroBg} />
      <div ref={spotlightRef} className={styles.heroSpotlight} />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            {/* Left: text */}
            <motion.div
              className={styles.heroLeft}
              variants={heroContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={heroLine} className={styles.heroKicker}>
                {PROFILE.availability}
              </motion.div>

              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleLine}>
                  <motion.span variants={heroLine} className={styles.heroTitleInner}>
                    {PROFILE.heroLine1}
                  </motion.span>
                </span>
                <span className={styles.heroTitleLine}>
                  <motion.span
                    variants={heroLine}
                    className={`${styles.heroTitleInner} ${styles.heroTitleItalic}`}
                  >
                    {PROFILE.heroLine2}
                  </motion.span>
                </span>
                <span className={styles.heroTitleLine}>
                  <motion.span variants={heroLine} className={styles.heroTitleInner}>
                    {PROFILE.heroLine3}
                  </motion.span>
                </span>
              </h1>

              <motion.p variants={heroLine} className={styles.heroDesc}>
                {PROFILE.heroSub}
              </motion.p>

              <motion.div variants={heroLine} className={styles.heroActions}>
                <Link href="/templates/snap/portfolio" className={styles.btnPrimary}>
                  View Portfolio
                  <ArrowIcon />
                </Link>
                <Link href="/templates/snap/contact" className={styles.btnGhost}>
                  Book a Session
                </Link>
              </motion.div>

              <motion.div
                variants={heroLine}
                className={styles.heroScroll}
                style={{ marginTop: "3rem" }}
              >
                <span className={styles.heroScrollLine} />
                <span className={styles.heroScrollDot} />
                <span>Scroll to explore</span>
              </motion.div>
            </motion.div>

            {/* Right: floating photo cards */}
            <div ref={cardsRef} className={styles.heroRight}>
              {HERO_PHOTOS.map((photo, i) => (
                <div key={i} className={styles.heroCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={styles.heroCardImg}
                    loading={i === 0 ? "eager" : "lazy"}
                    draggable={false}
                  />
                  <div className={styles.heroCardGlass}>
                    <span className={styles.heroCardLabel}>{photo.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
