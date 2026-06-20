"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import DataVisualization3D from "./DataVisualization3D";
import theme from "../theme.module.css";
import { Play, ShieldAlert, Cpu, Award, Code2 } from "lucide-react";

export default function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const fullText = "student.optimize_fit(epochs=100, optimizer='adam')";
    let currentIdx = 0;
    
    const interval = setInterval(() => {
      if (currentIdx < fullText.length) {
        setTerminalText((prev) => prev + fullText.charAt(currentIdx));
        currentIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowOutput(true), 600);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "calc(var(--nav-height) + 40px)",
        paddingBottom: "60px",
      }}
    >
      {/* Background patterns */}
      <div className={theme.gridBackdrop} />
      <div className={theme.glowOrbs}>
        <div className={theme.orb1} />
        <div className={theme.orb2} />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "var(--max-width)",
          width: "100%",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Info & Terminal */}
          <div className="lg:col-span-7" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* High-tech prompt */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={theme.card}
              style={{
                maxWidth: "480px",
                padding: "12px 16px",
                backgroundColor: "rgba(17, 24, 39, 0.8)",
                borderColor: "rgba(6, 182, 212, 0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  paddingBottom: "8px",
                  marginBottom: "8px",
                }}
              >
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fbbf24" }} />
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
                </div>
                <span className={theme.mono} style={{ fontSize: "10px", color: "var(--color-ink-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                  <Code2 size={12} className="text-[#8b5cf6]" />
                  train_pipeline.py
                </span>
              </div>
              <div className={theme.mono} style={{ fontSize: "12px" }}>
                <span style={{ color: "var(--color-teal)" }}>&gt;&gt;&gt;&nbsp;</span>
                <span>{terminalText}</span>
                <span className="blink-cursor">|</span>
                
                {showOutput && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: "var(--color-emerald)", marginTop: "8px" }}
                  >
                    ✓ Fitting successful. RMSE: 0.042, Accuracy: 96.6%
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span
                className={theme.mono}
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                  letterSpacing: "2px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "12px",
                }}
              >
                <Cpu size={14} />
                {OWNER.university}
              </span>
              <h1
                style={{
                  fontSize: "clamp(34px, 5vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-1px",
                  marginBottom: "16px",
                }}
              >
                Unlocking patterns in{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--color-teal), var(--color-purple))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  high-dimensional noise.
                </span>
              </h1>
              <p
                style={{
                  fontSize: "17px",
                  color: "var(--color-ink-soft)",
                  lineHeight: 1.6,
                  maxWidth: "550px",
                }}
              >
                Hi, I&apos;m <strong>{OWNER.name}</strong>. {OWNER.subtagline}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "8px" }}
            >
              <a href="#projects" className={`${theme.btn} ${theme.btnPrimary}`}>
                <Play size={14} />
                <span>Explore Notebooks</span>
              </a>
              <a href="#contact" className={`${theme.btn} ${theme.btnOutline}`}>
                <span>Contact Analyst</span>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "16px",
                borderTop: "1px solid var(--color-border)",
                paddingTop: "24px",
                marginTop: "16px",
              }}
              className="stats-grid"
            >
              {OWNER.stats.map((stat, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span
                    className={theme.mono}
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: i % 2 === 0 ? "var(--color-teal)" : "var(--color-purple)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-ink-soft)", textTransform: "uppercase" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - 3D Visualizer & Model Card */}
          <div className="lg:col-span-5" style={{ position: "relative", minHeight: "450px" }}>
            {/* Visualizer Backdrop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                borderRadius: "20px",
                border: "1px dashed rgba(255,255,255,0.06)",
                background: "rgba(17, 24, 39, 0.3)",
              }}
            >
              <DataVisualization3D />
            </motion.div>

            {/* Floating Model Card containing common-hero.webp */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 60 }}
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "20px",
                width: "220px",
                zIndex: 2,
                backgroundColor: "rgba(17, 24, 39, 0.9)",
                border: "1px solid var(--color-border-hover)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              }}
              className="hover:scale-105 transition-transform duration-300"
            >
              <div
                style={{
                  background: "linear-gradient(135deg, var(--color-teal), var(--color-purple))",
                  padding: "6px 12px",
                  fontSize: "9px",
                  fontWeight: 700,
                  fontFamily: "var(--font-mono)",
                  color: "#000",
                  letterSpacing: "1px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>DATA_STREAM_NODE</span>
                <span className="live-pulse" />
              </div>
              <div style={{ position: "relative", width: "100%", height: "180px", background: "#0a0a0c" }}>
                <Image
                  src="/common-hero.webp"
                  alt={`${OWNER.name} portrait`}
                  fill
                  priority
                  sizes="220px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div style={{ padding: "12px", fontSize: "11px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--color-ink-muted)" }}>STUDENT</span>
                  <span className={theme.mono} style={{ color: "var(--color-teal)" }}>{OWNER.name}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--color-ink-muted)" }}>MAJOR</span>
                  <span className={theme.mono} style={{ color: "var(--color-ink)" }}>DATA SCIENCE</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--color-ink-muted)" }}>R2 SCORE</span>
                  <span className={theme.mono} style={{ color: "var(--color-emerald)" }}>0.966</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .blink-cursor {
          animation: blink 1s step-end infinite;
          color: var(--color-teal);
          font-weight: bold;
        }
        @keyframes blink {
          from, to { color: transparent }
          50% { color: var(--color-teal) }
        }
        .live-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #10b981;
          box-shadow: 0 0 6px #10b981;
          animation: pulse 1.5s infinite alternate;
        }
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.6; }
          100% { transform: scale(1.3); opacity: 1; }
        }
        @media (min-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }
        @media (min-width: 1024px) {
          .lg\\:col-span-7 { grid-column: span 7 / span 12 !important; }
          .lg\\:col-span-5 { grid-column: span 5 / span 12 !important; }
        }
      `}</style>
    </section>
  );
}
