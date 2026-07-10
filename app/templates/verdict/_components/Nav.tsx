"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Process", href: "#process" },
  { label: "Matters", href: "#matters" },
  { label: "Docket", href: "#docket" },
  { label: "Contact", href: "#contact" },
];

const FONT_DISPLAY = "'Playfair Display', serif";
const FONT_BODY = "'Inter', sans-serif";

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
        backgroundColor: "rgba(13,13,16,0.86)",
        borderBottom: "1px solid rgba(246,242,232,0.1)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 8px 24px rgba(0,0,0,0.35)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#f6f2e8" }}>
          <svg width="24" height="24" viewBox="0 0 28 28" aria-hidden="true" className="vd-nav-scale">
            <line x1="14" y1="3" x2="14" y2="21" stroke="#b6903f" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="4" y1="8" x2="24" y2="8" stroke="#b6903f" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M4 8L1 15a4 4 0 0 0 6 0L4 8z" fill="none" stroke="#f6f2e8" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M24 8L21 15a4 4 0 0 0 6 0L24 8z" fill="none" stroke="#f6f2e8" strokeWidth="1.4" strokeLinejoin="round" />
            <line x1="9" y1="24" x2="19" y2="24" stroke="#b6903f" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="14" y1="21" x2="14" y2="24" stroke="#b6903f" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "20px", letterSpacing: "0.01em" }}>
            {OWNER.firstName} <span style={{ fontStyle: "italic", color: "#b6903f" }}>{OWNER.lastName}</span>
          </span>
        </a>

        <nav className="vd-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "28px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: FONT_BODY,
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.01em",
                color: "rgba(246,242,232,0.68)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f6f2e8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(246,242,232,0.68)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.calendly}
            style={{
              fontFamily: FONT_BODY,
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.01em",
              color: "#0d0d10",
              textDecoration: "none",
              backgroundColor: "#b6903f",
              borderRadius: "6px",
              padding: "10px 20px",
            }}
          >
            Book Consultation
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="vd-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#f6f2e8" }}
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
            backgroundColor: "#18181f",
            borderTop: "1px solid rgba(246,242,232,0.1)",
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
              style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: "16px", color: "#f6f2e8", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.calendly}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 700,
              fontSize: "15px",
              color: "#0d0d10",
              textDecoration: "none",
              backgroundColor: "#b6903f",
              borderRadius: "6px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            Book Consultation
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
          backgroundImage: "linear-gradient(90deg, #b6903f, #7c2334)",
        }}
      />

      <style>{`
        .vd-nav-scale { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); }
        a:hover > .vd-nav-scale { transform: rotate(-6deg); }
        @media (max-width: 768px) {
          .vd-nav-links { display: none !important; }
          .vd-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .vd-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
