import Link from "next/link";
import {
  capabilities,
  contactTracks,
  faqs,
  featuredCases,
  homeHighlights,
  journalNotes,
  pageLinks,
  principles,
  processSteps,
  serviceStacks,
  site,
  stats,
  testimonials,
  timeline,
  workCollections,
} from "./data";
import styles from "./styles.module.css";

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.eyebrow}>Creator Portfolio Template</p>
            <div className={styles.heroTitleStack}>
              <h1 className={styles.heroTitle}>Mina Vale</h1>
              <h1 className={styles.heroTitleOutline} aria-hidden="true">
                Mina Vale
              </h1>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-test.webp"
                alt="Creative portrait"
                className={styles.heroPortrait}
                loading="eager"
                fetchPriority="high"
                draggable={false}
              />
            </div>
            <p className={styles.heroSubhead}>Creative director. Visual storyteller.</p>
            <p className={styles.heroLead}>{site.tagline}</p>
            <div className={styles.heroActions}>
              <Link href="/templates/minimalist/work" className={styles.primaryButton}>
                Explore the work
              </Link>
              <Link href="/templates/minimalist/contact" className={styles.secondaryButton}>
                Plan your project
              </Link>
            </div>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.heroSurface}>
              <p className={styles.surfaceLabel}>Current focus</p>
              <h2>{site.availability}</h2>
              <p>
                Built for creators who want a more deliberate portfolio than a
                one-page template can offer.
              </p>
              <div className={styles.metricStack}>
                {stats.map((item) => (
                  <div key={item.label} className={styles.metricRow}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HighlightGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          label="What this template supports"
          title="More content, better structure, and a calmer premium feel."
          body="This concept takes the minimalist card direction and expands it into a fuller portfolio system with dedicated pages, richer sections, and stronger storytelling."
        />
        <div className={styles.cardGrid}>
          {homeHighlights.map((item) => (
            <article key={item.title} className={styles.infoCard}>
              <p className={styles.cardEyebrow}>{item.title}</p>
              <p className={styles.cardBody}>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudyStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          label="Featured work"
          title="Selected projects arranged like narratives, not thumbnails."
          body="Each case entry gives enough context to communicate role, scope, and result without overwhelming the visitor."
        />
        <div className={styles.caseList}>
          {featuredCases.map((item) => (
            <article key={item.name} className={styles.caseCard}>
              <div className={styles.caseHeader}>
                <div>
                  <p className={styles.caseEyebrow}>{item.category}</p>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                </div>
                <Link href="/templates/minimalist/work" className={styles.inlineLink}>
                  Full case page
                </Link>
              </div>
              <p className={styles.caseSummary}>{item.summary}</p>
              <div className={styles.chipRow}>
                {item.metrics.map((metric) => (
                  <span key={metric} className={styles.chip}>
                    {metric}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialBand() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.quotePanel}>
          {testimonials.map((item) => (
            <article key={item.name} className={styles.quoteCard}>
              <p className={styles.quoteMark}>“</p>
              <p className={styles.quoteBody}>{item.quote}</p>
              <p className={styles.quoteMeta}>
                {item.name}
                <span>{item.role}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StoryBlocks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          label="About the studio"
          title="A creator-facing practice built around rhythm, editing, and clarity."
          body="The goal is to make depth feel effortless. That means clear hierarchy, measured pacing, and content choices that reflect a mature point of view."
        />
        <div className={styles.splitGrid}>
          <div className={styles.textPanel}>
            <p>
              This page pattern is designed for people whose work needs more than
              a landing page. It gives room for context, conviction, and
              credibility across multiple surfaces.
            </p>
            <p>
              Instead of relying on visual noise, the layout uses contrast,
              layered panels, editorial spacing, and restrained motion to create
              depth without making the site feel heavy.
            </p>
          </div>
          <div className={styles.stackedList}>
            {principles.map((item) => (
              <div key={item} className={styles.stackedRow}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TimelineSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          label="Milestones"
          title="A portfolio with enough room for history, evolution, and point of view."
          body="Multi-page creator sites perform better when they can show progression and context rather than compressing everything into a single scroll."
        />
        <div className={styles.timelineList}>
          {timeline.map((item) => (
            <article key={item.year} className={styles.timelineCard}>
              <p className={styles.timelineYear}>{item.year}</p>
              <div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CapabilityCloud() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          label="Capabilities"
          title="The content depth expected from a serious creator presence."
          body="These are the kinds of modules and disciplines this structure can communicate cleanly across the five-page setup."
        />
        <div className={styles.chipCloud}>
          {capabilities.map((item) => (
            <span key={item} className={styles.chipLarge}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkCollectionsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          label="Work architecture"
          title="Different content layers for case studies, systems, and creative evidence."
          body="The work page is not just a gallery. It is split into project narratives, supporting systems, and behind-the-scenes signals that make the portfolio feel lived in."
        />
        <div className={styles.collectionGrid}>
          {workCollections.map((collection) => (
            <article key={collection.title} className={styles.collectionCard}>
              <p className={styles.cardEyebrow}>{collection.eyebrow}</p>
              <h3 className={styles.cardTitle}>{collection.title}</h3>
              <ul className={styles.bulletList}>
                {collection.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          label="Process"
          title="A simple structure that still leaves space for nuance."
          body="Every page can carry more detail, but the system stays lightweight and easy to browse because the flow is clear."
        />
        <div className={styles.processGrid}>
          {processSteps.map((item) => (
            <article key={item.step} className={styles.processCard}>
              <p className={styles.processStep}>{item.step}</p>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          label="Services"
          title="Service pages that explain the offer instead of just naming it."
          body="This page type gives room for pricing context, deliverables, and decision-making detail so the visitor knows what working together actually looks like."
        />
        <div className={styles.serviceGrid}>
          {serviceStacks.map((service) => (
            <article key={service.title} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className={styles.priceTag}>{service.price}</span>
              </div>
              <ul className={styles.bulletList}>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NotesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          label="Editorial notes"
          title="Extra content sections make the site feel authored."
          body="Adding depth is not only about volume. It is also about giving the portfolio room for reflections, philosophy, and guiding thoughts."
        />
        <div className={styles.noteGrid}>
          {journalNotes.map((note) => (
            <article key={note} className={styles.noteCard}>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          label="Contact"
          title="A contact page with context, filters, and a stronger call to act."
          body="Instead of ending with a single email line, this page clarifies fit, response expectations, and the best way to start the conversation."
        />
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <p className={styles.cardEyebrow}>Reach out</p>
            <h3 className={styles.contactTitle}>{site.email}</h3>
            <p>
              Share your current site, your deadline, and what feels missing in
              your presentation right now.
            </p>
            <div className={styles.contactActions}>
              <a href={`mailto:${site.email}`} className={styles.primaryButton}>
                Email the studio
              </a>
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className={styles.secondaryButton}>
                Call {site.phone}
              </a>
            </div>
          </div>
          <div className={styles.detailList}>
            {contactTracks.map((item) => (
              <article key={item.label} className={styles.detailRow}>
                <p>{item.label}</p>
                <span>{item.value}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          label="FAQ"
          title="Extra reassurance without clutter."
          body="A five-page template has room to answer real questions before the inquiry starts."
        />
        <div className={styles.faqList}>
          {faqs.map((item) => (
            <details key={item.question} className={styles.faqItem}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClosingBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div>
            <p className={styles.cardEyebrow}>Five-page creator template</p>
            <h2>Minimalist, but with enough space to actually say something.</h2>
          </div>
          <div className={styles.bannerActions}>
            {pageLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className={styles.inlineLinkStrong}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{label}</p>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionBody}>{body}</p>
    </div>
  );
}
