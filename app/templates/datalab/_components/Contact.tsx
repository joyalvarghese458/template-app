"use client";

import { useState } from "react";
import { OWNER } from "../_data/portfolio";
import theme from "../theme.module.css";
import { Send, Terminal, Loader2, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    // Simulate database commit latency
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 0",
        position: "relative",
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
            06 // Connect
          </span>
          <h2 style={{ fontSize: "32px", fontWeight: 700, marginTop: "8px" }}>Initialize Contact</h2>
        </div>

        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div className={theme.card} style={{ padding: 0, overflow: "hidden", backgroundColor: "rgba(17, 24, 39, 0.85)" }}>
            {/* Terminal Top Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                backgroundColor: "var(--color-surface)",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <div style={{ display: "flex", gap: "6px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fbbf24" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
              </div>
              <span className={theme.mono} style={{ fontSize: "10px", color: "var(--color-ink-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                <Terminal size={12} className="text-[#06b6d4]" />
                query_buffer_commit.sh
              </span>
            </div>

            {/* Terminal Body Form */}
            <form onSubmit={handleSubmit} style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label className={theme.mono} style={{ fontSize: "11px", color: "var(--color-ink-muted)" }}>
                  INSERT_NAME:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    backgroundColor: "var(--color-surface-soft)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "6px",
                    padding: "10px 14px",
                    color: "var(--color-ink)",
                    fontSize: "14px",
                    width: "100%",
                    outline: "none",
                  }}
                  className="focus:border-[#06b6d4] transition-colors"
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label className={theme.mono} style={{ fontSize: "11px", color: "var(--color-ink-muted)" }}>
                  INSERT_EMAIL:
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. jane@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    backgroundColor: "var(--color-surface-soft)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "6px",
                    padding: "10px 14px",
                    color: "var(--color-ink)",
                    fontSize: "14px",
                    width: "100%",
                    outline: "none",
                  }}
                  className="focus:border-[#06b6d4] transition-colors"
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label className={theme.mono} style={{ fontSize: "11px", color: "var(--color-ink-muted)" }}>
                  INSERT_MESSAGE:
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your dataset pipeline or project query..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    backgroundColor: "var(--color-surface-soft)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "6px",
                    padding: "10px 14px",
                    color: "var(--color-ink)",
                    fontSize: "14px",
                    width: "100%",
                    resize: "none",
                    outline: "none",
                  }}
                  className="focus:border-[#06b6d4] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`${theme.btn} ${theme.btnPrimary}`}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "12px",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Committing to database...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span className={theme.mono}>&gt;&gt;&nbsp;execute_commit()</span>
                  </>
                )}
              </button>

              {/* Status alerts */}
              {status === "success" && (
                <div
                  className={theme.mono}
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid var(--color-emerald)",
                    borderRadius: "6px",
                    color: "var(--color-emerald)",
                    padding: "12px",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  ✓ Query commit successful. Buffer updated. 
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
