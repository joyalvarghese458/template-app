"use client";

export default function BotanicalLandscape() {
  return (
    <svg
      viewBox="0 0 1200 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4e8c2" />
          <stop offset="35%" stopColor="#e8f0d4" />
          <stop offset="70%" stopColor="#eff2e8" />
          <stop offset="100%" stopColor="#d7e8b5" />
        </linearGradient>
        <linearGradient id="sunGlow" cx="50%" cy="30%" r="40%" fx="50%" fy="28%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#f5e8b0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#d4e8c2" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="sunHalo" cx="60%" cy="22%" r="35%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#f0e0a0" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#e8d890" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#d4e8c2" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hillFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a9e58" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#5a8040" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="hillMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5e8c40" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#3d6828" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="hillFore" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a7830" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2d5a1a" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8d898" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#a8c878" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#c5ccb6" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a9848" />
          <stop offset="100%" stopColor="#4a7830" />
        </linearGradient>
        <linearGradient id="fogGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fbfdf6" stopOpacity="0.9" />
          <stop offset="25%" stopColor="#fbfdf6" stopOpacity="0.1" />
          <stop offset="75%" stopColor="#fbfdf6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#fbfdf6" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbfdf6" stopOpacity="0" />
          <stop offset="100%" stopColor="#fbfdf6" stopOpacity="1" />
        </linearGradient>
        <filter id="blur1">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id="blur2">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="blur3">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="1200" height="560" fill="url(#skyGrad)" />

      {/* Sun halo */}
      <ellipse cx="720" cy="120" rx="260" ry="200" fill="url(#sunHalo)" />

      {/* Cloud wisps */}
      <ellipse cx="300" cy="80" rx="110" ry="22" fill="#fbfdf6" opacity="0.45" filter="url(#blur1)" />
      <ellipse cx="420" cy="70" rx="80" ry="16" fill="#fbfdf6" opacity="0.35" filter="url(#blur1)" />
      <ellipse cx="820" cy="95" rx="130" ry="18" fill="#fbfdf6" opacity="0.4" filter="url(#blur1)" />
      <ellipse cx="970" cy="75" rx="90" ry="14" fill="#fbfdf6" opacity="0.3" filter="url(#blur1)" />

      {/* Far hills — soft violet-green */}
      <path
        d="M0 360 Q180 240 360 270 Q540 300 720 240 Q900 180 1100 260 L1200 280 L1200 560 L0 560 Z"
        fill="#7a9e58"
        opacity="0.3"
        filter="url(#blur3)"
      />

      {/* Mid hills — richer green */}
      <path
        d="M0 400 Q150 310 300 330 Q500 360 650 300 Q800 240 1000 320 Q1100 360 1200 310 L1200 560 L0 560 Z"
        fill="url(#hillMid)"
        filter="url(#blur2)"
      />

      {/* Foreground hills — deep green */}
      <path
        d="M0 450 Q120 390 260 410 Q420 435 580 390 Q740 345 900 410 Q1050 465 1200 420 L1200 560 L0 560 Z"
        fill="url(#hillFore)"
        filter="url(#blur1)"
      />

      {/* Lake */}
      <ellipse cx="600" cy="488" rx="400" ry="52" fill="url(#waterGrad)" />
      {/* Water shimmer lines */}
      <path d="M230 482 Q370 468 500 476 Q630 484 760 474 Q890 464 980 480" stroke="#a8c878" strokeWidth="1.2" opacity="0.5" fill="none" />
      <path d="M280 490 Q400 480 530 486 Q660 492 790 480 Q920 468 1000 484" stroke="#b8d898" strokeWidth="0.8" opacity="0.35" fill="none" />
      <path d="M320 496 Q450 488 580 493 Q710 498 840 487" stroke="#c8e0a8" strokeWidth="0.6" opacity="0.25" fill="none" />

      {/* Ground plane */}
      <path
        d="M0 505 Q300 492 600 500 Q900 508 1200 495 L1200 560 L0 560 Z"
        fill="url(#groundGrad)"
        opacity="0.55"
      />

      {/* Left bonsai tree — full color */}
      <g>
        {/* Trunk */}
        <path d="M118 560 C116 525 112 495 118 472 C121 460 114 445 117 432 C120 419 114 402 119 388" stroke="#31200b" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Main branches */}
        <path d="M119 450 C108 438 90 432 74 420 C62 412 48 408 40 400" stroke="#31200b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M117 468 C131 454 150 447 165 439 C178 433 194 430 204 422" stroke="#31200b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M119 420 C110 406 102 394 94 380 C88 368 82 355 78 344" stroke="#31200b" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M119 408 C129 392 140 382 154 370 C165 360 176 350 186 340" stroke="#31200b" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M74 420 C64 410 55 402 46 394" stroke="#31200b" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M92 428 C84 418 77 408 70 399" stroke="#31200b" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M165 439 C173 428 181 420 189 411" stroke="#31200b" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M148 432 C155 420 162 411 169 401" stroke="#31200b" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        {/* Foliage — rich greens */}
        <ellipse cx="62" cy="394" rx="26" ry="17" fill="#4a7830" opacity="0.85" />
        <ellipse cx="44" cy="384" rx="18" ry="12" fill="#3d6828" opacity="0.8" />
        <ellipse cx="80" cy="374" rx="20" ry="14" fill="#5a8840" opacity="0.75" />
        <ellipse cx="194" cy="412" rx="24" ry="15" fill="#4a7830" opacity="0.85" />
        <ellipse cx="213" cy="400" rx="18" ry="11" fill="#3d6828" opacity="0.8" />
        <ellipse cx="176" cy="394" rx="20" ry="12" fill="#5a8840" opacity="0.75" />
        <ellipse cx="80" cy="340" rx="18" ry="12" fill="#5a8840" opacity="0.7" />
        <ellipse cx="98" cy="328" rx="16" ry="10" fill="#6a9848" opacity="0.65" />
        <ellipse cx="184" cy="332" rx="20" ry="13" fill="#4a7830" opacity="0.7" />
        <ellipse cx="119" cy="390" rx="28" ry="18" fill="#6a9848" opacity="0.5" />
        {/* Highlight on foliage */}
        <ellipse cx="64" cy="390" rx="12" ry="7" fill="#8ab860" opacity="0.4" />
        <ellipse cx="196" cy="408" rx="10" ry="6" fill="#8ab860" opacity="0.35" />
      </g>

      {/* Right pine cluster */}
      <g>
        <path d="M1062 560 L1062 330" stroke="#31200b" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M1062 342 L1026 404 L1098 404 Z" fill="#203b14" opacity="0.75" />
        <path d="M1062 364 L1020 430 L1104 430 Z" fill="#2a4e1a" opacity="0.68" />
        <path d="M1062 388 L1012 458 L1112 458 Z" fill="#203b14" opacity="0.6" />
        <path d="M1062 414 L1006 475 L1118 475 Z" fill="#2a4e1a" opacity="0.52" />
        {/* Second pine behind */}
        <path d="M1100 560 L1100 370" stroke="#31200b" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M1100 382 L1072 430 L1128 430 Z" fill="#203b14" opacity="0.45" />
        <path d="M1100 406 L1066 455 L1134 455 Z" fill="#203b14" opacity="0.38" />
      </g>

      {/* Mid-ground tree cluster — center-left */}
      <g opacity="0.85">
        <path d="M378 560 L378 462 C376 446 370 434 366 422" stroke="#31200b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <ellipse cx="364" cy="413" rx="20" ry="14" fill="#4a7830" opacity="0.8" />
        <ellipse cx="380" cy="408" rx="17" ry="12" fill="#5a8840" opacity="0.72" />
        <ellipse cx="366" cy="400" rx="14" ry="9" fill="#3d6828" opacity="0.65" />

        <path d="M420 560 L420 470 C418 456 413 446 409 434" stroke="#31200b" strokeWidth="2" strokeLinecap="round" fill="none" />
        <ellipse cx="407" cy="425" rx="16" ry="11" fill="#5a8840" opacity="0.75" />
        <ellipse cx="421" cy="420" rx="13" ry="9" fill="#4a7830" opacity="0.68" />

        <path d="M350 560 L350 475" stroke="#31200b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <ellipse cx="350" cy="468" rx="12" ry="8" fill="#3d6828" opacity="0.6" />
      </g>

      {/* Right-side shrubs */}
      <g opacity="0.7">
        <ellipse cx="840" cy="500" rx="28" ry="14" fill="#4a7830" />
        <ellipse cx="870" cy="496" rx="20" ry="11" fill="#5a8840" />
        <ellipse cx="820" cy="502" rx="18" ry="10" fill="#3d6828" />
        <ellipse cx="910" cy="503" rx="22" ry="12" fill="#4a7830" />
        <ellipse cx="935" cy="499" rx="16" ry="9" fill="#5a8840" />
      </g>

      {/* Solitary bench — warm wood tones */}
      <g opacity="0.7">
        <rect x="562" y="499" width="76" height="5" rx="1.5" fill="#4a3212" />
        <rect x="565" y="504" width="5" height="14" rx="1" fill="#31200b" />
        <rect x="628" y="504" width="5" height="14" rx="1" fill="#31200b" />
        <rect x="558" y="495" width="84" height="5" rx="1.5" fill="#31200b" opacity="0.6" />
      </g>

      {/* Distant farmhouse / chapel */}
      <g opacity="0.35" filter="url(#blur1)">
        <rect x="808" y="416" width="44" height="52" fill="#203b14" />
        <polygon points="808,416 830,386 852,416" fill="#2a5020" />
        <rect x="826" y="386" width="8" height="26" fill="#203b14" />
        <rect x="815" y="432" width="28" height="18" fill="#d7e8b5" opacity="0.6" />
      </g>

      {/* Scattered wildflowers — tiny color accents */}
      {[
        { cx: 460, cy: 512 }, { cx: 490, cy: 508 }, { cx: 520, cy: 514 },
        { cx: 680, cy: 510 }, { cx: 710, cy: 506 }, { cx: 735, cy: 512 },
        { cx: 250, cy: 518 }, { cx: 280, cy: 514 }, { cx: 310, cy: 520 },
        { cx: 930, cy: 516 }, { cx: 960, cy: 512 },
      ].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="3" fill={i % 3 === 0 ? "#d7e8b5" : i % 3 === 1 ? "#f5e8b0" : "#c5e090"} opacity="0.75" />
      ))}

      {/* Atmospheric side fog */}
      <rect width="1200" height="560" fill="url(#fogGrad)" />

      {/* Bottom fade to page bg */}
      <rect y="420" width="1200" height="140" fill="url(#bottomFade)" />

      {/* Horizon line */}
      <line x1="0" y1="462" x2="1200" y2="462" stroke="#7a9e58" strokeWidth="0.6" opacity="0.35" />

      {/* Foreground grass blades */}
      {[0, 48, 96, 144, 192, 240, 288, 336, 384, 432, 480, 528, 576, 624, 672, 720, 768, 816, 864, 912, 960, 1008, 1056, 1104, 1152].map(
        (x, i) => (
          <g key={i}>
            <path
              d={`M${x + 8} 548 Q${x + 12} 536 ${x + 16} 540 Q${x + 20} 532 ${x + 24} 537`}
              stroke="#4a7830"
              strokeWidth="1"
              fill="none"
              opacity="0.45"
            />
            <path
              d={`M${x + 28} 552 Q${x + 32} 542 ${x + 35} 545`}
              stroke="#5a8840"
              strokeWidth="0.8"
              fill="none"
              opacity="0.35"
            />
          </g>
        )
      )}
    </svg>
  );
}
