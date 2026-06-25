"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, growWidth, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#2dd4bf", "#ff7a3d", "#9089fc", "#67e8d8", "#ff9d66", "#2dd4bf"];

export default function Timeline() {
  return (
    <section id="skills" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#131419" }}>
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="08" label="The Timeline" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f1f3f6", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Software, scrubbed like footage.
          </h2>
        </motion.div>

        <div className="prlx-timeline-shelf">
          <span aria-hidden="true" className="prlx-timeline-playhead" />
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.06 }}
              className="prlx-track-row"
            >
              <span className="prlx-track-label">{s.label}</span>
              <div className="prlx-track">
                <motion.div
                  variants={growWidth(s.level, i * 0.06 + 0.15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="prlx-track-clip"
                  style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
                >
                  <span className="prlx-track-clip-ticks" />
                </motion.div>
              </div>
              <span className="prlx-track-value">{s.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .prlx-timeline-shelf { position: relative; display: flex; flex-direction: column; gap: 14px; padding: 8px 0; }
        .prlx-timeline-playhead {
          position: absolute;
          top: -6px;
          bottom: -6px;
          width: 2px;
          background-color: #ff7a3d;
          box-shadow: 0 0 10px 1px rgba(255,122,61,0.6);
          z-index: 5;
          animation: prlx-playhead-scrub 7s ease-in-out infinite;
        }
        @keyframes prlx-playhead-scrub {
          0%, 100% { left: 96px; }
          50% { left: calc(100% - 70px); }
        }
        .prlx-track-row { display: grid; grid-template-columns: 86px 1fr 40px; align-items: center; gap: 10px; }
        .prlx-track-label { font-size: 12.5px; font-weight: 600; color: #f1f3f6; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .prlx-track {
          position: relative;
          height: 22px;
          border-radius: 5px;
          background-color: #1f2128;
          border: 1px solid rgba(241,243,246,0.08);
          overflow: hidden;
        }
        .prlx-track-clip { position: relative; height: 100%; border-radius: 4px; opacity: 0.85; overflow: hidden; }
        .prlx-track-clip-ticks {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            90deg,
            rgba(12,13,16,0.35) 0px,
            rgba(12,13,16,0.35) 1px,
            transparent 1px,
            transparent 9px
          );
        }
        .prlx-track-value { font-family: var(--font-display, sans-serif); font-size: 12px; font-weight: 700; color: #9ba1ad; text-align: right; }
        @media (min-width: 600px) {
          .prlx-track-row { grid-template-columns: 130px 1fr 44px; }
          .prlx-timeline-playhead { display: block; }
        }
        @media (max-width: 599px) {
          .prlx-timeline-playhead { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .prlx-timeline-playhead { animation: none; }
        }
      `}</style>
    </section>
  );
}
