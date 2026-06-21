"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

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
        backgroundColor: scrolled ? "rgba(13,13,15,0.88)" : "rgba(13,13,15,0.4)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px",
          height: "66px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", color: "#f2f2f0" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9.5" stroke="#f2f2f0" strokeWidth="1.4" />
            <path d="M12 5v3M12 16v3M5 12h3M16 12h3" stroke="#e10600" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="12" cy="12" r="2.4" fill="#e10600" />
          </svg>
          <span style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "17px", letterSpacing: "0.01em", textTransform: "uppercase" }}>{OWNER.name}</span>
        </a>

        <nav className="redline-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "26px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-display, sans-serif)",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                color: "#9a9aa0",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f2f2f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9aa0")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              fontSize: "13.5px",
              fontWeight: 700,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              color: "#f2f2f0",
              textDecoration: "none",
              backgroundColor: "#e10600",
              borderRadius: "4px",
              padding: "9px 18px",
            }}
          >
            Resume
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="redline-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#f2f2f0" }}
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
        <div
          style={{
            backgroundColor: "#0d0d0f",
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
              style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 600, fontSize: "16px", textTransform: "uppercase", color: "#f2f2f0", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              fontWeight: 700,
              fontSize: "14px",
              textTransform: "uppercase",
              color: "#f2f2f0",
              textDecoration: "none",
              backgroundColor: "#e10600",
              borderRadius: "4px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            Resume
          </a>
        </div>
      )}

      {/* Scroll progress bar — a "rev gauge" sweep across the bottom edge of the nav */}
      <motion.div
        aria-hidden="true"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0% 50%",
          position: "absolute",
          bottom: "-1.5px",
          left: 0,
          right: 0,
          height: "2.5px",
          backgroundImage: "linear-gradient(90deg, #e10600, #ffb700)",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .redline-nav-links { display: none !important; }
          .redline-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .redline-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
