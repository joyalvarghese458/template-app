"use client";

import { motion } from "framer-motion";
import { PRINCIPLES } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Principles() {
  return (
    <section id="principles" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#11151d" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="The Command Framework" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#eef1f6", margin: "16px 0 40px", lineHeight: 1.2 }}>
            One doctrine. Every mandate.
          </h2>
        </motion.div>

        <div className="ech-principles-track">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="ech-principles-item"
            >
              <span className="ech-principles-marker" aria-hidden="true">
                <span className="ech-principles-chevron" />
                <span className="ech-principles-marker-num">{p.step}</span>
              </span>
              <div className="ech-principles-card">
                <span className="ech-principles-card-step">{p.step}</span>
                <h3 className="ech-principles-card-title">{p.title}</h3>
                <p className="ech-principles-card-desc">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .ech-principles-track { position: relative; padding-left: 28px; }
        .ech-principles-track::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 1.5px;
          background-image: linear-gradient(#3b6fe0, #d98a3d, #6f97f2);
          opacity: 0.4;
        }
        .ech-principles-item { position: relative; padding-bottom: 36px; }
        .ech-principles-item:last-child { padding-bottom: 0; }
        .ech-principles-marker {
          position: absolute;
          left: -28px;
          top: 2px;
          width: 13px;
          height: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ech-principles-chevron {
          position: absolute;
          inset: 0;
          background-color: #0b0e14;
          border: 2px solid #3b6fe0;
          clip-path: polygon(0% 0%, 60% 0%, 100% 50%, 60% 100%, 0% 100%, 35% 50%);
        }
        .ech-principles-marker-num { display: none; }
        .ech-principles-card {
          border: 1px solid rgba(238,241,246,0.1);
          border-radius: 14px;
          padding: 18px 20px;
          background-color: #161b25;
        }
        .ech-principles-card-step { font-family: var(--font-display, serif); font-size: 12px; font-weight: 600; color: #3b6fe0; }
        .ech-principles-card-title { font-size: 17px; font-weight: 600; color: #eef1f6; margin: 6px 0 8px; font-family: var(--font-display, serif); }
        .ech-principles-card-desc { font-size: 13.5px; line-height: 1.65; color: #9aa7bb; margin: 0; }

        @media (min-width: 860px) {
          .ech-principles-track { padding-left: 0; }
          .ech-principles-track::before { left: 50%; transform: translateX(-50%); }
          .ech-principles-item {
            display: grid;
            grid-template-columns: 1fr 64px 1fr;
            align-items: center;
            padding-bottom: 52px;
          }
          .ech-principles-marker {
            position: relative;
            grid-column: 2;
            width: 40px;
            height: 40px;
            margin: 0 auto;
            z-index: 1;
          }
          .ech-principles-chevron { background-color: #11151d; border-width: 2px; }
          .ech-principles-marker-num {
            display: block;
            position: relative;
            font-family: var(--font-display, serif);
            font-size: 13px;
            font-weight: 600;
            color: #6f97f2;
            z-index: 2;
          }
          .ech-principles-card { grid-column: 1; text-align: right; padding: 22px 36px 22px 22px; }
          .ech-principles-item:nth-child(even) .ech-principles-card { grid-column: 3; text-align: left; padding: 22px 22px 22px 36px; }
        }
      `}</style>
    </section>
  );
}
