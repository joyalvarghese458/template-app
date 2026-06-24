"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#d4af6a", "#9c3f4a", "#3f8f76"];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#111a2c" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="10" label="Client Wins" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f3efe4", margin: "16px 0 40px", lineHeight: 1.2 }}>
            What clients say.
          </h2>
        </motion.div>

        <div className="atlas-testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="atlas-testimonial-card"
              style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}
            >
              <span className="atlas-testimonial-quote-mark" style={{ color: ACCENTS[i % ACCENTS.length] }}>&ldquo;</span>
              <blockquote className="atlas-testimonial-quote">{t.quote}</blockquote>
              <figcaption className="atlas-testimonial-cite">
                <span className="atlas-testimonial-name">{t.name}</span>
                <span className="atlas-testimonial-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .atlas-testimonial-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .atlas-testimonial-card {
          border: 1px solid rgba(243,239,228,0.1);
          border-top: 3px solid;
          border-radius: 16px;
          padding: 26px 24px;
          background-color: #16213a;
          margin: 0;
        }
        .atlas-testimonial-quote-mark { font-family: var(--font-display, serif); font-size: 40px; line-height: 1; display: block; margin-bottom: 4px; }
        .atlas-testimonial-quote { font-size: 14.5px; line-height: 1.7; color: #f3efe4; margin: 0 0 18px; font-style: normal; }
        .atlas-testimonial-cite { display: flex; flex-direction: column; gap: 2px; }
        .atlas-testimonial-name { font-size: 13.5px; font-weight: 600; color: #f3efe4; }
        .atlas-testimonial-role { font-size: 11.5px; color: #aab4c9; }
        @media (min-width: 760px) {
          .atlas-testimonial-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
