"use client";

import { motion } from "framer-motion";
import { ABOUT, PROCESS } from "../_data/portfolio";
import { fadeUp, stagger, tiltIn, VIEWPORT } from "../_utils/motion";

const ACCENTS = ["#e8402c", "#1a56db", "#f5c518", "#14110f"];

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f7f3ea" }}>
      <div className="canvas-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={tiltIn} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="About" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, fontSize: "clamp(26px, 4.5vw, 40px)", color: "#14110f", margin: "16px 0 0", lineHeight: 1.18 }}>
            Systems first, pixels second.
          </h2>

          <div className="canvas-focus-card">
            <p className="canvas-focus-label">Focus areas</p>
            <ul className="canvas-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="canvas-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
        </motion.div>
      </div>

      <div style={{ maxWidth: "1180px", margin: "56px auto 0" }}>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="canvas-process-label">
          How a project runs
        </motion.p>
        <div className="canvas-process-grid">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="canvas-process-card"
            >
              <span className="canvas-process-step" style={{ color: ACCENTS[i % ACCENTS.length] }}>{p.step}</span>
              <h3 className="canvas-process-title">{p.title}</h3>
              <p className="canvas-process-desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .canvas-about-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .canvas-focus-card {
          margin-top: 26px;
          border: 2px solid #14110f;
          border-radius: 14px;
          padding: 18px;
          background-color: #ffffff;
        }
        .canvas-focus-label {
          font-family: var(--font-display, sans-serif);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: #e8402c;
          text-transform: uppercase;
          margin: 0 0 12px;
        }
        .canvas-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: #14110f; font-weight: 500; }
        .canvas-focus-list li { padding-left: 20px; position: relative; }
        .canvas-focus-list li::before { content: "→"; position: absolute; left: 0; color: #1a56db; font-weight: 700; }
        .canvas-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 16px; line-height: 1.75; color: #5b5448; padding-top: 6px; }
        .canvas-process-label {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(20px, 3vw, 26px);
          color: #14110f;
          margin: 0 0 24px;
        }
        .canvas-process-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .canvas-process-card {
          border: 2px solid #14110f;
          border-radius: 14px;
          padding: 22px;
          background-color: #ffffff;
        }
        .canvas-process-step { font-family: var(--font-display, sans-serif); font-size: 26px; display: block; margin-bottom: 10px; }
        .canvas-process-title { font-size: 17px; font-weight: 700; color: #14110f; margin: 0 0 8px; }
        .canvas-process-desc { font-size: 13.5px; line-height: 1.6; color: #5b5448; margin: 0; }
        @media (min-width: 860px) {
          .canvas-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
        @media (min-width: 700px) {
          .canvas-process-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "13px", color: "#e8402c" }}>{index}</span>
      <span style={{ width: "24px", height: "2px", backgroundColor: "#14110f" }} />
      <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "12.5px", fontWeight: 700, color: "#5b5448", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
