"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#c15f3c", "#6f7d58", "#c15f3c"];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#efe4d3" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="10" label="Word Of Mouth" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#3a2e22", margin: "16px 0 40px", lineHeight: 1.15 }}>
            What survives the second firing.
          </h2>
        </motion.div>

        <div className="kln-quote-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="kln-quote-card"
              style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}
            >
              <span className="kln-quote-mark" style={{ color: ACCENTS[i % ACCENTS.length] }}>&ldquo;</span>
              <blockquote className="kln-quote-text">{t.quote}</blockquote>
              <figcaption className="kln-quote-cite">
                <span className="kln-quote-name">{t.name}</span>
                <span className="kln-quote-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .kln-quote-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .kln-quote-card {
          border: 1px solid rgba(58,46,34,0.14);
          border-top: 3px solid;
          border-radius: 14px;
          padding: 26px 24px;
          background-color: #f7f1e8;
          margin: 0;
        }
        .kln-quote-mark { font-family: var(--font-display, serif); font-size: 42px; line-height: 1; display: block; margin-bottom: 4px; }
        .kln-quote-text { font-size: 14.5px; line-height: 1.7; color: #3a2e22; margin: 0 0 18px; font-style: normal; }
        .kln-quote-cite { display: flex; flex-direction: column; gap: 2px; }
        .kln-quote-name { font-size: 13.5px; font-weight: 700; color: #3a2e22; }
        .kln-quote-role { font-size: 11.5px; color: #6b5a45; }
        @media (min-width: 760px) {
          .kln-quote-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
