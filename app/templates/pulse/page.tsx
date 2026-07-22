import type { Metadata } from "next";

import PulseTemplate from "./PulseTemplate";
import { pulseTemplateConfig } from "./template.config";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/pulse");

export default function PulseTemplatePage() {
  return <PulseTemplate />;
}
