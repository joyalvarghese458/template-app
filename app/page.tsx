import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import TemplatesSection from "@/components/TemplatesSection";
import ReviewSection from "@/components/ReviewSection";
import ScrollingBackgroundSection from "@/components/ScrollingBackgroundSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-canvas-bg">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-canvas-bg">
        {/* Soft radial highlight behind text */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(16,185,129,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
          {/* Eyebrow with gold lines */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-10 bg-brand/60" aria-hidden="true" />
            <p className="text-brand text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em]">
              Crafted Digital Portfolios
            </p>
            <span className="h-px w-10 bg-brand/60" aria-hidden="true" />
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-ink leading-[1.05] tracking-tight mb-7">
            Your portfolio,
            <br />
            delivered{" "}
            <span className="italic text-brand font-medium">beautifully</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-ink-soft max-w-2xl mx-auto mb-10 leading-relaxed">
            Hand-crafted portfolio templates for designers, developers,
            photographers, and creators — pick a tier, launch in days.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#templates"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-canvas-bg bg-ink rounded-md transition-all duration-200 hover:bg-ink/90 hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Templates
            </a>

            <a
              href="https://wa.me/971568450406"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-ink bg-canvas-bg border border-ink/25 rounded-md hover:border-ink/60 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              See a Live Demo
            </a>
          </div>
        </div>
      </section>

      <StatsBar />
      
      <TemplatesSection />
      <AboutSection />
      <ReviewSection />
      <ScrollingBackgroundSection />
      <Footer />
    </main>
  );
}
