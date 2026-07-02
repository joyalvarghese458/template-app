"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#d1263f", "#c9a15a", "#d1263f"];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0806" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="10" label="What The Crew Says" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, textTransform: "uppercase", fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f3ece1", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Straight off the call sheet.
          </h2>
        </motion.div>

        <div className="rl-quote-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="rl-quote-card"
              style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}
            >
              <span className="rl-quote-mark" style={{ color: ACCENTS[i % ACCENTS.length] }}>&ldquo;</span>
              <blockquote className="rl-quote-text">{t.quote}</blockquote>
              <figcaption className="rl-quote-cite">
                <span className="rl-quote-name">{t.name}</span>
                <span className="rl-quote-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .rl-quote-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .rl-quote-card {
          border: 1px solid rgba(201,161,90,0.2);
          border-top: 3px solid;
          border-radius: 12px;
          padding: 26px 24px;
          background-color: #1c1611;
          margin: 0;
        }
        .rl-quote-mark { font-family: var(--font-display, sans-serif); font-size: 40px; line-height: 1; display: block; margin-bottom: 4px; }
        .rl-quote-text { font-size: 14.5px; line-height: 1.7; color: #f3ece1; margin: 0 0 18px; font-style: normal; }
        .rl-quote-cite { display: flex; flex-direction: column; gap: 2px; }
        .rl-quote-name { font-size: 13.5px; font-weight: 700; color: #f3ece1; }
        .rl-quote-role { font-size: 11.5px; color: #b7a996; }
        @media (min-width: 760px) {
          .rl-quote-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
