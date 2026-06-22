"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { IMPACT } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";

export default function Impact() {
  return (
    <section id="impact" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#123825" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <span style={{ fontFamily: "var(--font-display, serif)", fontSize: "13px", fontWeight: 700, color: "#d8b563" }}>05</span>
            <span style={{ width: "24px", height: "2px", backgroundColor: "#d8b563" }} />
            <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "12px", fontWeight: 600, color: "rgba(248,243,231,0.65)", letterSpacing: "0.07em", textTransform: "uppercase" }}>
              By The Numbers
            </span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 5vw, 42px)", color: "#f8f3e7", margin: "0 0 40px", lineHeight: 1.15 }}>
            The closing balance.
          </h2>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="ledger-impact-grid">
          {IMPACT.map((item) => (
            <motion.div key={item.label} variants={fadeUp} className="ledger-impact-card">
              <span className="ledger-impact-value">
                <CountUp target={item.target} decimals={item.decimals} prefix={item.prefix} suffix={item.suffix} />
              </span>
              <span className="ledger-impact-label">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .ledger-impact-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 20px; }
        @media (min-width: 760px) {
          .ledger-impact-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
        .ledger-impact-card {
          border: 1px solid rgba(248,243,231,0.14);
          border-radius: 10px;
          padding: 26px 20px;
          background-color: rgba(248,243,231,0.04);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ledger-impact-value { font-family: var(--font-display, serif); font-weight: 600; font-size: clamp(26px, 4vw, 34px); color: #d8b563; }
        .ledger-impact-label { font-size: 12.5px; line-height: 1.5; color: rgba(248,243,231,0.7); }
      `}</style>
    </section>
  );
}

function CountUp({
  target, decimals = 0, prefix = "", suffix = "",
}: { target: number; decimals?: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [isInView, target, count]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
