"use client";

import { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { PASS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const TOTAL = PASS.length;
const WINDOW = 1 / TOTAL;

const noopSubscribe = () => () => {};

// Each plate's position is driven by scroll-linked MotionValues — a client-only
// concept. Deferring first render to the client avoids a hydration mismatch
// from framer-motion's scroll-linked values resolving differently between the
// SSR pass (scroll position 0) and the live client render.
function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

export default function Pass() {
  const isClient = useIsClient();
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] });

  const activeIndex = useTransform(scrollYProgress, (v) => {
    const i = Math.floor(v * TOTAL);
    return Math.min(Math.max(i, 0), TOTAL - 1);
  });
  const activeName = useTransform(activeIndex, (i) => PASS[i].name);
  const counter = useTransform(activeIndex, (i) => `COURSE ${String(i + 1).padStart(2, "0")} / ${String(TOTAL).padStart(2, "0")}`);

  return (
    <section id="pass" style={{ backgroundColor: "#15110f" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(56px, 9vw, 112px) 20px 0" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="The Pass" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.6vw, 40px)", color: "#f5ece0", margin: "16px 0 8px", lineHeight: 1.2 }}>
            Six courses, sent one at a time.
          </h2>
          <p style={{ fontSize: "14px", color: "#c4b6a8", margin: 0, maxWidth: "480px" }}>
            Keep scrolling — each course rises onto the pass, holds for service, then clears for the next.
          </p>
        </motion.div>
      </div>

      <div ref={runwayRef} style={{ position: "relative", height: `${TOTAL * 80}vh` }}>
        <div className="umami-pass-sticky">
          <div className="umami-pass-stage">
            {isClient && PASS.map((item, i) => (
              <PassPlate key={item.name} item={item} index={i} scrollYProgress={scrollYProgress} />
            ))}
          </div>

          <div className="umami-pass-readout">
            <span className="umami-pass-readout-label">Now Serving</span>
            <motion.span className="umami-pass-readout-val">{activeName}</motion.span>
            <motion.span className="umami-pass-readout-counter">{counter}</motion.span>
          </div>
        </div>
      </div>

      <style>{`
        .umami-pass-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .umami-pass-stage { position: relative; perspective: 1200px; width: 1px; height: 1px; }
        .umami-pass-plate {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(240px, 72vw, 420px);
          height: clamp(300px, 78vw, 480px);
          margin-left: calc(clamp(240px, 72vw, 420px) / -2);
          margin-top: calc(clamp(300px, 78vw, 480px) / -2);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(245,236,224,0.14);
          background-color: #1c1613;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }
        .umami-pass-plate-photo { position: absolute; inset: 0; }
        .umami-pass-plate-scrim {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to top, rgba(21,17,15,0.92) 0%, rgba(21,17,15,0.25) 45%, transparent 70%);
        }
        .umami-pass-plate-copy {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 22px 24px;
        }
        .umami-pass-plate-course { font-family: var(--font-display, serif); font-size: 12px; font-weight: 600; color: #ff8a4c; letter-spacing: 0.04em; }
        .umami-pass-plate-name { font-family: var(--font-display, serif); font-size: clamp(26px, 4vw, 34px); font-weight: 600; color: #f5ece0; margin: 6px 0 8px; }
        .umami-pass-plate-desc { font-size: 13.5px; line-height: 1.6; color: #c4b6a8; margin: 0; max-width: 360px; }
        .umami-pass-steam {
          position: absolute;
          width: 16px;
          height: 56px;
          border-radius: 50%;
          background-image: linear-gradient(to top, rgba(245,236,224,0.3), transparent);
          filter: blur(4px);
          top: 10%;
          left: 30%;
          animation: umami-pass-steam-rise 4s ease-in infinite;
        }
        @keyframes umami-pass-steam-rise {
          0% { transform: translateY(10px) scaleY(0.7); opacity: 0; }
          25% { opacity: 0.7; }
          80% { opacity: 0; }
          100% { transform: translateY(-46px) scaleY(1.25); opacity: 0; }
        }
        .umami-pass-readout {
          position: absolute;
          bottom: 7%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
          z-index: 30;
        }
        .umami-pass-readout-label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; color: #786a5e; text-transform: uppercase; }
        .umami-pass-readout-val { font-family: var(--font-display, serif); font-size: 20px; font-weight: 600; color: #f5ece0; }
        .umami-pass-readout-counter { font-size: 11px; font-weight: 600; letter-spacing: 0.06em; color: #e8552c; }
        @media (max-width: 600px) {
          .umami-pass-readout { bottom: 5%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .umami-pass-steam { animation: none; }
        }
      `}</style>
    </section>
  );
}

function PassPlate({
  item, index, scrollYProgress,
}: {
  item: (typeof PASS)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const t0 = index * WINDOW;
  const t1 = t0 + WINDOW;
  const enterEnd = t0 + WINDOW * 0.35;
  const holdEnd = t0 + WINDOW * 0.7;
  const stops = [t0, enterEnd, holdEnd, t1];

  const y = useTransform(scrollYProgress, stops, [140, 0, 0, -170]);
  const z = useTransform(scrollYProgress, stops, [-260, 0, 0, 90]);
  const scale = useTransform(scrollYProgress, stops, [0.72, 1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, stops, [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, stops, [-6, 0, 0, 4]);

  return (
    <motion.div
      className="umami-pass-plate"
      style={{ y, z, scale, opacity, rotate, zIndex: index + 1 }}
    >
      <div className="umami-pass-plate-photo">
        <Image src={item.image} alt={`${item.name} — ${item.desc}`} fill sizes="(max-width: 700px) 72vw, 420px" style={{ objectFit: "cover" }} />
      </div>
      <span aria-hidden="true" className="umami-pass-steam" />
      <div className="umami-pass-plate-scrim" />
      <div className="umami-pass-plate-copy">
        <span className="umami-pass-plate-course">COURSE {item.course}</span>
        <h3 className="umami-pass-plate-name">{item.name}</h3>
        <p className="umami-pass-plate-desc">{item.desc}</p>
      </div>
    </motion.div>
  );
}
