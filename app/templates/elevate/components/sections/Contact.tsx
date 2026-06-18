"use client";

import { useState } from "react";

import type { Trainer } from "../../data/trainer";
import RevealBlock from "../common/RevealBlock";
import styles from "../../styles.module.css";

const goals = [
  "Weight Loss",
  "Muscle Gain",
  "General Fitness",
  "Sport-Specific",
];

function ContactIcon({ type }: { type: "whatsapp" | "email" | "location" }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h16v12H4z" />
        <path d="m5 7 7 6 7-6" />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.1A8 8 0 1 1 20 12Z" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  return <span className={styles.socialInitial}>{label[0]}</span>;
}

export default function Contact({ trainer }: { trainer: Trainer }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
      <div className={styles.sectionInner}>
        <div className={styles.contactGrid}>
          <RevealBlock className={styles.contactInfo}>
            <h2 className={styles.contactTitle}>Let&apos;s Build Your Best Self</h2>
            <p className={styles.bodyCopy}>
              Tell me your goal, your current routine, and what you want to change.
              I&apos;ll help you map the fastest path forward.
            </p>

            <div className={styles.contactRows}>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}>
                  <ContactIcon type="whatsapp" />
                </span>
                <span>{trainer.contact.whatsapp}</span>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}>
                  <ContactIcon type="email" />
                </span>
                <span>{trainer.contact.email}</span>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}>
                  <ContactIcon type="location" />
                </span>
                <span>{trainer.contact.location}</span>
              </div>
            </div>

            <div className={styles.socialRow}>
              {Object.entries(trainer.social).map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className={styles.socialButton}
                  aria-label={label}
                >
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>
          </RevealBlock>

          <RevealBlock className={styles.contactFormWrap} delay={100}>
            <form
              className={styles.contactForm}
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="phone" placeholder="Phone" required />
              <select name="goal" defaultValue="" required>
                <option value="" disabled>
                  Goal
                </option>
                {goals.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Tell me where you are now and what you want to achieve."
                rows={5}
                required
              />
              <button type="submit" className={styles.submitButton}>
                Start My Transformation
              </button>
              {submitted ? (
                <p className={styles.successMessage}>
                  Your message is in. I&apos;ll reach out shortly with the next step.
                </p>
              ) : null}
            </form>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
