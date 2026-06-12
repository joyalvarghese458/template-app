function svgDataUri(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const pulsePortrait = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 760">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f8fafc" />
        <stop offset="100%" stop-color="#dce5f2" />
      </linearGradient>
      <linearGradient id="coat" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1e293b" />
        <stop offset="100%" stop-color="#334155" />
      </linearGradient>
    </defs>
    <rect width="640" height="760" rx="36" fill="url(#bg)" />
    <ellipse cx="320" cy="114" rx="180" ry="94" fill="#ffffff" opacity="0.72" />
    <ellipse cx="320" cy="710" rx="150" ry="22" fill="#94a3b8" opacity="0.28" />
    <path d="M176 678c26-152 74-236 144-236 70 0 126 84 144 236" fill="url(#coat)" />
    <path d="M270 438h102l18 180H252z" fill="#f8fafc" />
    <path d="M274 420c8 34 26 54 48 54s40-20 48-54l-10-42h-76z" fill="#d2a47c" />
    <ellipse cx="320" cy="292" rx="90" ry="112" fill="#dbb08a" />
    <path d="M246 294c0-78 54-136 126-136 54 0 92 36 92 122 0 30-6 62-18 92-12-24-24-54-42-72-26 20-80 18-124-14-16 20-28 52-42 88-12-22-18-52-18-80z" fill="#223047" />
    <circle cx="286" cy="292" r="8" fill="#1f2937" />
    <circle cx="354" cy="292" r="8" fill="#1f2937" />
    <path d="M288 336c16 12 48 12 64 0" stroke="#9a6a47" stroke-width="8" stroke-linecap="round" opacity="0.45" />
  </svg>
`);

export function pulseProjectPreview(
  accent: string,
  title: string,
  subtitle: string,
  chips: string[],
) {
  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 620">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8fafc" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="960" height="620" rx="30" fill="url(#bg)" />
      <rect x="42" y="42" width="876" height="536" rx="26" fill="rgba(255,255,255,0.82)" stroke="rgba(15,23,42,0.08)" />
      <rect x="80" y="80" width="800" height="18" rx="9" fill="rgba(15,23,42,0.08)" />
      <text x="80" y="210" fill="#0f172a" font-size="56" font-family="Arial, sans-serif" font-weight="700">${title}</text>
      <text x="80" y="254" fill="#334155" font-size="24" font-family="Arial, sans-serif">${subtitle}</text>
      <rect x="80" y="302" width="314" height="132" rx="22" fill="rgba(255,255,255,0.92)" stroke="rgba(15,23,42,0.08)" />
      <rect x="474" y="160" width="320" height="232" rx="30" fill="rgba(255,255,255,0.9)" stroke="rgba(15,23,42,0.08)" />
      <rect x="508" y="200" width="220" height="18" rx="9" fill="rgba(15,23,42,0.12)" />
      <rect x="508" y="236" width="182" height="14" rx="7" fill="rgba(51,65,85,0.12)" />
      <rect x="508" y="270" width="214" height="14" rx="7" fill="rgba(51,65,85,0.12)" />
      ${chips
        .map(
          (chip, index) => `
            <rect x="${80 + index * 152}" y="500" width="128" height="34" rx="17" fill="rgba(255,255,255,0.95)" stroke="rgba(15,23,42,0.08)" />
            <text x="${102 + index * 152}" y="522" fill="#334155" font-size="17" font-family="Arial, sans-serif">${chip}</text>
          `,
        )
        .join("")}
    </svg>
  `);
}
