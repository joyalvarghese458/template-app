"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { fadeUp, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

function TimelineItem({ item, index }: { item: typeof EXPERIENCE[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`${styles.timelineItem} ${visible ? styles.timelineItemVisible : ""}`}
      initial={{ opacity: 0, x: -30 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className={styles.timelineDot} />
      <span className={styles.timelineYear}>{item.year}</span>
      <h3 className={styles.timelineRole}>{item.role}</h3>
      <span className={styles.timelineCompany}>{item.company} · {item.city}</span>
      <p className={styles.timelineDesc}>{item.desc}</p>
      <div className={styles.timelineTags}>
        {item.tags.map((tag) => (
          <span key={tag} className={styles.timelineTag}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animate the timeline track line on scroll using GSAP ScrollTrigger
  useEffect(() => {
    let ctx: { revert?: () => void } = {};

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      if (!trackRef.current || !containerRef.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          trackRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1,
            },
          }
        );
      });
    })();

    return () => { if (ctx.revert) ctx.revert(); };
  }, []);

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className={styles.eyebrow}>Experience</span>
          <h2 className={styles.sectionTitle}>
            Where I&apos;ve <em>been</em>
          </h2>
          <p className={styles.sectionLead}>
            A decade of design across the world&apos;s most respected creative studios.
          </p>
        </motion.div>

        <div ref={containerRef} className={styles.timeline}>
          <div className={styles.timelineTrack}>
            <div ref={trackRef} className={styles.timelineTrackFill} />
          </div>

          {EXPERIENCE.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
