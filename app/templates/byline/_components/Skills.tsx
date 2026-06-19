"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { Kicker } from "./About";

export default function Skills() {
  const categories = Object.entries(SKILLS);

  return (
    <section id="skills" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#ece4d3" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <Kicker index="04" label="Beats &amp; Skills" />
          <h2
            style={{
              fontFamily: "var(--font-display, serif)",
              fontWeight: 700,
              fontSize: "clamp(26px, 4.5vw, 38px)",
              color: "#1a1714",
              margin: "0 0 36px",
              lineHeight: 1.15,
            }}
          >
            Beats I cover, tools I trust.
          </h2>
        </motion.div>

        <div className="byline-skills-grid">
          {categories.map(([category, skills], i) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.06 }}
            >
              <h3 className="byline-skills-cat">{category}</h3>
              <div className="byline-tag-cloud">
                {skills.map((skill) => (
                  <span key={skill} className="byline-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .byline-skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .byline-skills-cat {
          font-family: var(--font-type, monospace);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #b3231a;
          margin: 0 0 14px;
        }
        .byline-tag-cloud { display: flex; flex-wrap: wrap; gap: 9px; }
        .byline-tag {
          font-family: var(--font-body, serif);
          font-size: 14px;
          color: #1a1714;
          border: 1px solid rgba(26,23,20,0.22);
          border-radius: 2px;
          padding: 6px 12px;
          background-image: linear-gradient(120deg, #f4d35e 0%, #f4d35e 100%);
          background-repeat: no-repeat;
          background-size: 0% 100%;
          background-position: 0 100%;
          transition: background-size 0.35s ease, border-color 0.25s ease;
        }
        .byline-tag:hover {
          background-size: 100% 100%;
          border-color: rgba(26,23,20,0.4);
        }
        @media (min-width: 700px) {
          .byline-skills-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 40px 48px; }
        }
      `}</style>
    </section>
  );
}
