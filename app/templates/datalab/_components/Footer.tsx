"use client";

import { OWNER } from "../_data/portfolio";
import theme from "../theme.module.css";
import { Globe, Link2, Database } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "48px 0",
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "rgba(10, 10, 12, 0.4)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          width: "100%",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
          className="sm:flex-row"
        >
          {/* Logo brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Database size={16} className="text-[#06b6d4]" />
            <span className={theme.mono} style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-ink)" }}>
              {OWNER.name.replace(" ", "")}
              <span style={{ color: "var(--color-teal)" }}>.py</span>
            </span>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "16px" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: "var(--color-ink-muted)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-teal)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink-muted)")}
            >
              <Globe size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: "var(--color-ink-muted)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-purple)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink-muted)")}
            >
              <Link2 size={18} />
            </a>
          </div>
        </div>

        {/* Divider and copyright */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
            borderTop: "1px solid rgba(255, 255, 255, 0.04)",
            paddingTop: "24px",
            fontSize: "12px",
            color: "var(--color-ink-muted)",
          }}
          className="sm:flex-row"
        >
          <div className={theme.mono}>
            © {currentYear} {OWNER.name} // All models fitted.
          </div>
          <div className={theme.mono} style={{ fontSize: "10px", color: "var(--color-ink-muted)" }}>
            System state: <span style={{ color: "var(--color-emerald)" }}>STABLE</span> | Latency: 12ms
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .sm\\:flex-row { flex-direction: row !important; }
        }
      `}</style>
    </footer>
  );
}
