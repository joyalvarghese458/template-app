"use client";

import { motion } from "framer-motion";
import { WORK } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const COVERS = [
  "linear-gradient(135deg, #2dd9c4, #1c8f80)",
  "linear-gradient(135deg, #6c63ff, #3a32b0)",
  "linear-gradient(135deg, #e94fd1, #a3308f)",
  "linear-gradient(135deg, #2dd9c4, #6c63ff)",
];

export default function Work() {
  return (
    <section id="work" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0c0c18" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="Selected Work" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f5f4fa", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Case studies worth a scroll.
          </h2>
        </motion.div>

        <div className="prism-work-grid">
          {WORK.map((project, i) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: (i % 2) * 0.1 }}
              whileHover={{ y: -4 }}
              className="prism-work-card"
            >
              <div className="prism-work-cover" style={{ backgroundImage: COVERS[i % COVERS.length] }}>
                <span className="prism-work-cover-glow" aria-hidden="true" />
                <span className="prism-work-id">{project.id}</span>
              </div>
              <div className="prism-work-body">
                <p className="prism-work-category">{project.category}</p>
                <h3 className="prism-work-title">{project.title}</h3>
                <p className="prism-work-desc">{project.description}</p>
                <div className="prism-work-tools">
                  {project.tools.map((t) => (
                    <span key={t} className="prism-work-tool-tag">{t}</span>
                  ))}
                </div>
                <ul className="prism-work-outcomes">
                  {project.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .prism-work-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        .prism-work-card {
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          overflow: hidden;
          background-color: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
        }
        .prism-work-cover {
          position: relative;
          height: 128px;
          overflow: hidden;
        }
        .prism-work-cover-glow {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          filter: blur(40px);
          top: -50px;
          right: -30px;
        }
        .prism-work-id {
          position: absolute;
          left: 18px;
          bottom: 12px;
          font-family: var(--font-display, sans-serif);
          font-weight: 600;
          font-size: 26px;
          color: rgba(255,255,255,0.9);
        }
        .prism-work-body { padding: 22px; }
        .prism-work-category { font-size: 11.5px; font-weight: 700; letter-spacing: 0.04em; color: #2dd9c4; text-transform: uppercase; margin: 0 0 8px; }
        .prism-work-title { font-size: 18.5px; font-weight: 700; color: #f5f4fa; margin: 0 0 10px; }
        .prism-work-desc { font-size: 14px; line-height: 1.7; color: #a8a6c0; margin: 0 0 16px; }
        .prism-work-tools { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .prism-work-tool-tag {
          font-size: 11.5px;
          font-weight: 600;
          color: #d8d6e8;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 100px;
          padding: 4px 11px;
        }
        .prism-work-outcomes { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .prism-work-outcomes li {
          padding-left: 20px;
          position: relative;
          font-size: 13.5px;
          color: #d8d6e8;
        }
        .prism-work-outcomes li::before { content: "✓"; position: absolute; left: 0; color: #2dd9c4; }
        @media (min-width: 760px) {
          .prism-work-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
