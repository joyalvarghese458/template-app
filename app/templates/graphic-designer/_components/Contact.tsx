"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PROFILE } from "../_data/portfolio";
import { fadeLeft, fadeRight, fadeUp, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className={styles.eyebrow}>Contact</span>
        </motion.div>

        <div className={styles.contactGrid}>
          {/* Left: info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className={styles.contactBigText}>
              Let&apos;s create<br />
              something <em>great.</em>
            </h2>

            <p className={styles.contactLead}>
              Have a project in mind? I&apos;d love to hear about it. Drop me a
              message and I&apos;ll be in touch within 24 hours.
            </p>

            <div className={styles.contactDetails}>
              <a
                href={`mailto:${PROFILE.email}`}
                className={styles.contactDetail}
              >
                <Mail size={16} className={styles.contactDetailIcon} />
                {PROFILE.email}
              </a>
              <a
                href={`tel:${PROFILE.phone}`}
                className={styles.contactDetail}
              >
                <Phone size={16} className={styles.contactDetailIcon} />
                {PROFILE.phone}
              </a>
              <span className={styles.contactDetail}>
                <MapPin size={16} className={styles.contactDetailIcon} />
                {PROFILE.location} · {PROFILE.availability}
              </span>
            </div>

            <div className={styles.contactSocials}>
              {[
                { href: PROFILE.instagram, label: "Instagram" },
                { href: PROFILE.behance,   label: "Behance" },
                { href: PROFILE.linkedin,  label: "LinkedIn" },
                { href: PROFILE.dribbble,  label: "Dribbble" },
              ].map((s) => (
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

          {/* Right: form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  className={styles.contactForm}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.formSuccess}>
                    <span className={styles.formSuccessIcon}>✦</span>
                    <h3 className={styles.formSuccessTitle}>Message sent!</h3>
                    <p className={styles.formSuccessText}>
                      Thanks for reaching out. I&apos;ll be in touch within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className={styles.contactForm}
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="gd-name" className={styles.formLabel}>Name</label>
                      <input
                        id="gd-name"
                        type="text"
                        required
                        className={styles.formInput}
                        placeholder="Your name"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="gd-email" className={styles.formLabel}>Email</label>
                      <input
                        id="gd-email"
                        type="email"
                        required
                        className={styles.formInput}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="gd-project" className={styles.formLabel}>Project type</label>
                    <input
                      id="gd-project"
                      type="text"
                      className={styles.formInput}
                      placeholder="Brand identity, packaging, motion…"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="gd-budget" className={styles.formLabel}>Budget range</label>
                    <input
                      id="gd-budget"
                      type="text"
                      className={styles.formInput}
                      placeholder="e.g. €5k–€15k"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="gd-message" className={styles.formLabel}>Message</label>
                    <textarea
                      id="gd-message"
                      required
                      rows={5}
                      className={styles.formTextarea}
                      placeholder="Tell me about your project, timeline, and goals…"
                    />
                  </div>

                  <button type="submit" className={styles.btnPrimary}>
                    Send message <Send size={14} aria-hidden="true" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
