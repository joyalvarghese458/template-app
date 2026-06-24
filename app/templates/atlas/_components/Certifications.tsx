"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0f1c" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="09" label="Credentials" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f3efe4", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Certifications &amp; education.
          </h2>
        </motion.div>

        <div className="atlas-cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="atlas-cert-card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginBottom: "14px" }}>
                <path d="M12 2l3 6.5 7 1-5 5 1.5 7L12 18l-6.5 3.5L7 14.5l-5-5 7-1L12 2z" stroke="#d4af6a" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <h3 className="atlas-cert-title">{cert.title}</h3>
              <p className="atlas-cert-issuer">{cert.issuer}</p>
              <p className="atlas-cert-year">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .atlas-cert-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .atlas-cert-card {
          border: 1px solid rgba(243,239,228,0.1);
          border-radius: 16px;
          padding: 22px;
          background-color: #111a2c;
        }
        .atlas-cert-title { font-family: var(--font-display, serif); font-size: 14.5px; font-weight: 600; color: #f3efe4; margin: 0 0 6px; line-height: 1.4; }
        .atlas-cert-issuer { font-size: 13px; color: #aab4c9; margin: 0; }
        .atlas-cert-year { font-family: var(--font-display, serif); font-size: 11px; font-weight: 600; color: #d4af6a; margin: 10px 0 0; }
        @media (min-width: 600px) {
          .atlas-cert-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .atlas-cert-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
