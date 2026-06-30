import type { Metadata } from "next";
import MotionShell from "./MotionShell";
import TemplateShell from "./TemplateShell";

export const metadata: Metadata = {
  title: "Minimalist - Creator Portfolio Template",
  description:
    "A five-page minimalist creator portfolio template with richer content, smooth scrolling, responsive layouts, and a refined editorial feel.",
  alternates: {
    canonical: "/templates/minimalist",
  },
  openGraph: {
    title: "Minimalist - Creator Portfolio Template",
    description:
      "Five pages of refined creator portfolio content with a minimalist visual language and strong mobile responsiveness.",
    url: "https://www.myportfoliowebsite.com/templates/minimalist",
  },
};

export default function MinimalistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionShell>
      <TemplateShell>{children}</TemplateShell>
    </MotionShell>
  );
}
