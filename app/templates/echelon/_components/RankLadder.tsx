"use client";

import { motion } from "framer-motion";
import { COMPETENCIES } from "../_data/portfolio";
import { fadeUp, growBar, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ranked = [...COMPETENCIES].sort((a, b) => b.level - a.level);

export default function RankLadder() {
  return (
    <section id="competencies" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#11151d" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="08" label="Rank Ladder" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#eef1f6", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Competencies, ranked by reps — not résumé.
          </h2>
        </motion.div>

        <div className="ech-ladder-list">
          {ranked.map((c, i) => (
            <motion.div
              key={c.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.06 }}
              className="ech-ladder-row"
            >
              <div className="ech-ladder-rank">
                <span className="ech-ladder-rank-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="ech-ladder-chevrons" aria-hidden="true">
                  {Array.from({ length: 3 }).map((_, c2) => (
                    <span key={c2} className={`ech-ladder-chevron ${c2 < Math.ceil(c.level / 34) ? "ech-ladder-chevron-on" : ""}`} />
                  ))}
                </span>
              </div>
              <div className="ech-ladder-track-col">
                <div className="ech-ladder-label-row">
                  <span className="ech-ladder-label">{c.label}</span>
                  <span className="ech-ladder-value">{c.level}%</span>
                </div>
                <div className="ech-ladder-track">
                  <motion.div
                    variants={growBar(c.level, i * 0.06 + 0.15)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="ech-ladder-fill"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .ech-ladder-list { display: flex; flex-direction: column; gap: 16px; }
        .ech-ladder-row { display: flex; align-items: center; gap: 18px; }
        .ech-ladder-rank { display: flex; flex-direction: column; align-items: center; gap: 5px; width: 38px; flex-shrink: 0; }
        .ech-ladder-rank-num { font-family: var(--font-display, serif); font-size: 13px; font-weight: 600; color: #5c6679; }
        .ech-ladder-chevrons { display: flex; flex-direction: column; gap: 2px; }
        .ech-ladder-chevron {
          width: 14px;
          height: 6px;
          clip-path: polygon(0% 0%, 50% 60%, 100% 0%, 100% 30%, 50% 100%, 0% 30%);
          background-color: rgba(238,241,246,0.12);
        }
        .ech-ladder-chevron-on { background-color: #d98a3d; }
        .ech-ladder-track-col { flex: 1; min-width: 0; }
        .ech-ladder-label-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 7px; }
        .ech-ladder-label { font-size: 14.5px; font-weight: 600; color: #eef1f6; }
        .ech-ladder-value { font-family: var(--font-display, serif); font-size: 13px; font-weight: 600; color: #6f97f2; }
        .ech-ladder-track { height: 9px; border-radius: 5px; background-color: #1d2330; overflow: hidden; }
        .ech-ladder-fill {
          height: 100%;
          border-radius: 5px;
          background-image: linear-gradient(90deg, #3b6fe0, #6f97f2 55%, #d98a3d);
          background-size: 220% 100%;
          position: relative;
        }
        .ech-ladder-fill::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -35deg,
            rgba(11,14,20,0.22) 0px,
            rgba(11,14,20,0.22) 5px,
            transparent 5px,
            transparent 11px
          );
        }
      `}</style>
    </section>
  );
}
