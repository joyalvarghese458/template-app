export const heroImages = [
  "/templates/elevate/hero-1.png",
  "/templates/elevate/hero-2.png",
  "/templates/elevate/hero-3.png",
  "/templates/elevate/hero-4.png",
  "/templates/elevate/hero-5.png",
];

export const classTabs = [
  { id: "all", label: "All" },
  { id: "strength", label: "Strength" },
  { id: "hiit", label: "HIIT" },
  { id: "mobility", label: "Yoga/Mobility" },
] as const;

export const photoSets = {
  strength: [
    "/templates/elevate/class-strength-1.webp",
    "/templates/elevate/class-strength-2.webp",
    "/templates/elevate/hero-1.png",
  ],
  hiit: [
    "/templates/elevate/class-hiit-1.png",
    "/templates/elevate/class-hiit-2.png",
    "/templates/elevate/hero-2.png",
  ],
  mobility: [
    "/templates/elevate/class-mobility-1.png",
    "/templates/elevate/class-mobility-2.png",
    "/templates/elevate/hero-3.png",
  ],
};

export const classMedia = [
  {
    id: "strength-lab-carousel",
    title: "Strength Lab",
    category: "strength",
    type: "carousel",
    duration: "60 min",
    featured: true,
    images: photoSets.strength,
  },
  {
    id: "burn-video",
    title: "HIIT Burn",
    category: "hiit",
    type: "video",
    duration: "45 min",
    thumbnail: "/templates/elevate/class-hiit-1.png",
    embedUrl: "https://www.youtube-nocookie.com/embed/oAPCPjnU1wA",
  },
  {
    id: "mobility-still",
    title: "Mobility Reset",
    category: "mobility",
    type: "image",
    duration: "45 min",
    image: "/templates/elevate/class-mobility-1.png",
  },
  {
    id: "engine-carousel",
    title: "Athlete Engine",
    category: "hiit",
    type: "carousel",
    duration: "45 min",
    featured: true,
    images: photoSets.hiit,
  },
  {
    id: "power-video",
    title: "Power Circuit",
    category: "strength",
    type: "video",
    duration: "50 min",
    thumbnail: "/templates/elevate/hero-5.png",
    embedUrl: "https://www.youtube-nocookie.com/embed/2pLT-olgUJs",
  },
  {
    id: "flow-carousel",
    title: "Recovery Flow",
    category: "mobility",
    type: "carousel",
    duration: "40 min",
    images: photoSets.mobility,
  },
] as const;

export type ClassMediaItem = (typeof classMedia)[number];
export type ClassTabId = (typeof classTabs)[number]["id"];
