"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROJECTS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Projects() {
  return (
    <section id="work" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0d0d0f" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Engineering Work" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#f2f2f0", margin: "16px 0 12px", lineHeight: 1.1, textTransform: "uppercase" }}>
            Parts that earned their place.
          </h2>
          <p style={{ fontSize: "14px", color: "#5e5e66", margin: "0 0 40px", maxWidth: "480px" }}>
            Tilt a card — every part here passed simulation before it ever touched a track or a line.
          </p>
        </motion.div>

        <div className="redline-project-grid">
          {PROJECTS.map((project, i) => (
            <TiltCard key={project.id} project={project} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        .redline-project-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 760px) {
          .redline-project-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 1080px) {
          .redline-project-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
        .redline-project-card {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 24px;
          background-color: #16161a;
          will-change: transform;
        }
        .redline-project-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; gap: 8px; }
        .redline-project-id { font-family: var(--font-display, sans-serif); font-size: 13px; font-weight: 700; color: #e10600; }
        .redline-project-category { font-family: var(--font-display, sans-serif); font-size: 10px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: #ffb700; text-align: right; }
        .redline-project-title { font-size: 18.5px; font-weight: 700; color: #f2f2f0; margin: 0 0 12px; }
        .redline-project-desc { font-size: 13.5px; line-height: 1.65; color: #9a9aa0; margin: 0 0 16px; }
        .redline-project-tools { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .redline-project-tool-tag {
          font-family: var(--font-display, sans-serif);
          font-size: 10.5px;
          font-weight: 600;
          color: #d4d4d8;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 4px;
          padding: 4px 8px;
        }
        .redline-project-outcomes { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .redline-project-outcomes li { padding-left: 18px; position: relative; font-size: 13px; color: #d4d4d8; }
        .redline-project-outcomes li::before { content: "✓"; position: absolute; left: 0; color: #ffb700; }
      `}</style>
    </section>
  );
}

type Project = (typeof PROJECTS)[number];

function TiltCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 220, damping: 20 });

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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 800 }}
      className="redline-project-card"
    >
      <div className="redline-project-head">
        <span className="redline-project-id">NO. {project.id}</span>
        <span className="redline-project-category">{project.category}</span>
      </div>
      <h3 className="redline-project-title">{project.title}</h3>
      <p className="redline-project-desc">{project.description}</p>
      <div className="redline-project-tools">
        {project.tools.map((t) => (
          <span key={t} className="redline-project-tool-tag">{t}</span>
        ))}
      </div>
      <ul className="redline-project-outcomes">
        {project.outcomes.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </motion.article>
  );
}
