"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import theme from "../theme.module.css";
import { GraduationCap, MapPin, ChevronLeft, ChevronRight, BookOpen, Layers } from "lucide-react";

interface CourseInfo {
  title: string;
  code: string;
  focus: string[];
  description: string;
}

const COURSES: CourseInfo[] = [
  {
    title: "Machine Learning & Pattern Recognition",
    code: "DS-401",
    focus: ["Regression Models", "Ensemble Methods", "Clustering Algorithms", "Dimensionality Reduction"],
    description: "Detailed study of supervised and unsupervised learning techniques. Projects involved building classification pipelines from raw scratch files to testing custom estimators.",
  },
  {
    title: "Deep Learning for NLP & CV",
    code: "DS-420",
    focus: ["Feedforward & Convolutional Networks", "RNNs & LSTMs", "Transformers & Attention", "Fine-tuning Models"],
    description: "Hands-on application of deep neural networks. Built computer vision models for segmentation and trained sequential models on NLP datasets.",
  },
  {
    title: "Applied Probability & Bayesian Inference",
    code: "STAT-310",
    focus: ["Conditional Probability", "Markov Chain Monte Carlo", "Hypothesis Testing", "Bayesian Estimation"],
    description: "Mathematical modeling of statistical processes. Designed simulation models using Monte Carlo sampling to predict outcomes of complex queues.",
  },
  {
    title: "Advanced Database Systems & SQL",
    code: "CS-350",
    focus: ["Query Optimization", "Window Functions & CTEs", "NoSQL Architectures", "Distributed Transactions"],
    description: "Deep dive into query performance tuning, index structuring, and comparing relational models against schema-less graphs like Neo4j.",
  },
  {
    title: "Big Data Architecture",
    code: "DS-480",
    focus: ["Apache Spark", "Hadoop Distributed File System", "Data Lakes", "Stream Processing via Kafka"],
    description: "Focused on horizontal scaling of compute resources. Executed distributed map-reduce queries on datasets exceeding 500 million transaction logs.",
  },
  {
    title: "Data Visualization & Storytelling",
    code: "DS-330",
    focus: ["Tableau Dashboards", "D3.js Custom SVGs", "Aesthetics & Visual Hierarchy", "Dashboard UX"],
    description: "Aesthetic principles of displaying complex metrics. Focused on creating cognitive-friendly grids and dashboards targeting non-technical audiences.",
  },
];

export default function About() {
  const [courseIdx, setCourseIdx] = useState(0);

  const nextCourse = () => {
    setCourseIdx((prev) => (prev + 1) % COURSES.length);
  };

  const prevCourse = () => {
    setCourseIdx((prev) => (prev - 1 + COURSES.length) % COURSES.length);
  };

  const active = COURSES[courseIdx];

  return (
    <section
      id="about"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Biography */}
          <div className="lg:col-span-6" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <span className={theme.mono} style={{ fontSize: "13px", color: "var(--color-teal)", textTransform: "uppercase" }}>
                01 // Student Profile
              </span>
              <h2 style={{ fontSize: "32px", fontWeight: 700, marginTop: "8px" }}>Academic Journey</h2>
            </div>
            
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.7, fontSize: "16px" }}>
              {OWNER.bio}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ padding: "8px", borderRadius: "6px", backgroundColor: "rgba(6, 182, 212, 0.1)", color: "var(--color-teal)" }}>
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600 }}>{OWNER.degree}</div>
                  <div style={{ fontSize: "12px", color: "var(--color-ink-soft)" }}>GPA: {OWNER.gpa}</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ padding: "8px", borderRadius: "6px", backgroundColor: "rgba(139, 92, 246, 0.1)", color: "var(--color-purple)" }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600 }}>{OWNER.location}</div>
                  <div style={{ fontSize: "12px", color: "var(--color-ink-soft)" }}>Available for worldwide roles</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Coursework Slideshow */}
          <div className="lg:col-span-6">
            <div className={theme.card} style={{ position: "relative", minHeight: "360px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-teal)" }}>
                    <BookOpen size={18} />
                    <span className={theme.mono} style={{ fontSize: "12px", fontWeight: 600 }}>Core Coursework</span>
                  </div>
                  <span className={theme.mono} style={{ fontSize: "11px", color: "var(--color-ink-soft)" }}>
                    {active.code}
                  </span>
                </div>

                {/* Animated Slideshow Container */}
                <div style={{ position: "relative", overflow: "hidden", minHeight: "180px" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={courseIdx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "var(--color-ink)" }}>
                        {active.title}
                      </h3>
                      <p style={{ fontSize: "14px", color: "var(--color-ink-soft)", lineHeight: 1.6, marginBottom: "16px" }}>
                        {active.description}
                      </p>

                      {/* Course Core Focus points */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {active.focus.map((f, i) => (
                          <span
                            key={i}
                            className={theme.mono}
                            style={{
                              fontSize: "10px",
                              backgroundColor: "var(--color-surface-soft)",
                              border: "1px solid var(--color-border)",
                              borderRadius: "4px",
                              padding: "4px 8px",
                              color: "var(--color-purple)",
                            }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation Controls */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "24px",
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: "16px",
                }}
              >
                {/* Dots indicators */}
                <div style={{ display: "flex", gap: "6px" }}>
                  {COURSES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCourseIdx(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        border: "none",
                        backgroundColor: i === courseIdx ? "var(--color-teal)" : "var(--color-border)",
                        cursor: "pointer",
                        padding: 0,
                        transition: "background-color 0.2s",
                      }}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={prevCourse}
                    style={{
                      padding: "6px",
                      borderRadius: "4px",
                      border: "1px solid var(--color-border)",
                      backgroundColor: "transparent",
                      color: "var(--color-ink)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-teal)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                    aria-label="Previous course"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextCourse}
                    style={{
                      padding: "6px",
                      borderRadius: "4px",
                      border: "1px solid var(--color-border)",
                      backgroundColor: "transparent",
                      color: "var(--color-ink)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-teal)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                    aria-label="Next course"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .lg\\:col-span-6 { grid-column: span 6 / span 12 !important; }
        }
      `}</style>
    </section>
  );
}
