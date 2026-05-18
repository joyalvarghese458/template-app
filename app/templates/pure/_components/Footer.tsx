"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { useReveal } from "./hooks";

interface FooterProps {
  /** Override CTA headline. Default: "Have a project?" */
  ctaTitle?: string;
  /** Show the CTA banner at top of footer */
  showCta?: boolean;
  /** Override CTA button label */
  ctaLabel?: string;
  /** CTA button href */
  ctaHref?: string;
}

export default function Footer({
  ctaTitle = "Have a project?",
  showCta = true,
  ctaLabel = "Let's Talk",
  ctaHref = "/templates/pure/contact",
}: FooterProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <footer className={styles.footer}>
      <span className={styles.orbA} aria-hidden="true" />
      <span className={styles.orbB} aria-hidden="true" />
      <svg
        className={styles.streak}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1={i * 10 + 4}
            y1={4}
            x2={i * 10 - 4}
            y2={28}
            stroke="#b8a8ff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>

      <div className={styles.footerInner} ref={ref}>
        {showCta && (
          <div
            className={styles.cta}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            <h2 className={styles.ctaTitle}>
              {ctaTitle.split(" ").map((word, i) => {
                const last = i === ctaTitle.split(" ").length - 1;
                return (
                  <span key={i} style={{ display: "inline-block", marginRight: "0.18em" }}>
                    {last ? <em>{word}</em> : word}
                  </span>
                );
              })}
            </h2>
            <Link href={ctaHref} className={styles.ctaButton}>
              {ctaLabel}
            </Link>
          </div>
        )}

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Pure. All rights reserved.</p>
          <div className={styles.socials}>
            <a className={styles.socialLink} href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a className={styles.socialLink} href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1A4.1 4.1 0 0 0 12 9c0 .3 0 .6.1.9A11.7 11.7 0 0 1 3.4 5a4 4 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.7 11.7 11.7 0 0 0 8.3 20.5c7.6 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z"/></svg>
            </a>
            <a className={styles.socialLink} href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.3 2.2.4.5.2 1 .5 1.4 1 .4.4.7.8.9 1.4.2.5.4 1.1.4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.3 1.8-.4 2.2-.2.5-.5 1-1 1.4-.4.4-.8.7-1.4.9-.5.2-1.1.4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.3-2.2-.4-.5-.2-1-.5-1.4-1-.4-.4-.7-.8-.9-1.4-.2-.5-.4-1.1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.3-1.8.4-2.2.2-.5.5-1 1-1.4.4-.4.8-.7 1.4-.9.5-.2 1.1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.6 0-4.8.1-1.1 0-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1 0 1.2-.1 1.6-.1 4.8s0 3.6.1 4.8c0 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2 0 1.6.1 4.8.1s3.6 0 4.8-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1 0-1.2.1-1.6.1-4.8s0-3.6-.1-4.8c0-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2 0-1.6-.1-4.8-.1zM12 6.9a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2zm0 8.4a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6zm6.5-8.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
            </a>
            <a className={styles.socialLink} href="#" aria-label="Dribbble">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm7.9 5.5a10.2 10.2 0 0 1 2.3 6.4c-.3 0-3.5-.7-6.7-.3-.1-.2-.1-.4-.2-.5-.2-.5-.4-1-.7-1.5 3.6-1.5 5.2-3.6 5.3-4.1zM12 1.8c2.6 0 4.9 1 6.7 2.6-.2.3-1.6 2.3-5 3.6-1.6-2.9-3.3-5.3-3.6-5.7.6-.3 1.2-.5 1.9-.5zm-4 1.2c.3.4 2 2.8 3.6 5.6-4.5 1.2-8.4 1.2-8.8 1.2A10.3 10.3 0 0 1 8 3zM1.8 12v-.3c.4 0 5.1 0 9.9-1.4.3.5.5 1.1.7 1.7l-.4.1c-5 1.6-7.6 6-7.8 6.4A10.2 10.2 0 0 1 1.8 12zm10.2 10.2c-2.2 0-4.3-.8-5.9-2 .2-.4 2.1-4 7.6-5.9 0-.1 0 0 .1 0 1.4 3.5 1.9 6.5 2.1 7.4-1.2.4-2.5.5-3.9.5zm5.6-1.4c-.1-.7-.6-3.5-1.9-7 3-.5 5.7.3 6 .4-.4 2.7-2 5.1-4.1 6.6z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
