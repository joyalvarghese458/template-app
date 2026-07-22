"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Cursor from "../_components/Cursor";
import { useReveal, useScrollProgress, useSmoothScroll } from "../_components/hooks";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

// =====================================================
// EDITABLE CONTENT
// =====================================================

const CONTACT_INFO = {
  phone: "+91 98765 43210",
  email: "hello@galleryplus.studio",
  address: "Studio 4B, Bandra West, Mumbai 400050",
  whatsapp: "919876543210",
  instagram: "galleryplus",
  facebook: "galleryplusstudio",
};

const SESSION_TYPES = [
  "Wedding & Ceremony",
  "Engagement & Pre-Wedding",
  "Portrait Session",
  "Wildlife Expedition",
  "Fashion / Editorial",
  "Commercial & Brand",
  "Event Coverage",
  "Travel Project",
  "Other",
];

const AVAILABILITY = [
  { month: "Jun 2026", status: "limited" as const, note: "2 slots left" },
  { month: "Jul 2026", status: "open" as const, note: "Accepting bookings" },
  { month: "Aug 2026", status: "open" as const, note: "Accepting bookings" },
  { month: "Sep 2026", status: "limited" as const, note: "1 slot left" },
  { month: "Oct 2026", status: "booked" as const, note: "Fully booked" },
  { month: "Nov 2026", status: "open" as const, note: "Accepting bookings" },
];

const FAQS = [
  {
    q: "How far in advance should I book?",
    a: "For weddings, we recommend booking 6–12 months ahead, especially for peak season (October–February in India). For portraits and commercial shoots, 4–6 weeks usually suffices, though we do our best to accommodate shorter timelines.",
  },
  {
    q: "Do you travel for sessions outside Mumbai?",
    a: "Absolutely. Over 60% of our work is done outside the studio city. Travel costs (flight, accommodation, local transport) are billed at cost and itemised separately in the proposal. International expeditions are welcomed.",
  },
  {
    q: "How long before I receive my images?",
    a: "Wedding galleries are delivered within 4–6 weeks. Portrait sessions within 10 business days. Commercial and fashion work is discussed on a project basis — we can meet tight editorial deadlines when required.",
  },
  {
    q: "What file formats and resolution do you deliver?",
    a: "High-resolution JPEG files, typically 20–50 megapixels depending on the camera body used. Full-resolution files are delivered via a private online gallery with download access. Print-ready files and RAW files can be licensed separately.",
  },
  {
    q: "Do you offer prints and albums?",
    a: "Yes. We partner with specialist print labs in Italy and the UK to produce fine art prints, handmade flush-mount albums, and gallery-quality canvas and metal prints. Every product is quality-checked before delivery.",
  },
  {
    q: "What is your cancellation and rescheduling policy?",
    a: "A 30% non-refundable retainer secures your date. Rescheduling within 60 days of an event incurs no fee (subject to availability). Cancellations within 30 days of the session forfeit the retainer. Full policy details in the contract.",
  },
];

// =====================================================

export default function ContactPage() {
  useSmoothScroll();
  const progress = useScrollProgress();

  return (
    <div className={theme.root}>
      <div
        className={theme.progress}
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <Cursor />
      <div className={theme.vignette} aria-hidden="true" />
      <div className={theme.grain} aria-hidden="true" />

      <Nav current="contact" />

      <ContactHero />
      <ContactBody />
      <AvailabilitySection />
      <FaqSection />
      <MapSection />

      <Footer />
    </div>
  );
}

// =====================================================
// HERO
// =====================================================

function ContactHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=2000&q=80&auto=format&fit=crop"
          alt=""
        />
        <div className={styles.heroBgOverlay} />
      </div>

      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>
          <span className={styles.heroEyebrowLine} />
          Get In Touch
        </p>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine}>
            <span className={styles.heroTitleInner}>Let&apos;s</span>
          </span>
          <span className={styles.heroTitleLine}>
            <span
              className={`${styles.heroTitleInner} ${styles.heroTitleItalic}`}
              style={{ animationDelay: "0.15s" }}
            >
              Create.
            </span>
          </span>
        </h1>
        <p className={styles.heroSub}>
          Tell us about your vision. We read every brief personally and respond
          within 48 hours.
        </p>
      </div>

      <div className={styles.heroScroll} aria-hidden="true">
        <span className={styles.heroScrollLine} />
        <span>SCROLL</span>
      </div>
    </header>
  );
}

// =====================================================
// CONTACT BODY — form + info columns
// =====================================================

function ContactBody() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.contactSection} ref={ref}>
      <div className={`${styles.contactGrid} ${visible ? styles.contactGridVisible : ""}`}>
        {/* ---- Left: Info ---- */}
        <div className={styles.contactInfo}>
          <p className={styles.sectionTag}>
            <span className={styles.sectionTagDot} />
            Studio Contact
          </p>
          <h2 className={styles.contactInfoTitle}>
            Start a <em className={styles.accentItalic}>conversation.</em>
          </h2>
          <p className={styles.contactInfoBody}>
            Whether you have a firm brief or just an idea, reach out. We work best
            when we understand your story before picking up the camera.
          </p>

          <div className={styles.contactCards}>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className={styles.contactCard}>
              <div className={styles.contactCardIcon} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 5.93 2 2 0 015 3.77h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 11.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18.92z" />
                </svg>
              </div>
              <div>
                <p className={styles.contactCardLabel}>Call or WhatsApp</p>
                <p className={styles.contactCardValue}>{CONTACT_INFO.phone}</p>
              </div>
            </a>

            <a href={`mailto:${CONTACT_INFO.email}`} className={styles.contactCard}>
              <div className={styles.contactCardIcon} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className={styles.contactCardLabel}>Email</p>
                <p className={styles.contactCardValue}>{CONTACT_INFO.email}</p>
              </div>
            </a>

            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className={styles.contactCardLabel}>Studio Address</p>
                <p className={styles.contactCardValue}>{CONTACT_INFO.address}</p>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <p className={styles.socialTitle}>Follow the Work</p>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1.2"/>
                </svg>
                Instagram
              </a>
              <a href="#" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Facebook
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20photography%20project`}
                className={`${styles.socialLink} ${styles.socialLinkWa}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick WhatsApp CTA */}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20photography%20session`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waBtn}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quick Book via WhatsApp
          </a>
        </div>

        {/* ---- Right: Form ---- */}
        <div className={styles.contactFormWrap}>
          {submitted ? (
            <div className={styles.formSuccess}>
              <div className={styles.formSuccessIcon} aria-hidden="true">✓</div>
              <h3 className={styles.formSuccessTitle}>Message Received</h3>
              <p className={styles.formSuccessBody}>
                Thank you for reaching out. We&apos;ll review your brief and respond
                within 48 hours. In the meantime, feel free to browse the portfolio.
              </p>
              <Link href="/templates/gallery-plus/works" className={styles.formSuccessLink}>
                View Portfolio →
              </Link>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <h2 className={styles.formTitle}>Inquiry Form</h2>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className={styles.formInput}
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={styles.formInput}
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="phone">Phone / WhatsApp</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className={styles.formInput}
                    value={formState.phone}
                    onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="date">Preferred Date</label>
                  <input
                    id="date"
                    type="date"
                    className={styles.formInput}
                    value={formState.date}
                    onChange={(e) => setFormState((s) => ({ ...s, date: e.target.value }))}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="sessionType">Session Type *</label>
                <select
                  id="sessionType"
                  required
                  className={styles.formSelect}
                  value={formState.sessionType}
                  onChange={(e) => setFormState((s) => ({ ...s, sessionType: e.target.value }))}
                >
                  <option value="" disabled>Select a session type</option>
                  {SESSION_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="message">Your Brief *</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell us about your vision — location, mood, timeline, budget range, and anything else that helps us understand what you have in mind."
                  className={styles.formTextarea}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                />
              </div>

              <button type="submit" className={styles.formSubmit}>
                Send Inquiry
                <span className={styles.formSubmitArrow} aria-hidden="true">→</span>
              </button>

              <p className={styles.formNote}>
                We respond within 48 hours. All information is kept private and
                never shared with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// =====================================================
// AVAILABILITY CALENDAR
// =====================================================

function AvailabilitySection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.availability} ref={ref}>
      <p className={styles.sectionTag}>
        <span className={styles.sectionTagDot} />
        Booking Calendar
      </p>
      <h2 className={styles.sectionTitle}>
        Availability for <em className={styles.accentItalic}>2026.</em>
      </h2>

      <div className={`${styles.availabilityGrid} ${visible ? styles.availabilityGridVisible : ""}`}>
        {AVAILABILITY.map((item, i) => (
          <div
            key={i}
            className={`${styles.availabilityCard} ${styles[`status_${item.status}`]}`}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className={styles.availabilityStatusDot} aria-hidden="true" />
            <p className={styles.availabilityMonth}>{item.month}</p>
            <p className={styles.availabilityNote}>{item.note}</p>
            {item.status !== "booked" && (
              <Link href="#inquiry" className={styles.availabilityBtn}>
                Enquire
              </Link>
            )}
          </div>
        ))}
      </div>

      <p className={styles.availabilityFine}>
        Calendar is indicative. Contact us directly to check specific dates. International
        travel and wildlife expeditions may have different availability windows.
      </p>
    </section>
  );
}

// =====================================================
// FAQ ACCORDION
// =====================================================

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className={styles.faq} ref={ref}>
      <div className={styles.faqHead}>
        <p className={styles.sectionTag}>
          <span className={styles.sectionTagDot} />
          Common Questions
        </p>
        <h2 className={`${styles.sectionTitle} ${visible ? styles.faqHeadVisible : ""}`}>
          Everything you <em className={styles.accentItalic}>need to know.</em>
        </h2>
      </div>

      <div className={styles.faqList}>
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`${styles.faqItem} ${open === i ? styles.faqItemOpen : ""}`}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span>{faq.q}</span>
              <span className={styles.faqIcon} aria-hidden="true">
                {open === i ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-answer-${i}`}
              className={styles.faqAnswer}
              style={{ maxHeight: open === i ? "400px" : "0" }}
            >
              <p className={styles.faqAnswerText}>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =====================================================
