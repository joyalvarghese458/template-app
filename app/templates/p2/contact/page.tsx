import Image from "next/image";
import { CALL_LINK, CONTACT_DETAILS, FAQS, MEDICAL_IMAGES, PROFILE } from "../_data/content";
import theme from "../_components/theme.module.css";
import styles from "../page.module.css";

export const metadata = {
  title: "Contact | DevHub Doctor Template",
  description: `A conversion-focused contact page for ${PROFILE.name}'s doctor portfolio template.`,
};

export default function P2ContactPage() {
  return (
    <>
      <section className={theme.section}>
        <div className={theme.container}>
          <div className={styles.sectionHeader}>
            <p className={theme.eyebrow}>Contact page</p>
            <h1 className={theme.displayTitle}>A calm conversion page for inquiries and appointments.</h1>
            <p className={theme.sectionLead}>
              This layout gives a doctor room for direct contact details, appointment
              messaging, and a polished intake form that still feels light on mobile.
            </p>
          </div>

          <div className={styles.contactGrid}>
            <article className={`${theme.card} ${styles.contactCard}`}>
              <h3 className={styles.cardTitle}>Reach the clinic</h3>
              <div className={styles.contactList}>
                {CONTACT_DETAILS.map((item) => (
                  <div key={item.label}>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
              <p className={`${styles.small} ${styles.stackSpaceMd}`}>{PROFILE.availability}</p>
            </article>

            <article className={`${theme.card} ${styles.contactCard}`}>
              <div className={`${styles.photoFrame} ${styles.contactPhotoFrame}`}>
                <Image
                  src={MEDICAL_IMAGES.contact}
                  alt="Doctor welcoming a patient into a consultation room"
                  fill
                  className={styles.photo}
                  sizes="(max-width: 760px) 100vw, 40vw"
                />
              </div>
              <h3 className={styles.cardTitle}>Appointment request</h3>
              <form className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" placeholder="Your full name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="goal">What would you like help with?</label>
                  <textarea
                    id="goal"
                    name="goal"
                    placeholder="Tell us about your goals, symptoms, or the kind of care you are looking for."
                  />
                </div>
                <a href={CALL_LINK} className={`${theme.button} ${theme.buttonPrimary}`}>
                  Call +971 568450406
                </a>
                <p className={styles.small}>
                  The main booking action now works like a direct call button for quick
                  mobile conversion.
                </p>
              </form>
            </article>
          </div>
        </div>
      </section>

      <section className={theme.sectionTight}>
        <div className={theme.container}>
          <div className={styles.twoColumn}>
            {FAQS.map((item) => (
              <article key={item.question} className={`${theme.card} ${styles.storyCard}`}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
