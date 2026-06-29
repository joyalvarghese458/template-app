import styles from "./Marquee.module.css";

export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className={styles.marquee} role="list" aria-label="Featured in">
      <div className={styles.track}>
        {loop.map((item, i) => (
          <span key={i} className={styles.item} role="listitem">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
