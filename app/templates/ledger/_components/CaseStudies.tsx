"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CASE_STUDIES } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function CaseStudies() {
  return (
    <section id="work" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f8f3e7" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Client Engagements" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 5vw, 42px)", color: "#16291f", margin: "16px 0 12px", lineHeight: 1.15 }}>
            Books that earned their keep.
          </h2>
          <p style={{ fontSize: "14px", color: "#8a9388", margin: "0 0 40px", maxWidth: "480px" }}>
            Tilt a card — every engagement here closed clean, on time, and with the client better off than when it started.
          </p>
        </motion.div>

        <div className="ledger-case-grid">
          {CASE_STUDIES.map((study, i) => (
            <TiltCard key={study.id} study={study} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        .ledger-case-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 760px) {
          .ledger-case-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 1080px) {
          .ledger-case-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
        .ledger-case-card {
          border: 1px solid rgba(22,41,31,0.14);
          border-radius: 10px;
          padding: 24px;
          background-color: #fffdf7;
          will-change: transform;
        }
        .ledger-case-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; gap: 8px; }
        .ledger-case-id { font-family: var(--font-display, serif); font-size: 13px; font-weight: 700; color: #1f5c3f; }
        .ledger-case-category { font-family: var(--font-body, sans-serif); font-size: 10px; font-weight: 600; letter-spacing: 0.03em; text-transform: uppercase; color: #b8862c; text-align: right; }
        .ledger-case-title { font-family: var(--font-display, serif); font-size: 18.5px; font-weight: 600; color: #16291f; margin: 0 0 12px; }
        .ledger-case-desc { font-size: 13.5px; line-height: 1.65; color: #4d5f52; margin: 0 0 16px; }
        .ledger-case-tools { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .ledger-case-tool-tag {
          font-family: var(--font-body, sans-serif);
          font-size: 10.5px;
          font-weight: 600;
          color: #16291f;
          border: 1px solid rgba(22,41,31,0.16);
          border-radius: 4px;
          padding: 4px 8px;
        }
        .ledger-case-outcomes { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .ledger-case-outcomes li { padding-left: 18px; position: relative; font-size: 13px; color: #16291f; }
        .ledger-case-outcomes li::before { content: "✓"; position: absolute; left: 0; color: #1f5c3f; }
      `}</style>
    </section>
  );
}

type Study = (typeof CASE_STUDIES)[number];

function TiltCard({ study, delay }: { study: Study; delay: number }) {
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
      className="ledger-case-card"
    >
      <div className="ledger-case-head">
        <span className="ledger-case-id">NO. {study.id}</span>
        <span className="ledger-case-category">{study.category}</span>
      </div>
      <h3 className="ledger-case-title">{study.title}</h3>
      <p className="ledger-case-desc">{study.description}</p>
      <div className="ledger-case-tools">
        {study.tools.map((t) => (
          <span key={t} className="ledger-case-tool-tag">{t}</span>
        ))}
      </div>
      <ul className="ledger-case-outcomes">
        {study.outcomes.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </motion.article>
  );
}
