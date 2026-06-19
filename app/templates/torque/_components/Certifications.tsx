"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{
        padding: "clamp(64px, 10vw, 128px) 24px",
        backgroundColor: "#0b0e13",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="Credentials" />
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              color: "#eef1f5",
              marginTop: "16px",
              marginBottom: "48px",
            }}
          >
            Licensed, certified, and patented.
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "16px" }} className="torque-cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "22px",
                backgroundColor: "#11151b",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginBottom: "14px" }}>
                <path d="M12 2l3 6.5 7 1-5 5 1.5 7L12 18l-6.5 3.5L7 14.5l-5-5 7-1L12 2z" stroke="#ff6a1f" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#eef1f5", margin: "0 0 6px", lineHeight: 1.4 }}>
                {cert.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#8a93a3", margin: 0 }}>
                {cert.issuer}
              </p>
              <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "12px", color: "#3fa9f5", margin: "8px 0 0" }}>
                {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .torque-cert-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 560px) {
          .torque-cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
