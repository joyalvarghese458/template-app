"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Menus", href: "#menus" },
  { label: "Process", href: "#process" },
  { label: "The Pass", href: "#pass" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const FONT_DISPLAY = "'Cormorant', Georgia, serif";
const FONT_BODY = "'Jost', sans-serif";

const noopSubscribe = () => () => {};

// The shared site layout wraps every template in a page-enter transition div
// (components/PageTransition.tsx). Any transform on that ancestor gives
// position:fixed descendants a new containing block, so they drift with
// scroll instead of staying pinned. Portaling straight to <body> sidesteps
// that ancestor without touching any file outside this template's own folder.
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
        backgroundColor: "rgba(21,17,15,0.88)",
        borderBottom: "1px solid rgba(245,236,224,0.1)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 8px 24px rgba(0,0,0,0.45)" : "none",
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
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", color: "#f5ece0" }}>
          <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true">
            <path d="M14 3c-1.2 2.4-1.8 4-1.8 5.4 0 1.6 1.2 2.4 1.8 2.4s1.8-.8 1.8-2.4C15.8 7 15.2 5.4 14 3z" fill="none" stroke="#e8552c" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M9 12c2 1.4 3 3 3 5.2A4 4 0 0 1 7 21" fill="none" stroke="#e8552c" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M19 12c-2 1.4-3 3-3 5.2a4 4 0 0 0 4 3.8" fill="none" stroke="#ff8a4c" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: "18px", letterSpacing: "-0.01em" }}>{OWNER.name}</span>
        </a>

        <nav className="umami-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "26px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: FONT_BODY,
                fontSize: "14px",
                fontWeight: 500,
                color: "#c4b6a8",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5ece0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c4b6a8")}
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
              color: "#15110f",
              textDecoration: "none",
              backgroundImage: "linear-gradient(120deg, #e8552c, #ff8a4c)",
              borderRadius: "100px",
              padding: "10px 20px",
            }}
          >
            Reserve The Counter
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="umami-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#f5ece0" }}
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
            backgroundColor: "#1c1613",
            borderTop: "1px solid rgba(245,236,224,0.1)",
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
              style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: "16px", color: "#f5ece0", textDecoration: "none" }}
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
              color: "#15110f",
              textDecoration: "none",
              backgroundImage: "linear-gradient(120deg, #e8552c, #ff8a4c)",
              borderRadius: "100px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            Reserve The Counter
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
          backgroundImage: "linear-gradient(90deg, #e8552c, #ff8a4c, #7c2233)",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .umami-nav-links { display: none !important; }
          .umami-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .umami-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
