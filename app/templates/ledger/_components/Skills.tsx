"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Skills() {
  const categories = Object.entries(SKILLS);

  return (
    <section id="skills" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f1e8d3" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="08" label="Skills" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 5vw, 42px)", color: "#16291f", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Reconciled and verified.
          </h2>
        </motion.div>

        <div className="ledger-skills-groups">
          {categories.map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: catIndex * 0.06 }}
            >
              <h3 className="ledger-skills-cat">{category}</h3>
              <div className="ledger-bar-list">
                {skills.map((skill, i) => (
                  <LedgerBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .ledger-skills-groups { display: flex; flex-direction: column; gap: 44px; }
        .ledger-skills-cat {
          font-family: var(--font-display, serif);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #1f5c3f;
          margin: 0 0 22px;
        }
        .ledger-bar-list { display: flex; flex-direction: column; gap: 20px; }
        .ledger-bar-row { display: flex; flex-direction: column; gap: 8px; }
        .ledger-bar-top { display: flex; align-items: baseline; gap: 8px; }
        .ledger-bar-name { font-size: 13.5px; color: #16291f; white-space: nowrap; }
        .ledger-bar-leader { flex: 1; border-bottom: 1px dotted rgba(22,41,31,0.3); transform: translateY(-4px); }
        .ledger-bar-pct { font-family: var(--font-display, serif); font-size: 14px; font-weight: 700; color: #b8862c; white-space: nowrap; min-width: 42px; text-align: right; }
        .ledger-bar-track { position: relative; height: 6px; border-radius: 3px; background-color: rgba(22,41,31,0.1); overflow: hidden; }
        .ledger-bar-fill { position: absolute; inset: 0; border-radius: 3px; background-image: linear-gradient(90deg, #1f5c3f, #b8862c); transform-origin: left center; }
      `}</style>
    </section>
  );
}

function LedgerBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const pctText = useTransform(count, (v) => `${Math.round(v)}%`);
  const scaleX = useTransform(count, (v) => v / 100);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, level, { duration: 1.1, ease: [0.65, 0, 0.35, 1], delay });
    return () => controls.stop();
  }, [isInView, level, delay, count]);

  return (
    <div ref={ref} className="ledger-bar-row">
      <div className="ledger-bar-top">
        <span className="ledger-bar-name">{name}</span>
        <span className="ledger-bar-leader" aria-hidden="true" />
        <motion.span className="ledger-bar-pct">{pctText}</motion.span>
      </div>
      <div className="ledger-bar-track">
        <motion.div className="ledger-bar-fill" style={{ scaleX }} />
      </div>
    </div>
  );
}
