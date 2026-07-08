"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#c9a24b", "#6fa295", "#c9a24b"];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#12100d" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="10" label="Word Of Mouth" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f2ead9", margin: "16px 0 40px", lineHeight: 1.15 }}>
            What holds up under a loupe.
          </h2>
        </motion.div>

        <div className="esc-quote-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="esc-quote-card"
              style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}
            >
              <span className="esc-quote-mark" style={{ color: ACCENTS[i % ACCENTS.length] }}>&ldquo;</span>
              <blockquote className="esc-quote-text">{t.quote}</blockquote>
              <figcaption className="esc-quote-cite">
                <span className="esc-quote-name">{t.name}</span>
                <span className="esc-quote-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .esc-quote-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .esc-quote-card {
          border: 1px solid rgba(242,234,217,0.12);
          border-top: 3px solid;
          border-radius: 14px;
          padding: 26px 24px;
          background-color: #1f1a13;
          margin: 0;
        }
        .esc-quote-mark { font-family: var(--font-display, serif); font-size: 42px; line-height: 1; display: block; margin-bottom: 4px; }
        .esc-quote-text { font-size: 14.5px; line-height: 1.7; color: #f2ead9; margin: 0 0 18px; font-style: normal; }
        .esc-quote-cite { display: flex; flex-direction: column; gap: 2px; }
        .esc-quote-name { font-size: 13.5px; font-weight: 700; color: #f2ead9; }
        .esc-quote-role { font-size: 11.5px; color: #b9ac93; }
        @media (min-width: 760px) {
          .esc-quote-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
