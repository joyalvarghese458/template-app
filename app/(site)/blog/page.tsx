"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

// ── Types ──────────────────────────────────────────────────────────────────
interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: Author;
  date: string;
  readTime: number;
  image: string;
}

// ── Data ───────────────────────────────────────────────────────────────────
const CATEGORIES = [
  "All",
  "Portfolio Design",
  "Personal Branding",
  "Career Growth",
  "Freelancing",
  "Developer Portfolios",
  "Designer Portfolios",
  "Marketing Portfolios",
];

const CATEGORY_COLORS: Record<string, string> = {
  "Portfolio Design": "bg-blue-100 text-blue-700",
  "Personal Branding": "bg-purple-100 text-purple-700",
  "Career Growth": "bg-green-100 text-green-700",
  "Freelancing": "bg-amber-100 text-amber-700",
  "Developer Portfolios": "bg-cyan-100 text-cyan-700",
  "Designer Portfolios": "bg-rose-100 text-rose-700",
  "Marketing Portfolios": "bg-yellow-100 text-yellow-700",
};

const FEATURED: Article = {
  slug: "10-elements-every-professional-portfolio-needs",
  category: "Portfolio Design",
  title: "10 Elements Every Professional Portfolio Website Needs in 2025",
  excerpt:
    "Discover the must-have elements that separate average portfolios from career-defining ones. We analyzed 500+ successful portfolios to bring you this definitive guide.",
  author: {
    name: "Sarah Chen",
    role: "Portfolio Strategist",
    avatar: "https://i.pravatar.cc/40?img=47",
  },
  date: "May 20, 2025",
  readTime: 8,
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format&fit=crop",
};

