type IllustrationProps = {
  className?: string;
};

export function HeroIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 640 760"
      role="img"
      aria-label="Illustrated portrait of a doctor in a clinic"
      className={className}
    >
      <defs>
        <linearGradient id="p2-bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ddf6f1" />
          <stop offset="100%" stopColor="#8bd8cb" />
        </linearGradient>
        <linearGradient id="p2-coat" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d8e9ee" />
        </linearGradient>
      </defs>
      <rect width="640" height="760" rx="40" fill="url(#p2-bg)" />
      <circle cx="470" cy="132" r="70" fill="#f8fffd" opacity="0.8" />
      <circle cx="120" cy="164" r="52" fill="#ffffff" opacity="0.55" />
      <rect x="88" y="94" width="174" height="88" rx="24" fill="#f8fffd" opacity="0.8" />
      <rect x="104" y="116" width="96" height="14" rx="7" fill="#6dc7b7" />
      <rect x="104" y="142" width="130" height="10" rx="5" fill="#b5e8dd" />
      <rect x="356" y="510" width="182" height="132" rx="28" fill="#f8fffd" opacity="0.95" />
      <rect x="388" y="548" width="116" height="18" rx="9" fill="#114b5f" opacity="0.85" />
      <rect x="388" y="582" width="84" height="14" rx="7" fill="#86d8cb" />
      <rect x="388" y="614" width="98" height="14" rx="7" fill="#d3efea" />
      <ellipse cx="318" cy="738" rx="160" ry="18" fill="#0f172a" opacity="0.12" />
      <path
        d="M248 284c0-82 58-136 124-136s124 54 124 136v72c0 48-22 92-58 120l-26 22h-90l-28-24c-34-29-54-71-54-116z"
        fill="url(#p2-coat)"
      />
      <path
        d="M275 278c0-74 47-122 97-122 54 0 97 50 97 120v80c0 41-18 79-49 104l-18 14h-61l-18-15c-31-26-48-63-48-103z"
        fill="#144e68"
      />
      <path d="M310 484h125l42 170H206z" fill="url(#p2-coat)" />
      <path d="M282 536h185l22 88H252z" fill="#edf6f8" />
      <circle cx="371" cy="273" r="78" fill="#e3a97e" />
      <path
        d="M298 261c11-55 46-92 94-92 45 0 79 30 89 86-34-7-60-20-81-40-20 25-54 43-102 46z"
        fill="#17324a"
      />
      <path d="M334 290c10 15 22 22 37 22 16 0 29-7 39-22" fill="none" stroke="#8f5f42" strokeWidth="6" strokeLinecap="round" />
      <circle cx="342" cy="267" r="6" fill="#17324a" />
      <circle cx="398" cy="267" r="6" fill="#17324a" />
      <path d="M366 292h10" stroke="#8f5f42" strokeWidth="5" strokeLinecap="round" />
      <path d="M351 349h39v56h-39z" fill="#db9d72" />
      <path d="M323 405h96l-48 73z" fill="#22a699" />
      <path d="M271 508l-31 86h64l20-81z" fill="#eef7f8" />
      <path d="M472 508l35 86h-64l-19-81z" fill="#eef7f8" />
      <circle cx="474" cy="222" r="18" fill="#ffffff" />
      <path d="M474 210v24M462 222h24" stroke="#1d9b8b" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function ClinicIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 640 460"
      role="img"
      aria-label="Modern clinic waiting room illustration"
      className={className}
    >
      <defs>
        <linearGradient id="p2-room" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#f4fbfa" />
          <stop offset="100%" stopColor="#d6efe9" />
        </linearGradient>
      </defs>
      <rect width="640" height="460" rx="34" fill="url(#p2-room)" />
      <rect x="62" y="80" width="218" height="140" rx="26" fill="#fefefe" />
      <rect x="86" y="106" width="170" height="14" rx="7" fill="#7fd5c6" />
      <rect x="86" y="136" width="126" height="10" rx="5" fill="#ccebe5" />
      <rect x="86" y="158" width="150" height="10" rx="5" fill="#ccebe5" />
      <rect x="86" y="180" width="134" height="10" rx="5" fill="#ccebe5" />
      <rect x="372" y="82" width="188" height="110" rx="26" fill="#114b5f" />
      <circle cx="426" cy="138" r="32" fill="#9ce8d8" />
      <rect x="472" y="118" width="56" height="12" rx="6" fill="#c3fbf0" />
      <rect x="472" y="142" width="38" height="12" rx="6" fill="#78cfc0" />
      <rect x="100" y="286" width="198" height="84" rx="28" fill="#fdfefe" />
      <rect x="322" y="262" width="214" height="110" rx="30" fill="#fdfefe" />
      <path d="M136 286h132a34 34 0 0 1 34 34v50H102v-50a34 34 0 0 1 34-34z" fill="#8ed8ca" />
      <path d="M346 294h164a22 22 0 0 1 22 22v56H324v-56a22 22 0 0 1 22-22z" fill="#0f766e" />
      <circle cx="224" cy="250" r="28" fill="#8ed8ca" opacity="0.6" />
      <circle cx="374" cy="230" r="18" fill="#ffffff" />
      <path d="M374 218v24M362 230h24" stroke="#1d9b8b" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function ConsultationIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 640 460"
      role="img"
      aria-label="Doctor consultation illustration"
      className={className}
    >
      <rect width="640" height="460" rx="34" fill="#e9f9f5" />
      <rect x="64" y="82" width="512" height="302" rx="28" fill="#ffffff" />
      <rect x="94" y="112" width="160" height="120" rx="24" fill="#d7f2ec" />
      <circle cx="176" cy="158" r="34" fill="#0f766e" opacity="0.14" />
      <path d="M160 158h32M176 142v32" stroke="#0f766e" strokeWidth="8" strokeLinecap="round" />
      <circle cx="364" cy="188" r="52" fill="#f1b286" />
      <circle cx="476" cy="192" r="42" fill="#e4a17e" />
      <path d="M318 298c24-38 66-58 124-58 57 0 98 20 122 58" fill="#114b5f" opacity="0.14" />
      <path d="M296 298c34-66 84-98 149-98s115 32 149 98" fill="none" stroke="#0f766e" strokeWidth="22" strokeLinecap="round" opacity="0.18" />
      <rect x="286" y="116" width="228" height="18" rx="9" fill="#0f766e" opacity="0.9" />
      <rect x="286" y="148" width="196" height="12" rx="6" fill="#8fdccd" />
      <rect x="286" y="170" width="176" height="12" rx="6" fill="#cfeee7" />
      <rect x="286" y="324" width="196" height="18" rx="9" fill="#0f766e" opacity="0.82" />
      <rect x="286" y="354" width="128" height="12" rx="6" fill="#9cdccc" />
    </svg>
  );
}
