import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../_data/images";
import { PROFILE, TIMELINE, AWARDS } from "../_data/content";
import Reveal, { RevealGroup, RevealItem } from "../_components/Reveal";
import SignatureMark from "../_components/SignatureMark";
import Arrow from "../_components/Arrow";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

export const metadata = {
  title: "About — Helm",
  description: `${PROFILE.name}, ${PROFILE.role} of ${PROFILE.company}.`,
};

export default function HelmAbout() {
  return (
    <>
      {/* ── Intro ─────────────────────────────────────────── */}
      <section className={styles.intro}>
        <div className={`${theme.container} ${styles.introGrid}`}>
          <Reveal>
            <span className={theme.eyebrow}>About</span>
            <h1 className={`${theme.display} ${styles.introTitle}`}>
              Eighteen years of building <em className={theme.italic}>quietly</em>, and on
              purpose.
            </h1>
          </Reveal>

          <Reveal delay={0.1} className={styles.introBody}>
            <p>
              I&apos;m {PROFILE.name}, {PROFILE.role.toLowerCase()} of {PROFILE.company} — a
              diversified holding company I&apos;ve led since 2014. My work is allocating capital,
              attention, and people across five ventures, and making sure every one of them is
              still standing in twenty years, not just twenty quarters.
            </p>
            <p>
              Before {PROFILE.company}, I spent six years inside two of its founding business
              units, first in strategy and then as Chief Operating Officer — the kind of path that
              teaches you a company from the floor up, not just from the boardroom down.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Portrait + stance ─────────────────────────────── */}
      <section className={theme.section}>
        <div className={`${theme.container} ${styles.bioGrid}`}>
          <Reveal className={styles.bioPhotoWrap}>
            <div className={styles.bioPhoto}>
              <Image
                src={IMAGES.about}
                alt={`${PROFILE.name} outside the ${PROFILE.company} headquarters`}
                fill
                sizes="(max-width: 860px) 90vw, 460px"
                className={styles.bioImg}
              />
            </div>
          </Reveal>

          <Reveal delay={0.12} className={styles.bioText}>
            <span className={theme.eyebrow}>How I lead</span>
            <p className={`${theme.display} ${styles.bioQuote}`}>
              “Discipline compounds. Attention is the scarcest capital a leader has.”
            </p>
            <p className={styles.bioParagraph}>
              I run {PROFILE.company} on a small number of rules: capital follows conviction, not
              consensus; every venture keeps its own operating identity; and no business unit gets
              to call itself essential without proving it for a decade, not a launch quarter.
            </p>
            <p className={styles.bioParagraph}>
              Outside the group, I sit on two public-company boards and mentor a small cohort of
              first-time founders — the same way I was mentored, on the floor, before I ever had a
              title.
            </p>
            <div className={styles.bioSig}>
              <SignatureMark className={styles.bioSigMark} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────── */}
      <section className={theme.section}>
        <div className={theme.container}>
          <Reveal className={styles.sectionHead}>
            <span className={theme.eyebrow}>Career</span>
            <h2 className={`${theme.display} ${styles.sectionTitle}`}>
              The <em className={theme.italic}>long</em> version.
            </h2>
          </Reveal>

          <ol className={styles.timeline}>
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} as="li" delay={i * 0.06} className={styles.timelineRow}>
                <span className={`${theme.display} ${theme.numeral} ${styles.timelineYear}`}>
                  {t.year}
                </span>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{t.title}</h3>
                  <p className={styles.timelineDesc}>{t.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Recognition ───────────────────────────────────── */}
      <section className={theme.section}>
        <div className={theme.container}>
          <Reveal className={styles.sectionHead}>
            <span className={theme.eyebrow}>Recognition</span>
            <h2 className={`${theme.display} ${styles.sectionTitle}`}>Selected honours.</h2>
          </Reveal>

          <RevealGroup className={styles.awardsList}>
            {AWARDS.map((a) => (
              <RevealItem key={a.title} className={styles.awardRow}>
                <span className={`${theme.display} ${theme.numeral} ${styles.awardYear}`}>
                  {a.year}
                </span>
                <span className={styles.awardTitle}>{a.title}</span>
                <span className={styles.awardOrg}>{a.org}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={`${theme.container} ${styles.ctaInner}`}>
          <Reveal>
            <h2 className={`${theme.display} ${styles.ctaTitle}`}>
              See it in the <em className={theme.italic}>ventures</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/templates/helm/ventures" className={`${theme.btn} ${theme.btnPrimary}`}>
              View ventures
              <Arrow className={theme.btnArrow} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
