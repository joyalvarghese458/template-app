"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, PROFILE } from "../_data/portfolio";
import styles from "../theme.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.navInner}>
            <Link href="/templates/snap" className={styles.logo}>
              {PROFILE.studio}
              <span className={styles.logoDot}>.</span>
            </Link>

            <ul className={styles.navLinks} role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.navRight}>
              <Link
                href="/templates/snap/portfolio"
                className={styles.navCta}
              >
                Portfolio
              </Link>

              <button
                className={`${styles.menuBtn} ${open ? styles.menuBtnOpen : ""}`}
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!open}
      >
        <div
          className={styles.mobileMenuBg}
          onClick={() => setOpen(false)}
        />
        <div className={styles.mobileMenuPanel}>
          <div className={styles.mobileMenuTop}>
            <span className={styles.mobileMenuLogo}>{PROFILE.studio}</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--snap-muted)",
                fontSize: "1.5rem",
                lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileMenuLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/templates/snap/portfolio"
            className={styles.mobileMenuCta}
            onClick={() => setOpen(false)}
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </>
  );
}
