import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import MarketStrip from "./_components/MarketStrip";
import About from "./_components/About";
import Results from "./_components/Results";
import Experience from "./_components/Experience";
import Services from "./_components/Services";
import Certifications from "./_components/Certifications";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Career Coach & Job Search Strategist`,
  description:
    "Career coach helping mid-career professionals land their next role through resume strategy, interview prep, and salary negotiation.",
  openGraph: {
    title: `${OWNER.name} — Career Coach & Job Search Strategist`,
    description:
      "Career coach helping mid-career professionals land their next role through resume strategy, interview prep, and salary negotiation.",
    type: "website",
  },
};

export default function AscendPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <MarketStrip />
          <About />
          <Results />
          <Experience />
          <Services />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
