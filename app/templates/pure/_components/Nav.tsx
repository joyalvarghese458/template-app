"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

export type NavCurrent = "home" | "about" | "portfolio" | "pages" | "blog" | "contact";

interface NavProps {
  current?: NavCurrent;
  variant?: "dark" | "light";
}

const ITEMS: { key: NavCurrent; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/templates/pure" },
  { key: "about", label: "About", href: "/templates/pure/about" },
  { key: "portfolio", label: "Portfolio", href: "/templates/pure/portfolio" },
  { key: "pages", label: "Pages", href: "/templates/pure/portfolio" },
  { key: "blog", label: "Blog", href: "/templates/pure/blog" },
  { key: "contact", label: "Contact", href: "/templates/pure/contact" },
];

export default function Nav({ current = "home", variant = "dark" }: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const klass = [
    styles.nav,
    scrolled ? styles.navScrolled : "",
    variant === "light" ? styles.navLight : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={klass}>
        <Link href="/templates/pure" className={styles.brand} aria-label="Pure home">
          <svg
            className={styles.brandIcon}
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="pureNavGrad" x1="0" y1="0" x2="48" y2="48">
                <stop offset="0%" stopColor="#ff6b5b" />
                <stop offset="100%" stopColor="#ff8a7c" />
              </linearGradient>
            </defs>
            <path d="M24 4 L44 40 L4 40 Z" fill="url(#pureNavGrad)" />
            <path d="M24 18 L34 36 L14 36 Z" fill={variant === "light" ? "#fff" : "#0e0b2a"} />
          </svg>
          <span>
            Pur<span className={styles.brandAccent}>e</span>
          </span>
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`${styles.link} ${current === item.key ? styles.linkActive : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/templates/pure/contact" className={styles.cta}>
          Hire Me
        </Link>

        <button
          type="button"
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

      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        {ITEMS.map((item, i) => (
          <Link
            key={item.key}
            href={item.href}
            className={`${styles.mobileLink} ${current === item.key ? styles.mobileLinkActive : ""}`}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
          >
            <span>{item.label}</span>
            <span className={styles.mobileIndex}>0{i + 1}</span>
          </Link>
        ))}
        <Link
          href="/templates/pure/contact"
          className={styles.mobileCta}
          onClick={() => setOpen(false)}
        >
          Hire Me
        </Link>
      </div>
    </>
  );
}
