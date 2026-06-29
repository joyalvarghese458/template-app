import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../_data/images";
import { PROFILE, PRESS_FEATURES, SPEAKING } from "../_data/content";
import Reveal, { RevealGroup, RevealItem } from "../_components/Reveal";
import Arrow from "../_components/Arrow";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

export const metadata = {
  title: "Press & Speaking — Helm",
  description: `Media coverage and speaking engagements featuring ${PROFILE.name}.`,
};

export default function HelmPress() {
  return (
    <>
      <section className={styles.intro}>
        <div className={`${theme.container} ${styles.introGrid}`}>
          <Reveal>
            <span className={theme.eyebrow}>Press & Speaking</span>
            <h1 className={`${theme.display} ${styles.introTitle}`}>
              In the <em className={theme.italic}>room</em>, and on the record.
            </h1>
          </Reveal>
          <Reveal delay={0.1} className={styles.introBody}>
            <p>
              A selection of coverage and keynotes from the past three years — on capital
              discipline, the energy transition, and what it takes to lead a multi-venture group
              for decades, not headlines.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Press quotes ──────────────────────────────────── */}
      <section className={theme.section}>
        <div className={theme.container}>
          <RevealGroup className={styles.quoteGrid}>
            {PRESS_FEATURES.map((p) => (
              <RevealItem key={p.outlet} className={styles.quoteCard}>
                <p className={`${theme.display} ${styles.quoteText}`}>“{p.quote}”</p>
                <span className={styles.quoteOutlet}>{p.outlet}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── Speaking ──────────────────────────────────────── */}
      <section className={theme.section}>
        <div className={`${theme.container} ${styles.speakingGrid}`}>
          <Reveal className={styles.speakingPhotoWrap}>
            <div className={styles.speakingPhoto}>
              <Image
                src={IMAGES.speaking}
                alt={`${PROFILE.name} speaking at a conference`}
                fill
                sizes="(max-width: 860px) 90vw, 480px"
                className={styles.speakingImg}
              />
            </div>
          </Reveal>

          <div className={styles.speakingList}>
            <Reveal>
              <span className={theme.eyebrow}>Selected keynotes</span>
            </Reveal>
            <ol className={styles.speakingItems}>
              {SPEAKING.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 0.06} className={styles.speakingRow}>
                  <span className={`${theme.display} ${theme.numeral} ${styles.speakingYear}`}>
                    {s.year}
                  </span>
                  <div>
                    <h3 className={styles.speakingTitle}>{s.title}</h3>
                    <p className={styles.speakingMeta}>
                      {s.event} · {s.location}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={`${theme.container} ${styles.ctaInner}`}>
          <Reveal>
            <h2 className={`${theme.display} ${styles.ctaTitle}`}>
              Press or speaking <em className={theme.italic}>request?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/templates/helm/contact" className={`${theme.btn} ${theme.btnPrimary}`}>
              Get in touch
              <Arrow className={theme.btnArrow} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
