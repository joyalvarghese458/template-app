import type { Metadata } from "next";
import { OWNER } from "./_data/portfolio";
import SmoothScroll from "./_components/SmoothScroll";
import SkipLink from "./_components/SkipLink";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import LeadershipStrip from "./_components/LeadershipStrip";
import About from "./_components/About";
import Principles from "./_components/Principles";
import Mandates from "./_components/Mandates";
import Impact from "./_components/Impact";
import Formation from "./_components/Formation";
import Gallery from "./_components/Gallery";
import Experience from "./_components/Experience";
import RankLadder from "./_components/RankLadder";
import Credentials from "./_components/Credentials";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import theme from "./theme.module.css";

export const metadata: Metadata = {
  title: `${OWNER.name} — Chief Executive Officer & Board Director`,
  description:
    "Chief executive leadership portfolio — enterprise turnarounds, capital allocation, and board governance with a measurable track record.",
  openGraph: {
    title: `${OWNER.name} — Chief Executive Officer & Board Director`,
    description:
      "Chief executive leadership portfolio — enterprise turnarounds, capital allocation, and board governance with a measurable track record.",
    type: "website",
  },
};

export default function EchelonPage() {
  return (
    <SmoothScroll>
      <div className={theme.root}>
        <SkipLink />
        <Nav />

        <main id="main-content">
          <Hero />
          <LeadershipStrip />
          <About />
          <Principles />
          <Mandates />
          <Impact />
          <Formation />
          <Gallery />
          <Experience />
          <RankLadder />
          <Credentials />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
