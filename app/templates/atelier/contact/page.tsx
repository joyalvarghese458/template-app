"use client";

import { useState } from "react";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Cursor from "../_components/Cursor";
import Cube from "../_components/Cube";
import { useReveal, useSmoothScroll } from "../_components/hooks";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

const PROFILE = {
  email: "hello@atelier.studio",
  press: "press@atelier.studio",
  careers: "careers@atelier.studio",
};

const STUDIOS = [
  {
    city: "San Francisco",
    country: "United States",
    address: "412 Valencia Street, Suite 6\nSan Francisco, CA 94103",
    timezone: "PST · UTC−8",
    phone: "+1 (415) 555 0162",
    note: "Headquarters",
  },
  {
    city: "Berlin",
    country: "Germany",
    address: "Köpenicker Str. 154A\n10997 Berlin",
    timezone: "CET · UTC+1",
    phone: "+49 30 5555 0188",
    note: "Studio · Europe",
  },
  {
    city: "Tokyo",
    country: "Japan",
    address: "2-11-3 Meguro, Meguro-ku\nTokyo 153-0063",
    timezone: "JST · UTC+9",
    phone: "+81 3 5555 0204",
    note: "Studio · Asia Pacific",
  },
];

const NEXT_STEPS = [
  {
    id: "I",
    title: "First reply",
    detail:
      "We respond personally within two working days. No bots, no boilerplate — just a senior partner reading what you sent.",
  },
  {
    id: "II",
    title: "Discovery call",
    detail:
      "A 45-minute conversation to understand your ambitions, constraints, timeline and the texture of your team. No deck. No pitch.",
  },
  {
    id: "III",
    title: "Scope & proposal",
    detail:
      "A bespoke proposal within a week — shape of engagement, named team, milestones and a transparent investment range.",
  },
  {
    id: "IV",
    title: "Kick-off",
    detail:
      "Once aligned, we begin. Most projects start within 3–6 weeks of first contact, depending on scope and current capacity.",
  },
];

const CHANNELS = [
  { label: "Instagram", handle: "@atelier.studio", href: "#" },
  { label: "Vimeo", handle: "vimeo.com/atelier", href: "#" },
  { label: "LinkedIn", handle: "/atelier-studio", href: "#" },
  { label: "Are.na", handle: "/atelier", href: "#" },
  { label: "Read.cv", handle: "/atelier", href: "#" },
  { label: "Dribbble", handle: "/atelier", href: "#" },
];

const BUDGETS = ["< $25k", "$25k – $75k", "$75k – $200k", "$200k+", "Not sure yet"];
const DISCIPLINES = ["Motion & Film", "3D & CGI", "Brand Identity", "Digital Experience", "Other"];

