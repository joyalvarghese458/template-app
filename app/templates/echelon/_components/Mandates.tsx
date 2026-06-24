"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MANDATES } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#3b6fe0", "#d98a3d", "#6f97f2", "#b7c0cf"];

export default function Mandates() {
  return (
    <section id="mandates" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0b0e14" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Mandates" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#eef1f6", margin: "16px 0 12px", lineHeight: 1.2 }}>
            Six seats. Six turnarounds.
          </h2>
          <p style={{ fontSize: "14px", color: "#9aa7bb", margin: "0 0 40px", maxWidth: "480px" }}>
            Tilt a card — every mandate here was measured against a number the board actually cared about.
          </p>
        </motion.div>

        <div className="ech-mandate-grid">
          {MANDATES.map((m, i) => (
            <TiltCard key={m.id} mandate={m} accent={ACCENTS[i % ACCENTS.length]} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        .ech-mandate-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 760px) {
          .ech-mandate-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 1080px) {
          .ech-mandate-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
        .ech-mandate-card {
          border: 1px solid rgba(238,241,246,0.1);
          border-radius: 14px;
          padding: 24px;
          background-color: #11151d;
          will-change: transform;
        }
        .ech-mandate-category { font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; margin: 0 0 10px; }
        .ech-mandate-title { font-size: 17px; font-weight: 600; color: #eef1f6; margin: 0 0 12px; font-family: var(--font-display, serif); }
        .ech-mandate-desc { font-size: 13.5px; line-height: 1.6; color: #9aa7bb; margin: 0 0 18px; }
        .ech-mandate-metrics { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 8px; margin-bottom: 16px; }
        .ech-mandate-metric { display: flex; flex-direction: column; gap: 2px; padding: 10px 8px; border-radius: 10px; background-color: #161b25; border: 1px solid rgba(238,241,246,0.08); }
        .ech-mandate-metric-value { font-family: var(--font-display, serif); font-weight: 600; font-size: 15px; color: #eef1f6; }
        .ech-mandate-metric-label { font-size: 9.5px; color: #5c6679; text-transform: uppercase; letter-spacing: 0.02em; }
        .ech-mandate-scope { display: flex; flex-wrap: wrap; gap: 8px; }
        .ech-mandate-scope-tag { font-size: 11px; font-weight: 500; color: #9aa7bb; border: 1px solid rgba(238,241,246,0.14); border-radius: 100px; padding: 4px 11px; }
      `}</style>
    </section>
  );
}

type Mandate = (typeof MANDATES)[number];

function TiltCard({ mandate, accent, delay }: { mandate: Mandate; accent: string; delay: number }) {
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
      className="ech-mandate-card"
    >
      <p className="ech-mandate-category" style={{ color: accent }}>{mandate.category}</p>
      <h3 className="ech-mandate-title">{mandate.title}</h3>
      <p className="ech-mandate-desc">{mandate.description}</p>
      <div className="ech-mandate-metrics">
        {mandate.metrics.map((m) => (
          <div key={m.label} className="ech-mandate-metric">
            <span className="ech-mandate-metric-value" style={{ color: accent }}>{m.value}</span>
            <span className="ech-mandate-metric-label">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="ech-mandate-scope">
        {mandate.scope.map((t) => (
          <span key={t} className="ech-mandate-scope-tag">{t}</span>
        ))}
      </div>
    </motion.article>
  );
}
