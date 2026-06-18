import Image from "next/image";

import type { Trainer } from "../../data/trainer";
import ProgressBar from "../common/ProgressBar";
import RevealBlock from "../common/RevealBlock";
import SectionLabel from "../common/SectionLabel";
import styles from "../../styles.module.css";

export default function About({ trainer }: { trainer: Trainer }) {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.aboutGrid}>
          <RevealBlock className={styles.aboutImageWrap}>
            <div className={styles.aboutImageFrame}>
              <Image
                src="/templates/elevate/trainer-portrait.png"
                alt={trainer.name}
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.certBadge}>{trainer.certifications[0]}</div>
          </RevealBlock>

          <RevealBlock className={styles.aboutContent} delay={100}>
            <SectionLabel>About Me</SectionLabel>
            <h2 className={styles.sectionHeading}>Turning Goals Into Results</h2>
            {trainer.about.map((paragraph) => (
              <p key={paragraph} className={styles.bodyCopy}>
                {paragraph}
              </p>
            ))}

            <div className={styles.pillRow}>
              {trainer.specialtyPills.map((pill) => (
                <span key={pill} className={styles.pill}>
                  {pill}
                </span>
              ))}
            </div>

            <div className={styles.progressList}>
              {trainer.skillBars.map((skill) => (
                <ProgressBar
                  key={skill.label}
                  label={skill.label}
                  value={skill.value}
                />
              ))}
            </div>

            <div className={styles.signatureRow}>
              <span className={styles.signatureLine} />
              <span className={styles.signatureName}>{trainer.name}</span>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
