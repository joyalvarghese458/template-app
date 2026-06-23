"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CAMPAIGNS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#2954ff", "#ff3d7f", "#00c875", "#ffa629"];

export default function Campaigns() {
  return (
    <section id="work" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Campaigns" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#0f1222", margin: "16px 0 12px", lineHeight: 1.18 }}>
            Results, not just reach.
          </h2>
          <p style={{ fontSize: "14px", color: "#9aa0b4", margin: "0 0 40px", maxWidth: "480px" }}>
            Tilt a card — every campaign here was measured against a number that mattered to the business.
          </p>
        </motion.div>

        <div className="surge-campaign-grid">
          {CAMPAIGNS.map((c, i) => (
            <TiltCard key={c.id} campaign={c} accent={ACCENTS[i % ACCENTS.length]} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        .surge-campaign-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 760px) {
          .surge-campaign-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 1080px) {
          .surge-campaign-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
        .surge-campaign-card {
          border: 1px solid rgba(15,18,34,0.1);
          border-radius: 16px;
          padding: 24px;
          background-color: #f8f9fb;
          will-change: transform;
        }
        .surge-campaign-category { font-size: 11px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; margin: 0 0 10px; }
        .surge-campaign-title { font-size: 17.5px; font-weight: 700; color: #0f1222; margin: 0 0 12px; }
        .surge-campaign-desc { font-size: 13.5px; line-height: 1.6; color: #5b6178; margin: 0 0 18px; }
        .surge-campaign-metrics { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 8px; margin-bottom: 16px; }
        .surge-campaign-metric { display: flex; flex-direction: column; gap: 2px; padding: 10px 8px; border-radius: 10px; background-color: #ffffff; border: 1px solid rgba(15,18,34,0.08); }
        .surge-campaign-metric-value { font-family: var(--font-display, sans-serif); font-weight: 700; font-size: 15px; color: #0f1222; }
        .surge-campaign-metric-label { font-size: 9.5px; color: #9aa0b4; text-transform: uppercase; letter-spacing: 0.02em; }
        .surge-campaign-tools { display: flex; flex-wrap: wrap; gap: 8px; }
        .surge-campaign-tool-tag { font-size: 11px; font-weight: 600; color: #5b6178; border: 1px solid rgba(15,18,34,0.12); border-radius: 100px; padding: 4px 11px; }
      `}</style>
    </section>
  );
}

type Campaign = (typeof CAMPAIGNS)[number];

function TiltCard({ campaign, accent, delay }: { campaign: Campaign; accent: string; delay: number }) {
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
      className="surge-campaign-card"
    >
      <p className="surge-campaign-category" style={{ color: accent }}>{campaign.category}</p>
      <h3 className="surge-campaign-title">{campaign.title}</h3>
      <p className="surge-campaign-desc">{campaign.description}</p>
      <div className="surge-campaign-metrics">
        {campaign.metrics.map((m) => (
          <div key={m.label} className="surge-campaign-metric">
            <span className="surge-campaign-metric-value" style={{ color: accent }}>{m.value}</span>
            <span className="surge-campaign-metric-label">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="surge-campaign-tools">
        {campaign.tools.map((t) => (
          <span key={t} className="surge-campaign-tool-tag">{t}</span>
        ))}
      </div>
    </motion.article>
  );
}
