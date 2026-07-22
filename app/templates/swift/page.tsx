import type { Metadata } from "next";
import SwiftResume from "./swift-resume";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/swift");

export default function SwiftTemplatePage() {
  return <SwiftResume />;
}
