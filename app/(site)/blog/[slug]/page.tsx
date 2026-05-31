import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

// ── Types ─────────────────────────────────────────────────────────────────

interface ArticleMeta {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  author: { name: string; role: string; avatar: string };
  date: string;
  readTime: number;
  heroImage: string;
  Content: React.FC;
}

// ── Article Content: Designer Portfolio ───────────────────────────────────

function DesignerPortfolioContent() {
  return (
    <>
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

      <figure>
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80&auto=format&fit=crop"
          alt="Designer reviewing portfolio work on laptop"
          className="article-img"
        />
        <figcaption>Top designers treat their portfolio as a strategic career asset, not just a gallery.</figcaption>
      </figure>

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

      <figure>
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80&auto=format&fit=crop"
          alt="Professional reviewing candidate portfolios"
          className="article-img"
        />
        <figcaption>Hiring managers make fast judgments — your portfolio&apos;s first impression determines whether they stay or leave.</figcaption>
      </figure>

      <h2>How to Structure a Portfolio Website That Converts Visitors Into Opportunities</h2>

      <h3>1. Start With a Homepage That Hooks Immediately</h3>
      <p>
        Your homepage has one job: make someone want to stay. That means your headline, visual hierarchy, and
        above-the-fold content need to work together instantly.
      </p>
      <p>What to include above the fold:</p>
      <ul>
        <li>Your name and a clear one-line descriptor (&quot;UI/UX Designer for SaaS Products&quot; or &quot;Brand Identity Designer for Early-Stage Startups&quot;)</li>
        <li>One strong visual — either a hero image of your best work or a clean, high-quality headshot paired with a bold project thumbnail</li>
        <li>A single, clear CTA — &quot;View My Work&quot; or &quot;See Selected Projects&quot;</li>
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

      <figure>
        <img
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop"
          alt="UX designer working on wireframes and design layouts"
          className="article-img"
        />
        <figcaption>Strong portfolios show the thinking behind the design — not just the final output.</figcaption>
      </figure>

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
        <li>Use a descriptive, keyword-relevant page title (e.g., &quot;Sarah Kim — UX Designer for Fintech Products&quot;)</li>
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

      <figure>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop"
          alt="Developer working on portfolio website performance"
          className="article-img"
        />
        <figcaption>Technical performance is part of your design credibility — a slow portfolio sends the wrong signal.</figcaption>
      </figure>

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

      <figure>
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80&auto=format&fit=crop"
          alt="Team reviewing and discussing design portfolio"
          className="article-img"
        />
        <figcaption>Getting external feedback on your portfolio before sending it out can reveal blind spots you&apos;d otherwise miss.</figcaption>
      </figure>

      <h2>Expert Insights: Principles From the Top of the Design Industry</h2>
      <ul>
        <li><strong>Lead with your strongest work, always.</strong> The order of your projects tells a story about what you value and what you want to be hired for. Most visitors won&apos;t scroll past the first two or three projects, so your sequencing matters enormously.</li>
        <li><strong>Brevity in writing is a design skill.</strong> The ability to explain complex design decisions in clear, concise language is something senior designers do exceptionally well. Your case study writing is a chance to demonstrate that skill.</li>
        <li><strong>Your portfolio is never finished — it&apos;s just live.</strong> Treat it as a living document. The best designers revisit their portfolios regularly, not just when they&apos;re job hunting.</li>
        <li><strong>Social proof amplifies everything.</strong> A quote from a satisfied client, a testimonial from a collaborator, or a mention in a publication adds credibility in a way that self-promotion can&apos;t replicate. Actively collect this kind of social proof throughout your career.</li>
        <li><strong>Specificity is more persuasive than versatility.</strong> In most hiring scenarios, a designer who is clearly excellent at one thing is more compelling than a designer who is decent at many things. Know what your signature strength is, and let it lead.</li>
      </ul>

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
    </>
  );
}

// ── Article Content: Developer Portfolio Guide ────────────────────────────

