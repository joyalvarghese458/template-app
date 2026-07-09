"use client";

import { motion } from "framer-motion";
import { CREDENTIALS } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

export default function Credentials() {
  return (
    <section id="credentials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f6f3ea" }}>
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="Credentials" />
          <h2 className="vtg-cred-heading">Paper that backs the practice.</h2>
        </motion.div>

        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="vtg-cred-grid">
          {CREDENTIALS.map((c) => (
            <motion.div key={c.label} variants={fadeUp} className="vtg-cred-card">
              <span className="vtg-cred-year">{c.year}</span>
              <h3 className="vtg-cred-label">{c.label}</h3>
              <span className="vtg-cred-issuer">{c.issuer}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .vtg-cred-heading {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #17140f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .vtg-cred-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        .vtg-cred-card {
          border: 1px solid rgba(23,20,15,0.13);
          border-left: 3px solid #b3703b;
          border-radius: 12px;
          padding: 20px 22px;
          background-color: #eee8d9;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .vtg-cred-year { font-family: var(--font-mono, monospace); font-size: 10.5px; font-weight: 700; color: #8a8271; }
        .vtg-cred-label { font-family: var(--font-display, serif); font-weight: 600; font-size: 16.5px; color: #17140f; margin: 2px 0 0; }
        .vtg-cred-issuer { font-size: 12.5px; color: #4a4438; }
        @media (min-width: 700px) {
          .vtg-cred-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
