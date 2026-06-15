import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";
import { TEMPLATES } from "../lib/templates";

const BASE_URL = "http://localhost:8086";
const OUTPUT_DIR = path.join(process.cwd(), "public", "previews");

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const sluggedTemplates = TEMPLATES.filter((t) => t.slug);

  console.log(`Capturing ${sluggedTemplates.length} template previews…`);

  const browser = await puppeteer.launch({ headless: true });

  for (const template of sluggedTemplates) {
    const slug = template.slug!;
    const url = `${BASE_URL}/templates/${slug}`;
    const outputPath = path.join(OUTPUT_DIR, `${slug}.jpg`);

    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
      await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
      await new Promise((r) => setTimeout(r, 2500));
      await page.screenshot({ path: outputPath, type: "jpeg", quality: 90 });
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
