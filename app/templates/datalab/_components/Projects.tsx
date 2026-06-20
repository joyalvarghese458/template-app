"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "../_data/portfolio";
import theme from "../theme.module.css";
import { Database, LineChart, Layers, Terminal, ExternalLink, Activity } from "lucide-react";

export default function Projects() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [hoveredDataPoint, setHoveredDataPoint] = useState<{ x: number; y: number; val: string } | null>(null);

  const activeProject = PROJECTS[activeProjectIdx];

  // Helper to scale SVG coordinates
  const getScaledCoords = (x: number, y: number, type: "line" | "scatter" | "bar") => {
    const pad = 30;
    const w = 400 - pad * 2;
    const h = 220 - pad * 2;

    if (type === "line") {
      // X: 0 to 24, Y: 0 to 100
      const sx = pad + (x / 24) * w;
      const sy = pad + h - (y / 100) * h;
      return { x: sx, y: sy };
    } else if (type === "scatter") {
      // X: 0 to 100, Y: 0 to 100
      const sx = pad + (x / 100) * w;
      const sy = pad + h - (y / 100) * h;
      return { x: sx, y: sy };
    } else {
      // Bar Chart: X: 1 to 7, Y: -100 to 100
      const sx = pad + ((x - 1) / 6) * w;
      // Center Y at h/2
      const centerY = pad + h / 2;
      const sy = centerY - (y / 100) * (h / 2);
      return { x: sx, y: sy, cy: centerY };
    }
  };

  return (
    <section
      id="projects"
      style={{
        padding: "100px 0",
        position: "relative",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          width: "100%",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ marginBottom: "40px" }}>
          <span className={theme.mono} style={{ fontSize: "13px", color: "var(--color-teal)", textTransform: "uppercase" }}>
            02 // Research Portfolio
          </span>
          <h2 style={{ fontSize: "32px", fontWeight: 700, marginTop: "8px" }}>Selected Data Sandboxes</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Project Selector list */}
          <div className="lg:col-span-5" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {PROJECTS.map((project, idx) => {
              const isActive = idx === activeProjectIdx;
              return (
                <button
                  key={project.id}
                  onClick={() => {
                    setActiveProjectIdx(idx);
                    setHoveredDataPoint(null);
                  }}
                  className={`${theme.card} ${isActive ? theme.cardPurple : ""}`}
                  style={{
                    textAlign: "left",
                    cursor: "pointer",
                    width: "100%",
                    backgroundColor: isActive ? "rgba(17, 24, 39, 0.95)" : "var(--color-surface-card)",
                    borderColor: isActive ? "var(--color-purple)" : "var(--color-border)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span className={theme.mono} style={{ fontSize: "11px", color: isActive ? "var(--color-teal)" : "var(--color-ink-muted)" }}>
                      {project.category}
                    </span>
                    {isActive && <Activity size={14} className="text-[#06b6d4] animate-pulse" />}
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: isActive ? "var(--color-ink)" : "var(--color-ink-soft)" }}>
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--color-ink-soft)",
                      marginTop: "6px",
                      lineHeight: 1.4,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Analysis & Graph Visualization */}
          <div className="lg:col-span-7">
            <div className={theme.card} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px" }}>
              
              {/* Top Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className={theme.mono} style={{ fontSize: "12px", color: "var(--color-purple)", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Database size={14} />
                    Active Sandbox
                  </span>
                  <div style={{ display: "flex", gap: "6px" }}>
                    {activeProject.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className={theme.mono}
                        style={{ fontSize: "9px", color: "var(--color-ink-soft)", backgroundColor: "var(--color-surface-soft)", padding: "2px 6px", borderRadius: "3px" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>{activeProject.title}</h3>
                    <p style={{ fontSize: "14px", color: "var(--color-ink-soft)", lineHeight: 1.6, marginBottom: "16px" }}>
                      {activeProject.description}
                    </p>

                    {/* Key Metrics */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px", marginBottom: "16px" }}>
                      {activeProject.metrics.map((m) => (
                        <div key={m.label} style={{ borderLeft: "2px solid var(--color-teal)", paddingLeft: "8px" }}>
                          <div style={{ fontSize: "11px", color: "var(--color-ink-muted)", textTransform: "uppercase" }}>{m.label}</div>
                          <div className={theme.mono} style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-ink)" }}>{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Findings list */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span className={theme.mono} style={{ fontSize: "11px", color: "var(--color-ink-muted)" }}>ANALYST_FINDINGS:</span>
                      {activeProject.findings.map((finding, index) => (
                        <div key={index} style={{ fontSize: "13px", display: "flex", gap: "8px", color: "var(--color-ink-soft)" }}>
                          <span style={{ color: "var(--color-teal)" }}>•</span>
                          <span>{finding}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dynamic SVG Plotting Dashboard */}
              <div
                style={{
                  backgroundColor: "rgba(10, 10, 12, 0.5)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  padding: "16px",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span className={theme.mono} style={{ fontSize: "10px", color: "var(--color-ink-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <LineChart size={12} className="text-[#06b6d4]" />
                    visualizer_console_output
                  </span>
                  <span className={theme.mono} style={{ fontSize: "9px", color: "var(--color-teal)" }}>
                    Chart: {activeProject.chartData.type.toUpperCase()}
                  </span>
                </div>

                <div style={{ position: "relative", width: "100%", height: "220px", display: "flex", justifyContent: "center" }}>
                  <svg viewBox="0 0 400 220" style={{ width: "100%", height: "100%" }}>
                    {/* Background grid lines */}
                    <line x1="30" y1="30" x2="370" y2="30" stroke="rgba(255,255,255,0.04)" strokeDasharray="3" />
                    <line x1="30" y1="75" x2="370" y2="75" stroke="rgba(255,255,255,0.04)" strokeDasharray="3" />
                    <line x1="30" y1="120" x2="370" y2="120" stroke="rgba(255,255,255,0.04)" strokeDasharray="3" />
                    <line x1="30" y1="165" x2="370" y2="165" stroke="rgba(255,255,255,0.04)" strokeDasharray="3" />
                    
                    {/* Y-Axis Line */}
                    <line x1="30" y1="20" x2="30" y2="195" stroke="rgba(255,255,255,0.15)" />
                    
                    {/* X-Axis Line */}
                    {activeProject.chartData.type === "bar" ? (
                      // Center X line for bar chart containing negative/positive
                      <line x1="20" y1="120" x2="380" y2="120" stroke="rgba(255,255,255,0.2)" />
                    ) : (
                      <line x1="25" y1="190" x2="380" y2="190" stroke="rgba(255,255,255,0.15)" />
                    )}

                    {/* Rendering charts based on dataset type */}
                    {activeProject.chartData.type === "line" && (() => {
                      // Draw Actual vs Predicted Line path
                      const scaledPoints = activeProject.chartData.data.map((d) => getScaledCoords(d.x, d.y, "line"));
                      const predictedPoints = activeProject.chartData.data.map((d) => getScaledCoords(d.x, d.val2 || d.y, "line"));

                      const pathD = scaledPoints.reduce((acc, p, i) => `${acc} ${i === 0 ? "M" : "L"} ${p.x} ${p.y}`, "");
                      const pathPred = predictedPoints.reduce((acc, p, i) => `${acc} ${i === 0 ? "M" : "L"} ${p.x} ${p.y}`, "");

                      return (
                        <>
                          {/* Predicted dashed purple path */}
                          <motion.path
                            d={pathPred}
                            fill="none"
                            stroke="var(--color-purple)"
                            strokeWidth="2"
                            strokeDasharray="4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8 }}
                          />
                          {/* Actual solid teal path */}
                          <motion.path
                            d={pathD}
                            fill="none"
                            stroke="var(--color-teal)"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                          {/* Data points */}
                          {activeProject.chartData.data.map((d, i) => {
                            const p = scaledPoints[i];
                            return (
                              <circle
                                key={i}
                                cx={p.x}
                                cy={p.y}
                                r="4"
                                fill="#fff"
                                stroke="var(--color-teal)"
                                strokeWidth="2"
                                style={{ cursor: "pointer" }}
                                onMouseEnter={(e) => {
                                  setHoveredDataPoint({ x: p.x, y: p.y - 12, val: `Actual: ${d.y} kW` });
                                }}
                                onMouseLeave={() => setHoveredDataPoint(null)}
                              />
                            );
                          })}
                        </>
                      );
                    })()}

                    {activeProject.chartData.type === "scatter" && (() => {
                      return activeProject.chartData.data.map((d, i) => {
                        const p = getScaledCoords(d.x, d.y, "scatter");
                        // Color based on segment name label
                        let color = "var(--color-teal)";
                        if (d.label === "Big Spenders") color = "var(--color-purple)";
                        if (d.label === "At Risk") color = "var(--color-amber)";
                        if (d.label === "Hibernating") color = "#ef4444";

                        return (
                          <motion.circle
                            key={i}
                            cx={p.x}
                            cy={p.y}
                            r="5"
                            fill={color}
                            opacity="0.8"
                            style={{ cursor: "pointer" }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.04 }}
                            onMouseEnter={(e) => {
                              setHoveredDataPoint({ x: p.x, y: p.y - 12, val: `${d.label} (${d.x}, ${d.y})` });
                            }}
                            onMouseLeave={() => setHoveredDataPoint(null)}
                          />
                        );
                      });
                    })()}

                    {activeProject.chartData.type === "bar" && (() => {
                      return activeProject.chartData.data.map((d, i) => {
                        const p = getScaledCoords(d.x, d.y, "bar");
                        const isPositive = d.y >= 0;
                        const barHeight = Math.abs(p.y - (p.cy || 120));
                        const barY = isPositive ? p.y : (p.cy || 120);

                        return (
                          <g key={i}>
                            <motion.rect
                              x={p.x - 8}
                              y={barY}
                              width="16"
                              height={barHeight}
                              fill={isPositive ? "var(--color-emerald)" : "var(--color-amber)"}
                              rx="2"
                              opacity="0.8"
                              style={{ cursor: "pointer", transformOrigin: `50% ${p.cy}px` }}
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ duration: 0.5, delay: i * 0.05 }}
                              onMouseEnter={(e) => {
                                setHoveredDataPoint({ x: p.x, y: p.y - 12, val: `Sentiment: ${d.y}%` });
                              }}
                              onMouseLeave={() => setHoveredDataPoint(null)}
                            />
                            {/* X Label */}
                            <text
                              x={p.x}
                              y="210"
                              fill="var(--color-ink-muted)"
                              fontSize="9"
                              fontFamily="var(--font-mono)"
                              textAnchor="middle"
                            >
                              {d.label}
                            </text>
                          </g>
                        );
                      });
                    })()}

                    {/* SVG labels X-axis for line / scatter */}
                    {activeProject.chartData.type !== "bar" && (
                      <>
                        <text x="30" y="205" fill="var(--color-ink-muted)" fontSize="8" fontFamily="var(--font-mono)">0</text>
                        <text x="200" y="205" fill="var(--color-ink-muted)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">Midrange</text>
                        <text x="370" y="205" fill="var(--color-ink-muted)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="end">Maximum</text>
                      </>
                    )}
                  </svg>

                  {/* Tooltip Overlay */}
                  {hoveredDataPoint && (
                    <div
                      className={theme.mono}
                      style={{
                        position: "absolute",
                        left: `${(hoveredDataPoint.x / 400) * 100}%`,
                        top: `${(hoveredDataPoint.y / 220) * 100}%`,
                        transform: "translate(-50%, -100%)",
                        backgroundColor: "#000",
                        color: "#fff",
                        fontSize: "9px",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        border: "1px solid var(--color-teal)",
                        pointerEvents: "none",
                        whiteSpace: "nowrap",
                        zIndex: 20,
                      }}
                    >
                      {hoveredDataPoint.val}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .lg\\:col-span-5 { grid-column: span 5 / span 12 !important; }
          .lg\\:col-span-7 { grid-column: span 7 / span 12 !important; }
        }
      `}</style>
    </section>
  );
}
