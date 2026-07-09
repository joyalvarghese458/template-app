"use client";

import { motion } from "framer-motion";
import { CREDENTIALS } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

export default function Credentials() {
  return (
    <section id="credentials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#e7e0cb" }}>
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="06" label="Licensure" />
          <h2 className="ctr-cred-heading">Stamped, certified, and current.</h2>
        </motion.div>

        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="ctr-cred-grid">
          {CREDENTIALS.map((c) => (
            <motion.div key={c.label} variants={fadeUp} className="ctr-cred-card">
              <span className="ctr-cred-year">{c.year}</span>
              <h3 className="ctr-cred-label">{c.label}</h3>
              <span className="ctr-cred-issuer">{c.issuer}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .ctr-cred-heading {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #212a1f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .ctr-cred-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        .ctr-cred-card {
          border: 1px solid rgba(33,42,31,0.13);
          border-left: 3px solid #2f6b74;
          border-radius: 12px;
          padding: 20px 22px;
          background-color: #f3f0e5;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ctr-cred-year { font-family: var(--font-mono, monospace); font-size: 10.5px; font-weight: 700; color: #868c76; }
        .ctr-cred-label { font-family: var(--font-display, serif); font-weight: 600; font-size: 16.5px; color: #212a1f; margin: 2px 0 0; }
        .ctr-cred-issuer { font-size: 12.5px; color: #4c5343; }
        @media (min-width: 700px) {
          .ctr-cred-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
