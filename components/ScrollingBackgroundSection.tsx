const IMAGES = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
  "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1920&q=80",
];

const WA_SVG = (
  <svg
    className="w-5 h-5 shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ScrollingBackgroundSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink">
      {/* ── Crossfading background images ────────────────────────── */}
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            animation: `crossfade 20s ${i * 5}s infinite both`,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${src})`,
              animation: `kenBurns 8s ease-in-out alternate infinite`,
            }}
          />
          {/* Warm dark overlay tinted toward ink */}
          <div className="absolute inset-0 bg-ink/70" />
        </div>
      ))}

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-10 bg-brand/70" aria-hidden="true" />
          <p className="text-brand text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em]">
            Your Craft, Showcased
          </p>
          <span className="h-px w-10 bg-brand/70" aria-hidden="true" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-canvas-bg leading-tight tracking-tight mb-6">
          Your Story. Your Craft.
          <br className="hidden sm:block" />{" "}
          <span className="italic text-brand">Your Portfolio.</span>
        </h2>

        <p className="text-base sm:text-lg text-canvas-bg/80 mb-10 leading-relaxed">
          From single-page resumes to flagship studios — we craft portfolios
          that get you hired, booked, and remembered.
        </p>

        <a
          href="https://wa.me/971568450406"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 text-ink bg-canvas-bg hover:bg-canvas-bg/90 font-semibold rounded-md text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          {WA_SVG}
          Start Your Project on WhatsApp
        </a>
      </div>
    </section>
  );
}