export default function AtelierContact() {
  useSmoothScroll();

  return (
    <div className={theme.root}>
      <div className={theme.grain} aria-hidden />
      <div className={theme.vignette} aria-hidden />
      <Cursor />
      <Nav current="contact" />

      <main className={styles.main}>
        <Header />
        <Form />
        <Studios />
        <NextSteps />
        <Channels />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className={styles.pageHead}>
      <div className={styles.pageHeadInner}>
        <div className={styles.pageHeadLeft}>
          <p className={styles.pageEyebrow}>
            <span className={styles.eyeDot} />§ Begin · 2026
          </p>
          <h1 className={styles.pageTitle}>
            <span className={styles.titleLine}>
              <span className={styles.titleInner}>Let&rsquo;s make</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.titleInner} style={{ animationDelay: "0.15s" }}>
                <em className={styles.serif}>something</em>
              </span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.titleInner} style={{ animationDelay: "0.3s" }}>
                worth remembering.
              </span>
            </span>
          </h1>
          <p className={styles.pageLead}>
            Tell us about your project, your team, your ambitions. Whether you have a fully briefed
            campaign or a rough idea on the back of a napkin — we&rsquo;d love to hear from you.
          </p>

          <div className={styles.headStats}>
            <div className={styles.headStat}>
              <span className={styles.headStatLabel}>Response</span>
              <span className={styles.headStatValue}>&lt; 48 hours</span>
            </div>
            <div className={styles.headStat}>
              <span className={styles.headStatLabel}>Currently</span>
              <span className={styles.headStatValue}>Booking Q3 → Q4</span>
            </div>
            <div className={styles.headStat}>
              <span className={styles.headStatLabel}>Studios</span>
              <span className={styles.headStatValue}>SF · BER · TYO</span>
            </div>
          </div>
        </div>

        <div className={styles.pageHeadRight}>
          <div className={styles.cubeWrap}>
            <Cube size={360} accent="#6fcf97" autoRotate scrollSpeed={0.0008} />
          </div>
          <div className={styles.cubeBadge}>
            <span className={styles.cubeBadgeDot} />
            <span>Open to new work</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Form() {
  const { ref, visible } = useReveal<HTMLElement>(0.05);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    discipline: DISCIPLINES[0],
    budget: BUDGETS[1],
    timeline: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form, v: string) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      ref={ref}
      id="form"
      className={`${styles.formSection} ${visible ? styles.reveal : ""}`}
    >
      <div className={styles.formHead}>
        <p className={styles.sectionLabel}>
          <span className={styles.sectionLabelDash}>§ 01</span>The brief
        </p>
        <h2 className={styles.sectionTitle}>
          Start with the <em className={styles.serif}>shape</em> of it.
        </h2>
      </div>

      {sent ? (
        <div className={styles.thanks}>
          <p className={styles.thanksEyebrow}>§ Received</p>
          <h3 className={styles.thanksTitle}>
            Thank you, <em className={styles.serif}>{form.name || "friend"}</em>.
          </h3>
          <p className={styles.thanksCopy}>
            Your message is in. A senior partner will reply within two working days
            from {form.email || "the address you provided"}. In the meantime, feel
            free to wander through our work or read about how we approach things.
          </p>
          <div className={styles.thanksActions}>
            <a href="/templates/atelier/work" className={styles.thanksLink}>
              See our work →
            </a>
            <button
              type="button"
              className={styles.thanksReset}
              onClick={() => {
                setSent(false);
                setForm({
                  name: "",
                  email: "",
                  company: "",
                  discipline: DISCIPLINES[0],
                  budget: BUDGETS[1],
                  timeline: "",
                  message: "",
                });
              }}
            >
              Send another
            </button>
          </div>
        </div>
      ) : (
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.formGrid}>
            <Field
              label="Your name"
              n="01"
              required
              value={form.name}
              onChange={(v) => update("name", v)}
              placeholder="Jane Doe"
            />
            <Field
              label="Email"
              n="02"
              required
              type="email"
              value={form.email}
              onChange={(v) => update("email", v)}
              placeholder="you@company.com"
            />
            <Field
              label="Company / Organisation"
              n="03"
              value={form.company}
              onChange={(v) => update("company", v)}
              placeholder="Studio, brand or independent"
            />
            <Field
              label="Timeline"
              n="04"
              value={form.timeline}
              onChange={(v) => update("timeline", v)}
              placeholder="e.g. Launch Q4 2026"
            />

            <div className={`${styles.field} ${styles.fieldWide}`}>
              <label className={styles.fieldLabel}>
                <span className={styles.fieldN}>05</span>
                Discipline
              </label>
              <div className={styles.chips}>
                {DISCIPLINES.map((d) => (
                  <button
                    key={d}
                    type="button"
                    className={`${styles.chip} ${form.discipline === d ? styles.chipActive : ""}`}
                    onClick={() => update("discipline", d)}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className={`${styles.field} ${styles.fieldWide}`}>
              <label className={styles.fieldLabel}>
                <span className={styles.fieldN}>06</span>
                Investment range
              </label>
              <div className={styles.chips}>
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    className={`${styles.chip} ${form.budget === b ? styles.chipActive : ""}`}
                    onClick={() => update("budget", b)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className={`${styles.field} ${styles.fieldWide}`}>
              <label className={styles.fieldLabel}>
                <span className={styles.fieldN}>07</span>
                Tell us about your project
                <span className={styles.fieldReq}>*</span>
              </label>
              <textarea
                className={styles.textarea}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="What are you making? Who is it for? What does success look like? Links and references welcome — the more texture, the better."
                rows={6}
                required
              />
            </div>
          </div>

          <div className={styles.formFoot}>
            <p className={styles.formNote}>
              By submitting you agree to our privacy notice. We never share your
              brief with third parties.
            </p>
            <button type="submit" className={styles.submit}>
              <span>Send the brief</span>
              <span className={styles.submitArrow}>→</span>
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

function Field({
  label,
  n,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  n: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel}>
        <span className={styles.fieldN}>{n}</span>
        {label}
        {required ? <span className={styles.fieldReq}>*</span> : null}
      </label>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

function Studios() {
  const { ref, visible } = useReveal<HTMLElement>(0.05);
  return (
    <section
      ref={ref}
      id="studios"
      className={`${styles.studios} ${visible ? styles.reveal : ""}`}
    >
      <div className={styles.studiosHead}>
        <p className={styles.sectionLabel}>
          <span className={styles.sectionLabelDash}>§ 02</span>Studios
        </p>
        <h2 className={styles.sectionTitle}>
          Three rooms <em className={styles.serif}>in</em> three time zones.
        </h2>
      </div>

      <div className={styles.studiosGrid}>
        {STUDIOS.map((s, i) => (
          <article key={s.city} className={styles.studio} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className={styles.studioHead}>
              <h3 className={styles.studioCity}>{s.city}</h3>
              <p className={styles.studioCountry}>{s.country}</p>
            </div>
            <p className={styles.studioAddress}>{s.address}</p>
            <div className={styles.studioMeta}>
              <div className={styles.studioMetaRow}>
                <span className={styles.studioMetaLabel}>Phone</span>
                <span className={styles.studioMetaValue}>{s.phone}</span>
              </div>
              <div className={styles.studioMetaRow}>
                <span className={styles.studioMetaLabel}>Time</span>
                <span className={styles.studioMetaValue}>{s.timezone}</span>
              </div>
            </div>
            <p className={styles.studioNote}>{s.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function NextSteps() {
  const { ref, visible } = useReveal<HTMLElement>(0.05);
  return (
    <section
      ref={ref}
      id="process"
      className={`${styles.nextSteps} ${visible ? styles.reveal : ""}`}
    >
      <div className={styles.nextStepsHead}>
        <p className={styles.sectionLabel}>
          <span className={styles.sectionLabelDash}>§ 03</span>What happens next
        </p>
        <h2 className={styles.sectionTitle}>
          From first message to <em className={styles.serif}>kick-off</em>.
        </h2>
      </div>

      <ol className={styles.steps}>
        {NEXT_STEPS.map((step, i) => (
          <li
            key={step.id}
            className={styles.step}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className={styles.stepId}>{step.id}</span>
            <div className={styles.stepBody}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDetail}>{step.detail}</p>
            </div>
            <span className={styles.stepRule} />
          </li>
        ))}
      </ol>
    </section>
  );
}

function Channels() {
  const { ref, visible } = useReveal<HTMLElement>(0.05);
  return (
    <section
      ref={ref}
      id="channels"
      className={`${styles.channels} ${visible ? styles.reveal : ""}`}
    >
      <div className={styles.channelsLeft}>
        <p className={styles.sectionLabel}>
          <span className={styles.sectionLabelDash}>§ 04</span>Or, the direct line
        </p>
        <h2 className={styles.sectionTitle}>
          Reach us <em className={styles.serif}>where</em> you live.
        </h2>
        <div className={styles.directBlock}>
          <a href={`mailto:${PROFILE.email}`} className={styles.directRow}>
            <span className={styles.directLabel}>General</span>
            <span className={styles.directValue}>{PROFILE.email}</span>
            <span className={styles.directArrow}>↗</span>
          </a>
          <a href={`mailto:${PROFILE.press}`} className={styles.directRow}>
            <span className={styles.directLabel}>Press</span>
            <span className={styles.directValue}>{PROFILE.press}</span>
            <span className={styles.directArrow}>↗</span>
          </a>
          <a href={`mailto:${PROFILE.careers}`} className={styles.directRow}>
            <span className={styles.directLabel}>Careers</span>
            <span className={styles.directValue}>{PROFILE.careers}</span>
            <span className={styles.directArrow}>↗</span>
          </a>
        </div>
      </div>

      <div className={styles.channelsRight}>
        <p className={styles.channelsTitle}>Find us elsewhere</p>
        <ul className={styles.channelsList}>
          {CHANNELS.map((c) => (
            <li key={c.label} className={styles.channelItem}>
              <a href={c.href} className={styles.channelLink}>
                <span className={styles.channelLabel}>{c.label}</span>
                <span className={styles.channelHandle}>{c.handle}</span>
                <span className={styles.channelArrow}>→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaGlow} aria-hidden />
      <p className={styles.ctaEyebrow}>§ 05 · One last thing</p>
      <h2 className={styles.ctaTitle}>
        Have an idea you&rsquo;ve been{" "}
        <em className={styles.serif}>turning over</em> for a while?
      </h2>
      <p className={styles.ctaCopy}>
        Some of our best work began as a half-formed thought. If you&rsquo;re not
        sure it&rsquo;s ready — write us anyway. We like the early conversations.
      </p>
      <a href="#form" className={styles.ctaButton}>
        <span>Begin the brief</span>
        <span className={styles.ctaButtonArrow}>→</span>
      </a>
    </section>
  );
}