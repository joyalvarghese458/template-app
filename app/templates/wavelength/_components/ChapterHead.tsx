export default function ChapterHead({ index, title, sub }: { index: string; title: string; sub: string }) {
  return (
    <div className="wl-chapter-head">
      <span className="wl-chapter-index" aria-hidden="true">{index}</span>
      <div>
        <h2 className="wl-chapter-title">{title}</h2>
        <p className="wl-chapter-sub">{sub}</p>
      </div>
      <style>{`
        .wl-chapter-head { display: flex; align-items: flex-start; gap: 18px; }
        .wl-chapter-index {
          font-family: var(--font-mono, monospace);
          font-weight: 700;
          font-size: clamp(32px, 6vw, 48px);
          color: rgba(242,242,238,0.08);
          line-height: 1;
        }
        .wl-chapter-title { font-family: var(--font-display, sans-serif); font-weight: 600; font-size: clamp(24px, 4vw, 34px); color: #f2f2ee; margin: 4px 0 6px; }
        .wl-chapter-sub { font-size: 13.5px; color: rgba(242,242,238,0.5); margin: 0; max-width: 440px; }
      `}</style>
    </div>
  );
}
