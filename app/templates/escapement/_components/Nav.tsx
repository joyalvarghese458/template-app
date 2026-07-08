"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "The Movement", href: "#the-movement" },
  { label: "Craft", href: "#craft" },
  { label: "Contact", href: "#contact" },
];

const FONT_DISPLAY = "'Fraunces', serif";
const FONT_BODY = "'Manrope', sans-serif";

const noopSubscribe = () => () => {};

// The shared site layout wraps every template in a page-enter transition div
// (components/PageTransition.tsx). Any transform on that ancestor gives
// position:fixed descendants a new containing block, so they drift with
// scroll instead of staying pinned. Portaling straight to <body> sidesteps
// that ancestor without touching any file outside this template's own folder
// — the nav stays fixed on every scroll position, on every page load.
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
        backgroundColor: scrolled ? "rgba(18,16,13,0.92)" : "rgba(18,16,13,0.55)",
        borderBottom: "1px solid rgba(242,234,217,0.12)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 8px 24px rgba(0,0,0,0.35)" : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#f2ead9" }}>
          <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true">
            <circle cx="14" cy="14" r="12" fill="none" stroke="#c9a24b" strokeWidth="1.4" />
            <line x1="14" y1="14" x2="14" y2="7" stroke="#f2ead9" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="14" y1="14" x2="18.5" y2="14" stroke="#f2ead9" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="14" cy="14" r="1.6" fill="#c9a24b" />
          </svg>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: "21px", letterSpacing: "0.01em" }}>
            {OWNER.name.split(" ")[0]} <span style={{ fontStyle: "italic", color: "#c9a24b" }}>Voss</span>
          </span>
        </a>

        <nav className="esc-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "28px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: FONT_BODY,
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: "#b9ac93",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f2ead9")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#b9ac93")}
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
              letterSpacing: "0.02em",
              color: "#12100d",
              textDecoration: "none",
              backgroundColor: "#c9a24b",
              borderRadius: "4px",
              padding: "10px 20px",
            }}
          >
            Book a Consultation
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="esc-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#f2ead9" }}
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
            backgroundColor: "#17140f",
            borderTop: "1px solid rgba(242,234,217,0.12)",
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
              style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: "16px", color: "#f2ead9", textDecoration: "none" }}
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
              fontSize: "15px",
              color: "#12100d",
              textDecoration: "none",
              backgroundColor: "#c9a24b",
              borderRadius: "4px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            Book a Consultation
          </a>
        </div>
      )}

      <motion.div
        aria-hidden="true"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0% 50%",
          position: "absolute",
          bottom: "-1.5px",
          left: 0,
          right: 0,
          height: "2px",
          backgroundImage: "linear-gradient(90deg, #c9a24b, #4f8577)",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .esc-nav-links { display: none !important; }
          .esc-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .esc-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
