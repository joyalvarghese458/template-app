function svgDataUri(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const crispPortrait = "/ava.jpg";

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