function DeveloperPortfolioGuideContent() {
  return (
    <>
      <h2>Introduction</h2>
      <p>
        You&apos;ve spent years sharpening your skills. You can architect a REST API, debug production issues at
        2 AM, and reason through complex data structures without breaking a sweat. But when someone asks for your
        portfolio, you send them a GitHub link — and hope for the best.
      </p>
      <p>That&apos;s a problem.</p>
      <p>
        A well-crafted <strong>developer portfolio website</strong> is one of the highest-leverage career
        investments you can make. It&apos;s your first impression, your proof of work, and your personal brand —
        all in one place. Yet most developers treat it as an afterthought, throwing together a list of repos and
        calling it done.
      </p>
      <p>
        This guide cuts through the noise. You&apos;ll learn exactly what belongs in a strong software developer
        portfolio, what&apos;s actively hurting your chances, and how to structure a portfolio that works as hard
        as you do — whether you&apos;re job hunting, landing freelance clients, or building your reputation in
        the industry.
      </p>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80&auto=format&fit=crop"
          alt="Developer writing code at a desk"
          className="article-img"
        />
        <figcaption>A polished developer portfolio is your most powerful career asset — treat it that way.</figcaption>
      </figure>

      <h2>Why Your Developer Portfolio Website Matters More Than Ever</h2>
      <p>
        The job market for developers has evolved. Hiring managers, technical leads, and clients don&apos;t just
        want to see credentials — they want evidence. They want to understand how you think, what you&apos;ve
        built, and whether you can communicate clearly about your work.
      </p>
      <p>
        A polished <strong>coding portfolio website</strong> answers those questions before anyone asks them.
      </p>
      <p>
        Beyond job hunting, a great portfolio compounds over time. It helps you attract inbound freelance
        inquiries, get invited to speak at conferences, build an audience, and position yourself as a specialist
        rather than a commodity. GitHub alone won&apos;t do that. A LinkedIn profile won&apos;t do it either.
      </p>
      <p>
        Your portfolio is the one digital space you fully own and control — and that ownership matters.
      </p>

      <h2>What to Include in a Developer Portfolio Website</h2>

      <h3>1. A Clear, Compelling Hero Section</h3>
      <p>
        Your hero section is the first thing visitors see. It needs to answer three questions instantly: Who are
        you? What do you do? And why does it matter to them?
      </p>
      <p>
        Skip the vague taglines like <em>&quot;I build stuff&quot;</em> or <em>&quot;Passionate developer.&quot;</em>{" "}
        Instead, lead with specificity. Something like: <em>&quot;Frontend engineer specializing in React and
        performance optimization — I help startups build fast, scalable products.&quot;</em>
      </p>
      <p>
        Include your name, your role, and a single clear call to action — whether that&apos;s viewing your work,
        downloading your resume, or getting in touch.
      </p>

      <h3>2. A Focused Project Showcase</h3>
      <p>
        This is the heart of your <strong>software developer portfolio</strong>. Three to six carefully selected
        projects will outperform a gallery of twenty mediocre ones every time.
      </p>
      <p>For each project, go beyond just showing the final product. Include:</p>
      <ul>
        <li><strong>What the project does</strong> — in plain English, not just technical jargon</li>
        <li><strong>The problem it solves</strong> — context makes your work meaningful</li>
        <li><strong>Your specific role</strong> — especially important for team projects</li>
        <li><strong>The tech stack</strong> — relevant, but not the main event</li>
        <li><strong>Outcomes or impact</strong> — users gained, performance improvements, client results</li>
        <li><strong>A live link and/or GitHub repo</strong> — let visitors explore the work themselves</li>
      </ul>
      <p>Think of each project as a short case study, not just a screenshot with a tech list underneath it.</p>

      <h3>3. An About Section That Feels Human</h3>
      <p>
        Hiring managers and clients are choosing a person, not just a skill set. Your about section should give
        them a reason to connect with you.
      </p>
      <p>
        Write in first person. Mention what you specialize in, what kinds of problems excite you, and what
        you&apos;ve been working on lately. You don&apos;t need to reveal your whole life story — just enough to
        make you feel like a real person rather than a resume in HTML form.
      </p>
      <p>A professional photo helps significantly. People trust faces.</p>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop"
          alt="Developer reviewing their portfolio on a laptop"
          className="article-img"
        />
        <figcaption>The strongest developer portfolios combine great projects with clear, human storytelling.</figcaption>
      </figure>

      <h3>4. Skills — Done Right</h3>
      <p>
        Skills sections often become laundry lists of every tool and language a developer has touched.
        That&apos;s not useful to anyone.
      </p>
      <p>
        Instead, curate your skills around your specialization. Group them logically — languages, frameworks,
        tools, practices — and avoid inflating the list to appear more broadly experienced than you are. If
        you&apos;re a backend developer, lead with backend skills. If you&apos;re fullstack, organize accordingly.
      </p>
      <p>
        Optionally, include context around your depth of experience — years of use, types of projects, or
        proficiency level. This gives a more honest and useful picture.
      </p>

      <h3>5. Testimonials and Social Proof</h3>
      <p>
        This is the most underutilized section in most developer portfolios. If you&apos;ve worked with clients,
        teammates, or managers who can speak to your skills and working style, a short testimonial is worth more
        than anything else on the page.
      </p>
      <p>
        One or two genuine quotes — from a satisfied client, a former manager, or a collaborator — immediately
        build trust in a way that self-description cannot.
      </p>

      <h3>6. A Resume or Downloadable CV</h3>
      <p>
        Make it easy for recruiters and hiring managers to take your profile offline. Offer a clean, downloadable
        PDF resume linked prominently in your navigation or hero section.
      </p>
      <p>
        Keep the resume and portfolio consistent. Conflicting information between the two creates doubt.
      </p>

      <h3>7. Contact Information and a Clear CTA</h3>
      <p>
        If someone reaches the bottom of your portfolio and wants to hire you, don&apos;t make them work for it.
        Include a simple contact form or a direct email address. Add links to your GitHub, LinkedIn, and any other
        relevant professional profiles.
      </p>
      <p>
        Your call to action should match your current goals. If you&apos;re open to freelance work, say so. If
        you&apos;re actively seeking a full-time role, make that clear.
      </p>

      <h2>What to Skip in Your Developer Portfolio</h2>
      <p>Knowing what to leave out is just as important as knowing what to include.</p>
      <p>
        <strong>Skip the tutorials and course projects.</strong> Unless your portfolio is genuinely light on
        real-world work, a to-do app or a weather widget built from a YouTube tutorial won&apos;t impress anyone.
        Prioritize original work or meaningful contributions.
      </p>
      <p>
        <strong>Skip the unfinished projects.</strong> A half-built project without context looks careless.
        Either complete it or don&apos;t include it — or frame it explicitly as a work-in-progress with an
        explanation of where it&apos;s headed.
      </p>
      <p>
        <strong>Skip the oversized skills section.</strong> Listing 40 tools signals that you&apos;re a
        generalist who&apos;s dabbled in everything. Unless that&apos;s genuinely your brand, trim it down.
      </p>
      <p>
        <strong>Skip the walls of text.</strong> No one is reading four paragraphs about your development
        philosophy. Short, scannable, and direct always wins.
      </p>
      <p>
        <strong>Skip outdated work.</strong> That project you built three years ago using a framework no longer
        in use? Let it go. Quality over quantity, always.
      </p>

      <h2>Real-World Examples: What Strong Developer Portfolios Have in Common</h2>
      <p>
        The best developer portfolios share a few consistent traits, regardless of the individual&apos;s tech
        stack or specialization:
      </p>
      <p>
        They open with <strong>clarity</strong> — you understand immediately what the developer does and who they
        serve. They showcase <strong>depth over breadth</strong> — a small number of projects explained
        thoroughly. They have <strong>a distinct visual identity</strong> — not necessarily flashy, but considered
        and consistent. And they make it <strong>easy to take action</strong> — contact information is never buried.
      </p>
      <p>
        Whether the developer is a frontend specialist building interactive UIs, a backend engineer working on
        distributed systems, or a fullstack developer working across the whole product, the strongest portfolios
        feel intentional. Every element earns its place.
      </p>

      <h2>Common Developer Portfolio Mistakes (And How to Fix Them)</h2>

      <h3>Mistake 1: Letting GitHub Be Your Portfolio</h3>
      <p>
        Your GitHub is a codebase archive. Your portfolio is a curated narrative. Link to GitHub from your
        portfolio — don&apos;t replace one with the other.
      </p>

      <h3>Mistake 2: Writing for Yourself Instead of Your Audience</h3>
      <p>
        Explain your projects assuming the reader might not be technical. Hiring managers, clients, and even some
        technical leads care more about outcomes and problem-solving than implementation details.
      </p>

      <h3>Mistake 3: No Mobile Optimization</h3>
      <p>
        A significant portion of people will view your portfolio on their phone. If it&apos;s broken or awkward
        on mobile, that&apos;s the impression you leave.
      </p>

      <h3>Mistake 4: Ignoring Performance</h3>
      <p>
        A slow portfolio sends a message — especially for a developer. Run your site through Google PageSpeed
        Insights and fix obvious issues.
      </p>

      <h3>Mistake 5: Never Updating It</h3>
      <p>
        Your portfolio should evolve with your career. Schedule a quarterly review: add new work, remove old
        projects, update your availability, and refresh your skills list.
      </p>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80&auto=format&fit=crop"
          alt="Developer reviewing and refining their portfolio"
          className="article-img"
        />
        <figcaption>The best portfolios are maintained actively — not just built once and forgotten.</figcaption>
      </figure>

      <h2>Expert Insights: Developer Portfolio Tips That Make a Real Difference</h2>
      <ul>
        <li>
          <strong>Lead with outcomes, not tools.</strong> &quot;Built a React dashboard that reduced client
          reporting time by 40%&quot; is more compelling than &quot;Used React, Redux, and Tailwind CSS.&quot;
        </li>
        <li>
          <strong>Write a project narrative, not a feature list.</strong> Walk the reader through the problem,
          your approach, and what you learned. This demonstrates engineering judgment, not just coding ability.
        </li>
        <li>
          <strong>Tailor for your target.</strong> If you&apos;re going for frontend roles, your projects and
          about section should reflect that specialization. If you want freelance clients, your copy should speak
          to business outcomes. One-size-fits-all portfolios serve no one particularly well.
        </li>
        <li>
          <strong>Make the design serve the content.</strong> Your portfolio doesn&apos;t need to be a design
          showcase (unless you&apos;re a designer-developer). A clean, fast, readable site will outperform an
          overwrought one with animations and parallax effects that slow everything down.
        </li>
        <li>
          <strong>Use a professional domain.</strong> <code>yourname.com</code> or <code>yourname.dev</code>{" "}
          instantly signals that you take your work seriously. Free subdomains undermine the professional
          impression you&apos;re trying to create.
        </li>
      </ul>

      <h2>FAQ: Developer Portfolio Website Questions Answered</h2>

      <h3>How many projects should I include in my developer portfolio?</h3>
      <p>
        Three to six well-documented projects is the sweet spot for most developers. Focus on variety — try to
        showcase different problem types, tech stacks, or project scales — and depth. A thorough case study of
        one strong project beats a screenshot of five mediocre ones.
      </p>

      <h3>Should I build my portfolio from scratch or use a portfolio platform?</h3>
      <p>
        That depends on your goals. Building from scratch demonstrates technical skill, which can matter for
        certain roles — but it also costs significant time and risks a subpar result if design and UX aren&apos;t
        your strengths. Professional portfolio platforms offer polished design, SEO optimization, and fast setup,
        letting you focus your energy on showcasing your work rather than reinventing infrastructure.
      </p>

      <h3>What&apos;s the best tech stack to use for a developer portfolio website?</h3>
      <p>
        There&apos;s no single right answer. What matters is that the site is fast, mobile-friendly, and easy for
        you to maintain. Popular choices include Next.js, Astro, Gatsby, or a simple static site. If you want to
        demonstrate a specific skill (e.g., you&apos;re a React specialist), building your portfolio in that
        stack makes sense. Otherwise, use what you&apos;re most comfortable with.
      </p>

      <h3>How often should I update my developer portfolio?</h3>
      <p>
        Aim for a meaningful review every three to six months. At minimum, update it whenever you complete a
        significant new project, change your role, or shift your career focus. An outdated portfolio is worse
        than a minimal one — it signals disengagement.
      </p>

      <h3>Does my developer portfolio help with SEO and personal branding?</h3>
      <p>
        Absolutely. A portfolio hosted on your own domain with well-structured content can rank for your name in
        search results, making you easier to find and more credible when someone searches for you. Over time, a
        portfolio with a blog or technical writing section can attract significant organic traffic from
        developers, hiring managers, and potential clients searching for your areas of expertise.
      </p>

      <h2>Conclusion</h2>
      <p>
        Your <strong>developer portfolio website</strong> isn&apos;t a formality — it&apos;s one of the most
        powerful career assets you can build. Done well, it replaces a thousand cold applications. It gives
        hiring managers confidence, shows clients what you can do, and signals to the industry that you take your
        craft seriously.
      </p>
      <p>
        The developers who stand out aren&apos;t always the ones with the deepest technical skills. They&apos;re
        the ones who can communicate their skills clearly, showcase their work effectively, and make it easy for
        the right people to reach them.
      </p>
      <p>
        Start with the fundamentals: a focused project showcase, a clear about section, honest skills, and a
        frictionless way to get in touch. Then refine from there. A portfolio is never truly finished — it&apos;s
        a living record of your growth.
      </p>
      <p>
        The best time to build yours was yesterday. The next best time is right now.
      </p>
    </>
  );
}

