"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE, NAV_LINKS } from "../_data/portfolio";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.5s ease, backdrop-filter 0.5s ease",
          background: scrolled || menuOpen ? "rgba(5, 5, 8, 0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--i-border)" : "1px solid transparent",
        }}
        className="indie-nav"
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "var(--i-accent-dim)",
              border: "1px solid var(--i-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "var(--i-accent)",
              flexShrink: 0,
            }}
          >
            {PROFILE.initials}
          </div>
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--i-ink)",
              letterSpacing: "0.03em",
              whiteSpace: "nowrap",
            }}
          >
            {PROFILE.name}
          </span>
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="indie-nav-links"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--i-ink-muted)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--i-ink)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--i-ink-muted)")
              }
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              padding: "0.6rem 1.25rem",
              borderRadius: "100px",
              border: "1px solid var(--i-accent)",
              color: "var(--i-accent)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              background: "transparent",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "var(--i-accent-dim)";
              el.style.boxShadow = "0 0 20px var(--i-accent-glow)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "transparent";
              el.style.boxShadow = "none";
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger — 44×44 touch target */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.625rem",
            margin: "-0.625rem",
            color: "var(--i-ink)",
            minWidth: 44,
            minHeight: 44,
            alignItems: "center",
            justifyContent: "center",
          }}
          className="indie-hamburger"
        >
          <div
            style={{
              width: 24,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                width: 24,
                height: 1.5,
                background: "var(--i-ink)",
                borderRadius: 2,
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none",
              }}
            />
            <div
              style={{
                width: 16,
                height: 1.5,
                background: "var(--i-ink)",
                borderRadius: 2,
                transition: "opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <div
              style={{
                width: 24,
                height: 1.5,
                background: "var(--i-ink)",
                borderRadius: 2,
                transition: "transform 0.3s ease",
                transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none",
              }}
            />
          </div>
        </button>
      </motion.nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
              background: "rgba(5, 5, 8, 0.98)",
              backdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0",
              padding: "5rem 2rem 3rem",
              overflowY: "auto",
            }}
          >
            {/* Big nav items */}
            <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem", width: "100%" }}>
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "1rem 0",
                    fontSize: "clamp(2rem, 8vw, 3.2rem)",
                    fontFamily: "var(--i-font-display)",
                    fontWeight: 300,
                    color: "var(--i-ink)",
                    textDecoration: "none",
                    letterSpacing: "-0.02em",
                    borderBottom: "1px solid var(--i-border)",
                    transition: "color 0.3s ease",
                  }}
                  onTouchStart={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--i-accent)")
                  }
                  onTouchEnd={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--i-ink)")
                  }
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + NAV_LINKS.length * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                marginTop: "2.5rem",
                fontSize: "0.9rem",
                fontWeight: 500,
                padding: "0.875rem 2.5rem",
                borderRadius: "100px",
                border: "1px solid var(--i-accent)",
                color: "var(--i-accent)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                minHeight: 52,
                display: "flex",
                alignItems: "center",
              }}
            >
              Hire Me
            </motion.a>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                marginTop: "2.5rem",
                display: "flex",
                gap: "2rem",
                fontSize: "0.72rem",
                color: "var(--i-ink-faint)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {[
                { label: "Instagram", href: PROFILE.instagram },
                { label: "Vimeo", href: PROFILE.vimeo },
                { label: "LinkedIn", href: PROFILE.linkedin },
              ].map(({ label, href }) => (
                <a key={label} href={href} style={{ color: "inherit", textDecoration: "none", padding: "0.5rem" }}>
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .indie-nav-links { display: none !important; }
          .indie-hamburger { display: flex !important; }
        }
        @media (max-width: 480px) {
          .indie-nav { padding: 0 1.25rem !important; }
        }
      `}</style>
    </>
  );
}
