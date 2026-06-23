"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Funnel", href: "#funnel" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const FONT_DISPLAY = "'Bricolage Grotesque', sans-serif";
const FONT_BODY = "'Hanken Grotesk', sans-serif";

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
        backgroundColor: "rgba(255,255,255,0.85)",
        borderBottom: "1px solid rgba(15,18,34,0.08)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 8px 24px rgba(15,18,34,0.06)" : "none",
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
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", color: "#0f1222" }}>
          <svg width="24" height="24" viewBox="0 0 28 28" aria-hidden="true">
            <circle cx="14" cy="14" r="13" fill="none" stroke="#2954ff" strokeWidth="1.6" />
            <path d="M8 17l5-6 3 3 4-6" stroke="#ff3d7f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M16 8h4v4" stroke="#ff3d7f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: "16px", letterSpacing: "-0.01em" }}>{OWNER.name}</span>
        </a>

        <nav className="surge-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "26px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: FONT_BODY,
                fontSize: "14.5px",
                fontWeight: 600,
                color: "#5b6178",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0f1222")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5b6178")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            style={{
              fontFamily: FONT_BODY,
              fontSize: "13.5px",
              fontWeight: 700,
              color: "#ffffff",
              textDecoration: "none",
              backgroundImage: "linear-gradient(120deg, #2954ff, #ff3d7f)",
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
          className="surge-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#0f1222" }}
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
            backgroundColor: "#ffffff",
            borderTop: "1px solid rgba(15,18,34,0.08)",
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
              style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: "16px", color: "#0f1222", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 700,
              fontSize: "14.5px",
              color: "#ffffff",
              textDecoration: "none",
              backgroundImage: "linear-gradient(120deg, #2954ff, #ff3d7f)",
              borderRadius: "100px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            Resume
          </a>
        </div>
      )}

      {/* Scroll progress bar — multi-channel gradient sweep */}
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
          backgroundImage: "linear-gradient(90deg, #2954ff, #ff3d7f, #00c875)",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .surge-nav-links { display: none !important; }
          .surge-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .surge-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
