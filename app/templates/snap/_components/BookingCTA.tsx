"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROFILE } from "../_data/portfolio";
import { fadeUp, stagger, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function BookingCTA() {
  return (
    <section className={styles.bookingSection}>
      <div className={styles.bookingGlow} aria-hidden="true" />

      <div className={styles.container}>
        <motion.div
          className={styles.bookingInner}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className={styles.bookingKicker}>
            Let&apos;s create together
          </motion.div>

          <motion.h2 variants={fadeUp} className={styles.bookingTitle}>
            Ready to tell your <em>story?</em>
          </motion.h2>

          <motion.p variants={fadeUp} className={styles.bookingDesc}>
            Every extraordinary photograph begins with a conversation. I take a
            limited number of projects each year — let&apos;s see if we&apos;re the
            right fit.
          </motion.p>

          <motion.div variants={fadeUp} className={styles.bookingActions}>
            <Link href="/templates/snap/contact" className={styles.btnPrimary}>
              Book a Session
              <ArrowIcon />
            </Link>
            <Link href="/templates/snap/portfolio" className={styles.btnGhost}>
              View Portfolio
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.bookingContact}>
            <a href={`mailto:${PROFILE.email}`} className={styles.bookingContactItem}>
              <span className={styles.bookingContactIcon}>
                <MailIcon />
              </span>
              {PROFILE.email}
            </a>
            <a href={`tel:${PROFILE.phone}`} className={styles.bookingContactItem}>
              <span className={styles.bookingContactIcon}>
                <PhoneIcon />
              </span>
              {PROFILE.phone}
            </a>
            <span className={styles.bookingContactItem}>
              <span className={styles.bookingContactIcon}>
                <PinIcon />
              </span>
              {PROFILE.studioLocation}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.34a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 8.09 8.09l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