// ── Article Content: Photography Portfolio ────────────────────────────────

function PhotographyPortfolioContent() {
  return (
    <>
      <h2>Introduction</h2>
      <p>
        You&apos;re a photographer. You&apos;ve spent years developing your eye, your style, and your technical
        craft. You&apos;ve built a body of work you&apos;re genuinely proud of. But if your website isn&apos;t
        doing its job — attracting the right clients, communicating your value, and making it easy to hire you —
        then your best images are sitting in the dark.
      </p>
      <p>
        A <strong>photography portfolio website</strong> isn&apos;t just an online gallery. It&apos;s your
        storefront, your sales team, and your creative statement, all working around the clock on your behalf. The
        difference between a photographer who has a steady stream of inquiries and one who&apos;s constantly
        chasing leads often comes down to one thing: how well their website is built.
      </p>
      <p>
        This guide covers the ten essential elements every photographer needs on their site — whether you&apos;re
        a wedding photographer building a client pipeline, a commercial photographer attracting brand work, or a
        fine art photographer establishing a presence. These aren&apos;t abstract principles. They&apos;re
        practical, actionable, and based on what actually converts website visitors into clients.
      </p>

      <h2>Why Most Photography Websites Fall Short</h2>
      <p>
        Before diving into what your site needs, it&apos;s worth understanding where most{" "}
        <strong>photographer portfolio websites</strong> go wrong.
      </p>
      <p>
        The most common mistake is treating the website purely as an art project. A visually beautiful site that
        buries your contact information, lacks clear navigation, or loads slowly on mobile will lose clients — no
        matter how stunning the photography is. The second most common mistake is the opposite: a site so
        stripped-down and generic that it communicates nothing about who you are or what makes your work
        distinctive.
      </p>
      <p>
        The best photography portfolio websites strike a balance. They let the photography lead, but they&apos;re
        built with intention — structured to serve both the visitor&apos;s needs and the photographer&apos;s
        business goals.
      </p>
      <p>Here&apos;s exactly how to get there.</p>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=900&q=80&auto=format&fit=crop"
          alt="Camera and photography equipment on a wooden surface"
          className="article-img"
        />
        <figcaption>A great photography portfolio website lets your images lead — but it&apos;s built with business intent.</figcaption>
      </figure>

      <h2>10 Things Every Photography Portfolio Website Needs</h2>

      <h3>1. A Homepage That Hooks in the First Three Seconds</h3>
      <p>
        Your homepage has one job: make the right visitor want to stay. That means leading with an image — or a
        carefully chosen selection of images — that immediately communicates your style and specialty.
      </p>
      <p>
        Avoid the impulse to include everything on your homepage. A single, striking hero image or a minimal
        rotating gallery is almost always more powerful than a cluttered grid of every category you shoot. First
        impressions are made in seconds, and visual overwhelm sends people away.
      </p>
      <p>
        Pair your hero imagery with a one-line statement of who you are and what you do. Not a mission statement
        — just clear, direct communication. &quot;Wedding photography in New York City&quot; or &quot;Commercial
        food photography for restaurants and brands&quot; tells a visitor immediately whether they&apos;re in the
        right place.
      </p>

      <h3>2. Curated Galleries — Not Every Shot You&apos;ve Ever Taken</h3>
      <p>
        One of the most common mistakes photographers make is including too many images. The instinct is
        understandable: you worked hard for those shots, and cutting them feels like a loss. But visitors
        don&apos;t experience a 200-image gallery as abundance — they experience it as exhaustion.
      </p>
      <p>
        For the <strong>best photography portfolio</strong>, aim for 15 to 25 images per gallery category. Every
        image should genuinely earn its place. If you find yourself thinking &quot;this one&apos;s okay,
        I&apos;ll include it anyway,&quot; cut it. Your weakest images drag the overall impression of your
        portfolio down to their level.
      </p>
      <p>
        Organize your galleries by category — weddings, portraits, commercial, editorial, or whatever aligns with
        your specialties. Clear, logical organization helps visitors find what they&apos;re looking for and helps
        search engines understand what you offer.
      </p>

      <h3>3. A Strong, Authentic About Page</h3>
      <p>Clients hire photographers they trust. And trust starts with knowing who they&apos;re working with.</p>
      <p>
        Your about page is one of the most visited pages on a photographer&apos;s website — and one of the most
        consistently underdeveloped. A generic bio that reads like a resume misses the point entirely. Your about
        page should feel like meeting you in person: warm, specific, and genuine.
      </p>
      <p>
        Share your background and how you got into photography, but focus most of your copy on what you&apos;re
        like to work with and what clients can expect. What&apos;s your approach? What kind of shoots excite you
        most? What do clients say about the experience?
      </p>
      <p>
        Include a professional photo of yourself — ideally one that reflects your personality and style. Clients
        are going to spend hours with you on their wedding day or in your studio. They want to know the human
        behind the camera before they ever reach out.
      </p>

      <h3>4. Testimonials and Client Reviews</h3>
      <p>
        Nothing on your website will build confidence faster than hearing from satisfied clients in their own
        words.
      </p>
      <p>
        Social proof is powerful precisely because it&apos;s not coming from you. A short, specific testimonial
        from a past client — one that speaks to the quality of the experience, not just the final images — can be
        the single thing that pushes a potential client from &quot;considering&quot; to &quot;booking.&quot;
      </p>
      <p>
        Gather testimonials actively. After delivering a final gallery, follow up with clients and ask them to
        share a few words about their experience. Feature two or three of your strongest reviews prominently —
        on your homepage, your about page, and your contact page. If you have Google reviews or reviews on
        photography booking platforms, link to them as additional validation.
      </p>
      <p>
        Specificity matters. &quot;Sarah was amazing!&quot; is forgettable. &quot;Sarah made us feel completely
        at ease during our session, and the final photos were beyond what we imagined — we&apos;ve already
        recommended her to three friends&quot; is compelling.
      </p>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=900&q=80&auto=format&fit=crop"
          alt="Photographer reviewing images on a computer"
          className="article-img"
        />
        <figcaption>Every element of your photography website — from galleries to your about page — should build trust and invite action.</figcaption>
      </figure>

      <h3>5. Clear, Transparent Pricing — Or at Least a Starting Point</h3>
      <p>
        Pricing is one of the most debated topics in photography website strategy. Some photographers prefer to
        keep pricing completely off their site and handle it during consultations. That&apos;s a valid approach —
        but it comes with a cost.
      </p>
      <p>
        A large portion of potential clients will leave your website without making contact if they can&apos;t
        get any sense of your pricing. They don&apos;t want to waste their time or yours on a consultation if
        you&apos;re clearly out of their budget — and they assume the worst when there&apos;s no information at
        all.
      </p>
      <p>
        The best approach for most <strong>portfolio websites for photographers</strong> is to include a pricing
        page or a &quot;starting from&quot; figure that qualifies your visitors. A simple statement like
        &quot;Wedding packages start at $X&quot; or &quot;Commercial rates available upon request — typical day
        rates range from $X to $X&quot; does the job. It sets expectations, filters out poor-fit inquiries, and
        signals confidence in the value of your work.
      </p>

      <h3>6. A Contact Page That Removes Every Barrier</h3>
      <p>
        Your contact page should be the easiest page on your entire website. If a potential client wants to reach
        you, make it effortless.
      </p>
      <p>
        Include a simple contact form with only the fields you actually need — typically name, email, the type of
        shoot they&apos;re interested in, and their event or project date. Every additional field is a reason to
        abandon the form.
      </p>
      <p>
        Also include your direct email address as a backup. Some people simply prefer to email directly, and
        forcing them into a form they don&apos;t want to use is a lost inquiry.
      </p>
      <p>
        Specify your typical response time. &quot;I respond to all inquiries within 24 hours&quot; is a small
        detail that builds trust and sets expectations. Add your social media links and, if relevant to your
        business, your phone number.
      </p>
      <p>
        If you serve a specific geographic area, mention it clearly on your contact page. It helps with local SEO
        and prevents wasted exchanges with clients in markets you don&apos;t serve.
      </p>

      <h3>7. Search Engine Optimization Built In</h3>
      <p>
        A photography portfolio website that no one can find is a beautiful room with the curtains drawn. SEO —
        search engine optimization — is how you make sure the right people can discover your work.
      </p>
      <p>
        For photographers, the fundamentals of SEO matter enormously. Start with location: if you&apos;re a
        photographer serving a specific city or region, make sure that location is in your page titles, headings,
        and copy. &quot;Austin wedding photographer&quot; or &quot;Los Angeles commercial photographer&quot; are
        the kinds of searches that bring you directly to the clients who need you.
      </p>
      <p>
        Beyond location, optimize your image file names and alt text. Instead of uploading
        &quot;IMG_4892.jpg,&quot; rename the file to something like
        &quot;san-francisco-wedding-couple-golden-hour.jpg&quot; and write a descriptive alt text. Search engines
        can&apos;t see your images — but they can read the text around them.
      </p>
      <p>
        A blog or journal section on your portfolio site can significantly extend your SEO reach. Writing about
        recent shoots, location guides, or photography tips builds topical authority and attracts organic traffic
        from searches you wouldn&apos;t otherwise appear in.
      </p>

      <h3>8. Mobile-First Design and Fast Load Times</h3>
      <p>
        More than half of all website traffic now comes from mobile devices. For photography websites, where
        large, high-resolution images are the whole point, this creates a real technical challenge — and an
        opportunity to stand out.
      </p>
      <p>
        Your photography website must look and function beautifully on a phone. That means responsive layouts,
        tap-friendly navigation, and images that scale correctly without breaking your layout. If your site looks
        great on a desktop but frustrating on mobile, you&apos;re losing the majority of your potential visitors
        before they&apos;ve seen your best work.
      </p>
      <p>
        Performance matters just as much as design. Large image files are the number one cause of slow
        photography websites. Use modern image formats, compress your files without sacrificing visible quality,
        and leverage lazy loading so images only load as visitors scroll to them. A slow site doesn&apos;t just
        frustrate visitors — it actively hurts your search rankings.
      </p>
      <p>
        Before publishing or redesigning your site, test it on multiple devices and run it through Google
        PageSpeed Insights. The results will show you exactly where to focus your optimization efforts.
      </p>

      <h3>9. A Blog or Behind-the-Scenes Journal</h3>
      <p>
        A blog isn&apos;t just for writers. For photographers, a regularly updated journal is one of the most
        effective tools available for SEO, client education, and building a loyal audience.
      </p>
      <p>
        Consider what your ideal client might search for before booking a photographer. Wedding photographers
        might write location guides, tips for choosing a venue with great light, or real wedding features.
        Commercial photographers might cover behind-the-scenes breakdowns of recent campaigns or advice for
        brands on working with photographers. Portrait photographers might write about what to wear for a session
        or how to prepare for a shoot.
      </p>
      <p>
        Each of these posts attracts search traffic, answers questions your clients are already asking, and gives
        you something valuable to share on social media. Over time, a well-maintained blog transforms your
        portfolio website from a static brochure into a living resource — and a steady source of inbound
        inquiries.
      </p>
      <p>
        Consistency matters more than frequency. One thoughtful post per month will outperform five rushed ones
        in a week and then silence for three months.
      </p>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&auto=format&fit=crop"
          alt="Wedding photographer capturing a couple outdoors"
          className="article-img"
        />
        <figcaption>A regularly updated blog turns your portfolio site into a discovery engine for ideal clients.</figcaption>
      </figure>

      <h3>10. A Defined Visual Identity and Consistent Brand</h3>
      <p>
        Your photography portfolio website should feel like an extension of your work — not a generic template
        with your images swapped in. Clients notice when a photographer&apos;s website feels cohesive with their
        photography style, and it builds confidence in the overall experience they&apos;ll receive.
      </p>
      <p>
        Your visual identity includes your color palette, typography choices, logo or wordmark, and the tone of
        your written copy. A fine art photographer&apos;s website might feature minimal design, wide white space,
        and understated typography. A vibrant lifestyle photographer&apos;s site might use bolder colors and more
        energetic language. Neither is right or wrong — what matters is consistency.
      </p>
      <p>
        Every element of your site should feel intentional and aligned. When your design, copy, and photography
        all speak the same visual language, visitors leave with a clear sense of who you are — and who
        you&apos;re right for.
      </p>

      <h2>Common Photography Website Mistakes Worth Avoiding</h2>
      <p>
        Even experienced photographers fall into predictable traps when building their sites. A few worth
        calling out specifically:
      </p>
      <p>
        <strong>Autoplay music or videos.</strong> This was a trend in the early days of web design, and
        it&apos;s never been welcome. Nothing drives visitors away faster than unexpected audio.
      </p>
      <p>
        <strong>Flash-heavy intros or excessive animation.</strong> Subtle transitions can enhance a site.
        Animations that delay access to your actual work cost you visitors who simply don&apos;t have the
        patience.
      </p>
      <p>
        <strong>Inconsistent watermarking.</strong> Some photographers watermark every portfolio image so heavily
        that the image becomes secondary to the watermark. If you&apos;re worried about image theft, lighter
        watermarks or disabling right-click downloads are less intrusive alternatives. Heavy watermarking
        undermines the impression of your work.
      </p>
      <p>
        <strong>No clear next step.</strong> Every page on your site should have a clear path forward — whether
        that&apos;s viewing more work, reading about your services, or getting in touch. If visitors reach the
        end of a gallery or page and there&apos;s nothing directing them anywhere, they&apos;ll simply leave.
      </p>

      <h2>Expert Insights: Photography Website Tips That Give You an Edge</h2>
      <ul>
        <li>
          <strong>Niche down in your copy, even if you shoot a range of styles.</strong> Photographers who
          position themselves as specialists — &quot;intimate elopement photographer&quot; or
          &quot;architectural and interiors photographer for hospitality brands&quot; — consistently attract more
          qualified inquiries than generalists who claim to shoot everything.
        </li>
        <li>
          <strong>Update your portfolio seasonally.</strong> Fresh work keeps your site feeling active and
          ensures your most current style is what potential clients see first.
        </li>
        <li>
          <strong>Track where your inquiries come from.</strong> Use a simple analytics tool to understand how
          people are finding you — organic search, social media, referrals — and invest more in what&apos;s
          working.
        </li>
        <li>
          <strong>Make your personality visible.</strong> Photography is a relationship business. Clients are
          choosing you as much as they&apos;re choosing your images. Let who you are come through in your copy,
          your about page, and even in the images you choose to feature.
        </li>
      </ul>

      <h2>FAQ: Photography Portfolio Website Questions Answered</h2>

      <h3>How many photos should I include on my photography portfolio website?</h3>
      <p>
        Quality always beats quantity. For each gallery category, 15 to 25 of your strongest images is the right
        range for most photographers. The goal is to leave visitors impressed and wanting to see more — not to
        overwhelm them with every image you&apos;ve ever taken.
      </p>

      <h3>Should I include pricing on my photographer portfolio website?</h3>
      <p>
        Most photographers benefit from including at least a starting price or a general price range. Complete
        pricing transparency isn&apos;t always necessary, but giving potential clients some sense of investment
        filters out poor-fit inquiries and saves everyone time. If you prefer not to publish rates, make your
        contact page especially easy to use.
      </p>

      <h3>What&apos;s the best platform for building a photography portfolio website?</h3>
      <p>
        The best platform is one you&apos;ll actually maintain and update. Popular options include dedicated
        portfolio platforms built specifically for photographers, which handle performance, mobile optimization,
        and professional design out of the box. What matters most is that the site is fast, mobile-friendly, and
        reflects your brand — not which platform powers it behind the scenes.
      </p>

      <h3>How do I get my photography website to show up on Google?</h3>
      <p>
        Start with location-based SEO: include your city and photography specialty in your page titles, headings,
        and content. Optimize your image file names and alt text with descriptive, keyword-relevant language. Add
        a blog and write about topics your clients are searching for. And make sure your site loads quickly —
        page speed is a confirmed Google ranking factor.
      </p>

      <h3>How often should I update my photography portfolio website?</h3>
      <p>
        Plan a meaningful portfolio review every three to six months. Add your best recent work, retire images
        that no longer represent your current style or quality standard, and update your availability and any
        seasonal pricing. A blog or journal section can be updated more frequently — even once a month makes a
        meaningful difference for SEO.
      </p>

      <h2>Conclusion</h2>
      <p>
        Your photography speaks for itself — but only if your website gives it the platform it deserves. A
        strong <strong>photography portfolio website</strong> isn&apos;t built in an afternoon, but it also
        doesn&apos;t need to be overwhelming. Start with the fundamentals covered in this guide: curated
        galleries, a genuine about page, clear contact information, and a site that loads fast and looks great
        on every device.
      </p>
      <p>
        From there, layer in the elements that compound over time — client testimonials, a regularly updated
        blog, location-based SEO, and a visual identity that makes your brand instantly recognizable. Each
        improvement you make builds on the last.
      </p>
      <p>
        The photographers who book the most clients aren&apos;t always the most technically skilled or the most
        creatively daring. They&apos;re the ones who&apos;ve built a website that communicates their value
        clearly — and makes it easy for the right clients to say yes.
      </p>
    </>
  );
}

