import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import ToolStrip from "./_components/ToolStrip";
import About from "./_components/About";
import Funnel from "./_components/Funnel";
import Campaigns from "./_components/Campaigns";
import Carousel from "./_components/Carousel";
import Gallery from "./_components/Gallery";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import Certifications from "./_components/Certifications";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Digital Marketing Specialist`,
  description:
    "Digital marketing portfolio — paid social, SEO, email lifecycle, and content campaigns with measurable results.",
  openGraph: {
    title: `${OWNER.name} — Digital Marketing Specialist`,
    description:
      "Digital marketing portfolio — paid social, SEO, email lifecycle, and content campaigns with measurable results.",
    type: "website",
  },
};

export default function SurgePage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <ToolStrip />
          <About />
          <Funnel />
          <Campaigns />
          <Carousel />
          <Gallery />
          <Experience />
          <Skills />
          <Certifications />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
