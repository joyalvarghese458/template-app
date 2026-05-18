"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Loader from "../_components/Loader";
import { useReveal } from "../_components/hooks";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

const CARDS = [
  {
    title: "My Articles",
    copy: "Become an industry expert",
    link: "Read Articles",
    href: "/templates/pure/blog",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h8M8 9h2" />
      </svg>
    ),
  },
  {
    title: "FAQ's",
    copy: "Quick answers to common asks",
    link: "Check FAQ's",
    href: "#faq",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
      </svg>
    ),
  },
  {
    title: "Direct email",
    copy: "Reach me personally",
    link: "Send An Email",
    href: "mailto:doe@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
  },
];

const BUDGETS = [
  "Select your budget",
  "$1k – $3k",
  "$3k – $7k",
  "$7k – $15k",
  "$15k +",
];

export default function PureContact() {
  return (
    <div className={theme.root}>
      <Loader />
      <Nav current="contact" />

      <section className={styles.banner}>
        <span className={styles.bannerGlow} aria-hidden="true" />
        <span className={`${styles.bannerOrb} ${styles.bannerOrb1}`} aria-hidden="true" />
        <span className={`${styles.bannerOrb} ${styles.bannerOrb2}`} aria-hidden="true" />
        <h1 className={styles.bannerTitle}>Contact Us</h1>
        <div className={styles.crumbs}>
          <Link href="/templates/pure">Home</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
          <span>Contact</span>
        </div>
      </section>

      <Cards />
      <FormSection />

      <Footer ctaTitle="Check portfolio" ctaLabel="Portfolio" ctaHref="/templates/pure/portfolio" />
    </div>
  );
}

function Cards() {
  return (
    <div className={styles.cards}>
      <div className={styles.cardsInner}>
        {CARDS.map((c, i) => (
          <CardEl key={c.title} card={c} index={i} />
        ))}
      </div>
    </div>
  );
}

function CardEl({
  card,
  index,
}: {
  card: (typeof CARDS)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardIcon}>{card.icon}</div>
      <div>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardCopy}>{card.copy}</p>
        <Link href={card.href} className={styles.cardLink}>
          {card.link}
        </Link>
      </div>
    </div>
  );
}

function FormSection() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { ref, visible } = useReveal<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section className={styles.formSection}>
      <div
        className={styles.formInner}
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div className={styles.formHead}>
          <h2 className={styles.formTitle}>Let&apos;s Talk</h2>
          <p className={styles.formIntro}>
            Got a project in mind? Fill in the form or send us a note. We reply within
            one business day.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <input className={styles.input} type="text" placeholder="First name" required />
          </div>
          <div className={styles.field}>
            <input className={styles.input} type="text" placeholder="Last name" required />
          </div>
          <div className={`${styles.field} ${styles.fieldFull}`}>
            <input className={styles.input} type="email" placeholder="Email" required />
          </div>
          <div className={`${styles.field} ${styles.fieldFull}`}>
            <select className={styles.select} defaultValue={BUDGETS[0]} required>
              {BUDGETS.map((b) => (
                <option key={b} disabled={b === BUDGETS[0]} value={b === BUDGETS[0] ? "" : b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div className={`${styles.field} ${styles.fieldFull}`}>
            <textarea className={styles.textarea} placeholder="Your message" required />
          </div>
          <div className={styles.submitWrap}>
            <button className={styles.submit} type="submit" disabled={submitting}>
              {submitting ? "Sending…" : "Send Message"}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
              </svg>
            </button>
          </div>
          {sent && (
            <p className={styles.success}>
              Thanks — your message is in. I&apos;ll reply shortly to the email you provided.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
