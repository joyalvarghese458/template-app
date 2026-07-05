"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Field Log", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Rendered through a portal straight onto <body> below, so this fixed header
  // can't be demoted by a transformed ancestor (e.g. a page-transition wrapper)
  // creating a new containing block — keeps this folder fully self-contained
  // and portable without depending on any change outside templates/marea.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-mount gate for the portal below; deferring is required to avoid an SSR/hydration mismatch (document.body doesn't exist on the server)
    setMounted(true);
  }, []);

  const nav = (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(4,20,29,0.92)" : "rgba(4,20,29,0.32)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.09)" : "1px solid transparent",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", color: "#eaf6f5" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M2 15c2-2.4 4-2.4 6 0s4 2.4 6 0 4-2.4 6-0" stroke="#2fe2c4" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M2 19c2-2.4 4-2.4 6 0s4 2.4 6 0 4-2.4 6-0" stroke="#2fe2c4" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
            <path d="M12 3c-3 3-3 6 0 9s3 6 0 9" stroke="#ff6f59" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: "var(--font-display, serif)", fontStyle: "italic", fontWeight: 500, fontSize: "21px", color: "#eaf6f5" }}>
            {OWNER.brand}
          </span>
        </a>

        <nav className="marea-nav-pill" aria-label="Primary navigation">
          {NAV_LINKS.map((link, i) => (
            <a key={link.href} href={link.href} className={`marea-pill-link ${i === 0 ? "marea-pill-link-active" : ""}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href={OWNER.resumeUrl} className="marea-nav-cta">Resume</a>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="marea-hamburger"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#eaf6f5" }}
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
        <div className="marea-mobile-panel">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="marea-mobile-link">
              {link.label}
            </a>
          ))}
          <a href={OWNER.resumeUrl} onClick={() => setMenuOpen(false)} className="marea-mobile-cta">
            Resume
          </a>
        </div>
      )}

      {/* Scroll progress — a "depth gauge" reading from SURFACE to TRENCH */}
      <motion.div
        aria-hidden="true"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0% 50%",
          position: "absolute",
          bottom: "-2px",
          left: 0,
          right: 0,
          height: "2.5px",
          backgroundImage: "linear-gradient(90deg, #2fe2c4, #1cb89f)",
        }}
      />

      <style>{`
        .marea-nav-pill {
          display: none;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(234,246,245,0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(234,246,245,0.14);
          border-radius: 100px;
          padding: 6px;
          align-items: center;
          gap: 2px;
        }
        .marea-pill-link {
          font-family: var(--font-body, sans-serif);
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(234,246,245,0.72);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 100px;
          transition: background-color 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .marea-pill-link:hover { background-color: rgba(234,246,245,0.12); color: #eaf6f5; }
        .marea-pill-link-active { color: #04141d; background-color: #2fe2c4; }
        .marea-pill-link-active:hover { background-color: #29ccb1; }
        .marea-nav-cta {
          display: none;
          font-family: var(--font-body, sans-serif);
          font-size: 13.5px;
          font-weight: 600;
          color: #04141d;
          background-color: #eaf6f5;
          text-decoration: none;
          padding: 10px 22px;
          border-radius: 100px;
          transition: background-color 0.2s;
        }
        .marea-nav-cta:hover { background-color: #2fe2c4; }
        .marea-mobile-panel {
          background-color: rgba(4,20,29,0.98);
          border-top: 1px solid rgba(255,255,255,0.09);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .marea-mobile-link { font-family: var(--font-body, sans-serif); font-weight: 500; font-size: 16px; color: #eaf6f5; text-decoration: none; }
        .marea-mobile-cta {
          font-family: var(--font-body, sans-serif);
          font-weight: 600;
          font-size: 14px;
          color: #04141d;
          text-decoration: none;
          background-color: #2fe2c4;
          border-radius: 100px;
          padding: 12px 20px;
          text-align: center;
        }
        @media (min-width: 768px) {
          .marea-nav-pill { display: flex; }
          .marea-nav-cta { display: block; }
          .marea-hamburger { display: none !important; }
        }
      `}</style>
    </header>
  );

  if (!mounted) return null;
  return createPortal(nav, document.body);
}
