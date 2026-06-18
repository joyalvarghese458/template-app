import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const interClass =
  'font-["Inter","Segoe_UI",Roboto,Helvetica,Arial,sans-serif]';
const jakartaClass =
  'font-["Plus_Jakarta_Sans","Inter","Segoe_UI",Roboto,Helvetica,Arial,sans-serif]';
const instrumentClass =
  'font-["Instrument_Serif","Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",Georgia,serif]';
const spaceClass =
  'font-["Space_Grotesk","Inter","Segoe_UI",Roboto,Helvetica,Arial,sans-serif]';
const manropeClass =
  'font-["Manrope","Inter","Segoe_UI",Roboto,Helvetica,Arial,sans-serif]';
const frauncesClass =
  'font-["Fraunces","Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",Georgia,serif]';

const BLUE = "#2563eb";
const BLUE_ELECTRIC = "#0066ff";

type Variant = {
  n: string;
  name: string;
  vibe: string;
  font: string;
  hover: string;
  render: React.ReactNode;
};

const VARIANTS: Variant[] = [
  {
    n: "01",
    name: "Linear / Geist",
    vibe: "Clean SaaS workhorse — same weight, super-tight tracking, single accent letter.",
    font: "Inter 800 · tracking -0.04em",
    hover: "M cycles brand → brand-light, 200ms",
    render: (
      <span
        className={`${interClass} group inline-flex items-baseline text-[34px] font-extrabold tracking-[-0.04em] text-[#0a0a0a]`}
      >
        its
        <span
          className="transition-colors duration-200 group-hover:text-[#3b82f6]"
          style={{ color: BLUE }}
        >
          M
        </span>
        yfolio
      </span>
    ),
  },
  {
    n: "02",
    name: "Framer Black",
    vibe: "Heavy black presence, slightly enlarged M for swagger.",
    font: "Plus Jakarta Sans 800 · tracking -0.05em",
    hover: "Scale 1.02, M shifts hue",
    render: (
      <span
        className={`${jakartaClass} group inline-flex items-baseline text-[36px] font-extrabold tracking-[-0.05em] text-[#0a0a0a] transition-transform duration-200 hover:scale-[1.02]`}
      >
        its
        <span
          className="text-[1.08em] leading-none"
          style={{ color: BLUE_ELECTRIC }}
        >
          M
        </span>
        yfolio
      </span>
    ),
  },
  {
    n: "03",
    name: "Editorial Serif Mix",
    vibe: "Luxury fashion mag — italic serif intro into a confident sans wordmark.",
    font: "Instrument Serif italic + Plus Jakarta 800",
    hover: "Italic gently extends letter-spacing",
    render: (
      <span className="group inline-flex items-baseline text-[34px] text-[#0a0a0a]">
        <span
          className={`${instrumentClass} italic font-normal text-[1.05em] tracking-[0.01em] transition-all duration-300 group-hover:tracking-[0.05em]`}
          style={{ color: "#0a0a0a" }}
        >
          its
        </span>
        <span
          className={`${jakartaClass} font-extrabold tracking-[-0.04em]`}
          style={{ marginLeft: "2px" }}
        >
          <span style={{ color: BLUE }}>M</span>yfolio
        </span>
      </span>
    ),
  },
  {
    n: "04",
    name: "Light + Bold Contrast",
    vibe: "Modern duo — feather-light prefix, confident bold name.",
    font: "Inter 300 + Inter 800",
    hover: "Light part fades up slightly, bold stays",
    render: (
      <span className={`${interClass} group inline-flex items-baseline text-[34px] text-[#0a0a0a]`}>
        <span className="font-light tracking-[-0.02em] opacity-80 transition-opacity duration-200 group-hover:opacity-100">
          its
        </span>
        <span className="font-extrabold tracking-[-0.04em]">
          <span style={{ color: BLUE }}>M</span>yfolio
        </span>
      </span>
    ),
  },
  {
    n: "05",
    name: "Editorial — Wide + Tight",
    vibe: "Magazine masthead — airy prefix, packed wordmark.",
    font: "Manrope 400 wide + Manrope 800 tight",
    hover: "Prefix tracking expands further",
    render: (
      <span className={`${manropeClass} group inline-flex items-baseline text-[32px] text-[#0a0a0a]`}>
        <span className="font-normal uppercase text-[14px] tracking-[0.32em] mr-[10px] transition-all duration-300 group-hover:tracking-[0.42em]">
          its
        </span>
        <span className="font-extrabold tracking-[-0.04em]">
          <span style={{ color: BLUE }}>M</span>yfolio
        </span>
      </span>
    ),
  },
  {
    n: "06",
    name: "Dot Accent (Stripe-like)",
    vibe: "Tiny coloured dot replaces the dot of i — almost subliminal.",
    font: "Inter 700 · tracking -0.03em",
    hover: "Dot pulses briefly",
    render: (
      <span className={`${interClass} group inline-flex items-baseline text-[34px] font-bold tracking-[-0.03em] text-[#0a0a0a]`}>
        <span className="relative">
          ı
          <span
            className="absolute left-1/2 -translate-x-1/2 -top-[14px] w-[7px] h-[7px] rounded-full transition-transform duration-300 group-hover:scale-150"
            style={{ background: BLUE_ELECTRIC, boxShadow: `0 0 12px ${BLUE_ELECTRIC}` }}
          />
        </span>
        tsMyfolio
      </span>
    ),
  },
  {
    n: "07",
    name: "Underline M",
    vibe: "Quiet craftwork — single hairline beneath the M.",
    font: "Inter 800 · tracking -0.04em",
    hover: "Underline draws across whole wordmark",
    render: (
      <span className={`${interClass} group inline-flex items-baseline text-[34px] font-extrabold tracking-[-0.04em] text-[#0a0a0a]`}>
        its
        <span className="relative inline-block">
          M
          <span
            className="absolute left-0 -bottom-[3px] h-[2px] w-full origin-left transition-all duration-300 group-hover:w-[calc(100%+4.5em)]"
            style={{ background: BLUE }}
          />
        </span>
        yfolio
      </span>
    ),
  },
  {
    n: "08",
    name: "Gradient M",
    vibe: "Modern fluid SaaS — single letter gradient on neutral wordmark.",
    font: "Plus Jakarta Sans 800 · tracking -0.04em",
    hover: "Gradient angle rotates",
    render: (
      <span className={`${jakartaClass} group inline-flex items-baseline text-[34px] font-extrabold tracking-[-0.04em] text-[#0a0a0a]`}>
        its
        <span
          className="bg-clip-text text-transparent transition-all duration-500 group-hover:[background-position:100%_0]"
          style={{
            backgroundImage: `linear-gradient(110deg, #2563eb 0%, #7c3aed 50%, #2563eb 100%)`,
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
          }}
        >
          M
        </span>
        yfolio
      </span>
    ),
  },
  {
    n: "09",
    name: "Geometric Mark + Wordmark",
    vibe: "Notion / Stripe — small geometric brand mark, sober wordmark.",
    font: "Inter 700 · tracking -0.025em",
    hover: "Mark rotates 90°",
    render: (
      <span className={`${interClass} group inline-flex items-center gap-[10px] text-[28px] font-bold tracking-[-0.025em] text-[#0a0a0a]`}>
        <span
          className="inline-grid place-items-center w-[28px] h-[28px] rounded-[7px] text-white text-[13px] font-black transition-transform duration-300 group-hover:rotate-[-12deg]"
          style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #7c3aed 100%)` }}
        >
          M
        </span>
        <span>
          its<span style={{ color: BLUE }}>M</span>yfolio
        </span>
      </span>
    ),
  },
  {
    n: "10",
    name: "Italic Detail",
    vibe: "Editorial — italic prefix, accented capital, neutral close.",
    font: "Fraunces 400 italic + Inter 800",
    hover: "M slides up a hair",
    render: (
      <span className="group inline-flex items-baseline text-[34px] text-[#0a0a0a]">
        <span className={`${frauncesClass} italic font-normal text-[1.05em] mr-[1px]`}>its</span>
        <span className={`${interClass} font-extrabold tracking-[-0.04em]`}>
          <span
            className="inline-block transition-transform duration-200 group-hover:-translate-y-[2px]"
            style={{ color: BLUE }}
          >
            M
          </span>
          yfolio
        </span>
      </span>
    ),
  },
];

