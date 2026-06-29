import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";
import { TEMPLATES } from "../lib/templates";

const BASE_URL = "http://localhost:8086";
const OUTPUT_DIR = path.join(process.cwd(), "public", "previews");
const SCROLL_DURATION_MS = 6000;
const HERO_READY_TIMEOUT_MS = 15000;

// Wait for above-the-fold interactive heroes like Ladder's Spline robot.
async function waitForHeroReady(page: puppeteer.Page) {
  try {
    await page.waitForSelector('[data-spline-scene="true"][data-spline-ready="true"]', {
      timeout: HERO_READY_TIMEOUT_MS,
    });
    await new Promise((r) => setTimeout(r, 1200));
  } catch {
    // Most templates do not expose a hero-ready signal, so fall back quietly.
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function scrollPage(page: any, durationMs: number) {
  await page.evaluate(async (duration: number) => {
    const totalScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll <= 0) return;

    const steps = Math.floor(duration / 33); // ~30fps
    const delay = duration / steps;

    for (let i = 0; i <= steps; i++) {
      window.scrollTo({ top: (i / steps) * totalScroll, behavior: "instant" });
      await new Promise((r) => setTimeout(r, delay));
    }
  }, durationMs);
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const sluggedTemplates = TEMPLATES.filter((t) => t.slug);
  console.log(`Recording ${sluggedTemplates.length} template previews…`);

  const browser = await puppeteer.launch({ headless: true });

  for (const template of sluggedTemplates) {
    const slug = template.slug!;
    const url = `${BASE_URL}/templates/${slug}`;
    const jpgPath = path.join(OUTPUT_DIR, `${slug}.jpg`);
    const webmPath = path.join(OUTPUT_DIR, `${slug}.webm`);

    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
      await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
      await waitForHeroReady(page);
      // Wait for fonts and entrance animations
      await new Promise((r) => setTimeout(r, 2000));

      // Poster JPEG — taken at the very top before any scrolling
      await page.screenshot({ path: jpgPath, type: "jpeg", quality: 90 });

      // Scroll back to top just in case, then record the scroll
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise((r) => setTimeout(r, 200));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const recorder = await (page as any).screencast({ path: webmPath });
      await scrollPage(page, SCROLL_DURATION_MS);
      await new Promise((r) => setTimeout(r, 400)); // brief pause at bottom
      await recorder.stop();

      await page.close();
      console.log(`✓ ${slug}`);
    } catch (err) {
      console.error(
        `✗ ${slug}: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  }

  await browser.close();
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
