import Image from "next/image";
import { FEATURED_SERVICES, JOURNEY_STEPS, MEDICAL_IMAGES, PROFILE } from "../_data/content";
import theme from "../_components/theme.module.css";
import styles from "../page.module.css";

export const metadata = {
  title: "Services | DevHub Doctor Template",
  description: `Explore the service structure and care process used in ${PROFILE.name}'s doctor portfolio template.`,
};

export default function P2ServicesPage() {
  return (
    <>
      <section className={theme.section}>
        <div className={`${theme.container} ${styles.split}`}>
          <div>
            <p className={theme.eyebrow}>Services page</p>
            <h1 className={theme.displayTitle}>Show services with clarity, not clutter.</h1>
            <p className={theme.sectionLead}>
              This page is designed to help a doctor present premium offerings, explain
              what care looks like, and reduce hesitation with structured, readable
              sections.
            </p>
          </div>
          <div className={`${theme.card} ${styles.artCard}`}>
            <div className={styles.photoFrame}>
              <Image
                src={MEDICAL_IMAGES.clinic}
                alt="Modern clinic interior and medical environment"
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
        <div className={theme.container}>
          <div className={styles.sectionHeader}>
            <p className={theme.eyebrow}>Patient journey</p>
            <h2 className={theme.sectionTitle}>A reassuring step-by-step care flow.</h2>
          </div>

          <div className={styles.twoColumn}>
            {JOURNEY_STEPS.map((step) => (
              <article key={step.title} className={`${theme.card} ${styles.storyCard}`}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
