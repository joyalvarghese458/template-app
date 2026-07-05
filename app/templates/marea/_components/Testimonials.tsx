"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#071c27" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="09" label="From The Field" />
          <h2 className="marea-h2-static">What advisors say.</h2>
        </motion.div>

        <div className="marea-testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="marea-testimonial-card"
            >
              <span className="marea-testimonial-quote-mark">&ldquo;</span>
              <blockquote className="marea-testimonial-quote">{t.quote}</blockquote>
              <figcaption className="marea-testimonial-cite">
                <span className="marea-testimonial-name">{t.name}</span>
                <span className="marea-testimonial-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .marea-testimonial-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .marea-testimonial-card {
          border: 1px solid rgba(255,255,255,0.09);
          border-top: 3px solid #2fe2c4;
          border-radius: 10px;
          padding: 26px 24px;
          background-color: #0b2531;
          margin: 0;
        }
        .marea-testimonial-quote-mark { font-family: var(--font-display, serif); font-style: italic; font-size: 40px; color: #2fe2c4; line-height: 1; display: block; margin-bottom: 4px; }
        .marea-testimonial-quote { font-size: 14.5px; line-height: 1.7; color: #d6ebe9; margin: 0 0 18px; font-style: normal; }
        .marea-testimonial-cite { display: flex; flex-direction: column; gap: 2px; }
        .marea-testimonial-name { font-size: 13.5px; font-weight: 700; color: #eaf6f5; }
        .marea-testimonial-role { font-size: 11.5px; color: #9fc0c2; }
        @media (min-width: 760px) {
          .marea-testimonial-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
