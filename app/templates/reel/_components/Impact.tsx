"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { IMPACT } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#d1263f", "#c9a15a", "#d1263f", "#c9a15a"];

export default function Impact() {
  return (
    <section id="impact" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#14100c" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="By The Numbers" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, textTransform: "uppercase", fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f3ece1", margin: "16px 0 40px", lineHeight: 1.15 }}>
            A reel, not a résumé.
          </h2>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="rl-impact-grid">
          {IMPACT.map((item, i) => (
            <motion.div key={item.label} variants={fadeUp} className="rl-impact-card" style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}>
              <span className="rl-impact-value" style={{ color: ACCENTS[i % ACCENTS.length] }}>
                <Counter value={item.value} decimals={item.decimals ?? 0} prefix={item.prefix ?? ""} suffix={item.suffix ?? ""} />
              </span>
              <span className="rl-impact-label">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .rl-impact-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 16px; }
        .rl-impact-card {
          border: 1px solid rgba(201,161,90,0.2);
          border-top: 3px solid;
          border-radius: 12px;
          padding: 26px 20px;
          background-color: #1c1611;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .rl-impact-value { font-family: var(--font-mono, monospace); font-weight: 700; font-size: clamp(26px, 4.5vw, 36px); line-height: 1; }
        .rl-impact-label { font-size: 12px; color: #b7a996; }
        @media (min-width: 760px) {
          .rl-impact-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
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
