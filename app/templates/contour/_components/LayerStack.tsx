"use client";

import { motion } from "framer-motion";
import { LAYERS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

export default function LayerStack() {
  return (
    <section id="approach" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f3f0e5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="How A Site Gets Read" />
          <h2 className="ctr-layer-heading">Four layers, before one plant is placed.</h2>
          <p className="ctr-layer-sub">Every site is drawn as a stack of overlapping analyses — each one has to hold up on its own before it&apos;s allowed to inform the design.</p>
        </motion.div>

        <div className="ctr-layer-stack">
          {LAYERS.map((l, i) => (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, x: -24, rotate: i % 2 === 0 ? -1.4 : 1.4 }}
              whileInView={{ opacity: 1, x: 0, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, rotate: 0 }}
              className="ctr-layer-card"
              style={{ borderLeftColor: l.color, zIndex: LAYERS.length - i }}
            >
              <div className="ctr-layer-top">
                <span className="ctr-layer-id" style={{ color: l.color }}>{l.id}</span>
                <span className="ctr-layer-dot" style={{ backgroundColor: l.color }} />
              </div>
              <h3 className="ctr-layer-name">{l.name}</h3>
              <p className="ctr-layer-desc">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .ctr-layer-heading {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #212a1f;
          margin: 16px 0 12px;
          line-height: 1.15;
          max-width: 620px;
        }
        .ctr-layer-sub { font-size: 15px; line-height: 1.7; color: #4c5343; margin: 0 0 44px; max-width: 560px; }
        .ctr-layer-stack { display: grid; grid-template-columns: 1fr; gap: 20px; }
        .ctr-layer-card {
          border: 1px solid rgba(33,42,31,0.13);
          border-left-width: 4px;
          border-radius: 12px;
          padding: 24px 22px;
          background-color: #ffffff;
          box-shadow: 0 18px 34px -22px rgba(33,42,31,0.35);
          transition: box-shadow 0.25s ease;
        }
        .ctr-layer-card:hover { box-shadow: 0 24px 44px -20px rgba(33,42,31,0.4); }
        .ctr-layer-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
        .ctr-layer-id { font-family: var(--font-mono, monospace); font-weight: 700; font-size: 12px; }
        .ctr-layer-dot { width: 9px; height: 9px; border-radius: 50%; }
        .ctr-layer-name { font-family: var(--font-display, serif); font-weight: 600; font-size: 21px; color: #212a1f; margin: 0 0 8px; }
        .ctr-layer-desc { font-size: 13.5px; line-height: 1.65; color: #4c5343; margin: 0; }
        @media (min-width: 720px) {
          .ctr-layer-stack { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 22px; }
        }
        @media (min-width: 1020px) {
          .ctr-layer-stack { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
