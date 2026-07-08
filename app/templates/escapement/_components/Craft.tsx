"use client";

import { motion } from "framer-motion";
import { CRAFT } from "../_data/portfolio";
import { fadeUp, growWidth, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#c9a24b", "#6fa295", "#c9a24b", "#6fa295", "#c9a24b", "#6fa295"];

export default function Craft() {
  return (
    <section id="craft" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#12100d" }}>
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="06" label="The Craft" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f2ead9", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Measured under the loupe.
          </h2>
        </motion.div>

        <div className="esc-craft-shelf">
          {CRAFT.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.06 }}
              className="esc-craft-row"
            >
              <span className="esc-craft-label">{s.label}</span>
              <div className="esc-craft-track">
                <motion.div
                  variants={growWidth(s.level, i * 0.06 + 0.15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="esc-craft-clip"
                  style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
                />
              </div>
              <span className="esc-craft-value">{s.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .esc-craft-shelf { display: flex; flex-direction: column; gap: 14px; padding: 8px 0; }
        .esc-craft-row { display: grid; grid-template-columns: 148px 1fr 40px; align-items: center; gap: 10px; }
        .esc-craft-label { font-size: 12.5px; font-weight: 600; color: #f2ead9; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .esc-craft-track {
          position: relative;
          height: 20px;
          border-radius: 100px;
          background-color: #1f1a13;
          border: 1px solid rgba(242,234,217,0.12);
          overflow: hidden;
        }
        .esc-craft-clip { position: relative; height: 100%; border-radius: 100px; opacity: 0.9; }
        .esc-craft-value { font-family: var(--font-mono, monospace); font-size: 12.5px; font-weight: 700; color: #b9ac93; text-align: right; }
        @media (min-width: 600px) {
          .esc-craft-row { grid-template-columns: 190px 1fr 44px; }
        }
      `}</style>
    </section>
  );
}
