"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

export type NavCurrent = "home" | "about" | "portfolio" | "blog" | "contact";

interface NavProps {
  current?: NavCurrent;
  variant?: "dark" | "light";
}

const ITEMS: { key: NavCurrent; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/templates/pure" },
  { key: "about", label: "About", href: "/templates/pure/about" },
  { key: "portfolio", label: "Portfolio", href: "/templates/pure/portfolio" },
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