const ALL_ARTICLES: Article[] = [
  {
    slug: "how-to-build-developer-portfolio",
    category: "Developer Portfolios",
    title: "How to Build a Developer Portfolio Website That Gets You Hired",
    excerpt:
      "A step-by-step guide to crafting a developer portfolio that showcases your skills, highlights your projects, and lands you interviews at top companies.",
    author: {
      name: "Marcus Reid",
      role: "Senior Engineer",
      avatar: "https://i.pravatar.cc/40?img=12",
    },
    date: "May 15, 2025",
    readTime: 12,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80&auto=format&fit=crop",
  },
  {
    slug: "designer-portfolio-examples",
    category: "Designer Portfolios",
    title: "Designer Portfolio Website Examples: What Makes Them Stand Out",
    excerpt:
      "We curated 25 of the best designer portfolio websites and broke down exactly what makes each one effective, inspiring, and client-winning.",
    author: {
      name: "James Okonkwo",
      role: "UX Designer",
      avatar: "https://i.pravatar.cc/40?img=33",
    },
    date: "May 12, 2025",
    readTime: 7,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80&auto=format&fit=crop",
  },
  {
    slug: "personal-branding-website-guide",
    category: "Personal Branding",
    title: "Personal Branding Website: The Complete Guide for 2025",
    excerpt:
      "Build a personal brand that commands attention. Learn how to define your unique positioning, visual identity, and craft a website that opens doors.",
    author: {
      name: "Leila Torres",
      role: "Brand Consultant",
      avatar: "https://i.pravatar.cc/40?img=48",
    },
    date: "May 8, 2025",
    readTime: 10,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80&auto=format&fit=crop",
  },
  {
    slug: "freelancer-portfolio-tips",
    category: "Freelancing",
    title: "Freelancer Portfolio Tips: How to Win More Clients Online",
    excerpt:
      "Transform your freelance portfolio from a static gallery into a client-converting machine. These proven strategies have helped thousands of freelancers double their rates.",
    author: {
      name: "Sarah Chen",
      role: "Portfolio Strategist",
      avatar: "https://i.pravatar.cc/40?img=47",
    },
    date: "May 5, 2025",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80&auto=format&fit=crop",
  },
  {
    slug: "resume-to-portfolio-website",
    category: "Career Growth",
    title: "How to Turn Your Resume Into a Professional Portfolio Website",
    excerpt:
      "Your resume is just the beginning. Discover how to transform your experience and achievements into a dynamic portfolio that truly shows what you can do.",
    author: {
      name: "Priya Nair",
      role: "Career Coach",
      avatar: "https://i.pravatar.cc/40?img=36",
    },
    date: "May 1, 2025",
    readTime: 9,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80&auto=format&fit=crop",
  },
  {
    slug: "marketing-portfolio-website",
    category: "Marketing Portfolios",
    title: "Marketing Portfolio Website: Showcase Your Campaigns Effectively",
    excerpt:
      "Marketing portfolios require a different approach. Learn how to present campaign results, metrics, and strategy in ways that impress potential clients and employers.",
    author: {
      name: "Leila Torres",
      role: "Brand Consultant",
      avatar: "https://i.pravatar.cc/40?img=48",
    },
    date: "Apr 28, 2025",
    readTime: 8,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80&auto=format&fit=crop",
  },
  {
    slug: "portfolio-seo-guide",
    category: "Portfolio Design",
    title: "Portfolio SEO: How to Get Your Website Found on Google",
    excerpt:
      "A beautiful portfolio no one finds is a missed opportunity. Learn the exact SEO strategies that drive organic traffic to portfolio websites in 2025.",
    author: {
      name: "Marcus Reid",
      role: "Senior Engineer",
      avatar: "https://i.pravatar.cc/40?img=12",
    },
    date: "Apr 24, 2025",
    readTime: 11,
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=700&q=80&auto=format&fit=crop",
  },
  {
    slug: "career-growth-portfolio-strategies",
    category: "Career Growth",
    title: "Portfolio Strategies That Accelerate Your Career Growth",
    excerpt:
      "The most successful professionals treat their portfolio as a living career document. Here's how to update, position, and leverage your portfolio at every career stage.",
    author: {
      name: "James Okonkwo",
      role: "UX Designer",
      avatar: "https://i.pravatar.cc/40?img=33",
    },
    date: "Apr 20, 2025",
    readTime: 8,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&auto=format&fit=crop",
  },
  {
    slug: "developer-portfolio-tripled-job-offers",
    category: "Developer Portfolios",
    title: "Case Study: How One Developer Portfolio Tripled Job Offers",
    excerpt:
      "A real-world breakdown of how a developer revamped their portfolio and went from 2 to 6 job offers in just 3 months — including the exact changes they made.",
    author: {
      name: "Priya Nair",
      role: "Career Coach",
      avatar: "https://i.pravatar.cc/40?img=36",
    },
    date: "Apr 15, 2025",
    readTime: 11,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80&auto=format&fit=crop",
  },
];

const TRENDING = [
  {
    slug: "how-to-build-developer-portfolio",
    title: "How to Build a Developer Portfolio Website That Gets You Hired",
    readTime: 12,
    category: "Developer Portfolios",
  },
  {
    slug: "personal-branding-website-guide",
    title: "Personal Branding Website: The Complete Guide for 2025",
    readTime: 10,
    category: "Personal Branding",
  },
  {
    slug: "developer-portfolio-tripled-job-offers",
    title: "Case Study: How One Developer Portfolio Tripled Job Offers",
    readTime: 11,
    category: "Developer Portfolios",
  },
];

const POPULAR_TAGS = [
  "#portfolio design",
  "#personal branding",
  "#developer portfolio",
  "#freelancing",
  "#career growth",
  "#designer portfolio",
  "#resume website",
  "#job search",
];

// ── Clock Icon ─────────────────────────────────────────────────────────────
function ClockIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx={12} cy={12} r={10} />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

