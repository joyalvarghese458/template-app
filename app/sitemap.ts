import type { MetadataRoute } from "next";
import { TEMPLATES, isComingSoonTemplate } from "@/lib/templates";

const BASE_URL = "https://www.myportfoliowebsite.com";

const STATIC_ROUTES = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/templates", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/pricing", changeFrequency: "monthly" as const, priority: 0.7 },
  {
    path: "/privacy-policy",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
  {
    path: "/terms-of-service",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
];

const LIVE_BLOG_SLUGS = [
  "10-elements-every-professional-portfolio-needs",
  "developer-portfolio-website-guide",
  "agency-website-vs-portfolio-website",
  "founder-portfolio-website-personal-brand",
  "freelancer-portfolio-website-uae",
  "photography-portfolio-website-essentials",
];

const LIVE_TEMPLATE_SLUGS = Array.from(
  new Set(
    TEMPLATES.filter(
      (template) =>
        template.slug &&
        !template.externalUrl &&
        !isComingSoonTemplate(template),
    ).map((template) => template.slug!),
  ),
).sort();

function toEntry(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = STATIC_ROUTES.map((route) =>
    toEntry(route.path, route.changeFrequency, route.priority),
  );

  const templateRoutes = LIVE_TEMPLATE_SLUGS.map((slug) =>
    toEntry(`/templates/${slug}`, "monthly", 0.8),
  );

  const blogRoutes = LIVE_BLOG_SLUGS.map((slug) =>
    toEntry(`/blog/${slug}`, "monthly", 0.7),
  );

  return [...staticRoutes, ...templateRoutes, ...blogRoutes];
}
