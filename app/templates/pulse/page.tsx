import type { Metadata } from "next";

import PulseTemplate from "./PulseTemplate";
import { pulseTemplateConfig } from "./template.config";

export const metadata: Metadata = {
  title: pulseTemplateConfig.title,
  description: pulseTemplateConfig.description,
};

export default function PulseTemplatePage() {
  return <PulseTemplate />;
}
