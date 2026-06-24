"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MENUS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#e8552c", "#7c2233", "#6b8f47", "#ff8a4c"];

export default function Menus() {
  return (
    <section id="menus" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#15110f" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Menus" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.6vw, 40px)", color: "#f5ece0", margin: "16px 0 12px", lineHeight: 1.2 }}>
            Six kitchens. Six menus.
          </h2>
          <p style={{ fontSize: "14px", color: "#c4b6a8", margin: "0 0 40px", maxWidth: "480px" }}>
            Tilt a card — every menu here was built around a place, a season, and a number guests actually felt.
          </p>
        </motion.div>

        <div className="umami-menu-grid">
          {MENUS.map((m, i) => (
            <TiltCard key={m.id} menu={m} accent={ACCENTS[i % ACCENTS.length]} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        .umami-menu-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 760px) {
          .umami-menu-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 1080px) {
          .umami-menu-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
        .umami-menu-card {
          border: 1px solid rgba(245,236,224,0.1);
          border-radius: 14px;
          padding: 24px;
          background-color: #1c1613;
          will-change: transform;
        }
        .umami-menu-category { font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; margin: 0 0 10px; }
        .umami-menu-title { font-size: 18px; font-weight: 600; color: #f5ece0; margin: 0 0 12px; font-family: var(--font-display, serif); }
        .umami-menu-desc { font-size: 13.5px; line-height: 1.6; color: #c4b6a8; margin: 0 0 18px; }
        .umami-menu-metrics { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 8px; margin-bottom: 16px; }
        .umami-menu-metric { display: flex; flex-direction: column; gap: 2px; padding: 10px 8px; border-radius: 10px; background-color: #231b17; border: 1px solid rgba(245,236,224,0.08); }
        .umami-menu-metric-value { font-family: var(--font-display, serif); font-weight: 600; font-size: 15px; color: #f5ece0; }
        .umami-menu-metric-label { font-size: 9.5px; color: #786a5e; text-transform: uppercase; letter-spacing: 0.02em; }
        .umami-menu-scope { display: flex; flex-wrap: wrap; gap: 8px; }
        .umami-menu-scope-tag { font-size: 11px; font-weight: 500; color: #c4b6a8; border: 1px solid rgba(245,236,224,0.14); border-radius: 100px; padding: 4px 11px; }
      `}</style>
    </section>
  );
}

type Menu = (typeof MENUS)[number];

function TiltCard({ menu, accent, delay }: { menu: Menu; accent: string; delay: number }) {
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
      className="umami-menu-card"
    >
      <p className="umami-menu-category" style={{ color: accent }}>{menu.category}</p>
      <h3 className="umami-menu-title">{menu.title}</h3>
      <p className="umami-menu-desc">{menu.description}</p>
      <div className="umami-menu-metrics">
        {menu.metrics.map((m) => (
          <div key={m.label} className="umami-menu-metric">
            <span className="umami-menu-metric-value" style={{ color: accent }}>{m.value}</span>
            <span className="umami-menu-metric-label">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="umami-menu-scope">
        {menu.scope.map((t) => (
          <span key={t} className="umami-menu-scope-tag">{t}</span>
        ))}
      </div>
    </motion.article>
  );
}
