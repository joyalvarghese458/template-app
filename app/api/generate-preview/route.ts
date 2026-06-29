import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";

export const runtime = "nodejs";

const SCROLL_DURATION_MS = 6000;
const HERO_READY_TIMEOUT_MS = 15000;

async function waitForHeroReady(page: puppeteer.Page) {
  try {
    await page.waitForSelector('[data-spline-scene="true"][data-spline-ready="true"]', {
      timeout: HERO_READY_TIMEOUT_MS,
    });
    await new Promise((r) => setTimeout(r, 1200));
  } catch {
    // Ignore when a template does not have an interactive hero readiness marker.
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const slug: string | undefined = body?.slug;
  const url: string | undefined = body?.url;

  if (!slug || !url) {
    return NextResponse.json(
      { error: "slug and url are required" },
      { status: 400 }
    );
  }

  const outputDir = path.join(process.cwd(), "public", "previews");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const jpgPath = path.join(outputDir, `${slug}.jpg`);
  const webmPath = path.join(outputDir, `${slug}.webm`);

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
    await waitForHeroReady(page);
    await new Promise((r) => setTimeout(r, 2000));

    // Poster JPEG at the top
    await page.screenshot({ path: jpgPath, type: "jpeg", quality: 90 });

    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 200));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recorder = await (page as any).screencast({ path: webmPath });

    await page.evaluate(async (duration: number) => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const steps = Math.floor(duration / 33);
      const delay = duration / steps;
      for (let i = 0; i <= steps; i++) {
        window.scrollTo({ top: (i / steps) * totalScroll, behavior: "instant" });
        await new Promise((r) => setTimeout(r, delay));
      }
    }, SCROLL_DURATION_MS);

    await new Promise((r) => setTimeout(r, 400));
    await recorder.stop();
    await page.close();
    await browser.close();

    return NextResponse.json({
      success: true,
      jpg: `/previews/${slug}.jpg`,
      webm: `/previews/${slug}.webm`,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Recording failed" },
      { status: 500 }
    );
  }
}
