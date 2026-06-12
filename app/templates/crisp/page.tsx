import type { Metadata } from "next";

import CrispTemplate from "./CrispTemplate";
import { crispTemplateConfig } from "./template.config";

export const metadata: Metadata = {
  title: crispTemplateConfig.title,
  description: crispTemplateConfig.description,
};

export default function CrispTemplatePage() {
  return <CrispTemplate />;
}
