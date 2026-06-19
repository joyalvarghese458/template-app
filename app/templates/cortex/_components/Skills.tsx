"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const MAX_LEVEL = 5;

export default function Skills() {
  const categories = Object.entries(SKILLS);

  return (
    <section id="skills" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0d1320" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="Skill Matrix" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#eef1f8", margin: "16px 0 40px", lineHeight: 1.18 }}>
            A proficiency heatmap.
          </h2>
        </motion.div>

        <div className="cortex-skills-grid">
          {categories.map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: catIndex * 0.06 }}
            >
              <h3 className="cortex-skills-cat">{category}</h3>
              <div className="cortex-skills-rows">
                {skills.map((skill) => (
                  <div key={skill.name} className="cortex-skills-row">
                    <span className="cortex-skills-name">{skill.name}</span>
                    <div className="cortex-heatmap" role="img" aria-label={`${skill.name}: ${skill.level} out of ${MAX_LEVEL}`}>
                      {Array.from({ length: MAX_LEVEL }).map((_, i) => {
                        const filled = i < skill.level;
                        const t = i / (MAX_LEVEL - 1);
                        return (
                          <motion.span
                            key={i}
                            aria-hidden="true"
                            className="cortex-heat-cell"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={VIEWPORT}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            style={{
                              background: filled
                                ? `linear-gradient(135deg, rgba(139,92,246,${0.5 + t * 0.5}), rgba(34,211,238,${0.5 + t * 0.5}))`
                                : "rgba(255,255,255,0.06)",
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .cortex-skills-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        .cortex-skills-cat {
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8b5cf6;
          margin: 0 0 16px;
        }
        .cortex-skills-rows { display: flex; flex-direction: column; gap: 13px; }
        .cortex-skills-row { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
        .cortex-skills-name { font-size: 13.5px; color: #c4cad8; flex: 1; min-width: 0; }
        .cortex-heatmap { display: flex; gap: 4px; flex-shrink: 0; }
        .cortex-heat-cell { width: 16px; height: 16px; border-radius: 3px; display: inline-block; }
        @media (min-width: 760px) {
          .cortex-skills-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 40px 48px; }
        }
      `}</style>
    </section>
  );
}
