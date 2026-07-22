import type { Metadata } from "next";
import {
  CaseStudyStrip,
  ClosingBanner,
  Hero,
  HighlightGrid,
  NotesSection,
  ProcessSection,
  TestimonialBand,
} from "./blocks";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://myportfoliowebsite.com/templates/minimalist",
  },
  title: "Minimalist - Overview",
};

export default function MinimalistOverviewPage() {
  return (
    <>
      <Hero />
      <HighlightGrid />
      <CaseStudyStrip />
      <ProcessSection />
      <TestimonialBand />
      <NotesSection />
      <ClosingBanner />
    </>
  );
}
