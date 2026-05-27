"use client";

import { motion } from "framer-motion";
import { PROFILE, STATS } from "../_data/portfolio";
import { heroContainer, heroLine, fadeIn, fadeRight, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function Hero() {
  const socials = [
    { href: PROFILE.instagram, label: "Instagram", icon: <IgIcon /> },
    { href: PROFILE.twitter,   label: "Twitter",   icon: <XIcon />  },
    { href: PROFILE.linkedin,  label: "LinkedIn",  icon: <LiIcon /> },
    { href: PROFILE.behance,   label: "Behance",   icon: <BeIcon /> },
    { href: PROFILE.dribbble,  label: "Dribbble",  icon: <DrIcon /> },
  ];

  return (
    <section id="hero" className={styles.hero}>
      {/* Gradient blob background */}
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.heroBlob1} />
        <div className={styles.heroBlob2} />
        <div className={styles.heroBlob3} />
        <div className={styles.heroGrid} />
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.container}>
          <div className={styles.heroInner}>

            {/* ── Left: Text ── */}
            <motion.div
              className={styles.heroLeft}
              variants={heroContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Kicker */}
              <motion.div variants={heroLine} className={styles.heroKicker}>
                <span className={styles.heroKickerDot} />
                {PROFILE.role}
              </motion.div>

              {/* Headline */}
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleLine}>
                  <motion.span variants={heroLine} className={styles.heroTitleInner}>
                    {PROFILE.heroLine1}
                  </motion.span>
                </span>
                <span className={styles.heroTitleLine}>
                  <motion.span variants={heroLine} className={`${styles.heroTitleInner} ${styles.heroTitleAccent}`}>
                    {PROFILE.heroLine2}
                  </motion.span>
                </span>
                <span className={styles.heroTitleLine}>
                  <motion.span variants={heroLine} className={styles.heroTitleInner}>
                    {PROFILE.heroLine3}
                  </motion.span>
                </span>
              </h1>

              {/* Desc */}
              <motion.p variants={heroLine} className={styles.heroDesc}>
                {PROFILE.bio1}
              </motion.p>

              {/* CTAs */}
              <motion.div variants={heroLine} className={styles.heroActions}>
                <a href="#work" className={styles.btnPrimary}>
                  <span>View My Work</span>
                  <ArrowIcon />
                </a>
                <a href="#contact" className={styles.btnGhost}>
                  Let&apos;s Collaborate
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div variants={heroLine} className={styles.heroSocials}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className={styles.heroSocialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </motion.div>

              {/* Scroll cue */}
              <motion.div variants={heroLine} className={styles.heroScroll} style={{ marginTop: "2rem" }}>
                <span className={styles.heroScrollLine} />
                <span className={styles.heroScrollDot} />
                <span>Scroll to explore</span>
              </motion.div>
            </motion.div>

            {/* ── Right: Image card ── */}
            <motion.div
              className={styles.heroRight}
              variants={fadeRight}
              initial="hidden"
              animate="visible"
            >
              <div className={styles.heroImageWrap}>
                {/* Colorful gradient frame */}
                <div className={styles.heroImageFrame}>
                  <div className={styles.heroImageInner}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={PROFILE.avatar}
                      alt={`${PROFILE.name} — ${PROFILE.role}`}
                      className={styles.heroImage}
                    />
                  </div>
                </div>

                {/* Floating experience badge */}
                <div className={styles.heroBadge}>
                  <div className={styles.heroBadgeIcon}>🎨</div>
                  <div>
                    <span className={styles.heroBadgeTitle}>8+ Years</span>
                    <span className={styles.heroBadgeSub}>Creative Experience</span>
                  </div>
                </div>

                {/* Floating stats card */}
                <div className={styles.heroStatsCard}>
                  {STATS.slice(0, 3).map((s) => (
                    <div key={s.label} className={styles.heroStatItem}>
                      <span className={styles.heroStatVal}>{s.value}</span>
                      <span className={styles.heroStatLbl}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Inline SVG icons ─────────────────────────────────────────────── */
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function IgIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.905-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LiIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function BeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.836 1.801 1.89 1.801.895 0 1.497-.388 1.866-1.165V17h4zm-5.25-4c-.052-.606-.169-1.806-1.64-1.806-1.172 0-1.64.97-1.685 1.806h3.325zM9.97 14.5c0 .539-.176.97-.525 1.296-.35.325-.82.487-1.407.487H5.565v-3.56H8.14c.616 0 1.09.14 1.422.42.332.28.408.7.408 1.357zM5.565 9.5v3.025H7.74c.51 0 .927-.13 1.248-.392.322-.26.483-.623.483-1.093 0-.49-.148-.85-.444-1.078-.296-.228-.727-.341-1.293-.341l-2.17-.121zm8.435.5h-3v2h3V10z" />
    </svg>
  );
}

function DrIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a40.536 40.536 0 0 0-.361-1.002c2.123-.471 4.004-1.282 5.59-2.402.9 1.045 1.629 2.249 1.874 3.477zM12 2.116c1.777 0 3.43.487 4.843 1.336-1.438 1.021-3.178 1.761-5.144 2.175-.877-1.836-1.973-3.373-3.201-4.506A10.005 10.005 0 0 1 12 2.116zm-7.499 1.45c1.276 1.107 2.413 2.67 3.324 4.542-2.386.542-5.058.778-7.977.592C.813 6.425 2.31 4.296 4.5 3.566zM2.152 12.224c3.297.263 6.28-.002 8.902-.653.128.38.265.76.39 1.15l-.401.12c-3.079.879-5.845 3.043-7.59 5.908a9.85 9.85 0 0 1-1.301-6.525zm9.848 9.664a9.913 9.913 0 0 1-5.965-2.001c1.618-2.769 4.165-4.73 7.046-5.59.024-.009.05-.018.074-.026.782 2.234 1.263 4.672 1.366 7.25a9.844 9.844 0 0 1-2.52.367zm4.407-1.078c-.12-2.43-.58-4.73-1.317-6.843 1.99-.269 4.18-.193 6.528.32-.527 2.73-2.213 5.077-5.211 6.523z" />
    </svg>
  );
}
