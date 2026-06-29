import Link from "next/link";
import { PROFILE } from "../_data/content";
import Reveal from "../_components/Reveal";
import Arrow from "../_components/Arrow";
import VenturesIndex from "./VenturesIndex";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

export const metadata = {
  title: "Ventures — Helm",
  description: `The five operating ventures inside ${PROFILE.company}.`,
};

export default function HelmVentures() {
  return (
    <>
      <section className={styles.intro}>
        <div className={`${theme.container} ${styles.introGrid}`}>
          <Reveal>
            <span className={theme.eyebrow}>Ventures</span>
            <h1 className={`${theme.display} ${styles.introTitle}`}>
              Five companies, run for the <em className={theme.italic}>next</em> decade.
            </h1>
          </Reveal>
          <Reveal delay={0.1} className={styles.introBody}>
            <p>
              {PROFILE.company} doesn&apos;t hold a basket of unrelated assets — it builds a small
              number of category-defining companies and gives each one the time, capital, and
              independence to compound. Hover any venture to preview it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.listSection}>
        <div className={theme.container}>
          <VenturesIndex />
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`${theme.container} ${styles.ctaInner}`}>
          <Reveal>
            <h2 className={`${theme.display} ${styles.ctaTitle}`}>
              Interested in <em className={theme.italic}>partnering</em>?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
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
