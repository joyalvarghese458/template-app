"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CASE_STUDIES } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#d4af6a", "#9c3f4a", "#3f8f76", "#5b7ba6"];

export default function CaseStudies() {
  return (
    <section id="work" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0f1c" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Case Studies" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f3efe4", margin: "16px 0 12px", lineHeight: 1.2 }}>
            Results, not just recommendations.
          </h2>
          <p style={{ fontSize: "14px", color: "#aab4c9", margin: "0 0 40px", maxWidth: "480px" }}>
            Tilt a card — every engagement here was measured against a number the business actually cared about.
          </p>
        </motion.div>

        <div className="atlas-case-grid">
          {CASE_STUDIES.map((c, i) => (
            <TiltCard key={c.id} study={c} accent={ACCENTS[i % ACCENTS.length]} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        .atlas-case-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 760px) {
          .atlas-case-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 1080px) {
          .atlas-case-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
        .atlas-case-card {
          border: 1px solid rgba(243,239,228,0.1);
          border-radius: 16px;
          padding: 24px;
          background-color: #111a2c;
          will-change: transform;
        }
        .atlas-case-category { font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; margin: 0 0 10px; }
        .atlas-case-title { font-size: 17px; font-weight: 600; color: #f3efe4; margin: 0 0 12px; font-family: var(--font-display, serif); }
        .atlas-case-desc { font-size: 13.5px; line-height: 1.6; color: #aab4c9; margin: 0 0 18px; }
        .atlas-case-metrics { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 8px; margin-bottom: 16px; }
        .atlas-case-metric { display: flex; flex-direction: column; gap: 2px; padding: 10px 8px; border-radius: 10px; background-color: #16213a; border: 1px solid rgba(243,239,228,0.08); }
        .atlas-case-metric-value { font-family: var(--font-display, serif); font-weight: 600; font-size: 15px; color: #f3efe4; }
        .atlas-case-metric-label { font-size: 9.5px; color: #6c7790; text-transform: uppercase; letter-spacing: 0.02em; }
        .atlas-case-scope { display: flex; flex-wrap: wrap; gap: 8px; }
        .atlas-case-scope-tag { font-size: 11px; font-weight: 500; color: #aab4c9; border: 1px solid rgba(243,239,228,0.14); border-radius: 100px; padding: 4px 11px; }
      `}</style>
    </section>
  );
}

type CaseStudy = (typeof CASE_STUDIES)[number];

function TiltCard({ study, accent, delay }: { study: CaseStudy; accent: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 220, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 800, borderTopColor: accent, borderTopWidth: "3px" }}
      className="atlas-case-card"
    >
      <p className="atlas-case-category" style={{ color: accent }}>{study.category}</p>
      <h3 className="atlas-case-title">{study.title}</h3>
      <p className="atlas-case-desc">{study.description}</p>
      <div className="atlas-case-metrics">
        {study.metrics.map((m) => (
          <div key={m.label} className="atlas-case-metric">
            <span className="atlas-case-metric-value" style={{ color: accent }}>{m.value}</span>
            <span className="atlas-case-metric-label">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="atlas-case-scope">
        {study.scope.map((t) => (
          <span key={t} className="atlas-case-scope-tag">{t}</span>
        ))}
      </div>
    </motion.article>
  );
}
