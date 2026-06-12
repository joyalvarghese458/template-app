function svgDataUri(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const crispPortrait = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 760">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f5f7fb" />
        <stop offset="100%" stop-color="#dbe4f0" />
      </linearGradient>
      <linearGradient id="coat" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#314158" />
        <stop offset="100%" stop-color="#182433" />
      </linearGradient>
    </defs>
    <rect width="640" height="760" rx="38" fill="url(#bg)" />
    <ellipse cx="320" cy="120" rx="180" ry="96" fill="#ffffff" opacity="0.65" />
    <ellipse cx="320" cy="706" rx="156" ry="24" fill="#94a3b8" opacity="0.3" />
    <path d="M178 670c22-146 76-228 142-228 70 0 126 82 144 228" fill="url(#coat)" />
    <path d="M272 446h96l18 176H254z" fill="#ffffff" />
    <path d="M274 428c8 30 25 52 46 52s38-22 46-52l-9-44h-74z" fill="#d2a177" />
    <ellipse cx="320" cy="292" rx="88" ry="110" fill="#d9ab83" />
    <path d="M250 286c0-74 48-128 118-128 48 0 92 28 92 116 0 34-6 64-16 90-16-36-30-62-48-72-20 18-76 16-120-16-14 18-22 48-38 88-10-20-18-50-18-78z" fill="#243244" />
    <path d="M285 334c14 12 76 12 90 0" stroke="#a16f46" stroke-width="8" stroke-linecap="round" opacity="0.45" />
    <circle cx="288" cy="292" r="8" fill="#283548" />
    <circle cx="352" cy="292" r="8" fill="#283548" />
  </svg>
`);

export function crispProjectThumbnail(
  accent: string,
  title: string,
  subtitle: string,
  chips: string[],
) {
  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 600">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8fafc" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="960" height="600" rx="28" fill="url(#bg)" />
      <rect x="46" y="46" width="868" height="508" rx="24" fill="rgba(255,255,255,0.72)" stroke="rgba(15,23,42,0.08)" />
      <rect x="88" y="88" width="784" height="24" rx="12" fill="rgba(15,23,42,0.08)" />
      <rect x="88" y="148" width="310" height="26" rx="13" fill="#0f172a" opacity="0.12" />
      <text x="88" y="248" fill="#0f172a" font-size="52" font-family="Arial, sans-serif" font-weight="700">${title}</text>
      <text x="88" y="288" fill="#334155" font-size="24" font-family="Arial, sans-serif">${subtitle}</text>
      <rect x="88" y="336" width="320" height="118" rx="20" fill="rgba(255,255,255,0.82)" stroke="rgba(15,23,42,0.08)" />
      <rect x="466" y="178" width="326" height="212" rx="28" fill="rgba(255,255,255,0.82)" stroke="rgba(15,23,42,0.08)" />
      <rect x="500" y="214" width="210" height="20" rx="10" fill="rgba(15,23,42,0.12)" />
      <rect x="500" y="254" width="244" height="16" rx="8" fill="rgba(51,65,85,0.12)" />
      <rect x="500" y="292" width="188" height="16" rx="8" fill="rgba(51,65,85,0.12)" />
      ${chips
        .map(
          (chip, index) => `
            <rect x="${88 + index * 154}" y="492" width="132" height="36" rx="18" fill="rgba(255,255,255,0.88)" stroke="rgba(15,23,42,0.08)" />
            <text x="${112 + index * 154}" y="515" fill="#334155" font-size="18" font-family="Arial, sans-serif">${chip}</text>
          `,
        )
        .join("")}
    </svg>
  `);
}
