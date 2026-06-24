"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, growHeight, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#e8552c", "#ff8a4c", "#7c2233", "#6b8f47", "#e8552c", "#ff8a4c"];

export default function SpiceRack() {
  return (
    <section id="skills" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#15110f" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="08" label="The Spice Rack" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.6vw, 40px)", color: "#f5ece0", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Skills, measured by the jar.
          </h2>
        </motion.div>

        <div className="umami-rack-shelf">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.07 }}
              className="umami-jar-col"
            >
              <div className="umami-jar">
                <span className="umami-jar-lid" />
                <span className="umami-jar-body">
                  <motion.span
                    variants={growHeight(s.level, i * 0.07 + 0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="umami-jar-fill"
                    style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
                  />
                  <span className="umami-jar-level">{s.level}%</span>
                </span>
              </div>
              <span className="umami-jar-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .umami-rack-shelf {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 22px 14px;
          position: relative;
          padding-bottom: 14px;
          border-bottom: 4px solid #2b211c;
        }
        .umami-jar-col { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .umami-jar { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 86px; }
        .umami-jar-lid { width: 56%; height: 8px; border-radius: 3px 3px 0 0; background-color: #3a2c23; }
        .umami-jar-body {
          position: relative;
          width: 100%;
          height: 96px;
          border-radius: 8px;
          border: 1.5px solid rgba(245,236,224,0.18);
          background-color: rgba(245,236,224,0.04);
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .umami-jar-fill {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          opacity: 0.85;
        }
        .umami-jar-level {
          position: relative;
          z-index: 2;
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: 12.5px;
          color: #f5ece0;
          margin-bottom: 6px;
          text-shadow: 0 1px 4px rgba(0,0,0,0.6);
        }
        .umami-jar-label { font-size: 11.5px; font-weight: 500; color: #c4b6a8; text-align: center; line-height: 1.35; }
        @media (min-width: 640px) {
          .umami-rack-shelf { grid-template-columns: repeat(6, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
