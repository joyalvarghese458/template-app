"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0a14" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="Credentials" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f5f4fa", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Education &amp; certificates.
          </h2>
        </motion.div>

        <div className="prism-cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="prism-cert-card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginBottom: "14px" }}>
                <path d="M12 2l3 6.5 7 1-5 5 1.5 7L12 18l-6.5 3.5L7 14.5l-5-5 7-1L12 2z" stroke="#2dd9c4" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <h3 className="prism-cert-title">{cert.title}</h3>
              <p className="prism-cert-issuer">{cert.issuer}</p>
              <p className="prism-cert-year">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .prism-cert-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .prism-cert-card {
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 22px;
          background-color: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
        }
        .prism-cert-title { font-size: 14.5px; font-weight: 700; color: #f5f4fa; margin: 0 0 6px; line-height: 1.4; }
        .prism-cert-issuer { font-size: 13px; color: #a8a6c0; margin: 0; }
        .prism-cert-year { font-family: var(--font-display, sans-serif); font-size: 11px; color: #2dd9c4; margin: 10px 0 0; }
        @media (min-width: 600px) {
          .prism-cert-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .prism-cert-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
