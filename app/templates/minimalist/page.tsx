"use client";

/* ============================================================
   Minimalist Portfolio Template
   ------------------------------------------------------------
   Self-contained: only requires this page.tsx and the adjacent
   styles.module.css. Copy both files into any Next.js 13+
   app/ route folder to deploy.
   ============================================================ */

import { useEffect, useState } from "react";
import styles from "./styles.module.css";

/* ── Editable content (clients swap these out) ─────────── */

const PROFILE = {
  name: "Sera Whitfield",
  role: "Independent Brand Designer",
  email: "hello@serawhitfield.studio",
  location: "Lisbon · Available worldwide",
};

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80&auto=format&fit=crop",
];

const PROJECTS = [
  {
    title: "Aperture",
    category: "Identity · 2025",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Maison Verre",
    category: "Branding · 2024",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Northbound",
    category: "Editorial · 2024",
    image:
      "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1200&q=80&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Quiet Hours",
    category: "Packaging · 2023",
    image:
      "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=1200&q=80&auto=format&fit=crop",
    href: "#",
  },
];

const SERVICES = [
  {
    title: "Brand Identity",
    desc: "Naming, logo systems, typography, and a visual language built to last.",
  },
  {
    title: "Art Direction",
    desc: "Editorial direction for campaigns, lookbooks, and brand stories.",
  },
  {
    title: "Web & Digital",
    desc: "Minimal, fast, accessible sites — designed and built from scratch.",
  },
  {
    title: "Print & Packaging",
    desc: "Considered print collateral, books, and physical brand touchpoints.",
  },
];

const HERO_ROTATION_MS = 1000;

/* ── Page ──────────────────────────────────────────────── */

