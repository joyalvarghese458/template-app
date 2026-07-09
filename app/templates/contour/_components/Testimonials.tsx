"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

const ACCENTS = ["#4b6b3f", "#2f6b74", "#4b6b3f"];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f3f0e5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="07" label="From The Field" />
          <h2 className="ctr-quote-heading">What holds up after the punch list.</h2>
        </motion.div>

        <div className="ctr-quote-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="ctr-quote-card"
              style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}
            >
              <span className="ctr-quote-mark" style={{ color: ACCENTS[i % ACCENTS.length] }}>&ldquo;</span>
              <blockquote className="ctr-quote-text">{t.quote}</blockquote>
              <figcaption className="ctr-quote-cite">
                <span className="ctr-quote-name">{t.name}</span>
                <span className="ctr-quote-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .ctr-quote-heading {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #212a1f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .ctr-quote-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .ctr-quote-card {
          border: 1px solid rgba(33,42,31,0.13);
          border-top: 3px solid;
          border-radius: 14px;
          padding: 28px 24px;
          background-color: #e7e0cb;
          margin: 0;
        }
        .ctr-quote-mark { font-family: var(--font-display, serif); font-size: 44px; line-height: 1; display: block; margin-bottom: 4px; }
        .ctr-quote-text { font-size: 14.5px; line-height: 1.72; color: #212a1f; margin: 0 0 20px; font-style: normal; }
        .ctr-quote-cite { display: flex; flex-direction: column; gap: 2px; }
        .ctr-quote-name { font-size: 13.5px; font-weight: 700; color: #212a1f; }
        .ctr-quote-role { font-size: 11.5px; color: #868c76; }
        @media (min-width: 860px) {
          .ctr-quote-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
