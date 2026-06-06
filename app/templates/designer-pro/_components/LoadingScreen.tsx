"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Design", "Create", "Inspire"];
const DURATION = 900;

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);
  const doneRef = useRef(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      const next = Math.round(progress * 100);
      setCount(next);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else if (!doneRef.current) {
        doneRef.current = true;
        setTimeout(onComplete, 150);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 300);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col select-none"
      style={{ backgroundColor: "hsl(0 0% 4%)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top-left label */}
      <motion.span
        className="absolute top-6 left-6 text-xs uppercase tracking-[0.3em]"
        style={{ color: "hsl(0 0% 53%)" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Portfolio
      </motion.span>

      {/* Center rotating word */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={wordIndex}
            className="text-4xl md:text-6xl lg:text-7xl italic select-none"
            style={{
              fontFamily: "var(--dp-font-display, var(--font-serif, serif))",
              color: "hsl(0 0% 96% / 0.8)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {WORDS[wordIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Bottom-right counter */}
      <span
        className="absolute bottom-12 right-6 text-6xl md:text-8xl lg:text-9xl tabular-nums select-none"
        style={{
          fontFamily: "var(--dp-font-display, var(--font-serif, serif))",
          color: "hsl(0 0% 96%)",
        }}
      >
        {String(count).padStart(3, "0")}
      </span>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ backgroundColor: "hsl(0 0% 12% / 0.5)" }}
      >
        <div
          ref={progressRef}
          className="h-full origin-left"
          style={{
            background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
            transform: "scaleX(0)",
          }}
        />
      </div>
    </motion.div>
  );
}
