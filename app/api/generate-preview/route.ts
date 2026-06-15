import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";

export const runtime = "nodejs";

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

  const outputPath = path.join(outputDir, `${slug}.jpg`);

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2500));
    await page.screenshot({ path: outputPath, type: "jpeg", quality: 90 });
    await page.close();
    await browser.close();

    return NextResponse.json({ success: true, path: `/previews/${slug}.jpg` });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Screenshot failed" },
      { status: 500 }
    );
  }
}
