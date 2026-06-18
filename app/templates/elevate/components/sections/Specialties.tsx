import type { Trainer } from "../../data/trainer";
import RevealBlock from "../common/RevealBlock";
import SectionLabel from "../common/SectionLabel";
import styles from "../../styles.module.css";

function SpecialtyIcon({ icon }: { icon: string }) {
  if (icon === "pulse") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12h4l2-4 4 8 2-4h6" />
      </svg>
    );
  }

  if (icon === "mobility") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="5" r="2.2" />
        <path d="M7.5 21c1.7-4.6 3.3-7 4.5-8 1.1-1 2.4-1.4 4.5-1.5M9 10l3 2.5 3-1.5M8 14l-3 4M15 15l3 5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 9h10M9.5 6.5v5M14.5 6.5v5M5 10.5V9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v1.5M8 10.5v9M16 10.5v9M8 19h8" />
    </svg>
  );
}

export default function Specialties({ trainer }: { trainer: Trainer }) {
  return (
    <section className={`${styles.section} ${styles.specialtiesSection}`}>
      <div className={styles.sectionInner}>
        <RevealBlock className={styles.sectionHeaderCentered}>
          <SectionLabel>Specialties</SectionLabel>
          <h2 className={styles.sectionHeadingCentered}>What I Offer</h2>
        </RevealBlock>

        <div className={styles.specialtyGrid}>
          {trainer.specialties.map((specialty, index) => (
            <RevealBlock
              key={specialty.title}
              className={styles.specialtyCard}
              delay={(index * 100) as 0 | 100 | 200 | 300}
            >
              <span className={styles.specialtyIcon}>
                <SpecialtyIcon icon={specialty.icon} />
              </span>
              <h3 className={styles.specialtyTitle}>{specialty.title}</h3>
              <p className={styles.specialtyDescription}>{specialty.description}</p>
              <span className={styles.specialtyAccent} />
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
