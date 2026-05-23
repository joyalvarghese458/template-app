"use client";

/* ============================================================
   Pure Portfolio Template — Home page
   ------------------------------------------------------------
   Drop the entire `pure` folder into any Next.js 13+ app/
   route to deploy. Files are organised so each page lives
   beside its own *.module.css for portability.
   ============================================================ */

import { useState } from "react";
import Link from "next/link";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import Loader from "./_components/Loader";
import HeroIntro from "./_components/HeroIntro";
import { useReveal } from "./_components/hooks";
import theme from "./_components/theme.module.css";
import styles from "./styles.module.css";

/* ── Editable content ─────────────────────────────────── */

const PROFILE = {
  name: "Jonathon Doe",
  role: "UI/UX Designer",
  roles: ["UI/UX Designer", "Graphic Designer", "Brand Strategist", "Web Designer"],
  location: "Based in USA",
  email: "doe@gmail.com",
  whatsapp: "https://wa.me/",
};

const STATS = [
  { value: "100%", label: "Client Satisfaction" },
  { value: "690+", label: "Project Done" },
  { value: "8+", label: "Years Experience" },
];

const ABOUT_TABS = {
  myself:
    "I'm a multidisciplinary designer who turns rough ideas into refined digital products. From the first whiteboard sketch to the final pixel, I focus on craft, clarity, and tiny details that make interfaces feel effortless.",
  education:
    "MBA in Computer Science from Harvard (2015–2016), preceded by a B.Sc. in CSE (2010–2014). Continuous learner — currently studying spatial UI and motion principles for emerging AR interfaces.",
  tools:
    "Figma, Framer, Webflow, Notion, Linear, After Effects, Cinema 4D, and a stubborn Moleskine notebook. I prefer tools that get out of the way.",
};

const SERVICES = [
  {
    label: "21 Projects",
    title: "Web UI/UX Design",
    copy: "End-to-end design for marketing sites, dashboards, and SaaS products — research, wireframes, prototypes, handoff.",
    fill: 0.85,
    pct: "85%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
    ),
  },
  {
    label: "18 Projects",
    title: "Mobile UI/UX Design",
    copy: "Native iOS and Android flows, plus design systems that scale across screen sizes without breaking a sweat.",
    fill: 0.75,
    pct: "75%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></svg>
    ),
  },
  {
    label: "25 Projects",
    title: "Branding Design",
    copy: "Logos, identity systems, type pairings, and brand guidelines for new ventures and refreshed established names.",
    fill: 0.93,
    pct: "93%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5" /></svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Jonathon delivered way beyond the brief. The new site lifted demo bookings 38% in the first six weeks alone.",
    name: "Michel Smith",
    role: "Business Owner",
  },
  {
    quote:
      "Calm, fast, and deeply opinionated in the best way. Pure craftsmanship, top to bottom.",
    name: "Adnan",
    role: "Business Owner",
  },
];

const ARTICLES = [
  {
    day: "10",
    date: "Jul 2022",
    title: "How to design a user-centric mobile application?",
    read: "10 mins read",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80&auto=format&fit=crop",
  },
  {
    day: "09",
    date: "Jul 2022",
    title: "From sketch to ship — a lightweight design workflow",
    read: "7 mins read",
    img: "https://images.unsplash.com/photo-1611532736417-1e3c87ac8c64?w=400&q=80&auto=format&fit=crop",
  },
  {
    day: "06",
    date: "Jul 2022",
    title: "Designing dashboards that don't overwhelm",
    read: "8 mins read",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&auto=format&fit=crop",
  },
];

const CLIENTS = [
  { label: "Border", name: "Border", bg: "#0a1f44", color: "#fff", accent: "#3a82f7" },
  { label: "Rise", name: "Rise", bg: "#bff0c5", color: "#1d6a2c", accent: "#26823b" },
  { label: "eBook", name: "Ebooks", bg: "#ffe0d2", color: "#ff6b3d", accent: "#ff6b3d" },
  { label: "Doctor Plus", name: "Doctor+", bg: "#1cb37b", color: "#fff", accent: "#fff" },
  { label: "Pinpoint", name: "PinPoint", bg: "#e94d72", color: "#fff", accent: "#fff" },
  { label: "Recharge", name: "Recharge", bg: "#f7c842", color: "#14112d", accent: "#14112d" },
];

/* ── Page ─────────────────────────────────────────────── */

