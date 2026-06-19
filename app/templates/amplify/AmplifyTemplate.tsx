"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import Image from "next/image";

import styles from "./styles.module.css";

const PROFILE = {
  name: "Maya Kareem",
  role: "Digital Marketing Strategist",
  location: "Dubai, UAE",
  availability: "Open for senior marketing roles and retained consulting",
  intro:
    "I build growth systems that connect paid media, content, email, and CRO into one measurable acquisition engine.",
  summary:
    "Over 8 years leading performance campaigns for B2B SaaS, ecommerce, and lifestyle brands across the GCC. My work blends sharp messaging, disciplined experimentation, and executive-friendly reporting.",
  portrait:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  email: "maya@amplifygrowth.me",
  phone: "+971 55 613 8824",
  website: "www.amplifygrowth.me",
  linkedin: "#",
  portfolioCta: "#campaigns",
  focusAreas: ["Paid acquisition", "Lifecycle marketing", "CRO systems"],
};

const CONTACT_METHODS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
  { label: "Location", value: PROFILE.location, href: "#" },
  { label: "Website", value: PROFILE.website, href: "https://www.amplifygrowth.me" },
  { label: "Telegram", value: "@mayaamplify", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", handle: "@maya-kareem", href: "#" },
  { label: "Instagram", handle: "@amplify.with.maya", href: "#" },
  { label: "X / Twitter", handle: "@mayagrowth", href: "#" },
  { label: "Facebook", handle: "Amplify With Maya", href: "#" },
  { label: "TikTok", handle: "@maya.growth.lab", href: "#" },
  { label: "YouTube", handle: "Maya Growth Notes", href: "#" },
  { label: "WhatsApp", handle: "Quick campaign chats", href: `https://wa.me/971556138824` },
];

const RIGHT_SOCIAL_LINKS = SOCIAL_LINKS.filter((item) => item.label !== "LinkedIn");
const LEFT_CONTACT_GRID = CONTACT_METHODS.map((item) => ({
  ...item,
  kind: "method" as const,
}));

