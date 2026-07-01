import Image from "next/image";
import { MEDICAL_IMAGES, PROFILE, STORY_CARDS, TESTIMONIALS } from "../_data/content";
import theme from "../_components/theme.module.css";
import styles from "../page.module.css";

export const metadata = {
  title: "Stories | DevHub Doctor Template",
  description: `View patient story and testimonial sections for ${PROFILE.name}'s doctor portfolio template.`,
};

export default function P2StoriesPage() {
  return (
    <>
      <section className={theme.section}>
        <div className={`${theme.container} ${styles.split}`}>
          <div>
            <p className={theme.eyebrow}>Stories page</p>
            <h1 className={theme.displayTitle}>Proof that feels personal.</h1>
            <p className={theme.sectionLead}>
              Instead of generic review dumps, this page mixes patient outcomes,
              carefully written testimonials, and visual calm to strengthen trust.
            </p>
          </div>
          <div className={`${theme.card} ${styles.artCard}`}>
            <div className={styles.photoFrame}>
              <Image
                src={MEDICAL_IMAGES.consultation}
                alt="Doctor during a patient consultation"
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
          <div className={styles.storyGrid}>
            {STORY_CARDS.map((story) => (
              <article key={story.title} className={`${theme.card} ${styles.storyCard}`}>
                <h3>{story.title}</h3>
                <p>{story.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={theme.section}>
        <div className={theme.container}>
          <div className={styles.twoColumn}>
            {TESTIMONIALS.map((item) => (
              <article key={item.name} className={`${theme.card} ${styles.storyCard}`}>
                <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
                <div className={styles.quoteMeta}>
                  {item.name} {"\u00B7"} {item.detail}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
