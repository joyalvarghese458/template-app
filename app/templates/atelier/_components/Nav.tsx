"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

interface NavProps {
  current?: "home" | "about" | "work" | "services" | "contact";
}

const NAV_ITEMS = [
  { key: "home", label: "Index", href: "/templates/atelier" },
  { key: "work", label: "Work", href: "/templates/atelier/work" },
  { key: "about", label: "About", href: "/templates/atelier/about" },
  { key: "services", label: "Services", href: "/templates/atelier/services" },
  { key: "contact", label: "Contact", href: "/templates/atelier/contact" },
] as const;

export default function Nav({ current = "home" }: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <Link href="/templates/atelier" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandPrimary}>ATELIER</span>
            <span className={styles.brandSecondary}>STUDIO — EST. 2019</span>
          </span>
        </Link>

        <nav className={styles.navLinks} aria-label="Primary">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.key}
              href={item.href}
              className={`${styles.navLink} ${
                current === item.key ? styles.navLinkActive : ""
              }`}
            >
              <span className={styles.navIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.navMeta}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span>Available for Q3 2026</span>
        </div>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileMenuInner}>
          <nav>
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.key}
                href={item.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
              >
                <span className={styles.mobileIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.mobileLabel}>{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className={styles.mobileFooter}>
            <p>hello@atelier.studio</p>
            <p>+1 (415) 555 — 0182</p>
            <p className={styles.mobileLocation}>San Francisco · Berlin · Tokyo</p>
          </div>
        </div>
      </div>
    </>
  );
}