"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Global", href: "#global" },
  { label: "Competencies", href: "#competencies" },
  { label: "Contact", href: "#contact" },
];

const FONT_DISPLAY = "'Newsreader', Georgia, serif";
const FONT_BODY = "'IBM Plex Sans', sans-serif";

const noopSubscribe = () => () => {};

// SSR-safe "are we mounted on the client" check (no setState-in-effect needed):
// false during server render/hydration, true once running in the browser.
function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The shared site layout wraps every template in a page-enter transition div.
  // Any non-"none" transform on that ancestor (even after the animation settles)
  // gives position:fixed descendants a new containing block, so they drift with
  // scroll instead of staying pinned. Portaling straight to <body> sidesteps that
  // ancestor entirely, without needing changes outside this template's own folder.
  const isClient = useIsClient();

  if (!isClient) return null;

  const nav = (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(10,15,28,0.85)",
        borderBottom: "1px solid rgba(243,239,228,0.1)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 8px 24px rgba(0,0,0,0.35)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
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
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", color: "#f3efe4" }}>
          <svg width="24" height="24" viewBox="0 0 28 28" aria-hidden="true">
            <circle cx="14" cy="14" r="12.4" fill="none" stroke="#d4af6a" strokeWidth="1.4" />
            <ellipse cx="14" cy="14" rx="12.4" ry="5.2" fill="none" stroke="#d4af6a" strokeWidth="1" opacity="0.6" />
            <line x1="1.6" y1="14" x2="26.4" y2="14" stroke="#d4af6a" strokeWidth="1" opacity="0.6" />
          </svg>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: "17px", letterSpacing: "-0.01em" }}>{OWNER.name}</span>
        </a>

        <nav className="atlas-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "26px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: FONT_BODY,
                fontSize: "14px",
                fontWeight: 500,
                color: "#aab4c9",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f3efe4")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aab4c9")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            style={{
              fontFamily: FONT_BODY,
              fontSize: "13px",
              fontWeight: 600,
              color: "#0a0f1c",
              textDecoration: "none",
              backgroundImage: "linear-gradient(120deg, #d4af6a, #f1d49b)",
              borderRadius: "100px",
              padding: "10px 20px",
            }}
          >
            Executive Profile
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="atlas-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#f3efe4" }}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            backgroundColor: "#111a2c",
            borderTop: "1px solid rgba(243,239,228,0.1)",
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
              style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: "16px", color: "#f3efe4", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 600,
              fontSize: "14.5px",
              color: "#0a0f1c",
              textDecoration: "none",
              backgroundImage: "linear-gradient(120deg, #d4af6a, #f1d49b)",
              borderRadius: "100px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            Executive Profile
          </a>
        </div>
      )}

      {/* Scroll progress bar */}
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
          backgroundImage: "linear-gradient(90deg, #d4af6a, #f1d49b, #9c3f4a)",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .atlas-nav-links { display: none !important; }
          .atlas-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .atlas-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
