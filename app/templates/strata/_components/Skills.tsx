"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, growLine, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Skills() {
  const categories = Object.entries(SKILLS);

  return (
    <section id="skills" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#eef0ec" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="Skills" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#1f2421", margin: "16px 0 40px", lineHeight: 1.08, textTransform: "uppercase" }}>
            Measured proficiency.
          </h2>
        </motion.div>

        <div className="strata-skills-groups">
          {categories.map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: catIndex * 0.06 }}
            >
              <h3 className="strata-skills-cat">{category}</h3>
              <div className="strata-dim-list">
                {skills.map((skill, i) => (
                  <SkillRuler key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .strata-skills-groups { display: flex; flex-direction: column; gap: 44px; }
        .strata-skills-cat {
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #f15a24;
          text-transform: uppercase;
          margin: 0 0 22px;
        }
        .strata-dim-list { display: flex; flex-direction: column; gap: 26px; }
        .strata-dim-row { display: flex; flex-direction: column; gap: 10px; }
        .strata-dim-name { font-size: 13.5px; font-weight: 500; color: #1f2421; }
        .strata-dim-track { position: relative; height: 14px; }
        .strata-dim-baseline { position: absolute; left: 0; right: 0; top: 50%; border-top: 1.5px dashed rgba(31,36,33,0.3); }
        .strata-dim-tick { position: absolute; top: 50%; width: 1.5px; height: 10px; background-color: #1f2421; transform: translateY(-50%); }
        .strata-dim-tick-start { left: 0; }
        .strata-dim-tick-end { right: 0; opacity: 0.3; }
        .strata-dim-fill { position: absolute; left: 0; top: 50%; height: 3px; background-color: #f15a24; transform: translateY(-50%); box-shadow: 0 0 0 1px rgba(241,90,36,0.25); }
        .strata-dim-marker {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          background-color: #eef0ec;
          padding: 0 6px;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 700;
          color: #1f2421;
          white-space: nowrap;
        }
        @media (min-width: 760px) {
          .strata-skills-groups { flex-direction: row; gap: 64px; }
          .strata-skills-groups > * { flex: 1; }
        }
      `}</style>
    </section>
  );
}

function SkillRuler({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="strata-dim-row">
      <span className="strata-dim-name">{name}</span>
      <div className="strata-dim-track">
        <span className="strata-dim-baseline" aria-hidden="true" />
        <span className="strata-dim-tick strata-dim-tick-start" aria-hidden="true" />
        <span className="strata-dim-tick strata-dim-tick-end" aria-hidden="true" />
        <motion.span
          className="strata-dim-fill"
          variants={growLine(level, delay)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          aria-hidden="true"
        />
        <motion.span
          className="strata-dim-marker"
          style={{ left: `${level}%` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ delay: delay + 0.5, duration: 0.4 }}
          role="img"
          aria-label={`${name}: ${level}%`}
        >
          {level}%
        </motion.span>
      </div>
    </div>
  );
}
