"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { slideInLeft, slideInRight, stagger, slideUp, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#faf8ff" }}>
      <div className="ascend-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <Eyebrow label="About" />
          <h2 style={{ fontWeight: 800, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#1c1530", margin: "14px 0 0", lineHeight: 1.18 }}>
            I&apos;ve sat on both sides of the table.
          </h2>

          <div className="ascend-credentials-card">
            <p className="ascend-credentials-label">Credentials</p>
            <ul className="ascend-credentials-list">
              {ABOUT.credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="ascend-about-copy">
          <motion.p variants={slideInRight}>{ABOUT.intro}</motion.p>
          <motion.p variants={slideInRight}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={slideUp} className="ascend-about-meta">
            <span>{OWNER.location}</span>
            <span className="ascend-about-meta-dot">·</span>
            <span className="ascend-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .ascend-about-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .ascend-credentials-card {
          margin-top: 26px;
          border-radius: 16px;
          padding: 20px;
          background-color: #fff;
          border: 1px solid rgba(28,21,48,0.08);
          box-shadow: 0 12px 28px rgba(28,21,48,0.06);
        }
        .ascend-credentials-label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; color: #ff5fa2; text-transform: uppercase; margin: 0 0 12px; }
        .ascend-credentials-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: #1c1530; }
        .ascend-credentials-list li { padding-left: 18px; position: relative; }
        .ascend-credentials-list li::before { content: "✦"; position: absolute; left: 0; color: #7c5cff; font-size: 11px; top: 2px; }
        .ascend-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 16px; line-height: 1.75; color: #4a4359; padding-top: 6px; }
        .ascend-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 600; color: #6b6280; margin-top: 4px; }
        .ascend-about-meta-dot { color: #ff5fa2; }
        .ascend-about-available { color: #2bb673; }
        @media (min-width: 860px) {
          .ascend-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function Eyebrow({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.06em",
        color: "#7c5cff",
        textTransform: "uppercase",
        backgroundColor: "rgba(124,92,255,0.1)",
        borderRadius: "100px",
        padding: "6px 14px",
      }}
    >
      {label}
    </span>
  );
}
