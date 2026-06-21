"use client";

import { motion } from "framer-motion";
import { WORK } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const COVERS = [
  { bg: "#e8402c", shape: "circle" },
  { bg: "#1a56db", shape: "triangle" },
  { bg: "#f5c518", shape: "plus" },
  { bg: "#14110f", shape: "circle" },
];

export default function Work() {
  return (
    <section id="work" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#efe8d8" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="Selected Work" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, fontSize: "clamp(26px, 4.5vw, 40px)", color: "#14110f", margin: "16px 0 40px", lineHeight: 1.18 }}>
            A few favorite projects.
          </h2>
        </motion.div>

        <div className="canvas-work-grid">
          {WORK.map((project, i) => {
            const cover = COVERS[i % COVERS.length];
            const textColor = cover.bg === "#f5c518" ? "#14110f" : "#f7f3ea";
            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                transition={{ delay: (i % 2) * 0.1 }}
                whileHover={{ y: -4 }}
                className="canvas-work-card"
              >
                <div className="canvas-work-cover" style={{ backgroundColor: cover.bg }}>
                  <svg aria-hidden="true" className="canvas-work-cover-shape" viewBox="0 0 100 100">
                    {cover.shape === "circle" && <circle cx="78" cy="20" r="34" fill="none" stroke={textColor} strokeWidth="2" opacity="0.35" />}
                    {cover.shape === "triangle" && <polygon points="78,-10 118,50 38,50" fill="none" stroke={textColor} strokeWidth="2" opacity="0.35" />}
                    {cover.shape === "plus" && <path d="M70 4h10v18h18v10h-18v18h-10v-18h-18v-10h18z" fill={textColor} opacity="0.3" />}
                  </svg>
                  <span className="canvas-work-id" style={{ color: textColor }}>{project.id}</span>
                </div>
                <div className="canvas-work-body">
                  <p className="canvas-work-category">{project.category}</p>
                  <h3 className="canvas-work-title">{project.title}</h3>
                  <p className="canvas-work-desc">{project.description}</p>
                  <div className="canvas-work-tools">
                    {project.tools.map((t) => (
                      <span key={t} className="canvas-work-tool-tag">{t}</span>
                    ))}
                  </div>
                  <ul className="canvas-work-outcomes">
                    {project.outcomes.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <style>{`
        .canvas-work-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        .canvas-work-card {
          border: 2px solid #14110f;
          border-radius: 14px;
          overflow: hidden;
          background-color: #ffffff;
        }
        .canvas-work-cover {
          position: relative;
          height: 130px;
          overflow: hidden;
        }
        .canvas-work-cover-shape { position: absolute; inset: 0; width: 100%; height: 100%; }
        .canvas-work-id {
          position: absolute;
          left: 16px;
          bottom: 12px;
          font-family: var(--font-display, sans-serif);
          font-size: 30px;
        }
        .canvas-work-body { padding: 22px; }
        .canvas-work-category { font-size: 11.5px; font-weight: 700; letter-spacing: 0.04em; color: #1a56db; text-transform: uppercase; margin: 0 0 8px; }
        .canvas-work-title { font-size: 19px; font-weight: 700; color: #14110f; margin: 0 0 10px; }
        .canvas-work-desc { font-size: 14px; line-height: 1.7; color: #5b5448; margin: 0 0 16px; }
        .canvas-work-tools { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .canvas-work-tool-tag {
          font-size: 11.5px;
          font-weight: 600;
          color: #14110f;
          border: 1.5px solid #14110f;
          border-radius: 100px;
          padding: 4px 11px;
        }
        .canvas-work-outcomes { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .canvas-work-outcomes li {
          padding-left: 20px;
          position: relative;
          font-size: 13.5px;
          color: #14110f;
          font-weight: 500;
        }
        .canvas-work-outcomes li::before { content: "+"; position: absolute; left: 0; color: #e8402c; font-weight: 800; }
        @media (min-width: 760px) {
          .canvas-work-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
