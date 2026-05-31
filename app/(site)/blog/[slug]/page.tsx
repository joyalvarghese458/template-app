import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

const ARTICLE = {
  slug: "10-elements-every-professional-portfolio-needs",
  category: "Portfolio Design",
  categoryColor: "bg-blue-100 text-blue-700",
  title: "How to Build a Portfolio Website That Gets You Hired as a Designer in 2025",
  excerpt:
    "Discover the must-have elements that separate average portfolios from career-defining ones. We analyzed 500+ successful portfolios to bring you this definitive guide.",
  author: { name: "Sarah Chen", role: "Portfolio Strategist", avatar: "https://i.pravatar.cc/40?img=47" },
  date: "May 20, 2025",
  readTime: 8,
  heroImage:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop",
};

export async function generateStaticParams() {
  return [{ slug: ARTICLE.slug }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== ARTICLE.slug) return {};
  return {
    title: ARTICLE.title,
    description: ARTICLE.excerpt,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug !== ARTICLE.slug) notFound();

  return (
    <main className="bg-canvas-bg min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="relative w-full mt-16 h-72 sm:h-96 md:h-[480px] overflow-hidden">
        <img
          src={ARTICLE.heroImage}
          alt={ARTICLE.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-16 pb-8">
          <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold mb-3 ${ARTICLE.categoryColor}`}>
            {ARTICLE.category}
          </span>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-snug max-w-3xl">
            {ARTICLE.title}
          </h1>
        </div>
      </div>

      {/* ── Article body ─────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-ink-soft mb-6">
          <Link href="/" className="hover:text-brand transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-ink line-clamp-1">{ARTICLE.title}</span>
        </nav>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-black/10">
          <div className="flex items-center gap-3">
            <img
              src={ARTICLE.author.avatar}
              alt={ARTICLE.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-ink">{ARTICLE.author.name}</p>
              <p className="text-xs text-ink-soft">{ARTICLE.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-ink-soft">
            <span>{ARTICLE.date}</span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={12} r={10} /><path d="M12 6v6l4 2" />
              </svg>
              {ARTICLE.readTime} min read
            </span>
          </div>
        </div>

        {/* ── Content ───────────────────────────────────────────── */}
        <article className="prose-article">

          {/* Introduction */}
          <h2>Introduction</h2>
          <p>
            Most design portfolios look the same. A grid of projects, a short bio, a contact page — and then silence.
            No callbacks. No client inquiries. No job offers.
          </p>
          <p>
            The problem usually isn&apos;t the work. It&apos;s how the work is presented.
          </p>
          <p>
            In 2025, hiring managers and potential clients aren&apos;t just evaluating your design skills — they&apos;re
            evaluating your thinking, your process, your communication, and whether your online presence feels
            credible and intentional. A portfolio that checks all four of those boxes? That&apos;s what actually gets
            you hired.
          </p>
          <p>
            This guide breaks down exactly how to build a portfolio website that gets you hired as a designer — not
            with generic advice, but with a clear framework that top-tier designers use to land dream roles and
            high-value clients.
          </p>
          <p>
            Whether you&apos;re a UI/UX designer, a brand identity specialist, a product designer, or a
            multidisciplinary creative, the same core principles apply. Let&apos;s get into it.
          </p>

          {/* Image 1 */}
          <figure>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80&auto=format&fit=crop"
              alt="Designer reviewing portfolio work on laptop"
              className="article-img"
            />
            <figcaption>Top designers treat their portfolio as a strategic career asset, not just a gallery.</figcaption>
          </figure>

          {/* Section 1 */}
          <h2>What Hiring Managers Actually Look for in a Design Portfolio</h2>
          <p>
            Before you build a single page, it helps to understand what the person on the other side of the screen
            is actually looking for.
          </p>
          <p>
            Hiring managers at top agencies and in-house design teams report that they spend an average of under two
            minutes on their initial pass through a portfolio. That&apos;s not much time to make an impression. What
            they&apos;re scanning for in those first moments:
          </p>
          <ul>
            <li><strong>Clarity of work</strong> — Can they immediately understand what you designed, why, and what impact it had?</li>
            <li><strong>Quality over quantity</strong> — Three to five strong, well-documented projects outperform fifteen scattered ones every time.</li>
            <li><strong>Evidence of process</strong> — Screenshots of final designs are nice. Screenshots of sketches, wireframes, iterations, and decisions are memorable.</li>
            <li><strong>Communication skills</strong> — How you write about your work signals how you&apos;ll communicate with stakeholders, clients, and cross-functional teams.</li>
            <li><strong>Professional presentation</strong> — A polished, well-structured professional portfolio website communicates that you care about craft at every level — not just when you&apos;re on the clock.</li>
          </ul>
          <p>This is the lens you should use when building every page of your portfolio.</p>

          {/* Image 2 */}
          <figure>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80&auto=format&fit=crop"
              alt="Professional reviewing candidate portfolios"
              className="article-img"
            />
            <figcaption>Hiring managers make fast judgments — your portfolio&apos;s first impression determines whether they stay or leave.</figcaption>
          </figure>

          {/* Section 2 */}
          <h2>How to Structure a Portfolio Website That Converts Visitors Into Opportunities</h2>

          <h3>1. Start With a Homepage That Hooks Immediately</h3>
          <p>
            Your homepage has one job: make someone want to stay. That means your headline, visual hierarchy, and
            above-the-fold content need to work together instantly.
          </p>
          <p>What to include above the fold:</p>
          <ul>
            <li>Your name and a clear one-line descriptor ("UI/UX Designer for SaaS Products" or "Brand Identity Designer for Early-Stage Startups")</li>
            <li>One strong visual — either a hero image of your best work or a clean, high-quality headshot paired with a bold project thumbnail</li>
            <li>A single, clear CTA — "View My Work" or "See Selected Projects"</li>
          </ul>
          <p>Avoid the temptation to cram everything into the header. Clarity wins over cleverness here.</p>

          <h3>2. Curate Your Projects Ruthlessly</h3>
          <p>
            This is the hardest part for most designers. The natural instinct is to include everything you&apos;ve
            ever made. Resist it.
          </p>
          <p>
            Aim for four to six case studies that represent the type of work you want to do more of. If you want to
            design mobile apps, lead with mobile app projects. If you&apos;re targeting branding clients, make sure
            branding is your strongest category.
          </p>
          <p>Each project should be presented as a narrative, not a gallery:</p>
          <ul>
            <li>The context: What was the challenge or opportunity?</li>
            <li>Your role: What specifically did you own or contribute?</li>
            <li>The process: Key decisions, pivots, and rationale</li>
            <li>The outcome: Results, metrics, or qualitative impact</li>
            <li>Visuals throughout: Sketches, wireframes, prototypes, final screens</li>
          </ul>
          <p>A well-documented case study does more persuasive work than any testimonial.</p>

          <h3>3. Write an About Page That Builds Trust</h3>
          <p>
            Designers often write About pages that read like a job application. Name, school, years of experience,
            tools used. This is a missed opportunity.
          </p>
          <p>
            Your About page is where you get to be human and specific. Share your design philosophy. Mention the
            industries you understand deeply. Talk about what problems genuinely excite you to solve. If you&apos;ve
            worked with notable companies or clients, mention them naturally here — not as a brag, but as context.
          </p>
          <p>
            <strong>Bonus:</strong> Include a professional headshot. Portfolios with faces consistently outperform
            those without, because trust is partly built on seeing the person behind the work.
          </p>

          <h3>4. Make Contact Frictionless</h3>
          <p>
            If someone has to work to reach you, they won&apos;t. Your contact setup should include:
          </p>
          <ul>
            <li>A simple contact form with as few fields as possible (name, email, message)</li>
            <li>A direct email address for those who prefer it</li>
            <li>Links to your LinkedIn and any other relevant social profiles</li>
            <li>Your general location or timezone for clients considering remote collaboration</li>
          </ul>
          <p>
            If you freelance, consider adding a short note about your current availability. &quot;Available for
            projects starting Q3 2025&quot; tells a prospective client exactly where they stand.
          </p>

          {/* Image 3 */}
          <figure>
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop"
              alt="UX designer working on wireframes and design layouts"
              className="article-img"
            />
            <figcaption>Strong portfolios show the thinking behind the design — not just the final output.</figcaption>
          </figure>

          {/* Section 3 */}
          <h2>The Technical Side: What Your Portfolio Website Needs in 2025</h2>
          <p>
            Having great content is half the battle. The technical quality of your portfolio also signals
            professionalism and directly affects whether your site ranks in search results.
          </p>

          <h3>Performance and Speed</h3>
          <p>
            A slow portfolio is a leaky bucket. Even the best work loses its impact when a potential client is
            staring at a loading spinner. Your portfolio should load in under three seconds on a standard connection,
            and under two seconds on mobile.
          </p>
          <p>Compress images without sacrificing quality. Use modern formats like WebP. Choose a platform or hosting setup that prioritizes speed.</p>

          <h3>Mobile Responsiveness</h3>
          <p>
            Recruiters and creative directors often review portfolios on their phones during commutes or between
            meetings. A layout that breaks on mobile — or worse, requires horizontal scrolling — creates an
            immediate negative impression.
          </p>
          <p>Every element of your professional portfolio website should render cleanly on screens from 375px wide upward.</p>

          <h3>Basic On-Page SEO</h3>
          <p>
            You don&apos;t need to be an SEO expert, but a few foundational choices dramatically increase your
            chances of being discovered organically:
          </p>
          <ul>
            <li>Use a descriptive, keyword-relevant page title (e.g., "Sarah Kim — UX Designer for Fintech Products")</li>
            <li>Write a compelling meta description for your homepage and key project pages</li>
            <li>Use proper heading hierarchy (H1, H2, H3) throughout your content</li>
            <li>Include alt text on every image — both for accessibility and for search indexing</li>
            <li>Have a custom domain, not a subdomain of a portfolio platform</li>
          </ul>

          <h3>Accessibility</h3>
          <p>
            Accessible design isn&apos;t just an ethical consideration — it reflects your skills as a designer.
            Ensure sufficient color contrast, keyboard navigability, and meaningful image alt text across your entire
            portfolio.
          </p>

          {/* Image 4 */}
          <figure>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop"
              alt="Developer working on portfolio website performance"
              className="article-img"
            />
            <figcaption>Technical performance is part of your design credibility — a slow portfolio sends the wrong signal.</figcaption>
          </figure>

          {/* Section 4 */}
          <h2>Real-World Examples: What Strong Design Portfolios Get Right</h2>

          <h3>The Focused Specialist</h3>
          <p>
            Some of the most compelling design portfolios belong to designers who have niched down intentionally.
            Rather than presenting work across every category imaginable, they lead with a specific type of problem
            they solve — and they solve it visibly well.
          </p>
          <p>
            A UX designer who specializes in healthcare apps, for instance, can speak directly to the constraints,
            user needs, and regulatory considerations of that space. That specificity makes them far more memorable
            to a healthcare company than a generalist with a broader but shallower portfolio.
          </p>

          <h3>The Process-Forward Presenter</h3>
          <p>
            The best portfolios don&apos;t just show the finished product — they make the thinking visible. Annotated
            wireframes. Explorations that didn&apos;t make the cut. A short paragraph explaining why one direction
            was chosen over another.
          </p>
          <p>
            This approach works because it converts your portfolio from a showroom into a window into how you think.
            Hiring managers aren&apos;t just buying your output; they&apos;re hiring your judgment.
          </p>

          <h3>The Consistent Visual Identity</h3>
          <p>
            Strong portfolios have a look and feel that&apos;s consistent with the designer&apos;s own aesthetic
            point of view. The typography, color palette, spacing, and overall design of the portfolio itself is an
            implicit case study. If your portfolio looks generic or templated in a way that undermines your creative
            positioning, that&apos;s worth addressing before you send a single application.
          </p>

          {/* Section 5 */}
          <h2>Common Mistakes That Undermine Design Portfolios</h2>

          <h3>Including Work You Don&apos;t Want to Do Again</h3>
          <p>
            Every project you feature signals &quot;I want more of this.&quot; If you include a category of work out
            of habit or obligation — even if it&apos;s solid work — you may attract exactly the wrong opportunities.
          </p>

          <h3>Writing Passive, Vague Case Study Copy</h3>
          <p>
            &quot;I worked on a redesign of the checkout flow&quot; tells nobody anything. &quot;I redesigned the
            mobile checkout flow for an e-commerce platform, reducing drop-off by identifying three key friction
            points in the original journey&quot; — that&apos;s a sentence worth reading.
          </p>
          <p>Specificity and active voice are your two most powerful writing tools when describing your work.</p>

          <h3>Hiding Behind Process Without Showing Results</h3>
          <p>
            Process documentation is valuable. But process-only portfolios can feel incomplete if outcomes are never
            addressed. Even qualitative outcomes matter: &quot;The new onboarding flow received consistently positive
            feedback from the client&apos;s internal testing team&quot; is better than no outcome at all.
          </p>

          <h3>Using Low-Resolution or Inconsistently Sized Visuals</h3>
          <p>
            In an industry where visual communication is literally your job, blurry screenshots or inconsistently
            sized mockups send an unintended message. Take the time to produce clean, high-quality visuals for every
            project you present.
          </p>

          <h3>Launching and Never Updating</h3>
          <p>
            A portfolio with a &quot;Last updated: 2022&quot; project date is a quiet red flag. Schedule a portfolio
            review every six months at minimum. Refresh case studies with new metrics, add recent projects, and make
            sure the overall presentation still reflects where you are as a designer today.
          </p>

          {/* Image 5 */}
          <figure>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80&auto=format&fit=crop"
              alt="Team reviewing and discussing design portfolio"
              className="article-img"
            />
            <figcaption>Getting external feedback on your portfolio before sending it out can reveal blind spots you&apos;d otherwise miss.</figcaption>
          </figure>

          {/* Section 6 */}
          <h2>Expert Insights: Principles From the Top of the Design Industry</h2>
          <ul>
            <li><strong>Lead with your strongest work, always.</strong> The order of your projects tells a story about what you value and what you want to be hired for. Most visitors won&apos;t scroll past the first two or three projects, so your sequencing matters enormously.</li>
            <li><strong>Brevity in writing is a design skill.</strong> The ability to explain complex design decisions in clear, concise language is something senior designers do exceptionally well. Your case study writing is a chance to demonstrate that skill.</li>
            <li><strong>Your portfolio is never finished — it&apos;s just live.</strong> Treat it as a living document. The best designers revisit their portfolios regularly, not just when they&apos;re job hunting.</li>
            <li><strong>Social proof amplifies everything.</strong> A quote from a satisfied client, a testimonial from a collaborator, or a mention in a publication adds credibility in a way that self-promotion can&apos;t replicate. Actively collect this kind of social proof throughout your career.</li>
            <li><strong>Specificity is more persuasive than versatility.</strong> In most hiring scenarios, a designer who is clearly excellent at one thing is more compelling than a designer who is decent at many things. Know what your signature strength is, and let it lead.</li>
          </ul>

          {/* Section 7 - FAQ */}
          <h2>FAQ</h2>

          <h3>How many projects should I include in my design portfolio?</h3>
          <p>
            For most designers, four to six case studies is the sweet spot. Fewer than three can make a portfolio
            feel thin; more than eight or nine risks diluting focus and overwhelming visitors. Quality, depth, and
            relevance matter more than volume.
          </p>

          <h3>Do I need a custom domain for my portfolio website?</h3>
          <p>
            Yes. A custom domain (yourname.com or yourname.design) is a small investment that makes a meaningful
            difference in how professional your portfolio appears. It also helps with search visibility and makes
            your URL easy to share in applications and on business cards.
          </p>

          <h3>How long should each portfolio case study be?</h3>
          <p>
            There&apos;s no universal right answer, but most effective case studies fall between 600 and 1,200 words
            of written content, complemented by strong visuals throughout. The goal is to tell a complete story —
            context, process, outcome — without padding.
          </p>

          <h3>Should my portfolio website include pricing information?</h3>
          <p>
            If you freelance, including a starting rate or a general pricing tier can actually save time by
            pre-qualifying inquiries. If you&apos;re targeting employment rather than freelance clients, pricing is
            generally not relevant and can be left out.
          </p>

          <h3>How do I present client work I can&apos;t publicly share due to NDA?</h3>
          <p>
            This is a common challenge. Options include: presenting high-level process and outcomes without revealing
            sensitive details, requesting written permission to share specific elements, creating anonymized versions
            of the work that preserve the design decisions without identifying the client, or password-protecting
            certain projects for sharing only with specific contacts during an application process.
          </p>

          {/* Conclusion */}
          <h2>Conclusion</h2>
          <p>
            Building a portfolio website that actually gets you hired as a designer in 2025 comes down to a few core
            principles: clarity of presentation, depth of case studies, honest personal positioning, and technical
            execution that reflects the same standards you apply to your client work.
          </p>
          <p>
            The designers getting hired and winning clients aren&apos;t necessarily the ones with the most impressive
            raw talent. They&apos;re the ones who communicate their value clearly, present their thinking credibly,
            and make it easy for the right people to say yes.
          </p>
          <p>Your portfolio is the most important piece of design work you&apos;ll ever ship. Treat it that way.</p>

        </article>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <div className="mt-14 rounded-2xl bg-brand p-8 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-2">
            Ready to Build Your Professional Portfolio Website?
          </p>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl mb-3 leading-snug">
            Your work deserves a home that does it justice.
          </h2>
          <p className="text-sm sm:text-base text-white/80 mb-6 max-w-lg mx-auto leading-relaxed">
            Fast, polished, and built to make the right impression from the very first visit. Explore premium
            professional portfolio website solutions — built specifically for designers, developers, and creative
            professionals who are serious about how they show up online.
          </p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-brand font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200 text-sm sm:text-base"
          >
            Get Started Today
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* ── Back to blog ──────────────────────────────────────── */}
        <div className="mt-10 pt-8 border-t border-black/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-brand transition-colors duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5" /><path d="M11 5l-7 7 7 7" />
            </svg>
            Back to Blog
          </Link>
        </div>

      </div>

      <Footer />
    </main>
  );
}
