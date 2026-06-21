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
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(247,243,234,0.9)" : "transparent",
        borderBottom: scrolled ? "2px solid #14110f" : "2px solid transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", color: "#14110f" }}>
          <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true">
            <circle cx="11" cy="11" r="8" fill="#f5c518" />
            <rect x="13" y="13" width="13" height="13" fill="#e8402c" />
            <circle cx="11" cy="11" r="8" fill="none" stroke="#14110f" strokeWidth="1.6" />
            <rect x="13" y="13" width="13" height="13" fill="none" stroke="#14110f" strokeWidth="1.6" />
          </svg>
          <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "14px", letterSpacing: "-0.01em" }}>{OWNER.name}</span>
        </a>

        <nav className="canvas-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "26px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: "14.5px",
                fontWeight: 600,
                color: "#5b5448",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#14110f")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5b5448")}
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
              color: "#f7f3ea",
              textDecoration: "none",
              backgroundColor: "#14110f",
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
          className="canvas-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "10px", color: "#14110f" }}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            backgroundColor: "#f7f3ea",
            borderTop: "2px solid #14110f",
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
              style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "17px", fontWeight: 600, color: "#14110f", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: "15px",
              fontWeight: 700,
              color: "#f7f3ea",
              textDecoration: "none",
              backgroundColor: "#14110f",
              borderRadius: "100px",
              padding: "13px 20px",
              textAlign: "center",
            }}
          >
            Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .canvas-nav-links { display: none !important; }
          .canvas-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .canvas-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
