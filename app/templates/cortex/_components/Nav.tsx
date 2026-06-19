"use client";

import { useState, useEffect } from "react";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(10,14,23,0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 24px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", color: "#eef1f8" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="6" cy="6" r="2.4" fill="#22d3ee" />
            <circle cx="18" cy="6" r="2.4" fill="#8b5cf6" />
            <circle cx="12" cy="18" r="2.4" fill="#fbbf24" />
            <path d="M7.7 7.3L10.8 16M16.3 7.3L13.2 16M8.4 6h7.2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
          </svg>
          <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "-0.01em" }}>{OWNER.name}</span>
        </a>

        <nav className="cortex-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "28px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "13px",
                color: "#8b93ab",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#eef1f8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8b93ab")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "13px",
              fontWeight: 600,
              color: "#0a0e17",
              textDecoration: "none",
              backgroundImage: "linear-gradient(120deg, #8b5cf6, #22d3ee)",
              borderRadius: "6px",
              padding: "9px 18px",
            }}
          >
            Resume
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="cortex-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#eef1f8" }}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            backgroundColor: "#0a0e17",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "16px", color: "#eef1f8", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "14px",
              fontWeight: 600,
              color: "#0a0e17",
              textDecoration: "none",
              backgroundImage: "linear-gradient(120deg, #8b5cf6, #22d3ee)",
              borderRadius: "6px",
              padding: "10px 20px",
              textAlign: "center",
            }}
          >
            Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .cortex-nav-links { display: none !important; }
          .cortex-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .cortex-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
