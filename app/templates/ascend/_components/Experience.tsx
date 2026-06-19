"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { slideAlt, slideUp, VIEWPORT } from "../_utils/motion";
import { Eyebrow } from "./About";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#faf8ff" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <Eyebrow label="Experience" />
          <h2 style={{ fontWeight: 800, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#1c1530", margin: "14px 0 40px", lineHeight: 1.18 }}>
            From recruiting desk to coaching practice.
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {EXPERIENCE.map((role, i) => (
            <motion.div
              key={role.role + role.company}
              variants={slideAlt(i, 28)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="ascend-exp-card"
            >
              <div className="ascend-exp-head">
                <h3 className="ascend-exp-role">
                  {role.role} <span className="ascend-exp-company">· {role.company}</span>
                </h3>
                <span className="ascend-exp-period">{role.period}</span>
              </div>
              <p className="ascend-exp-desc">{role.description}</p>
              <div className="ascend-exp-tags">
                {role.highlights.map((h) => (
                  <span key={h} className="ascend-exp-tag">{h}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .ascend-exp-card {
          background-color: #fff;
          border: 1px solid rgba(28,21,48,0.08);
          border-radius: 16px;
          padding: 22px;
        }
        .ascend-exp-head { display: flex; flex-direction: column; gap: 4px; margin-bottom: 10px; }
        .ascend-exp-role { font-size: 17px; font-weight: 800; color: #1c1530; margin: 0; }
        .ascend-exp-company { font-weight: 500; color: #6b6280; }
        .ascend-exp-period { font-size: 12px; font-weight: 700; color: #ff5fa2; }
        .ascend-exp-desc { font-size: 14.5px; line-height: 1.7; color: #4a4359; margin: 0 0 14px; }
        .ascend-exp-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .ascend-exp-tag {
          font-size: 11px;
          font-weight: 600;
          color: #2bb673;
          border: 1px solid rgba(43,182,115,0.3);
          background-color: rgba(43,182,115,0.08);
          border-radius: 100px;
          padding: 4px 10px;
        }
        @media (min-width: 700px) {
          .ascend-exp-head { flex-direction: row; align-items: baseline; justify-content: space-between; }
        }
      `}</style>
    </section>
  );
}