// MAP / LOCATION SECTION
// =====================================================

function MapSection() {
  return (
    <section className={styles.map}>
      <div className={styles.mapContent}>
        <p className={styles.sectionTag}>
          <span className={styles.sectionTagDot} />
          Find Us
        </p>
        <h2 className={styles.sectionTitle}>
          The <em className={styles.accentItalic}>studio.</em>
        </h2>
        <p className={styles.mapBody}>
          Studio 4B, Bandra West, Mumbai 400050
          <br />
          Appointments preferred. Walk-ins welcome on Tuesdays &amp; Thursdays, 11:00 — 18:00.
        </p>
        <div className={styles.mapLinks}>
          <a
            href="https://maps.google.com/?q=Bandra+West,+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLinkBtn}
          >
            Open in Google Maps ↗
          </a>
        </div>
      </div>

      {/* Styled map placeholder (replace with an actual embed if desired) */}
      <div className={styles.mapVisual} aria-hidden="true">
        <div className={styles.mapGrid} />
        <div className={styles.mapPin}>
          <div className={styles.mapPinDot} />
          <div className={styles.mapPinRing} />
          <p className={styles.mapPinLabel}>Gallery+ Studio</p>
        </div>
        <div className={styles.mapWatermark}>MUMBAI · BANDRA</div>
      </div>
    </section>
  );
}
