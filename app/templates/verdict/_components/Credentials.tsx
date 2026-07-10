"use client";

import { motion } from "framer-motion";
import { CREDENTIALS } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

export default function Credentials() {
  return (
    <section id="credentials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f6f2e8" }}>
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="Credentials" />
          <h2 className="vd-cred-heading">Paper that backs the practice.</h2>
        </motion.div>

        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="vd-cred-grid">
          {CREDENTIALS.map((c) => (
            <motion.div key={c.label} variants={fadeUp} className="vd-cred-card">
              <span className="vd-cred-year">{c.year}</span>
              <h3 className="vd-cred-label">{c.label}</h3>
              <span className="vd-cred-issuer">{c.issuer}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .vd-cred-heading {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #17140f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .vd-cred-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        .vd-cred-card {
          border: 1px solid rgba(23,20,15,0.13);
          border-left: 3px solid #b6903f;
          border-radius: 12px;
          padding: 20px 22px;
          background-color: #ece3cf;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .vd-cred-year { font-family: var(--font-mono, monospace); font-size: 10.5px; font-weight: 700; color: #948b74; }
        .vd-cred-label { font-family: var(--font-display, serif); font-weight: 700; font-size: 16.5px; color: #17140f; margin: 2px 0 0; }
        .vd-cred-issuer { font-size: 12.5px; color: #57503f; }
        @media (min-width: 700px) {
          .vd-cred-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