// ── Article Card ───────────────────────────────────────────────────────────
function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group bg-white rounded-2xl border border-black/10 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
    >
      <div className="overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-0.5 rounded text-xs font-semibold ${CATEGORY_COLORS[article.category]}`}>
            {article.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-ink-soft">
            <ClockIcon />
            {article.readTime} min read
          </span>
        </div>
        <h3 className="font-serif font-bold text-base text-ink leading-snug mb-2 group-hover:text-brand transition-colors duration-200 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-ink-soft text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-black/10">
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-semibold text-ink">{article.author.name}</p>
              <p className="text-[10px] text-ink-soft">{article.date}</p>
            </div>
          </div>
          <span className="text-brand text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
            Read
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return ALL_ARTICLES.filter((a) => {
      if (activeCategory !== "All" && a.category !== activeCategory) return false;
      if (search && !a.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [activeCategory, search]);

  const showFeatured = activeCategory === "All" && !search;

  return (
    <main className="bg-canvas-bg min-h-screen">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center"
        style={{
          background: "linear-gradient(135deg, #f0f7ff 0%, #eaf3ff 50%, #f3f0ff 100%)",
        }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/20 bg-white/70 backdrop-blur-sm mb-6 text-sm font-medium text-brand">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Portfolio Insights &amp; Career Intelligence
        </div>

        {/* Heading */}
        <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-ink leading-tight mb-4 max-w-3xl mx-auto">
          Insights on Building a
          <br />
          <span className="text-brand">Professional Portfolio Website</span>
        </h1>

        {/* Subtitle */}
        <p className="text-ink-soft text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Actionable guides, portfolio inspiration, branding tips, and career
          insights for professionals building their online presence.
        </p>

        {/* Search */}
        <div className="relative max-w-lg mx-auto mb-10">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-soft/50 pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx={11} cy={11} r={8} />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search articles, guides, tips..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-5 py-3.5 rounded-full border border-black/10 bg-white shadow-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-brand/30 text-sm sm:text-base"
          />
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-14">
          {[
            { value: "120+", label: "Articles Published" },
            { value: "50K+", label: "Monthly Readers" },
            { value: "4.9★", label: "Reader Rating" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-brand">{value}</p>
              <p className="text-xs sm:text-sm text-ink-soft mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Category Tabs ───────────────────────────────────────────── */}
      <div className="sticky top-16 z-40 bg-white border-b border-black/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-brand text-white shadow-sm"
                    : "text-ink-soft hover:text-ink hover:bg-black/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content + Sidebar ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-8 xl:gap-12 items-start">

          {/* ── Left: Articles ──────────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* Featured Article */}
            {showFeatured && (
              <div className="mb-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand text-white text-xs font-semibold uppercase tracking-wider mb-4">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  Featured
                </div>
                <div className="bg-white rounded-2xl border border-black/10 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-[44%] shrink-0 overflow-hidden">
                      <img
                        src={FEATURED.image}
                        alt={FEATURED.title}
                        className="w-full h-52 sm:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-2.5 py-0.5 rounded text-xs font-semibold ${CATEGORY_COLORS[FEATURED.category]}`}>
                          {FEATURED.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-ink-soft">
                          <ClockIcon />
                          {FEATURED.readTime} min read
                        </span>
                      </div>
                      <h2 className="font-serif font-bold text-xl sm:text-2xl text-ink leading-snug mb-3">
                        {FEATURED.title}
                      </h2>
                      <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-5">
                        {FEATURED.excerpt}
                      </p>
                      <div className="flex items-center gap-3 mb-6">
                        <img
                          src={FEATURED.author.avatar}
                          alt={FEATURED.author.name}
                          className="w-9 h-9 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold text-ink">{FEATURED.author.name}</p>
                          <p className="text-xs text-ink-soft">
                            {FEATURED.author.role} · {FEATURED.date}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${FEATURED.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-lg hover:bg-brand-light transition-colors duration-200 self-start"
                      >
                        Read Article
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section Heading */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg sm:text-xl font-bold text-ink">
                {showFeatured
                  ? "Latest Articles"
                  : activeCategory !== "All"
                  ? activeCategory
                  : "Search Results"}
              </h2>
              <span className="text-sm text-ink-soft">
                {filtered.length} article{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Article Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filtered.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-ink-soft">
                <svg className="w-12 h-12 mx-auto mb-4 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx={11} cy={11} r={8} /><path d="M21 21l-4.35-4.35" />
                </svg>
                <p className="text-lg font-semibold mb-1">No articles found</p>
                <p className="text-sm">Try a different search or category</p>
              </div>
            )}
          </div>

          {/* ── Right: Sidebar ──────────────────────────────────────── */}
          <aside className="hidden lg:flex flex-col gap-5 w-72 xl:w-80 shrink-0">

            {/* Newsletter */}
            <div className="bg-brand rounded-2xl p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1">
                Free Newsletter
              </p>
              <h3 className="font-serif font-bold text-xl mb-2 leading-snug">
                Portfolio Tips, Every Week
              </h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                Join 12,000+ professionals getting actionable portfolio strategies every Tuesday.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/50 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="w-full py-2.5 bg-white text-brand font-semibold text-sm rounded-lg hover:bg-white/90 transition-colors duration-200">
                Subscribe Free →
              </button>
            </div>

            {/* Free Checklist */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-brand shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3 className="font-bold text-ink text-sm">Free Portfolio Checklist</h3>
              </div>
              <p className="text-sm text-ink-soft mb-4 leading-relaxed">
                The 27-point checklist used by 10,000+ professionals to audit and improve their portfolio.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Hero section optimization",
                  "Work samples presentation",
                  "Testimonials & social proof",
                  "Mobile performance score",
                  "SEO & discoverability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <svg className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2.5 bg-brand text-white font-semibold text-sm rounded-lg hover:bg-brand-light transition-colors duration-200">
                Download Free Checklist
              </button>
            </div>

            {/* Trending Now */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                <h3 className="font-bold text-ink text-sm">Trending Now</h3>
              </div>
              <ol className="space-y-4">
                {TRENDING.map((item, i) => (
                  <li key={item.slug} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="text-sm font-semibold text-ink hover:text-brand transition-colors duration-150 line-clamp-2 leading-snug"
                      >
                        {item.title}
                      </Link>
                      <p className="text-xs text-ink-soft mt-1">
                        {item.readTime} min · {item.category}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Popular Topics */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
                <h3 className="font-bold text-ink text-sm">Popular Topics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {POPULAR_TAGS.map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 rounded-full border border-black/10 text-sm text-ink-soft hover:border-brand hover:text-brand cursor-pointer transition-colors duration-150"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-ink rounded-2xl p-6 text-white">
              <h3 className="font-bold text-base mb-2 leading-snug">
                Launch your portfolio in minutes
              </h3>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">
                No coding. 50+ professional templates for every creative discipline.
              </p>
              <Link
                href="/templates"
                className="block text-center py-2.5 bg-brand text-white font-semibold text-sm rounded-lg hover:bg-brand-light transition-colors duration-200"
              >
                Get Started Free →
              </Link>
            </div>

          </aside>
        </div>
      </div>

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-canvas-bg border-t border-black/10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5 text-brand text-xs font-medium mb-6">
          Start Today — No Credit Card Required
        </div>
        <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-ink leading-tight mb-4 max-w-2xl mx-auto">
          Ready to Build Your{" "}
          <span className="text-brand">Professional Portfolio Website?</span>
        </h2>
        <p className="text-ink-soft text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Join 50,000+ professionals who&apos;ve launched stunning portfolio
          websites with My Portfolio. Get hired faster, win more clients, and own
          your online presence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/templates"
            className="px-8 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-light transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
          >
            Get Started Free
          </Link>
          <Link
            href="/templates"
            className="px-8 py-3 bg-white text-ink font-semibold rounded-lg border border-black/10 hover:bg-black/5 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
          >
            View Portfolio Templates
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-ink-soft">
          {[
            "Free forever plan",
            "No credit card needed",
            "Launch in 5 minutes",
          ].map((text) => (
            <span key={text} className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              {text}
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
