"use client";

import { motion } from "framer-motion";
import { FUNNEL } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const STAGES = [
  { clip: "polygon(0% 0%, 100% 0%, 86% 100%, 14% 100%)", color: "#2954ff" },
  { clip: "polygon(14% 0%, 86% 0%, 72% 100%, 28% 100%)", color: "#ff3d7f" },
  { clip: "polygon(28% 0%, 72% 0%, 56% 100%, 44% 100%)", color: "#ffa629" },
  { clip: "polygon(44% 0%, 56% 0%, 50% 100%, 50% 100%)", color: "#00c875" },
];

export default function Funnel() {
  return (
    <section id="funnel" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f8f9fb" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="How I Work" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#0f1222", margin: "16px 0 40px", lineHeight: 1.18 }}>
            One funnel. Every campaign.
          </h2>
        </motion.div>

        <div className="surge-funnel-visual">
          {FUNNEL.map((f, i) => (
            <motion.div
              key={f.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.1 }}
              className="surge-funnel-stage"
              style={{ clipPath: STAGES[i].clip, backgroundColor: STAGES[i].color }}
            >
              {i < 3 && <span className="surge-funnel-stage-title">{f.title}</span>}
            </motion.div>
          ))}
        </div>

        <div className="surge-funnel-legend">
          {FUNNEL.map((f, i) => (
            <motion.div
              key={f.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="surge-funnel-legend-item"
            >
              <span className="surge-funnel-legend-dot" style={{ backgroundColor: STAGES[i].color }} />
              <div>
                <p className="surge-funnel-legend-title">{f.step} — {f.title}</p>
                <p className="surge-funnel-legend-desc">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .surge-funnel-visual {
          display: flex;
          flex-direction: column;
          max-width: 480px;
          margin: 0 auto 48px;
        }
        .surge-funnel-stage {
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .surge-funnel-stage-title {
          font-family: var(--font-display, sans-serif);
          font-weight: 700;
          font-size: 14px;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .surge-funnel-legend {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }
        .surge-funnel-legend-item { display: flex; gap: 14px; align-items: flex-start; }
        .surge-funnel-legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; margin-top: 6px; }
        .surge-funnel-legend-title { font-size: 14.5px; font-weight: 700; color: #0f1222; margin: 0 0 4px; }
        .surge-funnel-legend-desc { font-size: 13.5px; line-height: 1.6; color: #5b6178; margin: 0; }
        @media (min-width: 700px) {
          .surge-funnel-legend { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
