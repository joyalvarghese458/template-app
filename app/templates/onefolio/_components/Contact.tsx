"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { PROFILE } from "../_data/portfolio";
import { fadeUp, fadeLeft, fadeRight, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

const SOCIALS = [
  { label: "Instagram", href: PROFILE.instagram },
  { label: "Behance",   href: PROFILE.behance   },
  { label: "LinkedIn",  href: PROFILE.linkedin  },
  { label: "Dribbble",  href: PROFILE.dribbble  },
  { label: "Twitter",   href: PROFILE.twitter   },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a submit delay
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  return (
    <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
      <div className={styles.container}>
        <div className={styles.contactGrid}>

          {/* ── Left: Info ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <span className={styles.eyebrow}>Contact</span>
            <h2 className={styles.contactBigText}>
              Let&apos;s<br />
              <em>create</em><br />
              together.
            </h2>
            <p className={styles.contactLead}>
              Whether you have a brief, a vision, or just a feeling — reach out.
              I typically respond within 24 hours.
            </p>

            {/* Contact details */}
            <div className={styles.contactDetails}>
              <a href={`mailto:${PROFILE.email}`} className={styles.contactDetail}>
                <span className={styles.contactDetailIcon}>
                  <MailIcon />
                </span>
                {PROFILE.email}
              </a>
              <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className={styles.contactDetail}>
                <span className={styles.contactDetailIcon}>
                  <PhoneIcon />
                </span>
                {PROFILE.phone}
              </a>
              <div className={styles.contactDetail}>
                <span className={styles.contactDetailIcon}>
                  <PinIcon />
                </span>
                {PROFILE.location}
              </div>
            </div>

            {/* Social links */}
            <div className={styles.contactSocials}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactSocialLink}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {sent ? (
              <div className={`${styles.contactForm} ${styles.formSuccess}`}>
                <span className={styles.formSuccessEmoji}>🎨</span>
                <h3 className={styles.formSuccessTitle}>Message received!</h3>
                <p className={styles.formSuccessText}>
                  Thanks for reaching out. I&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                className={styles.contactForm}
                onSubmit={handleSubmit}
                noValidate
              >
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="cf-name" className={styles.formLabel}>Name</label>
                    <input
                      id="cf-name"
                      type="text"
                      className={styles.formInput}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="cf-email" className={styles.formLabel}>Email</label>
                    <input
                      id="cf-email"
                      type="email"
                      className={styles.formInput}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="cf-project" className={styles.formLabel}>Project Type</label>
                  <input
                    id="cf-project"
                    type="text"
                    className={styles.formInput}
                    placeholder="Brand identity, packaging, campaign..."
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="cf-budget" className={styles.formLabel}>Budget Range</label>
                  <input
                    id="cf-budget"
                    type="text"
                    className={styles.formInput}
                    placeholder="e.g. $10,000–$30,000"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="cf-message" className={styles.formLabel}>Tell me about your project</label>
                  <textarea
                    id="cf-message"
                    className={styles.formTextarea}
                    placeholder="Share your vision, goals, timeline, or just say hi..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={styles.btnPrimary}
                  disabled={loading}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  {!loading && <SendIcon />}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ── Icons ─────────────────────────────────────────────────────────── */
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
