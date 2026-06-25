"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { REEL } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#2dd4bf", "#ff7a3d", "#9089fc", "#67e8d8"];

export default function Reel() {
  return (
    <section id="reel" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0c0d10" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Reel" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f1f3f6", margin: "16px 0 12px", lineHeight: 1.2 }}>
            Six projects. Six pipelines.
          </h2>
          <p style={{ fontSize: "14px", color: "#9ba1ad", margin: "0 0 40px", maxWidth: "480px" }}>
            Tilt a card — every project here shipped through a different stage of the pipeline above.
          </p>
        </motion.div>

        <div className="prlx-reel-grid">
          {REEL.map((p, i) => (
            <TiltCard key={p.id} project={p} accent={ACCENTS[i % ACCENTS.length]} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        .prlx-reel-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 760px) {
          .prlx-reel-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 1080px) {
          .prlx-reel-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
        .prlx-reel-card {
          border: 1px solid rgba(241,243,246,0.1);
          border-radius: 14px;
          padding: 24px;
          background-color: #131419;
          will-change: transform;
        }
        .prlx-reel-category { font-size: 11px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; margin: 0 0 10px; }
        .prlx-reel-title { font-size: 17px; font-weight: 700; color: #f1f3f6; margin: 0 0 12px; font-family: var(--font-display, sans-serif); }
        .prlx-reel-desc { font-size: 13.5px; line-height: 1.6; color: #9ba1ad; margin: 0 0 18px; }
        .prlx-reel-metrics { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 8px; margin-bottom: 16px; }
        .prlx-reel-metric { display: flex; flex-direction: column; gap: 2px; padding: 10px 8px; border-radius: 10px; background-color: #181a21; border: 1px solid rgba(241,243,246,0.08); }
        .prlx-reel-metric-value { font-family: var(--font-display, sans-serif); font-weight: 700; font-size: 15px; color: #f1f3f6; }
        .prlx-reel-metric-label { font-size: 9.5px; color: #5a5f6b; text-transform: uppercase; letter-spacing: 0.02em; }
        .prlx-reel-scope { display: flex; flex-wrap: wrap; gap: 8px; }
        .prlx-reel-scope-tag { font-size: 11px; font-weight: 500; color: #9ba1ad; border: 1px solid rgba(241,243,246,0.14); border-radius: 100px; padding: 4px 11px; }
      `}</style>
    </section>
  );
}

type Project = (typeof REEL)[number];

function TiltCard({ project, accent, delay }: { project: Project; accent: string; delay: number }) {
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
      className="prlx-reel-card"
    >
      <p className="prlx-reel-category" style={{ color: accent }}>{project.category}</p>
      <h3 className="prlx-reel-title">{project.title}</h3>
      <p className="prlx-reel-desc">{project.description}</p>
      <div className="prlx-reel-metrics">
        {project.metrics.map((m) => (
          <div key={m.label} className="prlx-reel-metric">
            <span className="prlx-reel-metric-value" style={{ color: accent }}>{m.value}</span>
            <span className="prlx-reel-metric-label">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="prlx-reel-scope">
        {project.scope.map((t) => (
          <span key={t} className="prlx-reel-scope-tag">{t}</span>
        ))}
      </div>
    </motion.article>
  );
}
