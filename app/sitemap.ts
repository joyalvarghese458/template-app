import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

const BASE_URL = "https://myportfoliowebsite.com";
const APP_DIR = path.join(process.cwd(), "app");
const BLOG_ROUTE_FILE = path.join(
  APP_DIR,
  "(site)",
  "blog",
  "[slug]",
  "page.tsx",
);

type SitemapEntry = MetadataRoute.Sitemap[number];
type ChangeFrequency = NonNullable<SitemapEntry["changeFrequency"]>;

const STATIC_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-07-10",
  "/contact": "2026-06-18",
  "/pricing": "2026-07-10",
  "/privacy-policy": "2026-06-11",
  "/terms-of-service": "2026-06-11",
  "/blog": "2026-07-02",
  "/templates": "2026-07-10",
};

const BLOG_POSTS = [
  {
    slug: "10-elements-every-professional-portfolio-needs",
    lastModified: "2025-05-20",
  },
  {
    slug: "developer-portfolio-website-guide",
    lastModified: "2025-05-15",
  },
  {
    slug: "photography-portfolio-website-essentials",
    lastModified: "2025-05-12",
  },
  {
    slug: "freelancer-portfolio-website-uae",
    lastModified: "2025-05-08",
  },
  {
    slug: "founder-portfolio-website-personal-brand",
    lastModified: "2025-05-05",
  },
  {
    slug: "agency-website-vs-portfolio-website",
    lastModified: "2025-05-01",
  },
] as const;

const EXCLUDED_PREFIXES = ["/api"] as const;
const EXCLUDED_ROUTES = new Set([
  "/brand-lab",
  "/templates/coming-soon",
  "/templates/dr1",
]);

function walkPageFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const pageFiles: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.startsWith("_")) continue;
      pageFiles.push(...walkPageFiles(entryPath));
      continue;
    }

    if (entry.isFile() && entry.name === "page.tsx") {
      pageFiles.push(entryPath);
    }
  }

  return pageFiles;
}

function routeFromPageFile(filePath: string): string | null {
  const relativePath = path.relative(APP_DIR, filePath);
  const segments = relativePath.split(path.sep).slice(0, -1);

  if (
    segments.some(
      (segment) => segment.startsWith("[") && segment.endsWith("]"),
    )
  ) {
    return null;
  }

  const routeSegments = segments.filter(
    (segment) => !(segment.startsWith("(") && segment.endsWith(")")),
  );

  return routeSegments.length ? `/${routeSegments.join("/")}` : "/";
}

function hasNoIndexRobots(filePath: string): boolean {
  const source = fs.readFileSync(filePath, "utf8");

  return /robots\s*:\s*\{[\s\S]*?index\s*:\s*false/.test(source);
}

function isExcludedRoute(route: string): boolean {
  return (
    EXCLUDED_ROUTES.has(route) ||
    EXCLUDED_PREFIXES.some(
      (prefix) => route === prefix || route.startsWith(`${prefix}/`),
    )
  );
}

function lastModifiedForRoute(route: string, filePath: string): string {
  const explicitDate = STATIC_LAST_MODIFIED[route];
  if (explicitDate) return explicitDate;

  return fs.statSync(filePath).mtime.toISOString().slice(0, 10);
}

function routePriority(route: string): number {
  if (route === "/") return 1;
  if (route === "/templates") return 0.9;
  if (route.startsWith("/templates/")) {
    return route.split("/").length > 3 ? 0.65 : 0.8;
  }
  if (route === "/blog") return 0.8;
  if (route.startsWith("/blog/")) return 0.7;
  if (route === "/contact" || route === "/pricing") return 0.7;
  return 0.3;
}

function changeFrequencyForRoute(route: string): ChangeFrequency {
  if (route === "/" || route === "/templates" || route === "/blog") {
    return "weekly";
  }
  if (route.startsWith("/templates/") || route.startsWith("/blog/")) return "monthly";
  if (route === "/privacy-policy" || route === "/terms-of-service") return "yearly";
  return "monthly";
}

function toEntry(route: string, lastModified: string): SitemapEntry {
  return {
    url: `${BASE_URL}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: changeFrequencyForRoute(route),
    priority: routePriority(route),
  };
}

function staticPageEntries(): SitemapEntry[] {
  return walkPageFiles(APP_DIR).flatMap((filePath) => {
    const route = routeFromPageFile(filePath);

    if (!route || isExcludedRoute(route) || hasNoIndexRobots(filePath)) {
      return [];
    }

    return [toEntry(route, lastModifiedForRoute(route, filePath))];
  });
}

function blogPostEntries(): SitemapEntry[] {
  if (!fs.existsSync(BLOG_ROUTE_FILE)) {
    throw new Error(
      "Blog sitemap entries cannot be validated without the blog [slug] route.",
    );
  }

  return BLOG_POSTS.map(({ slug, lastModified }) =>
    toEntry(`/blog/${slug}`, lastModified),
  );
}

function dedupeByUrl(entries: SitemapEntry[]): SitemapEntry[] {
  return Array.from(
    new Map(entries.map((entry) => [entry.url, entry] as const)).values(),
  ).sort((a, b) => a.url.localeCompare(b.url));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return dedupeByUrl([...staticPageEntries(), ...blogPostEntries()]);
}
