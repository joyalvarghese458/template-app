const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const ROOT_DIR = process.cwd();
const APP_DIR = path.join(ROOT_DIR, "app");
const TEMPLATES_FILE = path.join(ROOT_DIR, "lib", "templates.ts");
const ROUTE_FILE_PATTERN = /^(page\.(?:js|jsx|ts|tsx|mdx)|route\.(?:js|ts))$/;

function loadTemplatesModule() {
  const source = fs.readFileSync(TEMPLATES_FILE, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: TEMPLATES_FILE,
  }).outputText;

  const module = { exports: {} };
  const sandbox = {
    exports: module.exports,
    module,
    require,
    console,
  };

  vm.runInNewContext(output, sandbox, { filename: TEMPLATES_FILE });
  return module.exports;
}

function collectRoutes(dir = APP_DIR, segments = [], routes = new Set()) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.startsWith("_") || entry.name.startsWith("@")) continue;

      const isRouteGroup =
        entry.name.startsWith("(") && entry.name.endsWith(")");
      const nextSegments = isRouteGroup ? segments : [...segments, entry.name];

      collectRoutes(entryPath, nextSegments, routes);
      continue;
    }

    if (!entry.isFile() || !ROUTE_FILE_PATTERN.test(entry.name)) continue;

    if (
      segments.some(
        (segment) => segment.startsWith("[") && segment.endsWith("]"),
      )
    ) {
      continue;
    }

    routes.add(segments.length ? `/${segments.join("/")}` : "/");
  }

  return routes;
}

function normalizeInternalHref(href) {
  if (typeof href !== "string") return null;
  if (/^[a-z][a-z\d+.-]*:/i.test(href)) return null;
  if (!href.startsWith("/")) return null;

  const [withoutHash] = href.split("#", 1);
  const [pathname] = withoutHash.split("?", 1);
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
}

function invalidTemplateEntries() {
  const { TEMPLATES, templateHref } = loadTemplatesModule();
  const routes = collectRoutes();

  return TEMPLATES.flatMap((template) => {
    const href = templateHref(template);
    const pathname = normalizeInternalHref(href);

    if (!pathname || routes.has(pathname)) return [];

    return [
      {
        id: template.id,
        title: template.title,
        href,
        reason: "Generated internal href does not match an app route.",
      },
    ];
  });
}

const invalidEntries = invalidTemplateEntries();

if (invalidEntries.length > 0) {
  console.error("Invalid template route entries:");
  for (const entry of invalidEntries) {
    console.error(
      `- ${entry.id} (${entry.title}): ${entry.href} - ${entry.reason}`,
    );
  }
  process.exit(1);
}

console.log("Template route validation passed.");
