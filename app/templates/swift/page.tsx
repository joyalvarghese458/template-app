import type { Metadata } from "next";
import SwiftResume from "./swift-resume";

export const metadata: Metadata = {
  title: "Swift Template",
  description:
    "Swift is a premium single-page digital resume template with glassmorphism cards, recruiter-friendly hierarchy, and polished interactions.",
};

export default function SwiftTemplatePage() {
  return <SwiftResume />;
}
