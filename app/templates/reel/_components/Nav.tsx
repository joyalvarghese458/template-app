"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Filmography", href: "#filmography" },
  { label: "Screening Room", href: "#screening-room" },
  { label: "Craft", href: "#craft" },
  { label: "Contact", href: "#contact" },
];

const FONT_DISPLAY = "'Bebas Neue', sans-serif";
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
        backgroundColor: "rgba(10,8,6,0.9)",
        borderBottom: "1px solid rgba(201,161,90,0.22)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 8px 24px rgba(0,0,0,0.55)" : "none",
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
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#f3ece1" }}>
          <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true">
            <circle cx="14" cy="14" r="11.5" fill="none" stroke="#c9a15a" strokeWidth="1.6" />
            <circle cx="14" cy="14" r="3" fill="none" stroke="#d1263f" strokeWidth="1.6" />
            <circle cx="14" cy="6.2" r="1.6" fill="#c9a15a" />
            <circle cx="20.7" cy="10.6" r="1.6" fill="#c9a15a" />
            <circle cx="20.7" cy="17.4" r="1.6" fill="#c9a15a" />
            <circle cx="14" cy="21.8" r="1.6" fill="#c9a15a" />
            <circle cx="7.3" cy="17.4" r="1.6" fill="#c9a15a" />
            <circle cx="7.3" cy="10.6" r="1.6" fill="#c9a15a" />
          </svg>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "20px", letterSpacing: "0.03em" }}>
            {OWNER.name.split(" ")[0].toUpperCase()} <span style={{ color: "#c9a15a" }}>REEL</span>
          </span>
        </a>

        <nav className="rl-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "26px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: FONT_BODY,
                fontSize: "13.5px",
                fontWeight: 500,
                color: "#b7a996",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f3ece1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#b7a996")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: "14px",
              letterSpacing: "0.04em",
              fontWeight: 400,
              color: "#0a0806",
              textDecoration: "none",
              backgroundColor: "#d1263f",
              borderRadius: "6px",
              padding: "9px 20px",
            }}
          >
            Watch The Reel
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rl-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#f3ece1" }}
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
            backgroundColor: "#14100c",
            borderTop: "1px solid rgba(201,161,90,0.22)",
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
              style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: "16px", color: "#f3ece1", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 400,
              fontSize: "16px",
              letterSpacing: "0.04em",
              color: "#0a0806",
              textDecoration: "none",
              backgroundColor: "#d1263f",
              borderRadius: "6px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            Watch The Reel
          </a>
        </div>
      )}

      {/* Scroll progress bar, styled like a film timecode scrub */}
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
          backgroundImage: "linear-gradient(90deg, #d1263f, #c9a15a)",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .rl-nav-links { display: none !important; }
          .rl-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .rl-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