const NAV_ITEMS = [
  { href: "#top", label: "Intro" },
  { href: "#results", label: "Results" },
  { href: "#campaigns", label: "Campaigns" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const KPI_STRIP = [
  { value: "7.4x", label: "avg. ROAS on paid funnels", note: "Across Meta, Google, and launch retargeting mixes" },
  { value: "38%", label: "lower CAC after CRO cleanup", note: "Driven by landing page, offer, and remarketing alignment" },
  { value: "1.8M+", label: "qualified leads influenced", note: "Pipeline and purchase intent shaped across GCC campaigns" },
  { value: "24", label: "brand launches supported", note: "From lean sprint launches to multi-market expansion pushes" },
];

const PILLARS = [
  {
    title: "Performance Media",
    blurb: "Meta, Google, TikTok, and LinkedIn systems optimized around margin, not vanity CTR.",
    detail: "Campaign structures are built around budget agility, creative fatigue monitoring, and fast signal collection.",
  },
  {
    title: "Content Systems",
    blurb: "Editorial angles, landing copy, and creator assets designed to move cold traffic into action.",
    detail: "I bridge paid media and brand voice so every asset works both as acquisition creative and conversion support.",
  },
  {
    title: "Lifecycle Growth",
    blurb: "Email, CRM, and remarketing journeys that turn first-touch demand into repeat revenue.",
    detail: "Retention work focuses on welcome journeys, abandoned interest recovery, upsell timing, and reporting clarity.",
  },
];

const CAMPAIGNS = [
  {
    title: "Glow Clinic Repositioning",
    category: "Beauty & wellness",
    impact: "+162% booked consultations in 90 days",
    description:
      "Rebuilt the full acquisition funnel around treatment-specific landing pages, trust-led creative, and WhatsApp-first conversion flows.",
    outcome: "Cut lead-to-booking friction by simplifying ad-to-chat handoff and tightening treatment segmentation.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    bullets: ["Meta lead funnels", "Localized Arabic/English copy", "Offer testing + CRO"],
  },
  {
    title: "SaaS Demo Engine",
    category: "B2B software",
    impact: "41% lift in demo-to-opportunity rate",
    description:
      "Unified paid search, founder-led LinkedIn, and nurture email into a single reporting loop focused on pipeline quality.",
    outcome: "Reduced wasted MQL volume by scoring harder on intent and surfacing sales feedback into media decisions.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    bullets: ["Intent keyword architecture", "Narrative landing pages", "HubSpot lifecycle automation"],
  },
  {
    title: "Retail Collection Launch",
    category: "Fashion ecommerce",
    impact: "AED 1.2M launch revenue with 5.9x ROAS",
    description:
      "Built a creator-seeding and retargeting sprint that paired editorial product drops with high-frequency paid refreshes.",
    outcome: "Kept launch momentum high through staggered product storytelling and daily creative rotation windows.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    bullets: ["UGC briefing kits", "Launch-week automation", "Merchandising insight loops"],
  },
];

const DASHBOARD = [
  { channel: "Paid Social", share: "42%", note: "Primary acquisition engine", insight: "Best for offer validation and high-volume audience learning", tone: "lime" },
  { channel: "Search + SEO", share: "27%", note: "High-intent capture", insight: "Strongest quality layer for bottom-funnel demand and branded expansion", tone: "amber" },
  { channel: "Email / CRM", share: "19%", note: "Retention and upsell", insight: "Where list hygiene, segmentation, and timing create compounding value", tone: "sky" },
  { channel: "Partnerships", share: "12%", note: "Brand trust + referrals", insight: "Used to widen credibility and lower paid pressure during launches", tone: "coral" },
];

const STACK = [
  "GA4",
  "Looker Studio",
  "Meta Ads",
  "Google Ads",
  "HubSpot",
  "Klaviyo",
  "Hotjar",
  "Figma",
  "Notion",
  "Ahrefs",
  "Shopify",
  "Webflow",
];

const STACK_GROUPS = [
  {
    label: "Measurement",
    items: ["GA4", "Looker Studio", "Hotjar", "Ahrefs"],
  },
  {
    label: "Activation",
    items: ["Meta Ads", "Google Ads", "Klaviyo", "HubSpot"],
  },
  {
    label: "Execution",
    items: ["Figma", "Notion", "Shopify", "Webflow"],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Audit the signal",
    text: "I start by finding where the brand already earns attention, where spend leaks, and where message-market fit breaks down.",
    deliverable: "Channel audit, funnel friction map, quick-win priorities",
  },
  {
    step: "02",
    title: "Shape the story",
    text: "Offers, angles, and landing journeys are rebuilt around buyer hesitation, not internal assumptions.",
    deliverable: "Creative territory, offer narrative, page and CRM direction",
  },
  {
    step: "03",
    title: "Scale with evidence",
    text: "Weekly tests, cleaner attribution, and channel-specific dashboards keep the growth plan defensible.",
    deliverable: "Test calendar, reporting cadence, scale and retention roadmap",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Maya brought structure to a very noisy growth setup. Within weeks, our reports finally matched real business outcomes.",
    name: "Rana H.",
    role: "CMO, wellness brand",
    context: "After a clinic repositioning sprint across paid, landing pages, and WhatsApp conversion flows",
  },
  {
    quote:
      "She understands both creative and numbers, which is rare. The team trusted her because every recommendation came with context.",
    name: "Omar S.",
    role: "Founder, B2B SaaS startup",
    context: "During a full demand-generation rebuild focused on demo quality and pipeline visibility",
  },
];

function useReveal<T extends HTMLElement>(): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function AmplifyTemplate() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#top");
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = "#top";
      for (const item of NAV_ITEMS) {
        const section = document.querySelector(item.href);
        if (!section) continue;
        const bounds = section.getBoundingClientRect();
        if (bounds.top <= 160) current = item.href;
      }

      const pageBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight - pageBottom < 120) {
        current = "#contact";
      }

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const [heroRef, heroVisible] = useReveal<HTMLElement>();
  const [resultsRef, resultsVisible] = useReveal<HTMLElement>();
  const [campaignsRef, campaignsVisible] = useReveal<HTMLElement>();
  const [stackRef, stackVisible] = useReveal<HTMLElement>();
  const [processRef, processVisible] = useReveal<HTMLElement>();
  const [contactRef, contactVisible] = useReveal<HTMLElement>();

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <div className={styles.page} id="top">
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <header className={styles.navbar}>
        <a href="#top" className={styles.brand}>
          Amplify
        </a>

        <nav className={styles.desktopNav} aria-label="Section navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${activeSection === item.href ? styles.navLinkActive : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href={`mailto:${PROFILE.email}`} className={styles.navCta}>
          Book intro
        </a>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileScrim} onClick={() => setMenuOpen(false)} />
        <nav className={styles.mobilePanel} aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href={`mailto:${PROFILE.email}`} className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
            Contact Maya
          </a>
        </nav>
      </div>

      <main>
        <section
          className={`${styles.hero} ${heroVisible ? styles.revealed : ""}`}
          ref={heroRef}
        >
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Digital marketer portfolio</span>
            <h1 className={styles.heroTitle}>
              Growth strategy
              <span>with campaign-proof clarity.</span>
            </h1>
            <p className={styles.heroLead}>{PROFILE.intro}</p>

            <div className={styles.heroFocusRow}>
              {PROFILE.focusAreas.map((item) => (
                <span key={item} className={styles.heroFocusPill}>
                  {item}
                </span>
              ))}
            </div>

            <div className={styles.heroActions}>
              <a href={PROFILE.portfolioCta} className={styles.primaryButton}>
                View campaigns
              </a>
              <a href={`mailto:${PROFILE.email}`} className={styles.secondaryButton}>
                Contact
              </a>
            </div>

            <div className={styles.profileBar}>
              <div>
                <p className={styles.profileName}>{PROFILE.name}</p>
                <p className={styles.profileMeta}>
                  {PROFILE.role} • {PROFILE.location}
                </p>
              </div>
              <span className={styles.availability}>{PROFILE.availability}</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.portraitShell}>
              <Image
                src={PROFILE.portrait}
                alt={PROFILE.name}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className={styles.portrait}
                priority
              />
              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>Launch sprint</span>
                <strong className={styles.metricValue}>AED 420k</strong>
                <span className={styles.metricSub}>revenue in 14 days</span>
              </div>
              <div className={styles.floatingBadge}>
                Full-funnel strategy
                <span>Paid • CRM • CRO • Content</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="results"
          className={`${styles.section} ${resultsVisible ? styles.revealed : ""}`}
          ref={resultsRef}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>What this portfolio shows</span>
            <h2 className={styles.sectionTitle}>Results first. Story second. Noise never.</h2>
            <p className={styles.sectionText}>{PROFILE.summary}</p>
          </div>

          <div className={styles.resultsBoard}>
            {KPI_STRIP.map((item) => (
              <article key={item.label} className={`${styles.kpiCard} ${styles.resultsMetricCard}`}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <small>{item.note}</small>
              </article>
            ))}

            {PILLARS.map((item) => (
              <article key={item.title} className={`${styles.pillarCard} ${styles.resultsPillarCard}`}>
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
                <small>{item.detail}</small>
              </article>
            ))}
          </div>
        </section>

        <section
          id="campaigns"
          className={`${styles.section} ${campaignsVisible ? styles.revealed : ""}`}
          ref={campaignsRef}
        >
          <div className={styles.sectionHeaderSplit}>
            <div>
              <span className={styles.eyebrow}>Selected work</span>
              <h2 className={styles.sectionTitle}>Campaigns that look premium and read like proof.</h2>
            </div>
            <p className={styles.sectionText}>
              Each case study is framed around commercial movement: acquisition quality, conversion efficiency,
              and the creative decisions behind the lift.
            </p>
          </div>

          <div className={styles.campaignGrid}>
            {CAMPAIGNS.map((campaign) => (
              <article
                key={campaign.title}
                className={styles.campaignCard}
              >
                <div className={styles.campaignImageWrap}>
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={styles.campaignImage}
                  />
                </div>
                <div className={styles.campaignBody}>
                  <div className={styles.campaignMeta}>
                    <span>{campaign.category}</span>
                    <strong>{campaign.impact}</strong>
                  </div>
                  <h3>{campaign.title}</h3>
                  <p>{campaign.description}</p>
                  <div className={styles.campaignOutcome}>{campaign.outcome}</div>
                  <ul className={styles.campaignBullets}>
                    {campaign.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="stack"
          className={`${styles.section} ${stackVisible ? styles.revealed : ""}`}
          ref={stackRef}
        >
          <div className={styles.stackLayout}>
            <div>
              <span className={styles.eyebrow}>Channel snapshot</span>
              <h2 className={styles.sectionTitle}>A marketer dashboard translated into a portfolio experience.</h2>
              <p className={styles.sectionText}>
                Instead of generic resume blocks, this template uses channel weight, tooling, and operating rhythm
                to communicate seniority fast on mobile and desktop.
              </p>
            </div>

            <div className={styles.dashboardCard}>
              {DASHBOARD.map((item) => (
                <div key={item.channel} className={styles.dashboardRow}>
                  <div>
                    <p className={styles.dashboardChannel}>{item.channel}</p>
                    <p className={styles.dashboardNote}>{item.note}</p>
                    <p className={styles.dashboardInsight}>{item.insight}</p>
                  </div>
                  <div className={styles.dashboardMeterWrap}>
                    <div className={`${styles.dashboardMeter} ${styles[`tone${item.tone[0].toUpperCase()}${item.tone.slice(1)}`]}`} />
                    <span className={styles.dashboardShare}>{item.share}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.stackGroups}>
            {STACK_GROUPS.map((group) => (
              <article key={group.label} className={styles.stackGroupCard}>
                <span className={styles.stackGroupLabel}>{group.label}</span>
                <p className={styles.stackGroupItems}>{group.items.join(" • ")}</p>
              </article>
            ))}
          </div>

          <div className={styles.stackCloud}>
            {STACK.map((tool) => (
              <span key={tool} className={styles.stackPill}>
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section
          className={`${styles.section} ${processVisible ? styles.revealed : ""}`}
          ref={processRef}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>How Maya works</span>
            <h2 className={styles.sectionTitle}>Clear process, measurable rhythm, executive-ready communication.</h2>
          </div>

          <div className={styles.processGrid}>
            {PROCESS.map((item) => (
              <article key={item.step} className={styles.processCard}>
                <span className={styles.processStep}>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.deliverable}</small>
              </article>
            ))}
          </div>

          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((item) => (
              <blockquote key={item.name} className={styles.quoteCard}>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                  <small>{item.context}</small>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className={`${styles.section} ${contactVisible ? styles.revealed : ""}`}
          ref={contactRef}
        >
          <div className={styles.contactCard}>
            <div className={styles.contactPrimaryColumn}>
              <div className={styles.contactIntro}>
                <span className={styles.eyebrow}>Let&apos;s connect</span>
                <h2 className={styles.sectionTitle}>Built for marketers who need to look strategic, current, and credible.</h2>
                <p className={styles.sectionText}>
                  This concept is designed for consultants, performance marketers, growth leads, and brand-side teams
                  who need a polished portfolio that sells both taste and commercial discipline.
                </p>
                <p className={styles.contactSupportText}>
                  Whether the conversation is about a full-time leadership role, a launch sprint, or retained growth support,
                  this section gives visitors multiple low-friction ways to reach out.
                </p>
              </div>

              <div className={styles.contactIntentCard}>
                <div>
                  <span className={styles.contactIntentLabel}>Best fit</span>
                  <strong className={styles.contactIntentValue}>Senior growth roles, launch sprints, and retained consulting</strong>
                </div>
                <div>
                  <span className={styles.contactIntentLabel}>Response window</span>
                  <strong className={styles.contactIntentValue}>Usually within 24 hours with next-step clarity</strong>
                </div>
              </div>

              <div className={styles.contactInfoGrid}>
                {LEFT_CONTACT_GRID.map((item, index) => (
                  item.href === "#" ? (
                    <div
                      key={item.label}
                      className={`${styles.contactMethodCard} ${
                        index === LEFT_CONTACT_GRID.length - 1 ? styles.contactMethodCardWide : ""
                      }`}
                    >
                      <span className={styles.contactMethodLabel}>
                        {item.label}
                      </span>
                      <span className={styles.contactMethodValue}>
                        {item.value}
                      </span>
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      className={`${styles.contactMethodCard} ${
                        index === LEFT_CONTACT_GRID.length - 1 ? styles.contactMethodCardWide : ""
                      }`}
                      href={item.href}
                    >
                      <span className={styles.contactMethodLabel}>
                        {item.label}
                      </span>
                      <span className={styles.contactMethodValue}>
                        {item.value}
                      </span>
                    </a>
                  )
                ))}
              </div>
            </div>

            <div className={styles.contactSecondaryColumn}>
              <div className={styles.contactPanel}>
                <div className={styles.contactActions}>
                  <a className={`${styles.primaryButton} ${styles.contactEmailButton}`} href={`mailto:${PROFILE.email}`}>
                    Email Maya
                  </a>
                  <a className={styles.secondaryButton} href={`tel:${PROFILE.phone}`}>
                    Call now
                  </a>
                  <a className={`${styles.secondaryButton} ${styles.contactActionFull}`} href={PROFILE.linkedin}>
                    LinkedIn profile
                  </a>
                </div>

                {formSent ? (
                  <div className={styles.formSuccess}>
                    <strong>Thanks, your message is queued.</strong>
                    <p>I&apos;ll reply with next steps, campaign thoughts, or availability details shortly.</p>
                  </div>
                ) : (
                  <form className={styles.smallForm} onSubmit={handleContactSubmit}>
                    <div className={styles.formGrid}>
                      <label className={styles.formField}>
                        <span>Name</span>
                        <input type="text" name="name" placeholder="Your name" required />
                      </label>
                      <label className={styles.formField}>
                        <span>Email</span>
                        <input type="email" name="email" placeholder="you@brand.com" required />
                      </label>
                    </div>
                    <label className={styles.formField}>
                      <span>Company</span>
                      <input type="text" name="company" placeholder="Brand or agency" />
                    </label>
                    <label className={styles.formField}>
                      <span>Message</span>
                      <textarea
                        name="message"
                        placeholder="Tell me about the role, project, campaign, or growth challenge."
                        rows={4}
                        required
                      />
                    </label>
                    <button type="submit" className={styles.primaryButton}>
                      Send inquiry
                    </button>
                  </form>
                )}
              </div>

              <div className={styles.socialGrid}>
                {RIGHT_SOCIAL_LINKS.map((item) => (
                  <a key={item.label} className={styles.socialCard} href={item.href}>
                    <span className={styles.socialTitle}>{item.label}</span>
                    <span className={styles.socialHandle}>{item.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
