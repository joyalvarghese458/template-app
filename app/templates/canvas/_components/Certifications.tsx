"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f7f3ea" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="Education" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, fontSize: "clamp(26px, 4.5vw, 40px)", color: "#14110f", margin: "16px 0 40px", lineHeight: 1.18 }}>
            Education &amp; certificates.
          </h2>
        </motion.div>

        <div className="canvas-cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="canvas-cert-card"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginBottom: "14px" }}>
                <path d="M12 3l8 4-8 4-8-4 8-4z" fill="#f5c518" stroke="#14110f" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" stroke="#14110f" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <h3 className="canvas-cert-title">{cert.title}</h3>
              <p className="canvas-cert-issuer">{cert.issuer}</p>
              <p className="canvas-cert-year">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .canvas-cert-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .canvas-cert-card {
          border: 2px solid #14110f;
          border-radius: 14px;
          padding: 22px;
          background-color: #ffffff;
        }
        .canvas-cert-title { font-size: 15px; font-weight: 700; color: #14110f; margin: 0 0 6px; line-height: 1.4; }
        .canvas-cert-issuer { font-size: 13px; color: #5b5448; margin: 0; }
        .canvas-cert-year { font-family: var(--font-display, sans-serif); font-size: 11px; color: #e8402c; margin: 10px 0 0; }
        @media (min-width: 600px) {
          .canvas-cert-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .canvas-cert-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
