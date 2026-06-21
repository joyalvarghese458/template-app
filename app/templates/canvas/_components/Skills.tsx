"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, popIn, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const STYLES = [
  { bg: "#e8402c", color: "#f7f3ea" },
  { bg: "#1a56db", color: "#f7f3ea" },
  { bg: "#f5c518", color: "#14110f" },
  { bg: "#ffffff", color: "#14110f" },
];

export default function Skills() {
  const categories = Object.entries(SKILLS);

  return (
    <section id="skills" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#efe8d8" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="Skills" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, fontSize: "clamp(26px, 4.5vw, 40px)", color: "#14110f", margin: "16px 0 40px", lineHeight: 1.18 }}>
            The toolkit, stuck on a wall.
          </h2>
        </motion.div>

        <div className="canvas-skills-grid">
          {categories.map(([category, tools], catIndex) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: catIndex * 0.06 }}
            >
              <h3 className="canvas-skills-cat">{category}</h3>
              <div className="canvas-sticker-wall">
                {tools.map((tool, i) => {
                  const style = STYLES[(catIndex + i) % STYLES.length];
                  const rotation = i % 2 === 0 ? -2 : 2;
                  return (
                    <motion.span
                      key={tool}
                      variants={popIn(i * 0.05)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={VIEWPORT}
                      className="canvas-skill-sticker"
                      style={{ backgroundColor: style.bg, color: style.color, transform: `rotate(${rotation}deg)` }}
                    >
                      {tool}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .canvas-skills-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        .canvas-skills-cat {
          font-family: var(--font-display, sans-serif);
          font-size: 14px;
          color: #14110f;
          margin: 0 0 16px;
        }
        .canvas-sticker-wall { display: flex; flex-wrap: wrap; gap: 10px; }
        .canvas-skill-sticker {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          border: 2px solid #14110f;
          border-radius: 10px;
          padding: 8px 14px;
          box-shadow: 2px 2px 0 #14110f;
        }
        @media (min-width: 760px) {
          .canvas-skills-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 40px 48px; }
        }
      `}</style>
    </section>
  );
}
