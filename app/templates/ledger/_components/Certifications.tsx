"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f8f3e7" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="09" label="Credentials" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 5vw, 42px)", color: "#16291f", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Licensed to sign off.
          </h2>
        </motion.div>

        <div className="ledger-cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="ledger-cert-card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginBottom: "14px" }}>
                <path d="M12 2l3 6.5 7 1-5 5 1.5 7L12 18l-6.5 3.5L7 14.5l-5-5 7-1L12 2z" stroke="#1f5c3f" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <h3 className="ledger-cert-title">{cert.title}</h3>
              <p className="ledger-cert-issuer">{cert.issuer}</p>
              <p className="ledger-cert-year">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .ledger-cert-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .ledger-cert-card {
          border: 1px solid rgba(22,41,31,0.14);
          border-radius: 10px;
          padding: 22px;
          background-color: #fffdf7;
        }
        .ledger-cert-title { font-family: var(--font-display, serif); font-size: 14.5px; font-weight: 600; color: #16291f; margin: 0 0 6px; line-height: 1.4; }
        .ledger-cert-issuer { font-size: 13px; color: #4d5f52; margin: 0; }
        .ledger-cert-year { font-family: var(--font-body, sans-serif); font-size: 11px; font-weight: 700; color: #1f5c3f; margin: 10px 0 0; }
        @media (min-width: 600px) {
          .ledger-cert-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .ledger-cert-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
