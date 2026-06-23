"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROJECTS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Projects() {
  return (
    <section id="research" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#120e0a" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="Field Research" />
          <h2 className="lithos-h2-static" style={{ marginBottom: "12px" }}>Studies that earned a footnote.</h2>
          <p style={{ fontSize: "14px", color: "#6e6152", margin: "0 0 40px", maxWidth: "480px" }}>
            Tilt a card — every study here started with a field notebook before it ever reached a map.
          </p>
        </motion.div>

        <div className="lithos-project-grid">
          {PROJECTS.map((project, i) => (
            <TiltCard key={project.id} project={project} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        .lithos-project-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 760px) {
          .lithos-project-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 1080px) {
          .lithos-project-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
        .lithos-project-card {
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px;
          padding: 24px;
          background-color: #1c1610;
          will-change: transform;
        }
        .lithos-project-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; gap: 8px; }
        .lithos-project-id { font-family: var(--font-display, serif); font-style: italic; font-size: 14px; font-weight: 500; color: #e8702a; }
        .lithos-project-category { font-size: 10.5px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: #c89a55; text-align: right; }
        .lithos-project-title { font-size: 18.5px; font-weight: 600; color: #f4ece1; margin: 0 0 12px; }
        .lithos-project-desc { font-size: 13.5px; line-height: 1.65; color: #b3a392; margin: 0 0 16px; }
        .lithos-project-tools { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .lithos-project-tool-tag {
          font-size: 10.5px;
          font-weight: 600;
          color: #d8cdbe;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 4px;
          padding: 4px 8px;
        }
        .lithos-project-outcomes { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .lithos-project-outcomes li { padding-left: 18px; position: relative; font-size: 13px; color: #d8cdbe; }
        .lithos-project-outcomes li::before { content: "✓"; position: absolute; left: 0; color: #7c8a55; }
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
      className="lithos-project-card"
    >
      <div className="lithos-project-head">
        <span className="lithos-project-id">No. {project.id}</span>
        <span className="lithos-project-category">{project.category}</span>
      </div>
      <h3 className="lithos-project-title">{project.title}</h3>
      <p className="lithos-project-desc">{project.description}</p>
      <div className="lithos-project-tools">
        {project.tools.map((t) => (
          <span key={t} className="lithos-project-tool-tag">{t}</span>
        ))}
      </div>
      <ul className="lithos-project-outcomes">
        {project.outcomes.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </motion.article>
  );
}
