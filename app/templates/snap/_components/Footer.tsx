"use client";

import Link from "next/link";
import { PROFILE } from "../_data/portfolio";
import styles from "../theme.module.css";

const WORK_LINKS = [
  { href: "/templates/snap/portfolio", label: "All Work" },
  { href: "/templates/snap/portfolio", label: "Wedding" },
  { href: "/templates/snap/portfolio", label: "Fashion" },
  { href: "/templates/snap/portfolio", label: "Wildlife" },
  { href: "/templates/snap/portfolio", label: "Portrait" },
];

const INFO_LINKS = [
  { href: "/templates/snap", label: "Home" },
  { href: "#story", label: "Story" },
  { href: "#awards", label: "Awards" },
  { href: "/templates/snap/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Use" },
  { href: "#", label: "Cookie Policy" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          {/* Brand column */}
          <div>
            <Link href="/templates/snap" className={styles.footerBrand}>
              {PROFILE.studio}
            </Link>
            <p className={styles.footerTagline}>{PROFILE.tagline}</p>
            <div className={styles.footerSocials}>
              <a
                href={PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialLink}
                aria-label="Instagram"
              >
                <IgIcon />
              </a>
              <a
                href={PROFILE.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialLink}
                aria-label="Twitter / X"
              >
                <XIcon />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialLink}
                aria-label="LinkedIn"
              >
                <LiIcon />
              </a>
            </div>
          </div>

          {/* Work links */}
          <div className={styles.footerCol}>
            <span className={styles.footerColTitle}>Work</span>
            <nav className={styles.footerLinks}>
              {WORK_LINKS.map((l) => (
                <Link key={l.label} href={l.href} className={styles.footerLink}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Info links */}
          <div className={styles.footerCol}>
            <span className={styles.footerColTitle}>Studio</span>
            <nav className={styles.footerLinks}>
              {INFO_LINKS.map((l) => (
                <Link key={l.label} href={l.href} className={styles.footerLink}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.footerCol}>
            <span className={styles.footerColTitle}>Contact</span>
            <div className={styles.footerLinks}>
              <a href={`mailto:${PROFILE.email}`} className={styles.footerLink}>
                {PROFILE.email}
              </a>
              <a href={`tel:${PROFILE.phone}`} className={styles.footerLink}>
                {PROFILE.phone}
              </a>
              <span className={styles.footerLink}>{PROFILE.studioLocation}</span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <nav style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
            {LEGAL_LINKS.map((l) => (
              <a key={l.label} href={l.href} className={styles.footerLink}>
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <ArrowUpIcon />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

function IgIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.905-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LiIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19V5" /><path d="M5 12l7-7 7 7" />
    </svg>
  );
}
