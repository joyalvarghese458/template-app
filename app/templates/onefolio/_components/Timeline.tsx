"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { fadeUp, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

const COLOR_MAP = {
  purple: {
    dot:    styles.timelineDotPurple,
    period: styles.timelinePeriodPurple,
    tags:   styles.timelineTagPurple,
  },
  orange: {
    dot:    styles.timelineDotOrange,
    period: styles.timelinePeriodOrange,
    tags:   styles.timelineTagOrange,
  },
  pink: {
    dot:    styles.timelineDotPink,
    period: styles.timelinePeriodPink,
    tags:   styles.timelineTagPink,
  },
  yellow: {
    dot:    styles.timelineDotYellow,
    period: styles.timelinePeriodYellow,
    tags:   styles.timelineTagYellow,
  },
};

export default function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef  = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  // GSAP scroll-driven line draw
  useEffect(() => {
    let gsap: typeof import("gsap").default | null = null;
    let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger | null = null;
    let active = true;

    (async () => {
      const [gsapModule, stModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!active) return;

      gsap = gsapModule.default;
      ScrollTrigger = stModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (sectionRef.current && fillRef.current) {
        gsap.fromTo(
          fillRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 30%",
              scrub: true,
            },
          }
        );
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  // Intersection observer for each timeline item
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    document.querySelectorAll("[data-timeline-item]").forEach((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, i]));
          }
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section id="experience" ref={sectionRef} className={`${styles.section} ${styles.timelineSection}`}>
      <div className={styles.container}>

        {/* Header */}
        <motion.div
          className={styles.sectionHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className={styles.eyebrow}>Experience</span>
          <h2 className={styles.sectionTitle}>
            The journey <em>so far</em>
          </h2>
          <p className={styles.sectionLead}>
            A decade of creative work across leading agencies, iconic brands, and independent practice.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {/* Animated vertical line */}
          <div className={styles.timelineTrack} ref={trackRef}>
            <div className={styles.timelineTrackFill} ref={fillRef} />
          </div>

          {/* Items */}
          {EXPERIENCE.map((item, i) => {
            const colors = COLOR_MAP[item.color as keyof typeof COLOR_MAP] ?? COLOR_MAP.purple;
            const isVisible = visibleItems.has(i);

            return (
              <div
                key={i}
                data-timeline-item
                className={`${styles.timelineItem} ${isVisible ? styles.timelineItemVisible : ""}`}
              >
                {/* Dot */}
                <div className={`${styles.timelineDot} ${colors.dot}`} />

                {/* Period badge */}
                <span className={`${styles.timelinePeriod} ${colors.period}`}>
                  {item.year} · {item.city}
                </span>

                {/* Role */}
                <h3 className={styles.timelineRole}>{item.role}</h3>
                <span className={styles.timelineCompany}>{item.company}</span>

                {/* Description */}
                <p className={styles.timelineDesc}>{item.desc}</p>

                {/* Tags */}
                <div className={styles.timelineTags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={`${styles.timelineTag} ${colors.tags}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
