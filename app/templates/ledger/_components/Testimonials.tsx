"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f1e8d3" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="10" label="From The Clients" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 5vw, 42px)", color: "#16291f", margin: "16px 0 40px", lineHeight: 1.15 }}>
            What the books say.
          </h2>
        </motion.div>

        <div className="ledger-testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="ledger-testimonial-card"
            >
              <span className="ledger-testimonial-quote-mark">&ldquo;</span>
              <blockquote className="ledger-testimonial-quote">{t.quote}</blockquote>
              <figcaption className="ledger-testimonial-cite">
                <span className="ledger-testimonial-name">{t.name}</span>
                <span className="ledger-testimonial-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .ledger-testimonial-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .ledger-testimonial-card {
          border: 1px solid rgba(22,41,31,0.14);
          border-top: 3px solid #1f5c3f;
          border-radius: 10px;
          padding: 26px 24px;
          background-color: #fffdf7;
          margin: 0;
        }
        .ledger-testimonial-quote-mark { font-family: var(--font-display, serif); font-size: 40px; color: #1f5c3f; line-height: 1; display: block; margin-bottom: 4px; }
        .ledger-testimonial-quote { font-size: 14.5px; line-height: 1.7; color: #16291f; margin: 0 0 18px; font-style: normal; }
        .ledger-testimonial-cite { display: flex; flex-direction: column; gap: 2px; }
        .ledger-testimonial-name { font-size: 13.5px; font-weight: 700; color: #16291f; }
        .ledger-testimonial-role { font-size: 11.5px; color: #4d5f52; }
        @media (min-width: 760px) {
          .ledger-testimonial-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
