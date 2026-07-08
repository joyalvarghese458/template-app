"use client";

import { motion } from "framer-motion";
import { AWARDS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Awards() {
  return (
    <section id="awards" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f7f1e8" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="09" label="Recognition" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#3a2e22", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Kiln-tested, studio-approved.
          </h2>
        </motion.div>

        <div className="kln-award-grid">
          {AWARDS.map((award, i) => (
            <motion.div
              key={award.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="kln-award-card"
            >
              <span className="kln-award-seal" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1l1.9 3.4L14.7 5l-2 3.3L14.7 13l-3.8.6L9 17l-1.9-3.4L3.3 13l2-4.7-2-3.3 3.8-.6L9 1z" fill="#f7f1e8" />
                </svg>
              </span>
              <h3 className="kln-award-title">{award.title}</h3>
              <p className="kln-award-issuer">{award.issuer}</p>
              <p className="kln-award-year">{award.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .kln-award-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .kln-award-card {
          border: 1px solid rgba(58,46,34,0.14);
          border-radius: 14px;
          padding: 24px 22px;
          background-color: #efe4d3;
          text-align: center;
        }
        .kln-award-seal {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #c15f3c;
          margin: 0 auto;
        }
        .kln-award-title { font-family: var(--font-display, serif); font-weight: 600; font-size: 16.5px; color: #3a2e22; margin: 12px 0 6px; line-height: 1.35; }
        .kln-award-issuer { font-size: 12.5px; color: #6b5a45; margin: 0; }
        .kln-award-year { font-family: var(--font-mono, monospace); font-size: 12px; font-weight: 700; color: #6f7d58; margin: 10px 0 0; }
        @media (min-width: 600px) {
          .kln-award-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .kln-award-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