export default function PureHome() {
  return (
    <div className={theme.root}>
      <Loader />
      <Nav current="home" />

      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Blog />
      <Clients />

      <Footer />
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────── */

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.heroGlow} />
        <svg className={styles.heroNoise} xmlns="http://www.w3.org/2000/svg">
          <filter id="pureHeroNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
            <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#pureHeroNoise)" />
        </svg>
      </div>

      <div className={styles.heroGrid}>
        {/* Left badges */}
        <div className={styles.heroLeft}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <div>
              <span className={styles.badgeLabel}>{PROFILE.role}</span>
              <span className={styles.badgeSub}>{PROFILE.location}</span>
            </div>
          </div>

          <div className={`${styles.badge} ${styles.badgeMuted}`}>
            <span className={`${styles.badgeDot} ${styles.badgeDotMuted}`} />
            <div>
              <span className={styles.badgeLabel}>Say hello to</span>
              <span className={styles.badgeSub}>{PROFILE.email}</span>
            </div>
          </div>

          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1A4.1 4.1 0 0 0 12 9c0 .3 0 .6.1.9A11.7 11.7 0 0 1 3.4 5a4 4 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.7 11.7 11.7 0 0 0 8.3 20.5c7.6 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.3 2.2.4.5.2 1 .5 1.4 1 .4.4.7.8.9 1.4.2.5.4 1.1.4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.3 1.8-.4 2.2-.2.5-.5 1-1 1.4-.4.4-.8.7-1.4.9-.5.2-1.1.4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.3-2.2-.4-.5-.2-1-.5-1.4-1-.4-.4-.7-.8-.9-1.4-.2-.5-.4-1.1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c0-1.2.3-1.8.4-2.2.2-.5.5-1 1-1.4.4-.4.8-.7 1.4-.9.5-.2 1.1-.4 2.2-.4 1.2 0 1.6-.1 4.8-.1zM12 6.9a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2zm0 8.4a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6zm6.5-8.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
            </a>
            <a href="#" aria-label="Dribbble">
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            </a>
          </div>
        </div>

        {/* Center figure + name */}
        <div className={styles.heroCenter}>
          <div className={styles.figureWrap}>
            <div className={styles.figureHalo} aria-hidden="true" />
            <div className={styles.figureRing} aria-hidden="true" />
            <div className={styles.figureGlow} aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.figureImg}
              src="/pure-portrait.png"
              alt={`${PROFILE.name} portrait`}
              draggable={false}
            />
          </div>
          {/* Desktop: name + CTA overlaid/below figure */}
          <h1 className={styles.bigName}>{PROFILE.name}</h1>
          <p className={styles.bigNameSub}>
            Do you have a project?
            <Link href="/templates/pure/contact" className={styles.bigNameSubLink}>
              Let&apos;s Talk
            </Link>
          </p>
          {/* Mobile-only: greeting, typing role, CTA, WhatsApp + email */}
          <HeroIntro
            name={PROFILE.name}
            email={PROFILE.email}
            roles={PROFILE.roles}
            whatsapp={PROFILE.whatsapp}
          />
        </div>

        {/* Right stats */}
        <div className={styles.heroRight}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <p className={styles.statValue}>{s.value}</p>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── About ────────────────────────────────────────────── */

function About() {
  const [tab, setTab] = useState<"myself" | "education" | "tools">("myself");
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className={styles.about}>
      <div
        className={styles.aboutInner}
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div className={styles.aboutImageWrap}>
          <div className={styles.aboutImageInner}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.aboutImage}
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop"
              alt="Jonathon working"
            />
          </div>
          <div className={styles.aboutBadge}>
            <span className={styles.aboutBadgeEmoji}>🥰</span>
            <div>
              <div className={styles.aboutBadgeValue}>80+</div>
              <div className={styles.aboutBadgeLabel}>Happy Clients</div>
            </div>
          </div>
        </div>

        <div>
          <span className={theme.eyebrow}>
            About Me
            <svg className={theme.eyebrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l2 4 4-2-2 4 4 2-4 2 2 4-4-2-2 4-2-4-4 2 2-4-4-2 4-2-2-4 4 2z"/></svg>
          </span>
          <h2 className={theme.displayTitle}>
            Why you <span className={theme.displayTitleAccent}>hire me</span> for your{" "}
            <span className={theme.displayTitleViolet}>next project?</span>
          </h2>

          <div className={styles.tabs} role="tablist">
            {(["myself", "education", "tools"] as const).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                className={`${styles.tab} ${tab === key ? styles.tabActive : ""}`}
                onClick={() => setTab(key)}
              >
                {key === "tools" ? "My Tools" : key}
              </button>
            ))}
          </div>

          <p className={styles.tabContent} key={tab}>
            {ABOUT_TABS[tab]}
          </p>

          <Link href="/templates/pure/contact" className={theme.btnPrimary}>
            <span>Hire Me</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Services ─────────────────────────────────────────── */

