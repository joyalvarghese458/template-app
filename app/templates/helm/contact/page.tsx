import { PROFILE, OFFICES, SOCIALS } from "../_data/content";
import Reveal, { RevealGroup, RevealItem } from "../_components/Reveal";
import SignatureMark from "../_components/SignatureMark";
import ContactForm from "./ContactForm";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

export const metadata = {
  title: "Contact — Helm",
  description: `Get in touch with ${PROFILE.name}, ${PROFILE.role} of ${PROFILE.company}.`,
};

export default function HelmContact() {
  return (
    <section className={styles.page}>
      <div className={`${theme.container} ${styles.grid}`}>
        <div className={styles.intro}>
          <Reveal>
            <span className={theme.eyebrow}>Contact</span>
            <h1 className={`${theme.display} ${styles.title}`}>
              Let&apos;s start with a <em className={theme.italic}>conversation.</em>
            </h1>
            <p className={styles.lead}>
              For board seats, partnerships, press, or speaking — reach the office directly, or
              send a note below.
            </p>
          </Reveal>

          <Reveal delay={0.1} className={styles.direct}>
            <a href={`mailto:${PROFILE.email}`} className={styles.email}>
              {PROFILE.email}
            </a>
            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href}>
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16} className={styles.offices}>
            <span className={styles.officesLabel}>Offices</span>
            <RevealGroup className={styles.officesList}>
              {OFFICES.map((o) => (
                <RevealItem key={o.city} className={styles.officeCard}>
                  <h3 className={`${theme.display} ${styles.officeCity}`}>{o.city}</h3>
                  <span className={styles.officeRole}>{o.role}</span>
                  {o.lines.map((line) => (
                    <span key={line} className={styles.officeLine}>
                      {line}
                    </span>
                  ))}
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>

          <div className={styles.signOff}>
            <SignatureMark className={styles.signOffMark} />
            <span className={styles.signOffCaption}>{PROFILE.name}</span>
          </div>
        </div>

        <Reveal delay={0.08} className={styles.formCol}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
