"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { IMPACT } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#b6752c", "#b1556b", "#b6752c", "#b1556b"];

export default function Impact() {
  return (
    <section id="impact" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f3ecdc" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="By The Bottle" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#2b2015", margin: "16px 0 40px", lineHeight: 1.15 }}>
            A house, not a hobby.
          </h2>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="sil-impact-grid">
          {IMPACT.map((item, i) => (
            <motion.div key={item.label} variants={fadeUp} className="sil-impact-card" style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}>
              <span className="sil-impact-value" style={{ color: ACCENTS[i % ACCENTS.length] }}>
                <Counter value={item.value} decimals={item.decimals ?? 0} prefix={item.prefix ?? ""} suffix={item.suffix ?? ""} />
              </span>
              <span className="sil-impact-label">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .sil-impact-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 16px; }
        .sil-impact-card {
          border: 1px solid rgba(43,32,21,0.14);
          border-top: 3px solid;
          border-radius: 14px;
          padding: 26px 20px;
          background-color: #faf5ea;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sil-impact-value { font-family: var(--font-display, serif); font-weight: 700; font-size: clamp(28px, 4.5vw, 38px); line-height: 1; }
        .sil-impact-label { font-size: 12px; color: #6f5f47; }
        @media (min-width: 760px) {
          .sil-impact-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}

function Counter({ value, decimals = 0, prefix = "", suffix = "" }: { value: number; decimals?: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [isInView, value, decimals]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}
