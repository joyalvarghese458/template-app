"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Skills() {
  const categories = Object.entries(SKILLS);

  return (
    <section
      id="skills"
      style={{
        padding: "clamp(64px, 10vw, 128px) 24px",
        backgroundColor: "#0d1117",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="Skills" />
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              color: "#eef1f5",
              marginTop: "16px",
              marginBottom: "48px",
            }}
          >
            Tools I trust under deadline pressure.
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "32px" }} className="torque-skills-grid">
          {categories.map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: catIndex * 0.06 }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "13px",
                  color: "#ff6a1f",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  margin: "0 0 20px",
                }}
              >
                {category}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontSize: "14px", color: "#eef1f5" }}>{skill.name}</span>
                      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "12px", color: "#8a93a3" }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={{ height: "4px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={VIEWPORT}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        style={{ height: "100%", backgroundColor: "#3fa9f5", borderRadius: "2px" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .torque-skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
