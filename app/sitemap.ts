import type { MetadataRoute } from "next";

const BASE_URL = "https://www.myportfoliowebsite.com";

const LIVE_TEMPLATE_SLUGS = [
  "swift",
  "atelier",
  "pure",
  "indie",
  "graphic-designer",
  "onefolio",
  "minimalist",
  "solo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const templateRoutes: MetadataRoute.Sitemap = LIVE_TEMPLATE_SLUGS.map(
    (slug) => ({
      url: `${BASE_URL}/templates/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/templates`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...templateRoutes,
  ];
}
