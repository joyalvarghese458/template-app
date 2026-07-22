import type { Metadata } from "next";

import CrispTemplate from "./CrispTemplate";
import { crispTemplateConfig } from "./template.config";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/crisp");

export default function CrispTemplatePage() {
  return <CrispTemplate />;
}
