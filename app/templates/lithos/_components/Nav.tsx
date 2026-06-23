"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Gallery", href: "#gallery" },
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
  // and portable without depending on any change outside templates/lithos.
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
        backgroundColor: scrolled ? "rgba(18,14,10,0.9)" : "rgba(18,14,10,0.32)",
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
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", color: "#f4ece1" }}>
          <svg width="24" height="24" viewBox="0 0 256 256" fill="#ffffff" aria-hidden="true">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span style={{ fontFamily: "var(--font-display, serif)", fontStyle: "italic", fontWeight: 500, fontSize: "21px", color: "#f4ece1" }}>
            {OWNER.brand}
          </span>
        </a>

        <nav className="lithos-nav-pill" aria-label="Primary navigation">
          {NAV_LINKS.map((link, i) => (
            <a key={link.href} href={link.href} className={`lithos-pill-link ${i === 0 ? "lithos-pill-link-active" : ""}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href={OWNER.resumeUrl} className="lithos-nav-cta">Resume</a>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lithos-hamburger"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#f4ece1" }}
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
        <div className="lithos-mobile-panel">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="lithos-mobile-link">
              {link.label}
            </a>
          ))}
          <a href={OWNER.resumeUrl} onClick={() => setMenuOpen(false)} className="lithos-mobile-cta">
            Resume
          </a>
        </div>
      )}

      {/* Scroll progress — a "depth gauge" reading from SURFACE to BEDROCK */}
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
          backgroundImage: "linear-gradient(90deg, #e8702a, #c89a55)",
        }}
      />

      <style>{`
        .lithos-nav-pill {
          display: none;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(244,236,225,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(244,236,225,0.16);
          border-radius: 100px;
          padding: 6px;
          align-items: center;
          gap: 2px;
        }
        .lithos-pill-link {
          font-family: var(--font-body, sans-serif);
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(244,236,225,0.72);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 100px;
          transition: background-color 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .lithos-pill-link:hover { background-color: rgba(244,236,225,0.12); color: #f4ece1; }
        .lithos-pill-link-active { color: #f4ece1; background-color: rgba(232,112,42,0.85); }
        .lithos-pill-link-active:hover { background-color: rgba(232,112,42,0.95); }
        .lithos-nav-cta {
          display: none;
          font-family: var(--font-body, sans-serif);
          font-size: 13.5px;
          font-weight: 600;
          color: #120e0a;
          background-color: #f4ece1;
          text-decoration: none;
          padding: 10px 22px;
          border-radius: 100px;
          transition: background-color 0.2s;
        }
        .lithos-nav-cta:hover { background-color: #e8702a; color: #f4ece1; }
        .lithos-mobile-panel {
          background-color: rgba(18,14,10,0.98);
          border-top: 1px solid rgba(255,255,255,0.09);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .lithos-mobile-link { font-family: var(--font-body, sans-serif); font-weight: 500; font-size: 16px; color: #f4ece1; text-decoration: none; }
        .lithos-mobile-cta {
          font-family: var(--font-body, sans-serif);
          font-weight: 600;
          font-size: 14px;
          color: #120e0a;
          text-decoration: none;
          background-color: #e8702a;
          border-radius: 100px;
          padding: 12px 20px;
          text-align: center;
        }
        @media (min-width: 768px) {
          .lithos-nav-pill { display: flex; }
          .lithos-nav-cta { display: block; }
          .lithos-hamburger { display: none !important; }
        }
      `}</style>
    </header>
  );

  if (!mounted) return null;
  return createPortal(nav, document.body);
}
