"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

export type NavPage = "home" | "works" | "contact";

const NAV_ITEMS = [
  { key: "home" as NavPage, label: "Home", href: "/templates/gallery-plus" },
  { key: "works" as NavPage, label: "Works", href: "/templates/gallery-plus/works" },
  { key: "contact" as NavPage, label: "Book", href: "/templates/gallery-plus/contact" },
] as const;

interface NavProps {
  current?: NavPage;
}

export default function Nav({ current = "home" }: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <Link href="/templates/gallery-plus" className={styles.brand}>
          <span className={styles.brandAperture} aria-hidden="true">
            <span /><span /><span /><span /><span /><span />
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>GALLERY+</span>
            <span className={styles.brandSub}>Fine Art Photography</span>
          </span>
        </Link>

        <nav className={styles.navLinks} aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`${styles.navLink} ${current === item.key ? styles.navLinkActive : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.navRight}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span className={styles.statusText}>Available for 2026</span>
          <Link href="/templates/gallery-plus/contact" className={styles.ctaBtn}>
            Book a Session
          </Link>
        </div>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </header>

      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.overlayInner}>
          <nav className={styles.overlayNav}>
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.key}
                href={item.href}
                className={`${styles.overlayLink} ${current === item.key ? styles.overlayLinkActive : ""}`}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${0.08 + i * 0.07}s` }}
              >
                <span className={styles.overlayNum}>0{i + 1}</span>
                <span className={styles.overlayLabel}>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className={styles.overlayFoot}>
            <div>
              <p className={styles.overlayFootLabel}>Studio</p>
              <p>Mumbai · Delhi · Dubai</p>
            </div>
            <div>
              <p className={styles.overlayFootLabel}>Contact</p>
              <p>hello@galleryplus.studio</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>

        <div className={styles.overlayImg} aria-hidden="true" />
      </div>
    </>
  );
}
