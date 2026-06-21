"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#f15a24", "#2c4a5e", "#8b8d87", "#1f2421"];

export default function Work() {
  return (
    <section id="work" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#e4e7e0" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="Built Work" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#1f2421", margin: "16px 0 40px", lineHeight: 1.08, textTransform: "uppercase" }}>
            Projects on the ground.
          </h2>
        </motion.div>

        <div className="strata-work-grid">
          {PROJECTS.map((project, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                transition={{ delay: (i % 2) * 0.1 }}
                whileHover={{ y: -3 }}
                className="strata-work-card"
                style={{ borderTopColor: accent }}
              >
                <div className="strata-work-plate">
                  <span className="strata-work-id">NO. {project.id}</span>
                  <span className="strata-work-category" style={{ color: accent }}>{project.category}</span>
                </div>
                <h3 className="strata-work-title">{project.title}</h3>
                <p className="strata-work-desc">{project.description}</p>
                <div className="strata-work-tools">
                  {project.tools.map((t) => (
                    <span key={t} className="strata-work-tool-tag">{t}</span>
                  ))}
                </div>
                <ul className="strata-work-outcomes">
                  {project.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>

      <style>{`
        .strata-work-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        .strata-work-card {
          border: 1.5px solid #1f2421;
          border-top-width: 5px;
          padding: 24px;
          background-color: #ffffff;
        }
        .strata-work-plate { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 14px; }
        .strata-work-id { font-family: var(--font-mono, monospace); font-size: 12px; font-weight: 700; color: #1f2421; }
        .strata-work-category { font-family: var(--font-mono, monospace); font-size: 10.5px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
        .strata-work-title { font-family: var(--font-display, sans-serif); font-size: 22px; font-weight: 700; color: #1f2421; margin: 0 0 12px; text-transform: uppercase; line-height: 1.1; }
        .strata-work-desc { font-size: 14px; line-height: 1.7; color: #5c655e; margin: 0 0 16px; }
        .strata-work-tools { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .strata-work-tool-tag {
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          color: #1f2421;
          border: 1px solid #1f2421;
          border-radius: 3px;
          padding: 4px 8px;
        }
        .strata-work-outcomes { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .strata-work-outcomes li {
          padding-left: 18px;
          position: relative;
          font-size: 13.5px;
          color: #1f2421;
        }
        .strata-work-outcomes li::before { content: "▸"; position: absolute; left: 0; color: #f15a24; }
        @media (min-width: 760px) {
          .strata-work-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
