// ── Indie Portfolio — Content Data ──────────────────────────────────
// Edit this file to personalise the template without touching any component.

export const PROFILE = {
  name: "Kael Storm",
  initials: "KS",
  role: "Motion Designer & VFX Artist",
  tagline: "Shaping cinematic worlds through motion",
  heroLine1: "Shaping",
  heroLine2: "dimensions",
  heroLine3: "through motion.",
  heroStatement: "Motion Designer · 3D Artist · Visual Storyteller",
  bio1:
    "I create cinematic motion experiences that blur the line between art and technology. From opening title sequences to full CGI worlds, I craft visual narratives that stay with audiences long after the screen goes dark.",
  bio2:
    "Formerly at ILM · Framestore · The Mill. Now fully independent — partnering with studios and brands who demand the extraordinary and refuse to settle for the adequate.",
  bio3:
    "Every project begins with a question: what does this world feel like? The answer shapes every keyframe, every render, every final frame.",
  philosophy: "Motion is the language of emotion.",
  location: "Los Angeles, CA",
  availability: "Available for select projects",
  status: "Booking Q4 2026",
  email: "hello@kaelstorm.io",
  phone: "+1 424 555 0190",
  whatsapp: "14245550190",
  instagram: "#",
  vimeo: "#",
  behance: "#",
  linkedin: "#",
  twitter: "#",
  reelUrl: "#",
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop",
  studioImage:
    "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=1400&q=80&auto=format&fit=crop",
  reelPoster:
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1800&q=85&auto=format&fit=crop",
};

export const STATS = [
  { value: "12+", label: "Years of craft" },
  { value: "200+", label: "Projects delivered" },
  { value: "60+", label: "Studios served" },
  { value: "4×", label: "Motion Awards" },
];

export const CLIENTS = [
  "Marvel Studios",
  "Netflix",
  "Nike",
  "Apple",
  "Google",
  "Spotify",
  "HBO",
  "Dolby",
  "Sony Pictures",
  "Warner Bros",
  "Adobe",
  "Nvidia",
  "Epic Games",
  "Unreal Engine",
];

export const WORKS = [
  {
    id: 1,
    title: "Void Protocol",
    category: "Title Sequence",
    year: "2026",
    role: "Director · Lead FX",
    tools: ["Cinema 4D", "Houdini", "Nuke"],
    description:
      "Opening title sequence for an Apple TV+ sci-fi thriller. 90 seconds of pure atmosphere.",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1800&q=85&auto=format&fit=crop",
    color: "#06050f",
    accent: "#818cf8",
  },
  {
    id: 2,
    title: "Solaris Brand Film",
    category: "CGI Brand Film",
    year: "2026",
    role: "3D Artist · Compositor",
    tools: ["Blender", "After Effects", "DaVinci"],
    description:
      "Full-CGI brand film for an emerging luxury tech brand. Conceived, directed, and composited solo.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85&auto=format&fit=crop",
    color: "#0f0600",
    accent: "#f59e0b",
  },
  {
    id: 3,
    title: "Neon Genesis",
    category: "Motion Identity",
    year: "2025",
    role: "Creative Director",
    tools: ["After Effects", "Cinema 4D"],
    description:
      "Award-winning living motion identity for an international creative festival.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1800&q=85&auto=format&fit=crop",
    color: "#000a12",
    accent: "#22d3ee",
  },
  {
    id: 4,
    title: "Epoch VFX",
    category: "Visual Effects",
    year: "2025",
    role: "VFX Supervisor",
    tools: ["Houdini", "Nuke", "Maya"],
    description:
      "Photorealistic destruction simulation and environment extensions for a feature film.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1800&q=85&auto=format&fit=crop",
    color: "#0a0500",
    accent: "#ef4444",
  },
  {
    id: 5,
    title: "Abstract Worlds",
    category: "3D Animation",
    year: "2024",
    role: "Lead 3D Artist",
    tools: ["Blender", "Unreal Engine"],
    description:
      "Series of abstract 3D world-building loops for Spotify's editorial team.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1800&q=85&auto=format&fit=crop",
    color: "#050a00",
    accent: "#4ade80",
  },
];

