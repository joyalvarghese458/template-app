"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#2954ff", "#ff3d7f", "#00c875"];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f8f9fb" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="09" label="Client Wins" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#0f1222", margin: "16px 0 40px", lineHeight: 1.18 }}>
            What clients say.
          </h2>
        </motion.div>

        <div className="surge-testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="surge-testimonial-card"
              style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}
            >
              <span className="surge-testimonial-quote-mark" style={{ color: ACCENTS[i % ACCENTS.length] }}>&ldquo;</span>
              <blockquote className="surge-testimonial-quote">{t.quote}</blockquote>
              <figcaption className="surge-testimonial-cite">
                <span className="surge-testimonial-name">{t.name}</span>
                <span className="surge-testimonial-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .surge-testimonial-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .surge-testimonial-card {
          border: 1px solid rgba(15,18,34,0.1);
          border-top: 3px solid;
          border-radius: 16px;
          padding: 26px 24px;
          background-color: #ffffff;
          margin: 0;
        }
        .surge-testimonial-quote-mark { font-family: var(--font-display, sans-serif); font-size: 40px; line-height: 1; display: block; margin-bottom: 4px; }
        .surge-testimonial-quote { font-size: 14.5px; line-height: 1.7; color: #0f1222; margin: 0 0 18px; font-style: normal; }
        .surge-testimonial-cite { display: flex; flex-direction: column; gap: 2px; }
        .surge-testimonial-name { font-size: 13.5px; font-weight: 700; color: #0f1222; }
        .surge-testimonial-role { font-size: 11.5px; color: #5b6178; }
        @media (min-width: 760px) {
          .surge-testimonial-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
