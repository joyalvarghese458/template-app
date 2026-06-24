"use client";

import { motion } from "framer-motion";
import { CREDENTIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Credentials() {
  return (
    <section id="credentials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0b0e14" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="09" label="Credentials" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#eef1f6", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Education &amp; governance certification.
          </h2>
        </motion.div>

        <div className="ech-cred-grid">
          {CREDENTIALS.map((cred, i) => (
            <motion.div
              key={cred.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="ech-cred-card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginBottom: "14px" }}>
                <path d="M12 2 L22 7 V17 L12 22 L2 17 V7 Z" stroke="#3b6fe0" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M12 8 L16.5 10.5 V15.5 L12 18 L7.5 15.5 V10.5 Z" stroke="#d98a3d" strokeWidth="1.1" strokeLinejoin="round" />
              </svg>
              <h3 className="ech-cred-title">{cred.title}</h3>
              <p className="ech-cred-issuer">{cred.issuer}</p>
              <p className="ech-cred-year">{cred.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .ech-cred-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .ech-cred-card {
          border: 1px solid rgba(238,241,246,0.1);
          border-radius: 14px;
          padding: 22px;
          background-color: #11151d;
        }
        .ech-cred-title { font-family: var(--font-display, serif); font-size: 14.5px; font-weight: 600; color: #eef1f6; margin: 0 0 6px; line-height: 1.4; }
        .ech-cred-issuer { font-size: 13px; color: #9aa7bb; margin: 0; }
        .ech-cred-year { font-family: var(--font-display, serif); font-size: 11px; font-weight: 600; color: #d98a3d; margin: 10px 0 0; }
        @media (min-width: 600px) {
          .ech-cred-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .ech-cred-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
