import type { Metadata } from "next";
import {
  CapabilityCloud,
  ClosingBanner,
  StoryBlocks,
  TestimonialBand,
  TimelineSection,
} from "../blocks";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/minimalist/about");

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
