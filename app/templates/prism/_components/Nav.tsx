"use client";

import { useState, useEffect } from "react";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
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
    <header className="prism-nav" style={{ boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.35)" : "0 4px 16px rgba(0,0,0,0.18)" }}>
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", color: "#f5f4fa" }}>
          <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true">
            <defs>
              <linearGradient id="prism-logo-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2dd9c4" />
                <stop offset="50%" stopColor="#6c63ff" />
                <stop offset="100%" stopColor="#e94fd1" />
              </linearGradient>
            </defs>
            <polygon points="14,3 25,23 3,23" fill="url(#prism-logo-grad)" />
          </svg>
          <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "13.5px", letterSpacing: "-0.01em" }}>{OWNER.name}</span>
        </a>

        <nav className="prism-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "26px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: "14px",
                fontWeight: 600,
                color: "#a8a6c0",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f4fa")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a8a6c0")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: "13.5px",
              fontWeight: 700,
              color: "#0a0a14",
              textDecoration: "none",
              backgroundImage: "linear-gradient(120deg, #2dd9c4, #6c63ff)",
              borderRadius: "100px",
              padding: "10px 20px",
            }}
          >
            Resume
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="prism-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "10px", color: "#f5f4fa" }}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="prism-mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "16.5px", fontWeight: 600, color: "#f5f4fa", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: "14.5px",
              fontWeight: 700,
              color: "#0a0a14",
              textDecoration: "none",
              backgroundImage: "linear-gradient(120deg, #2dd9c4, #6c63ff)",
              borderRadius: "100px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            Resume
          </a>
        </div>
      )}

      <style>{`
        .prism-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background-color: rgba(14,14,24,0.62);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          transition: box-shadow 0.3s ease;
        }
        .prism-mobile-menu {
          background-color: rgba(14,14,24,0.92);
          backdrop-filter: blur(18px);
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        @media (max-width: 768px) {
          .prism-nav-links { display: none !important; }
          .prism-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .prism-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
