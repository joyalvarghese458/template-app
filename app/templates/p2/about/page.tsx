import Image from "next/image";
import { CREDENTIALS, MEDICAL_IMAGES, PROFILE, TIMELINE } from "../_data/content";
import theme from "../_components/theme.module.css";
import styles from "../page.module.css";

export const metadata = {
  title: "About | DevHub Doctor Template",
  description: `Learn about ${PROFILE.name} and the care philosophy behind this doctor portfolio template.`,
};

export default function P2AboutPage() {
  return (
    <>
      <section className={theme.section}>
        <div className={`${theme.container} ${styles.split}`}>
          <div>
            <p className={theme.eyebrow}>About the doctor</p>
            <h1 className={theme.displayTitle}>A more human kind of medical presence.</h1>
            <p className={theme.sectionLead}>
              This page is built to help a doctor communicate authority and warmth at
              the same time: background, training, philosophy, and the shape of care all
              in one scroll.
            </p>
            <div className={styles.pillList} style={{ marginTop: "1.4rem" }}>
              {CREDENTIALS.map((item) => (
                <span key={item} className={styles.pill}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={`${theme.card} ${styles.artCard}`}>
            <div className={styles.photoFrame}>
              <Image
                src={MEDICAL_IMAGES.portrait}
                alt="Professional doctor portrait"
                fill
                className={styles.photo}
                sizes="(max-width: 960px) 100vw, 46vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={theme.sectionTight}>
        <div className={theme.container}>
          <div className={styles.gridThree}>
            <article className={`${theme.card} ${styles.panel}`}>
              <h3>Clinical depth</h3>
              <p>
                The copy structure supports detailed expertise without overwhelming the
                reader on mobile screens.
              </p>
            </article>
            <article className={`${theme.card} ${styles.panel}`}>
              <h3>Premium positioning</h3>
              <p>
                Soft gradients, clean spacing, and editorial typography create a private
                practice look instead of a hospital-directory feel.
              </p>
            </article>
            <article className={`${theme.card} ${styles.panel}`}>
              <h3>Confidence cues</h3>
              <p>
                Certifications, timeline, and visible care philosophy make this page work
                as both an introduction and a trust-builder.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={theme.section}>
        <div className={theme.container}>
          <div className={styles.sectionHeader}>
            <p className={theme.eyebrow}>Timeline</p>
            <h2 className={theme.sectionTitle}>A clean narrative of training, leadership, and practice growth.</h2>
          </div>

          <div className={styles.timeline}>
            {TIMELINE.map((item) => (
              <article key={item.year} className={`${theme.card} ${styles.timelineRow}`}>
                <span className={styles.timelineYear}>{item.year}</span>
                <strong>{item.title}</strong>
                <span className={styles.small}>{item.body}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
