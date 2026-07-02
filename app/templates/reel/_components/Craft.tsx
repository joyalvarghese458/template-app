"use client";

import { motion } from "framer-motion";
import { CRAFT } from "../_data/portfolio";
import { fadeUp, growWidth, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#d1263f", "#c9a15a", "#d1263f", "#c9a15a", "#d1263f", "#c9a15a"];

export default function Craft() {
  return (
    <section id="craft" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0806" }}>
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="08" label="The Craft" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, textTransform: "uppercase", fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f3ece1", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Footage exposed, by reel.
          </h2>
        </motion.div>

        <div className="rl-craft-shelf">
          <span aria-hidden="true" className="rl-craft-playhead" />
          {CRAFT.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.06 }}
              className="rl-craft-row"
            >
              <span className="rl-craft-label">{s.label}</span>
              <div className="rl-craft-track">
                <motion.div
                  variants={growWidth(s.level, i * 0.06 + 0.15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="rl-craft-clip"
                  style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
                >
                  <span className="rl-craft-clip-ticks" />
                </motion.div>
              </div>
              <span className="rl-craft-value">{s.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .rl-craft-shelf { position: relative; display: flex; flex-direction: column; gap: 14px; padding: 8px 0; }
        .rl-craft-playhead {
          position: absolute;
          top: -6px;
          bottom: -6px;
          width: 2px;
          background-color: #d1263f;
          box-shadow: 0 0 10px 1px rgba(209,38,63,0.6);
          z-index: 5;
          animation: rl-playhead-scrub 7s ease-in-out infinite;
        }
        @keyframes rl-playhead-scrub {
          0%, 100% { left: 96px; }
          50% { left: calc(100% - 70px); }
        }
        .rl-craft-row { display: grid; grid-template-columns: 108px 1fr 40px; align-items: center; gap: 10px; }
        .rl-craft-label { font-size: 12.5px; font-weight: 600; color: #f3ece1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .rl-craft-track {
          position: relative;
          height: 22px;
          border-radius: 4px;
          background-color: #1c1611;
          border: 1px solid rgba(201,161,90,0.16);
          overflow: hidden;
        }
        .rl-craft-clip { position: relative; height: 100%; border-radius: 3px; opacity: 0.9; overflow: hidden; }
        .rl-craft-clip-ticks {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            90deg,
            rgba(10,8,6,0.4) 0px,
            rgba(10,8,6,0.4) 1px,
            transparent 1px,
            transparent 9px
          );
        }
        .rl-craft-value { font-family: var(--font-mono, monospace); font-size: 12px; font-weight: 700; color: #b7a996; text-align: right; }
        @media (min-width: 600px) {
          .rl-craft-row { grid-template-columns: 148px 1fr 44px; }
          .rl-craft-playhead { display: block; }
        }
        @media (max-width: 599px) {
          .rl-craft-playhead { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rl-craft-playhead { animation: none; }
        }
      `}</style>
    </section>
  );
}
