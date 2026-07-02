"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FILMOGRAPHY } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#d1263f", "#c9a15a", "#d1263f", "#c9a15a"];

export default function Filmography() {
  return (
    <section id="filmography" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0806" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Filmography" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, textTransform: "uppercase", fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f3ece1", margin: "16px 0 12px", lineHeight: 1.15 }}>
            Six reels, one voice.
          </h2>
          <p style={{ fontSize: "14px", color: "#b7a996", margin: "0 0 40px", maxWidth: "480px" }}>
            Tilt a card to preview the take — every project below shipped through the process above.
          </p>
        </motion.div>

        <div className="rl-film-grid">
          {FILMOGRAPHY.map((p, i) => (
            <TiltCard key={p.id} project={p} accent={ACCENTS[i % ACCENTS.length]} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        .rl-film-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 760px) {
          .rl-film-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 1080px) {
          .rl-film-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
        .rl-film-card {
          position: relative;
          border: 1px solid rgba(201,161,90,0.2);
          border-radius: 12px;
          padding: 24px;
          background-color: #14100c;
          will-change: transform;
          overflow: hidden;
        }
        .rl-film-play {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1.5px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rl-film-category { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; margin: 0 40px 10px 0; }
        .rl-film-title { font-size: 19px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.02em; color: #f3ece1; margin: 0 0 12px; font-family: var(--font-display, sans-serif); }
        .rl-film-desc { font-size: 13.5px; line-height: 1.6; color: #b7a996; margin: 0 0 18px; }
        .rl-film-metrics { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 8px; margin-bottom: 16px; }
        .rl-film-metric { display: flex; flex-direction: column; gap: 2px; padding: 10px 8px; border-radius: 8px; background-color: #1c1611; border: 1px solid rgba(201,161,90,0.14); }
        .rl-film-metric-value { font-family: var(--font-mono, monospace); font-weight: 700; font-size: 14px; color: #f3ece1; }
        .rl-film-metric-label { font-size: 9.5px; color: #6b5f4f; text-transform: uppercase; letter-spacing: 0.02em; }
        .rl-film-scope { display: flex; flex-wrap: wrap; gap: 8px; }
        .rl-film-scope-tag { font-size: 11px; font-weight: 500; color: #b7a996; border: 1px solid rgba(201,161,90,0.24); border-radius: 100px; padding: 4px 11px; }
      `}</style>
    </section>
  );
}

type Project = (typeof FILMOGRAPHY)[number];

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
      className="rl-film-card"
    >
      <span className="rl-film-play" style={{ borderColor: accent, color: accent }} aria-hidden="true">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor"><path d="M2 1.5v9l8-4.5-8-4.5z" /></svg>
      </span>
      <p className="rl-film-category" style={{ color: accent }}>{project.category}</p>
      <h3 className="rl-film-title">{project.title}</h3>
      <p className="rl-film-desc">{project.description}</p>
      <div className="rl-film-metrics">
        {project.metrics.map((m) => (
          <div key={m.label} className="rl-film-metric">
            <span className="rl-film-metric-value" style={{ color: accent }}>{m.value}</span>
            <span className="rl-film-metric-label">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="rl-film-scope">
        {project.scope.map((t) => (
          <span key={t} className="rl-film-scope-tag">{t}</span>
        ))}
      </div>
    </motion.article>
  );
}
