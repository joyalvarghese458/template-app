"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { OWNER } from "../_data/portfolio";

const noopSubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}
import theme from "../theme.module.css";
import { Terminal, Menu, X, Database } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  if (!isClient) return null;

  const nav = (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "var(--nav-height)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(11,15,25,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(6,182,212,0.25)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(6,182,212,0.08)" : "none",
      }}
    >
      {/* Brand logo */}
      <a
        href="#home"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
          color: "var(--color-ink)",
          fontWeight: 700,
          fontSize: "18px",
        }}
      >
        <Database size={20} className="text-[#06b6d4]" />
        <span className={theme.mono} style={{ letterSpacing: "-0.5px" }}>
          {OWNER.name.replace(" ", "")}
          <span style={{ color: "var(--color-teal)" }}>.py</span>
        </span>
      </a>

      {/* Desktop Navigation */}
      <div
        style={{
          display: "none",
          alignItems: "center",
          gap: "32px",
        }}
        className="md:flex"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              textDecoration: "none",
              color: "var(--color-ink-soft)",
              fontSize: "14px",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-teal)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink-soft)")}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div style={{ display: "none" }} className="md:block">
        <a href="#contact" className={`${theme.btn} ${theme.btnOutline}`}>
          <Terminal size={14} style={{ color: "var(--color-teal)" }} />
          <span>Execute Query</span>
        </a>
      </div>

      {/* Mobile Nav Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "none",
          border: "none",
          color: "var(--color-ink)",
          cursor: "pointer",
        }}
        className="block md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "var(--nav-height)",
            left: 0,
            right: 0,
            background: "var(--color-surface)",
            borderBottom: "1px solid var(--color-border)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 49,
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                textDecoration: "none",
                color: "var(--color-ink)",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`${theme.btn} ${theme.btnPrimary}`}
            style={{ justifyContent: "center" }}
          >
            <Terminal size={14} />
            <span>Execute Query</span>
          </a>
        </div>
      )}

      {/* Styled utilities for media queries in vanilla css */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:flex { display: flex !important; }
          .md\\:hidden { display: none !important; }
          .md\\:block { display: block !important; }
        }
      `}</style>
    </nav>
  );

  return createPortal(nav, document.body);
}
