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
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/minimalist");

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