// Bonus row — mono / brutalist accents
const BONUS: Variant[] = [
  {
    n: "B1",
    name: "Space Grotesk",
    vibe: "Slightly technical — gentle quirks in the curves give it edge.",
    font: "Space Grotesk 700",
    hover: "Letter spacing breathes",
    render: (
      <span className={`${spaceClass} group inline-flex items-baseline text-[34px] font-bold tracking-[-0.02em] text-[#0a0a0a] transition-all duration-300 hover:tracking-[0em]`}>
        its<span style={{ color: BLUE }}>M</span>yfolio
      </span>
    ),
  },
  {
    n: "B2",
    name: "Slash Bracket",
    vibe: "Dev-tool feel — thin slash framing without changing the name.",
    font: "Inter 700",
    hover: "Slashes slide outwards",
    render: (
      <span className={`${interClass} group inline-flex items-baseline gap-[6px] text-[30px] font-bold tracking-[-0.02em] text-[#0a0a0a]`}>
        <span
          className="inline-block transition-transform duration-300 group-hover:-translate-x-1"
          style={{ color: BLUE }}
        >
          /
        </span>
        its<span style={{ color: BLUE }}>M</span>yfolio
      </span>
    ),
  },
];

export default function BrandLabPage() {
  return (
    <main className="min-h-screen bg-white text-[#0a0a0a] py-16 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-14">
          <p className="text-xs tracking-[0.32em] uppercase text-neutral-500 mb-3">
            Brand lab · My Portfolio
          </p>
          <h1 className={`${interClass} font-extrabold tracking-[-0.04em] text-4xl sm:text-5xl`}>
            10 wordmark directions.
          </h1>
          <p className="mt-4 text-neutral-600 max-w-2xl leading-relaxed">
            Each card shows the wordmark at its intended navbar size on light background, with the
            font, tracking, accent treatment, and hover behaviour. Hover any card to feel the
            motion.
          </p>
        </header>

        {/* Main grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {VARIANTS.map((v) => (
            <Card key={v.n} v={v} />
          ))}
        </section>

        {/* Bonus row */}
        <h2 className={`${interClass} mt-16 mb-5 text-2xl font-bold tracking-[-0.03em]`}>
          Bonus variations
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {BONUS.map((v) => (
            <Card key={v.n} v={v} />
          ))}
        </section>

        {/* Dark preview strip */}
        <h2 className={`${interClass} mt-16 mb-5 text-2xl font-bold tracking-[-0.03em]`}>
          On dark navbar
        </h2>
        <div className="rounded-2xl bg-[#0a0a0f] p-8 sm:p-10 flex flex-wrap items-center gap-x-12 gap-y-8">
          <DarkCard label="V1 Linear">
            <span className={`${interClass} text-[26px] font-extrabold tracking-[-0.04em] text-white`}>
              its<span style={{ color: "#60a5fa" }}>M</span>yfolio
            </span>
          </DarkCard>
          <DarkCard label="V2 Framer">
            <span className={`${jakartaClass} text-[28px] font-extrabold tracking-[-0.05em] text-white`}>
              its<span className="text-[1.08em]" style={{ color: "#3b82f6" }}>M</span>yfolio
            </span>
          </DarkCard>
          <DarkCard label="V7 Underline">
            <span className={`${interClass} text-[26px] font-extrabold tracking-[-0.04em] text-white`}>
              its
              <span className="relative inline-block">
                M
                <span className="absolute left-0 -bottom-[3px] h-[2px] w-full" style={{ background: "#60a5fa" }} />
              </span>
              yfolio
            </span>
          </DarkCard>
          <DarkCard label="V9 Mark">
            <span className={`${interClass} inline-flex items-center gap-[10px] text-[22px] font-bold tracking-[-0.025em] text-white`}>
              <span
                className="inline-grid place-items-center w-[28px] h-[28px] rounded-[7px] text-white text-[13px] font-black"
                style={{ background: `linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)` }}
              >
                M
              </span>
              its<span style={{ color: "#60a5fa" }}>M</span>yfolio
            </span>
          </DarkCard>
        </div>

        <footer className="mt-16 pt-8 border-t border-neutral-200 text-sm text-neutral-500">
          <p>
            Recommendation lives in the chat. Once you pick a number, I&apos;ll wire it into the
            navbar + footer.
          </p>
        </footer>
      </div>
    </main>
  );
}

function Card({ v }: { v: Variant }) {
  return (
    <article className="group rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all duration-300 hover:border-neutral-900 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500">
          V{v.n}
        </span>
        <span className="text-[11px] font-medium text-neutral-400">{v.font}</span>
      </div>
      <div className="min-h-[80px] flex items-center">{v.render}</div>
      <div className="mt-6 pt-5 border-t border-neutral-100 grid gap-1">
        <p className="text-sm font-semibold text-neutral-900">{v.name}</p>
        <p className="text-sm text-neutral-500 leading-relaxed">{v.vibe}</p>
        <p className="text-xs text-neutral-400 mt-2">
          <span className="font-semibold text-neutral-600">Hover:</span> {v.hover}
        </p>
      </div>
    </article>
  );
}

function DarkCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[10px] tracking-[0.24em] uppercase text-white/40">{label}</span>
      {children}
    </div>
  );
}
