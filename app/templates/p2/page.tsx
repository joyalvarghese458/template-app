import Image from "next/image";
import Link from "next/link";
import {
  CALL_LINK,
  CARE_PILLARS,
  FEATURED_SERVICES,
  HERO_METRICS,
  JOURNEY_STEPS,
  MEDICAL_IMAGES,
  PROFILE,
  STORY_CARDS,
  TESTIMONIALS,
} from "./_data/content";
import theme from "./_components/theme.module.css";
import styles from "./page.module.css";

export default function P2HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`${theme.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={theme.eyebrow}>Doctor portfolio template</p>
            <h1 className={theme.displayTitle}>
              A warm, premium
              <br />
              digital home for
              <br />
              <span style={{ color: "var(--p2-teal)" }}>private medical care.</span>
            </h1>
            <p className={styles.heroLead}>
              Built for doctors who want a polished personal brand, a high-converting
              landing page, and a mobile-first experience that feels calm, trustworthy,
              and modern on every screen.
            </p>

            <div className={styles.actions}>
              <a href={CALL_LINK} className={`${theme.button} ${theme.buttonPrimary}`}>
                Book a consult
              </a>
              <Link href="/templates/p2/services" className={`${theme.button} ${theme.buttonSecondary}`}>
                Explore services
              </Link>
            </div>

            <div className={styles.metrics}>
              {HERO_METRICS.map((metric) => (
                <div key={metric.label} className={`${theme.card} ${styles.metric}`}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroArtWrap}>
            <Image
              src={MEDICAL_IMAGES.hero}
              alt="Doctor portrait in a modern medical clinic"
              width={1200}
              height={1400}
              priority
              className={styles.heroArt}
              sizes="(max-width: 960px) 100vw, 46vw"
            />
            <div className={styles.heroNote}>
              <strong>{PROFILE.availability}</strong>
              <span>
                Built-in trust cues, strong CTA placement, and a hero section designed
                to convert on desktop and mobile.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={theme.sectionTight}>
        <div className={theme.container}>
          <div className={styles.gridThree}>
            {CARE_PILLARS.map((pillar) => (
              <article key={pillar.title} className={`${theme.card} ${styles.panel}`}>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={theme.section}>
        <div className={theme.container}>
          <div className={styles.sectionHeader}>
            <p className={theme.eyebrow}>Services</p>
            <h2 className={theme.sectionTitle}>A five-page structure that sells care with clarity.</h2>
            <p className={theme.sectionLead}>
              The homepage creates trust quickly, while the deeper pages give room for
              credentials, treatment philosophy, stories, and patient conversion.
            </p>
          </div>

          <div className={styles.featureGrid}>
            {FEATURED_SERVICES.map((service) => (
              <article key={service.title} className={`${theme.card} ${styles.featureCard}`}>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <span className={styles.featureDetail}>{service.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={theme.section}>
        <div className={`${theme.container} ${styles.split}`}>
          <div className={`${theme.card} ${styles.artCard}`}>
            <div className={styles.photoFrame}>
              <Image
                src={MEDICAL_IMAGES.clinic}
                alt="Doctor walking through a clean private clinic"
                fill
                className={styles.photo}
                sizes="(max-width: 960px) 100vw, 46vw"
              />
            </div>
          </div>

          <div>
            <p className={theme.eyebrow}>Environment</p>
            <h2 className={theme.sectionTitle}>Designed to feel clinical, calming, and deeply personal.</h2>
            <div className={styles.list}>
              {JOURNEY_STEPS.map((step) => (
                <div key={step.title} className={styles.listRow}>
                  <strong>{step.title}</strong>
                  <span>{step.body}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={theme.section}>
        <div className={theme.container}>
          <div className={styles.sectionHeader}>
            <p className={theme.eyebrow}>Stories</p>
            <h2 className={theme.sectionTitle}>Medical storytelling that sounds thoughtful, not corporate.</h2>
          </div>

          <div className={styles.storyGrid}>
            {STORY_CARDS.map((story) => (
              <article key={story.title} className={`${theme.card} ${styles.storyCard}`}>
                <h3>{story.title}</h3>
                <p>{story.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={theme.sectionTight}>
        <div className={`${theme.container} ${styles.split}`}>
          <div>
            <p className={theme.eyebrow}>Testimonials</p>
            <h2 className={theme.sectionTitle}>Built for trust on small screens, too.</h2>
            <p className={theme.sectionLead}>
              Tight spacing, touch-friendly controls, and strong typographic hierarchy
              help this design stay premium on phones instead of collapsing into clutter.
            </p>
          </div>

          <div className={`${theme.card} ${styles.artCard}`}>
            <div className={styles.photoFrame}>
              <Image
                src={MEDICAL_IMAGES.consultation}
                alt="Doctor consulting a patient in a calm exam room"
                fill
                className={styles.photo}
                sizes="(max-width: 960px) 100vw, 46vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={theme.section}>
        <div className={theme.container}>
          <div className={styles.twoColumn}>
            {TESTIMONIALS.map((item) => (
              <article key={item.name} className={`${theme.card} ${styles.storyCard}`}>
                <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
                <div className={styles.quoteMeta}>
                  {item.name} · {item.detail}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={theme.sectionTight}>
        <div className={theme.container}>
          <div className={`${theme.card} ${styles.ctaBand}`}>
            <div>
              <p className={theme.eyebrow}>Ready to use</p>
              <h2 className={theme.sectionTitle}>DevHub `p2` is now shaped for a doctor brand.</h2>
              <p className={theme.sectionLead}>
                Home, About, Services, Stories, and Contact are all included inside a
                single route folder under `templates/p2`.
              </p>
            </div>
            <Link href="/templates/p2/about" className={`${theme.button} ${theme.buttonPrimary}`}>
              View all pages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
