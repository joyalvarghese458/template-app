"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Skills() {
  const categories = Object.entries(SKILLS);

  return (
    <section id="skills" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0c0c18" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="Skills" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f5f4fa", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Proficiency, at a glance.
          </h2>
        </motion.div>

        <div className="prism-skills-groups">
          {categories.map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: catIndex * 0.06 }}
            >
              <h3 className="prism-skills-cat">{category}</h3>
              <div className="prism-ring-grid">
                {skills.map((skill, i) => (
                  <SkillRing key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .prism-skills-groups { display: flex; flex-direction: column; gap: 40px; }
        .prism-skills-cat {
          font-family: var(--font-display, sans-serif);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #2dd9c4;
          text-transform: uppercase;
          margin: 0 0 18px;
        }
        .prism-ring-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 16px; }
        @media (min-width: 620px) {
          .prism-ring-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
        .prism-ring-card { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; }
        .prism-ring-wrap { position: relative; width: 84px; height: 84px; display: flex; align-items: center; justify-content: center; }
        .prism-ring-value { position: absolute; font-family: var(--font-display, sans-serif); font-size: 14px; font-weight: 600; color: #f5f4fa; }
        .prism-ring-label { font-size: 12px; color: #a8a6c0; max-width: 100px; }
      `}</style>
    </section>
  );
}

function SkillRing({ name, level, delay }: { name: string; level: number; delay: number }) {
  const r = 38;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="prism-ring-card">
      <div className="prism-ring-wrap">
        <svg viewBox="0 0 100 100" width="84" height="84">
          <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
          <defs>
            <linearGradient id={`prism-ring-grad-${name.replace(/\s/g, "")}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2dd9c4" />
              <stop offset="100%" stopColor="#6c63ff" />
            </linearGradient>
          </defs>
          <motion.circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={`url(#prism-ring-grad-${name.replace(/\s/g, "")})`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            transform="rotate(-90 50 50)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: level / 100 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1], delay }}
          />
        </svg>
        <span className="prism-ring-value">{level}%</span>
      </div>
      <span className="prism-ring-label">{name}</span>
    </div>
  );
}
