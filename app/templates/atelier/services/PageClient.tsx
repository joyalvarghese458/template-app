"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Cursor from "../_components/Cursor";
import { useReveal, useSmoothScroll } from "../_components/hooks";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

const SERVICES = [
  {
    id: "01",
    title: "Motion & Film",
    tagline: "Pictures that move with purpose.",
    description:
      "From brand films and broadcast packages to title sequences and short-form content for social. We work end-to-end — concept, direction, production, post and finishing.",
    capabilities: [
      "Brand & Campaign Films",
      "Title Sequences",
      "Broadcast Packages",
      "Short-form Social",
      "Direction & Production",
      "Compositing & Finishing",
    ],
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "3D & CGI",
    tagline: "Worlds built from first principles.",
    description:
      "Photoreal product visualisation, fantastical world-building, generative environments and real-time pipelines. We hold a full in-house 3D department across Houdini, Cinema 4D, Blender and Unreal.",
    capabilities: [
      "Product Visualisation",
      "Generative Environments",
      "Real-time Pipelines",
      "Look Development",
      "Procedural Systems",
      "VR / AR Experiences",
    ],
    img: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Brand Identity",
    tagline: "Systems built to live in the world.",
    description:
      "Strategy, naming, identity, typography and editorial direction. We design identities that flex across mediums and remain coherent after thousands of touchpoints.",
    capabilities: [
      "Strategy & Positioning",
      "Naming & Verbal Identity",
      "Visual Identity Systems",
      "Custom Typography",
      "Editorial & Print",
      "Packaging",
    ],
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Digital Experience",
    tagline: "Interactive work, made with intention.",
    description:
      "Marketing sites, configurators, generative installations and digital products. Built with care — performant, accessible, and a pleasure to navigate.",
    capabilities: [
      "Marketing & Brand Sites",
      "Product Configurators",
      "Generative Installations",
      "Interaction Design",
      "Webgl & Three.js",
      "Performance & Accessibility",
    ],
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80&auto=format&fit=crop",
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Project Engagement",
    duration: "6 — 16 weeks",
    body: "A defined scope of work with clear milestones and deliverables. Best for launches, campaigns or one-off films.",
    suited: "Brand films · Campaigns · Identities",
  },
  {
    title: "Retainer Partnership",
    duration: "6 — 24 months",
    body: "An ongoing relationship with monthly capacity. We become an extension of your team across multiple workstreams.",
    suited: "In-house teams · Ongoing creative",
  },
  {
    title: "Creative Direction",
    duration: "Fractional",
    body: "Embedded creative leadership for organisations in transition. Quarterly cadence, in-person workshops, ongoing review.",
    suited: "Funded startups · Brand refresh",
  },
];

const FAQ = [
  {
    q: "What is your typical project size?",
    a: "Most of our engagements fall between $80,000 and $750,000 in fees. We take on a small number of smaller research-led pieces each year if the brief is interesting.",
  },
  {
    q: "How far in advance should we book?",
    a: "Our calendar is typically planned 12 — 16 weeks out. For pieces with a fixed launch date, the earlier you bring us in, the better.",
  },
  {
    q: "Do you take on smaller briefs?",
    a: "Occasionally — particularly from cultural institutions, foundations or research-led work. Send us the brief and we'll respond honestly.",
  },
  {
    q: "Can we visit the studio?",
    a: "Yes — we host introductions in San Francisco, Berlin and Tokyo. Reach out and we'll find a slot in the next few weeks.",
  },
];