export const SERVICES = [
  {
    title: "Title Sequences",
    category: "Film · TV · Streaming",
    desc: "From concept to final render, I craft opening and closing sequences that define the emotional tone of an entire series. Every frame is intentional. Every motion tells a story before the first scene begins.",
    deliverables: [
      "Full sequence file package",
      "Composited masters (2K / 4K)",
      "Layered source files",
      "Sound-design sync reference",
    ],
    tools: ["Cinema 4D", "Houdini", "Nuke", "After Effects"],
  },
  {
    title: "CGI Brand Films",
    category: "Luxury · Tech · Fashion",
    desc: "Full-CGI brand narratives built without cameras. I design, model, light, and render entire worlds that exist only in the digital realm — but feel entirely real. The medium becomes the message.",
    deliverables: [
      "Hero film (60–180s)",
      "Cut-down variants (15s / 30s)",
      "Social-optimised formats",
      "RAW render-pass delivery",
    ],
    tools: ["Blender", "Cinema 4D", "Redshift", "DaVinci Resolve"],
  },
  {
    title: "Motion Identity",
    category: "Brand · Systems · Guidelines",
    desc: "Living brand systems that move. From animated logos to full transition libraries — I build motion languages that scale across every touchpoint and platform, keeping brands consistent in motion.",
    deliverables: [
      "Animated logo suite (all lockups)",
      "Motion guidelines document",
      "UI transition library",
      "Template & component package",
    ],
    tools: ["After Effects", "Cinema 4D", "Figma", "Lottie"],
  },
  {
    title: "VFX Supervision",
    category: "Film · Episodic · Commercial",
    desc: "On-set and remote VFX supervision from pre-production through final delivery. I bridge the gap between creative vision and technical pipeline — ensuring invisible but extraordinary results.",
    deliverables: [
      "Shoot supervision & data notes",
      "VFX bid & breakdown document",
      "Composited final elements",
      "DCP / broadcast master delivery",
    ],
    tools: ["Houdini", "Nuke", "Maya", "ShotGrid"],
  },
  {
    title: "3D Animation",
    category: "Product · Character · Environment",
    desc: "Hyper-detailed 3D animation for product launches, architectural visualisation, character performance, and abstract environmental storytelling. Crafted for beauty and built for scale.",
    deliverables: [
      "Animated hero sequence",
      "360° turntable renders",
      "Still hero frames (retouched)",
      "Optimised web / social versions",
    ],
    tools: ["Blender", "Cinema 4D", "Unreal Engine", "Redshift"],
  },
  {
    title: "Real-Time Visuals",
    category: "Live Events · Installations · XR",
    desc: "Interactive and generative visuals built in Unreal Engine and TouchDesigner for live events, museum installations, and extended reality experiences. Where technology becomes theatre.",
    deliverables: [
      "Real-time executable / patch",
      "Full asset & texture library",
      "Technical documentation",
      "On-site performance support",
    ],
    tools: ["Unreal Engine", "TouchDesigner", "Resolume", "VVVV"],
  },
];

export const TOOLS = [
  { name: "Cinema 4D", category: "3D" },
  { name: "Houdini", category: "FX" },
  { name: "Blender", category: "3D" },
  { name: "Maya", category: "3D" },
  { name: "Unreal Engine", category: "Real-Time" },
  { name: "After Effects", category: "Motion" },
  { name: "Nuke", category: "Composite" },
  { name: "DaVinci", category: "Color" },
  { name: "Photoshop", category: "Edit" },
  { name: "Premiere", category: "Edit" },
  { name: "TouchDesigner", category: "Live" },
  { name: "Redshift", category: "Render" },
];

export const TESTIMONIALS = [
  {
    name: "Jennifer Park",
    role: "Executive Producer, Netflix",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
    text: "Kael's title sequence for Void Protocol set the tone for the entire series. The craft was impeccable — every frame felt intentional and every motion told a story.",
    stars: 5,
  },
  {
    name: "David Ramos",
    role: "CCO, Solaris Brand",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
    text: "Working with Kael felt like working with a world-class studio compressed into one exceptional mind. The CGI film exceeded every benchmark we set.",
    stars: 5,
  },
  {
    name: "Lena Müller",
    role: "Creative Director, Adobe",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&auto=format&fit=crop",
    text: "Kael's motion identity work for our product launch was the single highest-performing creative asset we've ever produced. The loops went genuinely viral.",
    stars: 5,
  },
];

export const NAV_LINKS = [
  { href: "#reel", label: "Reel" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
];