export default function MinimalistPortfolio() {
  const [activeImage, setActiveImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveImage((i) => (i + 1) % HERO_IMAGES.length);
    }, HERO_ROTATION_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.classList.toggle(styles.bodyLock, menuOpen);
    return () => document.body.classList.remove(styles.bodyLock);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.page}>
      {/* ── Nav ───────────────────────────────────────── */}
      <header className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.navInner}>
            <a href="#top" className={styles.logo}>
              Sera Whitfield<span className={styles.logoDot}>.</span>
            </a>

            <nav>
              <ul className={styles.navLinks}>
                <li><a href="#work">Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>

            <a href="#contact" className={styles.navCta}>
              Start a project
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
            >
              <span className={styles.menuBtnLines} aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ───────────────────────────────── */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileMenuBackdrop} onClick={closeMenu} />
        <nav className={styles.mobileMenuPanel}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#contact" onClick={closeMenu} className={styles.mobileMenuCta}>
            Start a project
          </a>
        </nav>
      </div>

      {/* ── Hero ──────────────────────────────────────── */}
      <section id="top" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.eyebrow}>Portfolio · 2026</div>

              <h1 className={`${styles.heroTitle} ${styles.serif}`}>
                Designing quiet,{" "}
                <span className={styles.italicAccent}>considered</span>{" "}
                brands that last.
              </h1>

              <p className={styles.heroLead}>
                I&apos;m {PROFILE.name} — a {PROFILE.role.toLowerCase()} working with
                founders and studios on identity, art direction, and the kind of
                detail you only notice when it&apos;s missing.
              </p>

              <div className={styles.heroActions}>
                <a href="#work" className={styles.btnPrimary}>
                  View selected work
                  <Arrow className={styles.btnArrow} />
                </a>
                <a href="#contact" className={styles.btnGhost}>
                  Get in touch
                  <Arrow className={styles.btnArrow} />
                </a>
              </div>
            </div>

            <div className={styles.heroPortrait}>
              <div className={styles.heroPortraitFrame}>
                {HERO_IMAGES.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt=""
                    aria-hidden={i !== activeImage}
                    className={`${styles.heroImage} ${
                      i === activeImage ? styles.heroImageActive : ""
                    }`}
                  />
                ))}
              </div>

              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDot} />
                Open for Q3 projects
              </div>

              <div className={styles.heroDots} aria-hidden="true">
                {HERO_IMAGES.map((_, i) => (
                  <span
                    key={i}
                    className={`${styles.heroDot} ${
                      i === activeImage ? styles.heroDotActive : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────── */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>About</div>

          <div className={styles.aboutGrid}>
            <h2 className={`${styles.sectionTitle} ${styles.serif}`}>
              A studio of one, built on
              <br />
              <em className={styles.italic}>restraint</em> and craft.
            </h2>

            <div className={styles.aboutBody}>
              <p>
                For the past nine years I&apos;ve worked at the intersection of
                identity, editorial, and the slow craft of getting things right.
                My practice is small on purpose — every project gets the same
                hands from kick-off to handover.
              </p>
              <p>
                Previously at Pentagram and Studio Dumbar. Selected clients
                include Aesop, The New York Times Magazine, MUBI, and Wieden+Kennedy.
                Recognised by D&amp;AD, Brand New, and It&apos;s Nice That.
              </p>

              <div className={styles.stats}>
                <div>
                  <div className={`${styles.statValue} ${styles.serif}`}>
                    09<em>+</em>
                  </div>
                  <div className={styles.statLabel}>Years independent</div>
                </div>
                <div>
                  <div className={`${styles.statValue} ${styles.serif}`}>
                    74
                  </div>
                  <div className={styles.statLabel}>Projects shipped</div>
                </div>
                <div>
                  <div className={`${styles.statValue} ${styles.serif}`}>
                    12
                  </div>
                  <div className={styles.statLabel}>Countries served</div>
                </div>
                <div>
                  <div className={`${styles.statValue} ${styles.serif}`}>
                    <em>∞</em>
                  </div>
                  <div className={styles.statLabel}>Cups of coffee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Work ──────────────────────────────────────── */}
      <section id="work" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>Selected Work</div>

          <div className={styles.workHeader}>
            <h2 className={`${styles.sectionTitle} ${styles.serif}`}>
              Recent projects, <em className={styles.italic}>quietly</em> made.
            </h2>
            <span className={styles.workIndex}>
              {String(PROJECTS.length).padStart(2, "0")} projects · 2023–2026
            </span>
          </div>

          <div className={styles.workGrid}>
            {PROJECTS.map((p) => (
              <a key={p.title} href={p.href} className={styles.workItem}>
                <div className={styles.workThumb}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className={styles.workMeta}>
                  <h3 className={`${styles.workTitle} ${styles.serif}`}>
                    {p.title}
                  </h3>
                  <span className={styles.workCategory}>{p.category}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section id="services" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>Services</div>

          <h2 className={`${styles.sectionTitle} ${styles.serif}`}>
            What I do, end <em className={styles.italic}>to end</em>.
          </h2>

          <div className={styles.servicesList}>
            {SERVICES.map((s, i) => (
              <div key={s.title} className={styles.serviceRow}>
                <span className={`${styles.serviceNumber} ${styles.serif}`}>
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={`${styles.serviceTitle} ${styles.serif}`}>
                  {s.title}
                </h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <Arrow className={styles.serviceArrow} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────── */}
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contact}>
            <div className={styles.contactEyebrow}>Let&apos;s talk</div>

            <h2 className={styles.contactTitle}>
              Have a project
              <br />
              in <em>mind?</em>
            </h2>

            <a href={`mailto:${PROFILE.email}`} className={styles.contactEmail}>
              {PROFILE.email}
            </a>

            <div className={styles.contactSocials}>
              <a href="#">Instagram</a>
              <a href="#">Are.na</a>
              <a href="#">LinkedIn</a>
              <a href="#">Read.cv</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer className={styles.section}>
        <div className={styles.container}>
          <div className={styles.footer}>
            <span>
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </span>
            <span>{PROFILE.location}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Tiny arrow icon ─────────────────────────────────── */
function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}