function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.servicesInner}>
        <div className={styles.servicesHead}>
          <span className={theme.eyebrow}>
            Services
            <svg className={theme.eyebrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" /></svg>
          </span>
          <h2 className={theme.displayTitle}>
            How can <span className={theme.displayTitleAccent}>I help you</span>
          </h2>
        </div>

        <div className={styles.servicesGrid}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${styles.serviceCard} ${visible ? styles.revealVisible : ""}`}
      style={{
        // @ts-expect-error -- custom CSS var
        "--bar-fill": service.fill,
        transitionDelay: `${index * 0.1}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
      }}
    >
      <span className={styles.serviceIconWrap}>{service.icon}</span>
      <p className={styles.serviceLabel}>{service.label}</p>
      <h3 className={styles.serviceTitle}>{service.title}</h3>
      <p className={styles.serviceCopy}>{service.copy}</p>
      <div className={styles.serviceFoot}>
        <span className={styles.serviceExplore}>Explore</span>
        <span className={styles.serviceArrow}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
      <div className={styles.serviceProgress}>
        <span className={styles.servicePercent}>{service.pct}</span>
        <div className={styles.serviceBar}>
          <span className={styles.serviceBarFill} />
        </div>
      </div>
    </div>
  );
}

/* ── Testimonials ─────────────────────────────────────── */

function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.testimonials}>
      <div
        className={styles.testimonialsInner}
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div>
          <span className={theme.eyebrow}>
            Testimonials
            <svg className={theme.eyebrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 5h12l4 4v10H4z" /></svg>
          </span>
          <h2 className={theme.displayTitle}>
            What <span className={theme.displayTitleAccent}>my client</span> have to say{" "}
            <span className={theme.displayTitleViolet}>about me</span>
          </h2>

          <div style={{ marginTop: 40 }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className={styles.quoteCard}>
                <svg
                  className={styles.quoteIcon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 7h4v4H7v4H3V11c0-2.2 1.8-4 4-4zm10 0h4v4h-4v4h-4V11c0-2.2 1.8-4 4-4z" />
                </svg>
                <p className={styles.quoteText}>{t.quote}</p>
                <div className={styles.quotePerson}>
                  <span className={styles.quoteAvatar}>{t.name.charAt(0)}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.testimonialVideo} type="button" aria-label="Play testimonial video">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80&auto=format&fit=crop"
            alt="Testimonial cover"
          />
          <span className={styles.playBtn}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <div className={styles.testimonialMeta}>
            <strong>Michel Smith</strong>
            <span>Business Owner</span>
          </div>
        </button>
      </div>
    </section>
  );
}

/* ── Blog ─────────────────────────────────────────────── */

function Blog() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.blog}>
      <div
        className={styles.blogInner}
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div className={styles.blogHead}>
          <span className={theme.eyebrow}>
            Blog Posts
            <svg className={theme.eyebrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 11l3 3" /></svg>
          </span>
          <h2 className={theme.displayTitle}>
            My Latest <br />
            <span className={theme.displayTitleAccent}>articles</span>
          </h2>
          <p className={styles.blogIntro}>
            Notes, essays, and tactical breakdowns from active client work. New piece every other week.
          </p>
          <Link href="/templates/pure/blog" className={styles.blogViewAll}>
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <div className={styles.blogList}>
          {ARTICLES.map((a) => (
            <Link key={a.title} href="/templates/pure/blog" className={styles.blogItem}>
              <div className={styles.blogDate}>
                <strong>{a.day}</strong>
                <span>{a.date}</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.blogThumb} src={a.img} alt="" />
              <div>
                <h3 className={styles.blogTitle}>{a.title}</h3>
                <span className={styles.blogRead}>{a.read}</span>
              </div>
              <span className={styles.blogArrow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Clients ─────────────────────────────────────────── */

function Clients() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.clients}>
      <div
        className={styles.clientsInner}
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div>
          <span className={theme.eyebrow}>
            Happy Client
            <svg className={theme.eyebrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-6 0v4H4l2 11h12l2-11h-4z" /></svg>
          </span>
          <h2 className={theme.displayTitle}>
            I work with over <span className={theme.displayTitleAccent}>150+</span>{" "}
            <span className={theme.displayTitleAccent}>happy clients</span>
          </h2>
          <p className={styles.clientsCopy}>
            From scrappy seed-stage founders to global brands. I work in tight loops,
            communicate constantly, and ship work I&apos;d sign my name to.
          </p>
        </div>

        <div className={styles.clientsGrid}>
          {CLIENTS.map((c, i) => (
            <div
              key={c.name}
              className={styles.clientCard}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className={styles.clientLogoArea}
                style={{ background: c.bg, color: c.color }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <ClientGlyph name={c.name} accent={c.accent} />
                  {c.name}
                </span>
              </div>
              <div className={styles.clientLabel}>{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientGlyph({ name, accent }: { name: string; accent: string }) {
  const shape = name.length % 3;
  if (shape === 0) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={accent}>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <rect x="6" y="6" width="12" height="12" rx="2" fill="rgba(0,0,0,0.2)" />
      </svg>
    );
  }
  if (shape === 1) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={accent}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="5" fill="rgba(0,0,0,0.25)" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={accent}>
      <path d="M12 2l10 18H2z" />
    </svg>
  );
}
