"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "clamp(64px, 10vw, 128px) 24px",
        backgroundColor: "#0d1117",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="Selected Work" />
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              color: "#eef1f5",
              marginTop: "16px",
              marginBottom: "48px",
            }}
          >
            Hardware that ships and holds tolerance.
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "24px" }} className="torque-project-grid">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: (i % 2) * 0.1 }}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "28px",
                backgroundColor: "#11151b",
                transition: "border-color 0.25s, transform 0.25s",
              }}
              whileHover={{ y: -4, borderColor: "rgba(63,169,245,0.4)" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px" }}>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "13px", color: "#ff6a1f" }}>
                  {project.id}
                </span>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: "#3fa9f5", letterSpacing: "0.06em" }}>
                  CASE STUDY
                </span>
              </div>

              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#eef1f5", margin: "0 0 12px" }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: "#8a93a3", margin: "0 0 18px" }}>
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "18px" }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "11px",
                      color: "#8a93a3",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "4px",
                      padding: "4px 8px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {project.outcomes.map((outcome) => (
                  <li key={outcome} style={{ display: "flex", gap: "8px", fontSize: "13.5px", color: "#c4cad3", alignItems: "flex-start" }}>
                    <span style={{ color: "#2dd4bf", marginTop: "1px" }}>✓</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .torque-project-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
