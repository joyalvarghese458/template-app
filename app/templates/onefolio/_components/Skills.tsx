"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES, TOOLS } from "../_data/portfolio";
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

const TOOL_COLOR_MAP: Record<string, string> = {
  purple: styles.toolChipPurple,
  orange: styles.toolChipOrange,
  pink:   styles.toolChipPink,
  yellow: styles.toolChipYellow,
};

export default function Skills() {
  const barsRef = useRef<HTMLDivElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarsVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className={`${styles.section} ${styles.skillsSection}`}>
      <div className={styles.container}>

        {/* Header */}
        <motion.div
          className={`${styles.sectionHeader} ${styles.sectionHeaderCenter}`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className={styles.eyebrow}>Skills &amp; Tools</span>
          <h2 className={styles.sectionTitle}>
            Craft meets <em>craft</em>
          </h2>
          <p className={styles.sectionLead}>
            A decade of obsessive skill-building across brand, print, digital, and motion.
          </p>
        </motion.div>

        {/* Grid: skill bars | tools cloud */}
        <div className={styles.skillsGrid}>

          {/* ── Left: Skill bars ── */}
          <motion.div
            ref={barsRef}
            className={barsVisible ? styles.skillsVisible : ""}
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

          {/* ── Right: Tools cloud ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className={styles.toolsColHeader}>Tools &amp; Software</p>
            <div className={styles.toolsGrid}>
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className={`${styles.toolChip} ${TOOL_COLOR_MAP[tool.color] ?? styles.toolChipPurple}`}
                >
                  <span className={styles.toolChipName}>{tool.name}</span>
                  <span className={styles.toolChipCat}>{tool.category}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
