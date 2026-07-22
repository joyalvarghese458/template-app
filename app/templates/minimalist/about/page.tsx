import type { Metadata } from "next";
import {
  CapabilityCloud,
  ClosingBanner,
  StoryBlocks,
  TestimonialBand,
  TimelineSection,
} from "../blocks";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://myportfoliowebsite.com/templates/minimalist/about",
  },
  title: "Minimalist - About",
};

export default function MinimalistAboutPage() {
  return (
    <>
      <StoryBlocks />
      <TimelineSection />
      <CapabilityCloud />
      <TestimonialBand />
      <ClosingBanner />
    </>
  );
}
