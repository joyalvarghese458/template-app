"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES, TOOLS } from "../_data/portfolio";
import { fadeLeft, fadeRight, fadeUp, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function Skills() {
  const barsRef = useRef<HTMLDivElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setBarsVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className={styles.eyebrow}>Skills &amp; Tools</span>
          <h2 className={styles.sectionTitle}>
            My <em>Arsenal</em>
          </h2>
        </motion.div>

        <div className={`${styles.skillsGrid} ${barsVisible ? styles.skillsVisible : ""}`}>

          {/* Left: skill bars */}
          <motion.div
            ref={barsRef}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.label} className={styles.skillCategory}>
                <span className={styles.skillCatLabel}>{cat.label}</span>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillMeta}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPct}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillTrack}>
                      <div
                        className={styles.skillFill}
                        style={{ "--target": `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Right: tools grid */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className={styles.toolsHeading}>Tools I use daily</p>
            <div className={styles.toolsGrid}>
              {TOOLS.map((tool) => (
                <div key={tool.name} className={styles.toolChip} title={tool.category}>
                  {tool.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
