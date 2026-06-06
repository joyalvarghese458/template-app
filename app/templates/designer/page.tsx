"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Work from "./_components/Work";
import Services from "./_components/Services";
import About from "./_components/About";
import Footer from "./_components/Footer";
import { useLenis } from "./_hooks/useLenis";
import styles from "./theme.module.css";

/* ─── Loading screen ────────────────────────────────────────────── */
const LOAD_DURATION = 800;

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);
  const doneRef = useRef(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const p = Math.min((now - startRef.current) / LOAD_DURATION, 1);
      setCount(Math.round(p * 100));
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else if (!doneRef.current) {
        doneRef.current = true;
        setTimeout(onComplete, 120);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
      style={{ backgroundColor: "hsl(28 8% 5%)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Logo */}
      <motion.div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl italic mb-12 flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, #E2B96A, #C07A2E)",
          color: "#0d0a07",
          fontFamily: "var(--font-serif, Georgia, serif)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        SC
      </motion.div>

      {/* Counter */}
      <span
        className="text-7xl md:text-9xl tabular-nums font-light"
        style={{
          fontFamily: "var(--font-serif, Georgia, serif)",
          color: "hsl(38 25% 93%)",
        }}
      >
        {String(count).padStart(3, "0")}
      </span>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ backgroundColor: "hsl(28 7% 12%)" }}
      >
        <div
          ref={barRef}
          className="h-full origin-left"
          style={{
            background: "linear-gradient(90deg, #E2B96A, #C07A2E)",
            transform: "scaleX(0)",
          }}
        />
      </div>

      {/* Label */}
      <p
        className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em]"
        style={{ color: "hsl(30 8% 35%)" }}
      >
        Portfolio — Sofia Chen
      </p>
    </motion.div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */
export default function DesignerPage() {
  const [loaded, setLoaded] = useState(false);
  useLenis();

  return (
    <div className={styles.page}>
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      <Nav />
      <Hero ready={loaded} />
      <Work />
      <Services />
      <About />
      <Footer />
    </div>
  );
}
