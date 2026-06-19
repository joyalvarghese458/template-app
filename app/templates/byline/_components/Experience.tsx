"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { Kicker } from "./About";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f3efe6" }}>
      <div style={{ maxWidth: "880px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <Kicker index="03" label="Experience" />
          <h2
            style={{
              fontFamily: "var(--font-display, serif)",
              fontWeight: 700,
              fontSize: "clamp(26px, 4.5vw, 38px)",
              color: "#1a1714",
              margin: "0 0 36px",
              lineHeight: 1.15,
            }}
          >
            Twelve years on the beat.
          </h2>
        </motion.div>

        <div className="byline-timeline">
          {EXPERIENCE.map((role, i) => (
            <motion.div
              key={role.role + role.outlet}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="byline-timeline-item"
            >
              <span aria-hidden="true" className="byline-timeline-dot" />
              <div className="byline-timeline-head">
                <h3 className="byline-timeline-role">
                  {role.role} <span className="byline-timeline-outlet">— {role.outlet}</span>
                </h3>
                <span className="byline-timeline-period">{role.period}</span>
              </div>
              <p className="byline-timeline-desc">{role.description}</p>
              <div className="byline-timeline-tags">
                {role.highlights.map((h) => (
                  <span key={h} className="byline-timeline-tag">{h}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .byline-timeline {
          position: relative;
          padding-left: 24px;
          border-left: 1px solid rgba(26,23,20,0.18);
          display: flex;
          flex-direction: column;
          gap: 36px;
        }
        .byline-timeline-item { position: relative; }
        .byline-timeline-dot {
          position: absolute;
          left: -29px;
          top: 5px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #f3efe6;
          border: 2px solid #b3231a;
        }
        .byline-timeline-head {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 8px;
        }
        .byline-timeline-role {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: 18px;
          color: #1a1714;
          margin: 0;
        }
        .byline-timeline-outlet { font-weight: 400; font-style: italic; color: #5b554c; }
        .byline-timeline-period {
          font-family: var(--font-type, monospace);
          font-size: 11.5px;
          color: #b3231a;
        }
        .byline-timeline-desc {
          font-size: 14.5px;
          line-height: 1.7;
          color: #3c372f;
          margin: 0 0 12px;
        }
        .byline-timeline-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .byline-timeline-tag {
          font-family: var(--font-type, monospace);
          font-size: 10.5px;
          color: #5b554c;
          border: 1px solid rgba(26,23,20,0.2);
          border-radius: 2px;
          padding: 4px 9px;
        }
        @media (min-width: 700px) {
          .byline-timeline-head { flex-direction: row; align-items: baseline; justify-content: space-between; }
        }
      `}</style>
    </section>
  );
}
