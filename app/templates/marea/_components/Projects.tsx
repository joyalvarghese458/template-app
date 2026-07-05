"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROJECTS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Projects() {
  return (
    <section id="research" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#04141d" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="Field Research" />
          <h2 className="marea-h2-static" style={{ marginBottom: "12px" }}>Studies that earned a footnote.</h2>
          <p style={{ fontSize: "14px", color: "#5c7c80", margin: "0 0 40px", maxWidth: "480px" }}>
            Tilt a card — every study here started with a dive log before it ever reached a dataset.
          </p>
        </motion.div>

        <div className="marea-project-grid">
          {PROJECTS.map((project, i) => (
            <TiltCard key={project.id} project={project} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        .marea-project-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 760px) {
          .marea-project-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 1080px) {
          .marea-project-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
        .marea-project-card {
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px;
          padding: 24px;
          background-color: #071c27;
          will-change: transform;
        }
        .marea-project-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; gap: 8px; }
        .marea-project-id { font-family: var(--font-display, serif); font-style: italic; font-size: 14px; font-weight: 500; color: #2fe2c4; }
        .marea-project-category { font-size: 10.5px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: #ff6f59; text-align: right; }
        .marea-project-title { font-size: 18.5px; font-weight: 600; color: #eaf6f5; margin: 0 0 12px; }
        .marea-project-desc { font-size: 13.5px; line-height: 1.65; color: #9fc0c2; margin: 0 0 16px; }
        .marea-project-tools { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .marea-project-tool-tag {
          font-size: 10.5px;
          font-weight: 600;
          color: #d6ebe9;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 4px;
          padding: 4px 8px;
        }
        .marea-project-outcomes { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .marea-project-outcomes li { padding-left: 18px; position: relative; font-size: 13px; color: #d6ebe9; }
        .marea-project-outcomes li::before { content: "✓"; position: absolute; left: 0; color: #4f8f6d; }
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
      className="marea-project-card"
    >
      <div className="marea-project-head">
        <span className="marea-project-id">No. {project.id}</span>
        <span className="marea-project-category">{project.category}</span>
      </div>
      <h3 className="marea-project-title">{project.title}</h3>
      <p className="marea-project-desc">{project.description}</p>
      <div className="marea-project-tools">
        {project.tools.map((t) => (
          <span key={t} className="marea-project-tool-tag">{t}</span>
        ))}
      </div>
      <ul className="marea-project-outcomes">
        {project.outcomes.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </motion.article>
  );
}
