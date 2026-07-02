"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FRAGRANCES } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#b6752c", "#b1556b", "#b6752c", "#b1556b"];

export default function Fragrances() {
  return (
    <section id="fragrances" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#faf5ea" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="The Collection" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#2b2015", margin: "16px 0 12px", lineHeight: 1.15 }}>
            Six fragrances, one hand.
          </h2>
          <p style={{ fontSize: "14px", color: "#6f5f47", margin: "0 0 40px", maxWidth: "480px" }}>
            Tilt a card to read the pyramid — every fragrance below shipped through the process above.
          </p>
        </motion.div>

        <div className="sil-frag-grid">
          {FRAGRANCES.map((p, i) => (
            <TiltCard key={p.id} fragrance={p} accent={ACCENTS[i % ACCENTS.length]} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        .sil-frag-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 760px) {
          .sil-frag-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 1080px) {
          .sil-frag-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
        .sil-frag-card {
          position: relative;
          border: 1px solid rgba(43,32,21,0.14);
          border-radius: 14px;
          padding: 24px;
          background-color: #f3ecdc;
          will-change: transform;
          overflow: hidden;
        }
        .sil-frag-drop {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sil-frag-category { font-family: var(--font-body, sans-serif); font-size: 10.5px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; margin: 0 40px 10px 0; }
        .sil-frag-title { font-size: 21px; font-weight: 600; color: #2b2015; margin: 0 0 12px; font-family: var(--font-display, serif); }
        .sil-frag-desc { font-size: 13.5px; line-height: 1.6; color: #6f5f47; margin: 0 0 18px; }
        .sil-frag-notes { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
        .sil-frag-note-row { display: grid; grid-template-columns: 44px 1fr; gap: 8px; align-items: baseline; }
        .sil-frag-note-tag { font-size: 9px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #a39273; }
        .sil-frag-note-value { font-size: 12px; color: #2b2015; }
        .sil-frag-metrics { display: flex; flex-wrap: wrap; gap: 8px; }
        .sil-frag-metric { font-size: 11px; font-weight: 500; color: #6f5f47; border: 1px solid rgba(43,32,21,0.16); border-radius: 100px; padding: 4px 11px; }
      `}</style>
    </section>
  );
}

type Fragrance = (typeof FRAGRANCES)[number];
const NOTE_LABELS = ["Top", "Heart", "Base"];

function TiltCard({ fragrance, accent, delay }: { fragrance: Fragrance; accent: string; delay: number }) {
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
      className="sil-frag-card"
    >
      <span className="sil-frag-drop" style={{ borderColor: accent, color: accent }} aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 12 14" fill="currentColor"><path d="M6 0c2.5 3.6 4.5 6.4 4.5 8.8A4.5 4.5 0 1 1 1.5 8.8C1.5 6.4 3.5 3.6 6 0z" /></svg>
      </span>
      <p className="sil-frag-category" style={{ color: accent }}>{fragrance.category}</p>
      <h3 className="sil-frag-title">{fragrance.title}</h3>
      <p className="sil-frag-desc">{fragrance.description}</p>
      <div className="sil-frag-notes">
        {fragrance.notes.map((note, i) => (
          <div key={note} className="sil-frag-note-row">
            <span className="sil-frag-note-tag">{NOTE_LABELS[i]}</span>
            <span className="sil-frag-note-value">{note}</span>
          </div>
        ))}
      </div>
      <div className="sil-frag-metrics">
        {fragrance.metrics.map((m) => (
          <span key={m.label} className="sil-frag-metric">{m.label}: {m.value}</span>
        ))}
      </div>
    </motion.article>
  );
}
