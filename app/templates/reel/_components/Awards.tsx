"use client";

import { motion } from "framer-motion";
import { AWARDS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Awards() {
  return (
    <section id="awards" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#14100c" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="09" label="Awards & Selections" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, textTransform: "uppercase", fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f3ece1", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Laurels that mean something.
          </h2>
        </motion.div>

        <div className="rl-award-grid">
          {AWARDS.map((award, i) => (
            <motion.div
              key={award.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="rl-award-card"
            >
              <LaurelIcon />
              <h3 className="rl-award-title">{award.title}</h3>
              <p className="rl-award-issuer">{award.issuer}</p>
              <p className="rl-award-year">{award.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .rl-award-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .rl-award-card {
          border: 1px solid rgba(201,161,90,0.2);
          border-radius: 12px;
          padding: 24px 22px;
          background-color: #1c1611;
          text-align: center;
        }
        .rl-award-title { font-family: var(--font-display, sans-serif); font-weight: 400; text-transform: uppercase; letter-spacing: 0.01em; font-size: 15.5px; color: #f3ece1; margin: 10px 0 6px; line-height: 1.35; }
        .rl-award-issuer { font-size: 12.5px; color: #b7a996; margin: 0; }
        .rl-award-year { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; color: #d1263f; margin: 10px 0 0; }
        @media (min-width: 600px) {
          .rl-award-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .rl-award-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}

function LaurelIcon() {
  return (
    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" aria-hidden="true" style={{ margin: "0 auto" }}>
      <path d="M13 22c-4-3-6-8-5-14" stroke="#c9a15a" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 5l2 1-1.5 1.5M8 9l2.2.6-1.3 1.8M7.5 13l2.3.1-1 2M8 17l2.2-.5-.3 2.2" stroke="#c9a15a" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M21 22c4-3 6-8 5-14" stroke="#d1263f" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M25 5l-2 1 1.5 1.5M26 9l-2.2.6 1.3 1.8M26.5 13l-2.3.1 1 2M26 17l-2.2-.5.3 2.2" stroke="#d1263f" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M17 22v-3" stroke="#f3ece1" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
