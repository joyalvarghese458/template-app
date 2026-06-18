import styles from "../../styles.module.css";

type FooterProps = {
  trainerName: string;
};

export default function Footer({ trainerName }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.footerBrand}>{trainerName}</p>
        <nav className={styles.footerNav} aria-label="Footer">
          <a href="#about">About</a>
          <a href="#classes">Classes</a>
          <a href="#schedule">Schedule</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className={styles.footerCopy}>© 2026 Elevate. All rights reserved.</p>
      </div>
    </footer>
  );
}
