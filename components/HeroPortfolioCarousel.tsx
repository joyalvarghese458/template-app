// Hero preview: two overlapping device frames (mobile + desktop) containing
// minimalist portfolio mockups, styled to match the site's blue + white theme.

const DESKTOP_IMG = "https://picsum.photos/seed/foliocraft-desk/1200/750";
const MOBILE_IMG = "https://picsum.photos/seed/foliocraft-mob/420/860";
const PROJECT_THUMBS = [
  "https://picsum.photos/seed/folio-proj-1/300/200",
  "https://picsum.photos/seed/folio-proj-2/300/200",
  "https://picsum.photos/seed/folio-proj-3/300/200",
];

function DesktopMockup() {
  return (
    <div className="absolute inset-0 bg-white flex flex-col text-slate-800">
      {/* Top nav */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/80">
        <span className="text-[10px] font-bold tracking-tight">Studio.</span>
        <div className="flex gap-3 text-[8px] text-slate-500 uppercase tracking-[0.2em]">
          <span>Work</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <span className="text-[8px] px-2 py-0.5 rounded-full bg-blue-600 text-white">
          Hire
        </span>
      </div>

      {/* Hero split */}
      <div className="flex-1 grid grid-cols-2 gap-3 p-4">
        <div className="flex flex-col justify-center">
          <p className="text-[7px] uppercase tracking-[0.25em] text-blue-500/80">
            Portfolio · 2026
          </p>
          <h3 className="font-serif text-xl leading-[1] tracking-tight mt-1 text-slate-900">
            Designing
            <br />
            <span className="italic text-blue-600">with intent.</span>
          </h3>
          <p className="text-[8px] text-slate-500 mt-2 leading-snug">
            Independent designer crafting brand identities and product
            experiences for modern teams.
          </p>
          <div className="mt-3 flex gap-1.5">
            <span className="text-[8px] px-2 py-1 rounded-full bg-blue-600 text-white font-semibold">
              View work
            </span>
            <span className="text-[8px] px-2 py-1 rounded-full border border-slate-300 text-slate-700">
              Resume
            </span>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={DESKTOP_IMG}
          alt=""
          className="rounded-md object-cover w-full h-full ring-1 ring-slate-200"
          draggable={false}
        />
      </div>

      {/* Projects strip */}
      <div className="px-4 pb-4 flex gap-1.5">
        {PROJECT_THUMBS.map((src) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={src}
            src={src}
            alt=""
            className="flex-1 aspect-[3/2] rounded-sm object-cover ring-1 ring-slate-200"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="absolute inset-0 bg-white flex flex-col text-slate-800">
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 pt-2 pb-1">
        <span className="text-[7px] font-semibold">9:41</span>
        <span className="w-8 h-2 rounded-full bg-black" />
        <span className="text-[7px]">●●●</span>
      </div>

      {/* Compact nav */}
      <div className="flex items-center justify-between px-3 py-1.5">
        <span className="text-[8px] font-bold">Studio.</span>
        <span className="text-[7px] text-slate-500">☰</span>
      </div>

      {/* Hero image */}
      <div className="px-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={MOBILE_IMG}
          alt=""
          className="w-full aspect-[3/4] rounded-md object-cover ring-1 ring-slate-200"
          draggable={false}
        />
      </div>

      {/* Headline */}
      <div className="px-3 pt-2">
        <p className="text-[6px] uppercase tracking-[0.25em] text-blue-500/80">
          Portfolio
        </p>
        <h4 className="font-serif text-[11px] leading-tight mt-0.5 text-slate-900">
          Designing
          <br />
          <span className="italic text-blue-600">with intent.</span>
        </h4>
      </div>

      {/* Tiles */}
      <div className="mt-auto px-2.5 pb-3 grid grid-cols-2 gap-1">
        {PROJECT_THUMBS.slice(0, 2).map((src) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={src}
            src={src}
            alt=""
            className="aspect-square rounded-sm object-cover ring-1 ring-slate-200"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

export default function HeroPortfolioCarousel() {
  return (
    <div className="relative w-full max-w-[44rem] mx-auto lg:mx-0 lg:ml-auto">
      <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[2/1]">
        {/* ── Desktop preview (back layer) ── */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-0 w-[78%] rotate-[6deg] origin-bottom-right"
          style={{ filter: "drop-shadow(0 30px 50px rgba(15, 23, 42, 0.10))" }}
        >
          <div
            className="relative aspect-[16/10] rounded-[1.75rem] overflow-hidden bg-white ring-1 ring-slate-200/80"
            aria-hidden="true"
          >
            <DesktopMockup />
          </div>
        </div>

        {/* ── Mobile preview (front layer) ── */}
        <div
          className="absolute top-1/2 translate-y-[calc(-50%+45px)] left-[8%] w-[26%] -rotate-[7deg] origin-bottom-left z-10"
          style={{ filter: "drop-shadow(0 25px 45px rgba(15, 23, 42, 0.12))" }}
        >
          <div
            className="relative aspect-[9/19.5] rounded-[1.75rem] overflow-hidden bg-white ring-1 ring-slate-200/80"
            aria-hidden="true"
          >
            <MobileMockup />
          </div>
        </div>
      </div>
    </div>
  );
}
