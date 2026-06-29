import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "./_data/images";
import { PROFILE, STATS, VENTURES, PRESS_FEATURES } from "./_data/content";
import Reveal, { RevealGroup, RevealItem } from "./_components/Reveal";
import Counter from "./_components/Counter";
import Marquee from "./_components/Marquee";
import SignatureMark from "./_components/SignatureMark";
import Arrow from "./_components/Arrow";
import theme from "./_components/theme.module.css";
import styles from "./styles.module.css";

export default function HelmHome() {
  const preview = VENTURES.slice(0, 3);
  const outlets = PRESS_FEATURES.map((p) => p.outlet);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={`${theme.container} ${styles.heroGrid}`}>
          <div className={styles.heroKicker}>
            <span className={theme.kicker}>
              <span className={theme.kickerDot} />
              {PROFILE.role} · {PROFILE.company}
            </span>
          </div>

          <div className={styles.heroPhoto}>
            <div className={styles.heroFrame}>
              <Image
                src={IMAGES.hero}
                alt={`${PROFILE.name}, ${PROFILE.role} of ${PROFILE.company}`}
                priority
                placeholder="blur"
                sizes="(max-width: 900px) 86vw, 420px"
                className={styles.heroImg}
              />
            </div>
            <span className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              {PROFILE.availability}
            </span>
          </div>

          <h1 className={`${theme.display} ${styles.heroTitle}`}>
            Building what <em className={theme.italic}>outlasts</em>
            <br />
            the market.
          </h1>

          <p className={styles.heroLead}>{PROFILE.tagline}</p>

          <div className={styles.heroActions}>
            <Link href="/templates/helm/ventures" className={`${theme.btn} ${theme.btnPrimary}`}>
              View ventures
              <Arrow className={theme.btnArrow} />
            </Link>
            <Link href="/templates/helm/contact" className={`${theme.btn} ${theme.btnGhost}`}>
              Get in touch
              <Arrow className={theme.btnArrow} />
            </Link>
          </div>

          <div className={styles.heroSig}>
            <SignatureMark className={styles.sigMark} />
            <span className={styles.heroSigCaption}>{PROFILE.name}</span>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className={theme.sectionTight}>
        <div className={theme.container}>
          <RevealGroup className={styles.statsRow}>
            {STATS.map((s) => (
              <RevealItem key={s.label} className={styles.statItem}>
                <span className={`${theme.display} ${theme.numeral} ${styles.statValue}`}>
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className={theme.container}>
        <hr className={theme.lineDivider} />
      </div>

      {/* ── Philosophy ────────────────────────────────────── */}
      <section className={theme.section}>
        <div className={`${theme.container} ${styles.philosophyGrid}`}>
          <Reveal>
            <span className={theme.eyebrow}>Operating philosophy</span>
            <p className={`${theme.display} ${styles.quote}`}>
              “The best companies are built like institutions,
              <em className={theme.italic}> not headlines.</em>”
            </p>
          </Reveal>

          <Reveal delay={0.12} className={styles.philosophyBody}>
            <p>
              For eighteen years I&apos;ve led with the same conviction: discipline compounds, and
              attention is the scarcest capital a leader has. {PROFILE.company} now spans five
              ventures across technology, energy, logistics, real estate, and finance — each one
              built to outlast the market it competes in, not just to win a cycle of it.
            </p>
            <Link href="/templates/helm/about" className={styles.textLink}>
              Read the full story
              <Arrow className={styles.textLinkArrow} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Ventures preview ──────────────────────────────── */}
      <section className={theme.section}>
        <div className={theme.container}>
          <Reveal className={styles.sectionHead}>
            <span className={theme.eyebrow}>Selected ventures</span>
            <div className={styles.sectionHeadRow}>
              <h2 className={`${theme.display} ${styles.sectionTitle}`}>
                Five companies, <em className={theme.italic}>one</em> long-term thesis.
              </h2>
              <Link href="/templates/helm/ventures" className={styles.textLink}>
                View all ventures
                <Arrow className={styles.textLinkArrow} />
              </Link>
            </div>
          </Reveal>

          <div className={styles.previewGrid}>
            {preview.map((v, i) => (
              <Reveal key={v.slug} delay={i * 0.08} className={styles.previewCard}>
                <Link href="/templates/helm/ventures" className={styles.previewCardLink}>
                  <div className={styles.previewImageWrap}>
                    <Image
                      src={IMAGES[v.image as keyof typeof IMAGES]}
                      alt={v.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 380px"
                      className={styles.previewImage}
                    />
                  </div>
                  <div className={styles.previewMeta}>
                    <span className={styles.previewSector}>{v.sector} · {v.year}</span>
                    <h3 className={`${theme.display} ${styles.previewTitle}`}>{v.title}</h3>
                    <p className={styles.previewDesc}>{v.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press marquee ─────────────────────────────────── */}
      <section className={theme.sectionTight}>
        <div className={theme.container}>
          <Reveal>
            <span className={styles.marqueeLabel}>As featured in</span>
          </Reveal>
        </div>
        <Marquee items={outlets} />
      </section>

      {/* ── Closing CTA ───────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={theme.container}>
          <Reveal className={styles.ctaInner}>
            <h2 className={`${theme.display} ${styles.ctaTitle}`}>
              Let&apos;s build something
              <br />
              that <em className={theme.italic}>lasts.</em>
            </h2>
            <Link href="/templates/helm/contact" className={`${theme.btn} ${theme.btnPrimary}`}>
              Start a conversation
              <Arrow className={theme.btnArrow} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