// ── Articles Map ──────────────────────────────────────────────────────────

const ARTICLES: Record<string, ArticleMeta> = {
  "10-elements-every-professional-portfolio-needs": {
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
    Content: DesignerPortfolioContent,
  },
  "developer-portfolio-website-guide": {
    slug: "developer-portfolio-website-guide",
    category: "Developer Portfolios",
    categoryColor: "bg-cyan-100 text-cyan-700",
    title: "The Ultimate Developer Portfolio Guide: What to Include, What to Skip",
    excerpt:
      "Learn exactly what to include in your developer portfolio website — and what's killing your chances. A practical guide for software developers who want to stand out and get hired.",
    author: { name: "Marcus Reid", role: "Senior Engineer", avatar: "https://i.pravatar.cc/40?img=12" },
    date: "May 15, 2025",
    readTime: 15,
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop",
    Content: DeveloperPortfolioGuideContent,
  },
  "photography-portfolio-website-essentials": {
    slug: "photography-portfolio-website-essentials",
    category: "Designer Portfolios",
    categoryColor: "bg-rose-100 text-rose-700",
    title: "Photography Portfolio Website: 10 Things Every Photographer Needs on Their Site",
    excerpt:
      "Your photography portfolio website should be doing more than looking pretty. Here are the 10 essential elements every photographer needs to attract clients and grow their business.",
    author: { name: "James Okonkwo", role: "UX Designer", avatar: "https://i.pravatar.cc/40?img=33" },
    date: "May 12, 2025",
    readTime: 15,
    heroImage:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=80&auto=format&fit=crop",
    Content: PhotographyPortfolioContent,
  },
};

// ── Next.js API ───────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) notFound();

  const { Content } = article;

  return (
    <main className="bg-canvas-bg min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="relative w-full mt-16 h-72 sm:h-96 md:h-[480px] overflow-hidden">
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-16 pb-8">
          <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold mb-3 ${article.categoryColor}`}>
            {article.category}
          </span>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-snug max-w-3xl">
            {article.title}
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
          <span className="text-ink line-clamp-1">{article.title}</span>
        </nav>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-black/10">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-ink">{article.author.name}</p>
              <p className="text-xs text-ink-soft">{article.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-ink-soft">
            <span>{article.date}</span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={12} r={10} /><path d="M12 6v6l4 2" />
              </svg>
              {article.readTime} min read
            </span>
          </div>
        </div>

        {/* ── Content ───────────────────────────────────────────── */}
        <article className="prose-article">
          <Content />
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
