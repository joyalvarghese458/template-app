"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLenis }    from "../_hooks/useLenis";
import GrainOverlay    from "../_components/GrainOverlay";
import ScrollProgress  from "../_components/ScrollProgress";
import CustomCursor    from "../_components/CustomCursor";
import Nav             from "../_components/Nav";
import Footer          from "../_components/Footer";
import { PROFILE, FAQ } from "../_data/portfolio";
import { fadeUp, stagger, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function SnapContact() {
  useLenis();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <GrainOverlay />
      <ScrollProgress />
      <CustomCursor />
      <Nav />

      <main>
        {/* Hero */}
        <section className={styles.contactHero}>
          <div className={styles.contactHeroBg} />
          <div className={styles.container} style={{ position: "relative", zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className={styles.eyebrow} style={{ justifyContent: "center" }}>
                Get in touch
              </div>
              <h1 className={styles.contactHeroTitle}>
                Let&apos;s create <em>together</em>
              </h1>
              <p className={styles.contactHeroSub}>
                Every extraordinary photograph begins with a conversation.
                Reach out — I&apos;d love to hear your vision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact form + info */}
        <section className={styles.contactPageSection}>
          <div className={styles.container}>
            <div className={styles.contactPageGrid}>
              {/* Left: info */}
              <motion.div
                className={styles.contactInfo}
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <motion.div variants={fadeUp}>
                  <div className={styles.eyebrow}>The Studio</div>
                  <h2 className={styles.contactBigText}>
                    Book a <em>session</em>
                  </h2>
                  <p className={styles.contactLead}>
                    Whether it&apos;s a wedding in Tuscany, a wildlife expedition in
                    Botswana, or a fashion editorial in Paris — let&apos;s talk.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className={styles.contactDetails}>
                  <a href={`mailto:${PROFILE.email}`} className={styles.contactDetail}>
                    <span className={styles.contactDetailIcon}><MailIcon /></span>
                    {PROFILE.email}
                  </a>
                  <a href={`tel:${PROFILE.phone}`} className={styles.contactDetail}>
                    <span className={styles.contactDetailIcon}><PhoneIcon /></span>
                    {PROFILE.phone}
                  </a>
                  <span className={styles.contactDetail}>
                    <span className={styles.contactDetailIcon}><PinIcon /></span>
                    {PROFILE.studioLocation}
                  </span>
                  <a
                    href={`https://wa.me/${PROFILE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactDetail}
                  >
                    <span className={styles.contactDetailIcon}><WhatsAppIcon /></span>
                    WhatsApp Booking
                  </a>
                </motion.div>

                <motion.div variants={fadeUp} className={styles.contactSocials}>
                  <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" className={styles.contactSocialLink}>
                    Instagram
                  </a>
                  <a href={PROFILE.twitter} target="_blank" rel="noopener noreferrer" className={styles.contactSocialLink}>
                    Twitter
                  </a>
                  <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactSocialLink}>
                    LinkedIn
                  </a>
                  <a href={PROFILE.behance} target="_blank" rel="noopener noreferrer" className={styles.contactSocialLink}>
                    Behance
                  </a>
                </motion.div>
              </motion.div>

              {/* Right: form */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {submitted ? (
                  <div className={`${styles.contactForm} ${styles.formSuccess}`}>
                    <span className={styles.formSuccessIcon}>✦</span>
                    <h3 className={styles.formSuccessTitle}>Message sent</h3>
                    <p className={styles.formSuccessText}>
                      Thank you for reaching out. I&apos;ll be in touch within 48 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className={styles.btnGhost}
                      style={{ marginTop: "1.5rem" }}
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="firstName">
                          First name
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          className={styles.formInput}
                          placeholder="Sophie"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="lastName">
                          Last name
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          className={styles.formInput}
                          placeholder="Laurent"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="email">
                          Email address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className={styles.formInput}
                          placeholder="sophie@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="phone">
                          Phone (optional)
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className={styles.formInput}
                          placeholder="+33 6 00 00 00 00"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="service">
                        Type of photography
                      </label>
                      <select
                        id="service"
                        name="service"
                        className={styles.formSelect}
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a category…</option>
                        <option value="wedding">Wedding</option>
                        <option value="fashion">Fashion / Editorial</option>
                        <option value="portrait">Portrait</option>
                        <option value="wildlife">Wildlife</option>
                        <option value="travel">Travel</option>
                        <option value="commercial">Commercial</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="date">
                          Preferred date
                        </label>
                        <input
                          id="date"
                          name="date"
                          type="date"
                          className={styles.formInput}
                          value={formData.date}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="location">
                          Location / Country
                        </label>
                        <input
                          id="location"
                          name="location"
                          type="text"
                          className={styles.formInput}
                          placeholder="Paris, France"
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="message">
                        Tell me about your vision
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className={styles.formTextarea}
                        placeholder="Share as much or as little as you like…"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                      />
                    </div>

                    <button type="submit" className={styles.btnPrimary} style={{ alignSelf: "flex-start" }}>
                      Send Enquiry
                      <ArrowIcon />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={`${styles.sectionHeader} ${styles.sectionHeaderCenter}`}>
              <div className={styles.eyebrow}>FAQ</div>
              <h2 className={styles.sectionTitle}>
                Common <em>questions</em>
              </h2>
            </div>

            <div className={styles.faqList}>
              {FAQ.map((item, i) => (
                <div
                  key={i}
                  className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    {item.question}
                    <span className={styles.faqIcon}>+</span>
                  </button>
                  <div className={styles.faqAnswer} role="region">
                    <p className={styles.faqAnswerText}>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio map placeholder */}
        <section className={styles.mapSection}>
          <div className={styles.container}>
            <div className={styles.eyebrow} style={{ marginBottom: "1.5rem" }}>Find the studio</div>
            <div className={styles.mapWrap}>
              <div className={styles.mapPlaceholder}>
                <span className={styles.mapIcon}>◆</span>
                <p className={styles.mapAddress}>{PROFILE.studioLocation}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
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
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.34a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 8.09 8.09l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
