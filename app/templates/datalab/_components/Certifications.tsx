"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATIONS } from "../_data/portfolio";
import theme from "../theme.module.css";
import { Award, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  const [certIdx, setCertIdx] = useState(0);

  const nextCert = () => {
    setCertIdx((prev) => (prev + 1) % CERTIFICATIONS.length);
  };

  const prevCert = () => {
    setCertIdx((prev) => (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length);
  };

  const active = CERTIFICATIONS[certIdx];

  return (
    <section
      id="certifications"
      style={{
        padding: "80px 0",
        position: "relative",
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "rgba(17, 24, 39, 0.2)",
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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "40px" }}>
          <span className={theme.mono} style={{ fontSize: "13px", color: "var(--color-teal)", textTransform: "uppercase" }}>
            05 // Credentials
          </span>
          <h2 style={{ fontSize: "32px", fontWeight: 700, marginTop: "8px" }}>Verified Accomplishments</h2>
        </div>

        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div
            className={theme.card}
            style={{
              position: "relative",
              minHeight: "260px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "rgba(17, 24, 39, 0.8)",
              borderColor: "var(--color-purple)",
            }}
          >
            <div>
              {/* Badge header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <span className={theme.mono} style={{ fontSize: "10px", color: "var(--color-ink-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Award size={14} className="text-[#8b5cf6]" />
                  verified_credential_key
                </span>
                <span className={theme.mono} style={{ fontSize: "10px", color: "var(--color-emerald)", display: "flex", alignItems: "center", gap: "4px" }}>
                  <CheckCircle2 size={12} />
                  ACTIVE
                </span>
              </div>

              {/* Animated Slideshow */}
              <div style={{ position: "relative", overflow: "hidden", minHeight: "130px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={certIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                  >
                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-ink)", lineHeight: 1.3 }}>
                      {active.title}
                    </h3>
                    <div style={{ fontSize: "14px", color: "var(--color-teal)" }}>
                      Issuer: <strong>{active.issuer}</strong>
                    </div>
                    {active.credentialId && (
                      <div className={theme.mono} style={{ fontSize: "11px", color: "var(--color-ink-muted)", marginTop: "4px" }}>
                        ID: {active.credentialId} | Date: {active.date}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
                borderTop: "1px solid var(--color-border)",
                paddingTop: "16px",
              }}
            >
              {/* Slides Dots */}
              <div style={{ display: "flex", gap: "6px" }}>
                {CERTIFICATIONS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCertIdx(i)}
                    aria-label={`Go to credential ${i + 1}`}
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      border: "none",
                      backgroundColor: i === certIdx ? "var(--color-purple)" : "var(--color-border)",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={prevCert}
                  style={{
                    padding: "6px",
                    borderRadius: "4px",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "transparent",
                    color: "var(--color-ink)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-purple)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                  aria-label="Previous certification"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextCert}
                  style={{
                    padding: "6px",
                    borderRadius: "4px",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "transparent",
                    color: "var(--color-ink)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-purple)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                  aria-label="Next certification"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
