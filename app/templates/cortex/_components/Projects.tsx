"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0d1320" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="Selected Work" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#eef1f8", margin: "16px 0 40px", lineHeight: 1.18 }}>
            Models that made it to production.
          </h2>
        </motion.div>

        <div className="cortex-project-grid">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: (i % 2) * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(139,92,246,0.4)" }}
              className="cortex-project-card"
            >
              <div className="cortex-project-head">
                <span className="cortex-project-id">{project.id}</span>
                <span className="cortex-project-tag">CASE STUDY</span>
              </div>
              <h3 className="cortex-project-title">{project.title}</h3>
              <p className="cortex-project-desc">{project.description}</p>
              <div className="cortex-project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="cortex-project-tech-tag">{t}</span>
                ))}
              </div>
              <ul className="cortex-project-outcomes">
                {project.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .cortex-project-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        .cortex-project-card {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 26px;
          background-color: #141b2e;
          transition: border-color 0.25s;
        }
        .cortex-project-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 14px; }
        .cortex-project-id { font-family: var(--font-mono, monospace); font-size: 13px; color: #8b5cf6; }
        .cortex-project-tag { font-family: var(--font-mono, monospace); font-size: 10.5px; color: #22d3ee; letter-spacing: 0.06em; }
        .cortex-project-title { font-size: 19.5px; font-weight: 700; color: #eef1f8; margin: 0 0 12px; }
        .cortex-project-desc { font-size: 14.5px; line-height: 1.7; color: #8b93ab; margin: 0 0 16px; }
        .cortex-project-tech { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .cortex-project-tech-tag {
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          color: #8b93ab;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 4px;
          padding: 4px 8px;
        }
        .cortex-project-outcomes { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .cortex-project-outcomes li {
          padding-left: 18px;
          position: relative;
          font-size: 13.5px;
          color: #c4cad8;
        }
        .cortex-project-outcomes li::before { content: "✓"; position: absolute; left: 0; color: #34d399; }
        @media (min-width: 760px) {
          .cortex-project-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
