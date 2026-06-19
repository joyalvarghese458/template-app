"use client";

import { motion } from "framer-motion";
import { RESULTS } from "../_data/portfolio";
import { slideUp, slideAlt, VIEWPORT } from "../_utils/motion";
import { Eyebrow } from "./About";

export default function Results() {
  return (
    <section id="results" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <Eyebrow label="Success Stories" />
          <h2 style={{ fontWeight: 800, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#1c1530", margin: "14px 0 40px", lineHeight: 1.18 }}>
            Real searches, real offers.
          </h2>
        </motion.div>

        <div className="ascend-results-grid">
          {RESULTS.map((r, i) => (
            <motion.article
              key={r.id}
              variants={slideAlt(i)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              whileHover={{ y: -4 }}
              className="ascend-result-card"
            >
              <div className="ascend-result-head">
                <div>
                  <h3 className="ascend-result-name">{r.name}</h3>
                  <p className="ascend-result-role">{r.role}</p>
                </div>
                <span className="ascend-result-weeks">{r.weeks}</span>
              </div>

              <div className="ascend-result-shift">
                <div className="ascend-result-before">
                  <span className="ascend-result-shift-label">Before</span>
                  <p>{r.before}</p>
                </div>
                <span className="ascend-result-arrow" aria-hidden="true">→</span>
                <div className="ascend-result-after">
                  <span className="ascend-result-shift-label">After</span>
                  <p>{r.after}</p>
                </div>
              </div>

              <div className="ascend-result-tags">
                {r.tags.map((t) => (
                  <span key={t} className="ascend-result-tag">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .ascend-results-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        .ascend-result-card {
          border-radius: 18px;
          border: 1px solid rgba(28,21,48,0.08);
          background-color: #faf8ff;
          padding: 24px;
          transition: box-shadow 0.25s;
        }
        .ascend-result-card:hover { box-shadow: 0 16px 32px rgba(28,21,48,0.1); }
        .ascend-result-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
        .ascend-result-name { font-size: 17px; font-weight: 800; color: #1c1530; margin: 0 0 2px; }
        .ascend-result-role { font-size: 13px; color: #6b6280; margin: 0; }
        .ascend-result-weeks {
          font-size: 11.5px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(120deg, #ff7a59, #ff5fa2);
          border-radius: 100px;
          padding: 5px 12px;
          white-space: nowrap;
        }
        .ascend-result-shift { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }
        .ascend-result-before, .ascend-result-after {
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 13.5px;
          color: #1c1530;
        }
        .ascend-result-before { background-color: rgba(28,21,48,0.04); }
        .ascend-result-after { background-color: rgba(43,182,115,0.1); }
        .ascend-result-before p, .ascend-result-after p { margin: 4px 0 0; line-height: 1.5; }
        .ascend-result-shift-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #a39cb0; }
        .ascend-result-after .ascend-result-shift-label { color: #2bb673; }
        .ascend-result-arrow { display: none; }
        .ascend-result-tags { display: flex; flex-wrap: wrap; gap: 7px; }
        .ascend-result-tag {
          font-size: 11px;
          font-weight: 600;
          color: #6b6280;
          border: 1px solid rgba(28,21,48,0.12);
          border-radius: 100px;
          padding: 4px 10px;
        }
        @media (min-width: 760px) {
          .ascend-results-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px; }
          .ascend-result-shift { flex-direction: row; align-items: center; }
          .ascend-result-before, .ascend-result-after { flex: 1; }
          .ascend-result-arrow { display: block; color: #a39cb0; font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
