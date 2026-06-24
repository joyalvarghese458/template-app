"use client";

import { motion } from "framer-motion";
import { CREDENTIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Credentials() {
  return (
    <section id="credentials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#1c1613" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="09" label="Credentials" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.6vw, 40px)", color: "#f5ece0", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Training &amp; recognition.
          </h2>
        </motion.div>

        <div className="umami-cred-grid">
          {CREDENTIALS.map((cred, i) => (
            <motion.div
              key={cred.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="umami-cred-card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginBottom: "14px" }}>
                <path d="M12 2c-1.2 2.4-1.8 4-1.8 5.4 0 1.6 1.2 2.4 1.8 2.4s1.8-.8 1.8-2.4C13.8 6 13.2 4.4 12 2z" stroke="#e8552c" strokeWidth="1.3" strokeLinejoin="round" />
                <path d="M7.5 10.5c2 1.4 3 3 3 5.2a4 4 0 0 1-4 3.8" stroke="#ff8a4c" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <h3 className="umami-cred-title">{cred.title}</h3>
              <p className="umami-cred-issuer">{cred.issuer}</p>
              <p className="umami-cred-year">{cred.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .umami-cred-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .umami-cred-card {
          border: 1px solid rgba(245,236,224,0.1);
          border-radius: 14px;
          padding: 22px;
          background-color: #231b17;
        }
        .umami-cred-title { font-family: var(--font-display, serif); font-size: 15px; font-weight: 600; color: #f5ece0; margin: 0 0 6px; line-height: 1.4; }
        .umami-cred-issuer { font-size: 13px; color: #c4b6a8; margin: 0; }
        .umami-cred-year { font-family: var(--font-display, serif); font-size: 11px; font-weight: 600; color: #ff8a4c; margin: 10px 0 0; }
        @media (min-width: 600px) {
          .umami-cred-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .umami-cred-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