export default function ServicesPage() {
  useSmoothScroll();
  return (
    <div className={theme.root}>
      <Cursor />
      <div className={theme.vignette} aria-hidden="true" />
      <div className={theme.grain} aria-hidden="true" />

      <Nav current="services" />

      <Header />
      <ServicesSection />
      <Engagement />
      <FaqSection />

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className={styles.pageHead}>
      <div className={styles.pageHeadInner}>
        <p className={styles.pageEyebrow}>
          <span>§</span> Practice
        </p>
        <h1 className={styles.pageTitle}>
          <span className={styles.titleLine}>
            <span className={styles.titleInner}>Four disciplines.</span>
          </span>
          <span className={styles.titleLine}>
            <span
              className={`${styles.titleInner} ${styles.serif}`}
              style={{ animationDelay: "0.15s" }}
            >
              One studio.
            </span>
          </span>
        </h1>
        <p className={styles.pageLead}>
          We work as a single integrated team across motion, 3D, identity and
          digital. The boundary between disciplines is usually where the most
          interesting work happens.
        </p>
      </div>
    </header>
  );
}

function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      {SERVICES.map((s, i) => (
        <ServiceBlock key={s.id} service={s} index={i} />
      ))}
    </section>
  );
}

function ServiceBlock({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLElement>(0.1);
  const reverse = index % 2 === 1;
  return (
    <article
      ref={ref}
      className={`${styles.serviceBlock} ${reverse ? styles.serviceBlockReverse : ""} ${
        visible ? styles.serviceBlockVisible : ""
      }`}
    >
      <div className={styles.serviceImg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={service.img} alt={service.title} />
        <div className={styles.serviceImgOverlay} />
        <span className={styles.serviceImgId}>{service.id}</span>
      </div>

      <div className={styles.serviceContent}>
        <span className={styles.serviceN}>
          {service.id} / {String(SERVICES.length).padStart(2, "0")}
        </span>
        <h2 className={styles.serviceTitle}>{service.title}</h2>
        <p className={styles.serviceTagline}>{service.tagline}</p>
        <p className={styles.serviceDesc}>{service.description}</p>

        <div className={styles.capabilities}>
          <p className={styles.capabilitiesLabel}>Capabilities</p>
          <ul className={styles.capabilitiesList}>
            {service.capabilities.map((c) => (
              <li key={c}>
                <span className={styles.capabilitiesDot}>—</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function Engagement() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.engagement}>
      <div className={styles.engagementHead}>
        <p className={styles.sectionLabel}>
          <span>§</span>
          <span>How to work with us</span>
        </p>
        <h2 className={styles.sectionTitle}>
          Three ways <em className={styles.serif}>in</em>.
        </h2>
      </div>

      <div
        ref={ref}
        className={`${styles.engagementGrid} ${visible ? styles.visible : ""}`}
      >
        {ENGAGEMENT_MODELS.map((m, i) => (
          <div
            key={m.title}
            className={styles.engagementCard}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <p className={styles.engagementDuration}>{m.duration}</p>
            <h3 className={styles.engagementTitle}>{m.title}</h3>
            <p className={styles.engagementBody}>{m.body}</p>
            <p className={styles.engagementSuited}>
              <span>Best suited:</span> {m.suited}
            </p>
          </div>
        ))}
      </div>

      <div className={styles.engagementCta}>
        <p>Not sure which fits? Tell us about the work — we'll suggest a shape.</p>
        <Link href="/templates/atelier/contact" className={styles.ctaButton}>
          <span>Send a brief</span>
          <span className={styles.ctaArrow}>→</span>
        </Link>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className={styles.faq}>
      <p className={styles.sectionLabel}>
        <span>§</span>
        <span>Frequently asked</span>
      </p>
      <h2 className={styles.sectionTitle}>
        Practical <em className={styles.serif}>questions</em>.
      </h2>
      <ul className={styles.faqList}>
        {FAQ.map((f, i) => (
          <FaqItem item={f} key={i} />
        ))}
      </ul>
    </section>
  );
}

function FaqItem({ item }: { item: (typeof FAQ)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className={`${styles.faqItem} ${open ? styles.faqItemOpen : ""}`}
    >
      <button
        className={styles.faqQ}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{item.q}</span>
        <span className={styles.faqSign} aria-hidden="true">
          <span />
          <span />
        </span>
      </button>
      <div className={styles.faqA}>
        <p>{item.a}</p>
      </div>
    </li>
  );
}