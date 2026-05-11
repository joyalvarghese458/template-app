import ParticleCanvas from "@/components/ParticleCanvas";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ReviewSection from "@/components/ReviewSection";
import ScrollingBackgroundSection from "@/components/ScrollingBackgroundSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-canvas-bg">
        {/* Particle constellation background */}
        <ParticleCanvas />

        {/* Radial glow behind the text */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-brand-light text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-5">
            Premium Web Templates
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Launch Your
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #6366f1 0%, #a5b4fc 50%, #818cf8 100%)",
              }}
            >
              Dream Website
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Professionally crafted templates for modern businesses — fast,
            beautiful, and ready to customise in minutes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/templates"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: "linear-gradient(135deg, #6366f1, #818cf8)",
                boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
              }}
            >
              Browse Templates
            </a>

            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              {/* WhatsApp icon */}
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Me
            </a>
          </div>
        </div>

        {/* Wave divider — matches hero bg so it cuts a dark silhouette into the city image below */}
        <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none">
          <svg
            viewBox="0 0 1440 90"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-16 sm:h-20 md:h-24"
            aria-hidden="true"
          >
            <path
              d="M0,45 C180,90 360,0 540,45 C720,90 900,10 1080,50 C1260,88 1380,30 1440,55 L1440,90 L0,90 Z"
              fill="#06060f"
            />
          </svg>
        </div>
      </section>

      <StatsBar />
      <AboutSection />
      <ReviewSection />
      <ScrollingBackgroundSection />
      <Footer />
    </main>
  );
}
