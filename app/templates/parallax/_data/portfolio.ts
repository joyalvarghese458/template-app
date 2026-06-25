import workstation from "../_assets/gallery/workstation.jpg";
import cgRender from "../_assets/gallery/cg-render.jpg";
import renderFarm from "../_assets/gallery/render-farm.jpg";
import tabletSketch from "../_assets/gallery/tablet-sketch.jpg";
import controlRoom from "../_assets/gallery/control-room.jpg";

export const OWNER = {
  name: "Kai Bennett",
  title: "3D Animation & VFX Student",
  tagline: "I make the impossible look like it was filmed that way.",
  subtagline:
    "Final-year animation & VFX student building previs, creature animation, and full CG-to-comp breakdowns — currently looking for my first studio seat.",
  email: "kai.bennett@example.com",
  linkedin: "https://linkedin.com/in/kaibennett",
  resumeUrl: "#",
  school: "Halsey Conservatory of Animation & VFX",
  location: "Vancouver, BC",
  availability: "Open to internships & junior roles · Grad 2026",
  stats: [
    { value: "12", label: "Shots composited" },
    { value: "3", label: "Festival selections" },
    { value: "1.4K+", label: "Render hours logged" },
    { value: "2026", label: "Graduating class" },
  ],
};

export const ABOUT = {
  intro:
    "I picked up a copy of Blender at fourteen because I wanted to know how the Hulk's muscles moved. Six years later I'm still chasing that same question, just with better software.",
  philosophy:
    "A VFX shot only works if nobody notices it. I'd rather spend three extra passes on a roto edge than ship something that reads as \"effects\" instead of \"real.\"",
  focus: [
    "Character & creature animation",
    "3D lighting & rendering",
    "Compositing & roto",
    "Previs & blocking",
  ],
};

export const PIPELINE = [
  { step: "01", title: "Previs", desc: "Block the shot in 3D before a single frame is final." },
  { step: "02", title: "Animate", desc: "Build the performance first, polish second." },
  { step: "03", title: "Light & Render", desc: "Match the plate's light, not just the brief." },
  { step: "04", title: "Simulate", desc: "Let physics handle the parts animation shouldn't fake." },
  { step: "05", title: "Composite", desc: "Marry the CG and the plate until the seam disappears." },
];

export const REEL = [
  {
    id: "01",
    title: "Undertow — Senior Thesis Film",
    category: "Creature Animation · Thesis Film",
    description: "A 4-minute creature-animation short built solo over two semesters, from blocking to final comp.",
    scope: ["Character Animation", "Lighting", "Compositing"],
    metrics: [{ label: "Runtime", value: "4 min" }, { label: "Shots", value: "31" }, { label: "Festival runs", value: "2" }],
  },
  {
    id: "02",
    title: "Glass Atlas — VFX Breakdown Reel",
    category: "Compositing · Roto-Heavy",
    description: "A before/after breakdown reel showing six plate-to-comp shots, from greenscreen pull to final grade.",
    scope: ["Rotoscoping", "Tracking", "Color Grading"],
    metrics: [{ label: "Shots", value: "6" }, { label: "Avg. roto layers", value: "14" }, { label: "Comp hours", value: "180" }],
  },
  {
    id: "03",
    title: "Riftline — Game Cinematic Trailer",
    category: "Studio Internship · Cinematic",
    description: "Contributed animation and lighting passes to a 90-second cinematic trailer during a summer internship.",
    scope: ["Cinematic Animation", "Lighting", "Studio Pipeline"],
    metrics: [{ label: "Trailer length", value: "90 sec" }, { label: "Shots owned", value: "9" }, { label: "Views", value: "210K" }],
  },
  {
    id: "04",
    title: "Paper Wolves — 2D/3D Hybrid Short",
    category: "Hybrid Animation · Collaborative",
    description: "Co-directed a hybrid short blending 2D character animation with a fully 3D-rendered environment.",
    scope: ["Hybrid Pipeline", "Environment Render", "Direction"],
    metrics: [{ label: "Runtime", value: "6 min" }, { label: "Collaborators", value: "4" }, { label: "Festival selection", value: "1" }],
  },
  {
    id: "05",
    title: "Groundwork — Previs Package",
    category: "Previs · Indie Feature",
    description: "Delivered a full previs package for three action sequences on a no-budget indie feature.",
    scope: ["Previs", "Camera Blocking", "Storyboards"],
    metrics: [{ label: "Sequences", value: "3" }, { label: "Shots blocked", value: "48" }, { label: "Turnaround", value: "3 wks" }],
  },
  {
    id: "06",
    title: "Smoke Test — FX Simulation Showcase",
    category: "Simulation · Houdini",
    description: "A simulation-only showcase reel of smoke, fluid, and destruction effects built to learn Houdini's solvers.",
    scope: ["Smoke Sim", "Fluid Sim", "Destruction"],
    metrics: [{ label: "Sims completed", value: "9" }, { label: "Avg. sim time", value: "6 hrs" }, { label: "Cache size", value: "210GB" }],
  },
];

export const IMPACT = [
  { value: 1.4, decimals: 1, prefix: "", suffix: "K+", label: "Render hours logged" },
  { value: 3, decimals: 0, prefix: "", suffix: "", label: "Festival selections" },
  { value: 12, decimals: 0, prefix: "", suffix: "", label: "Shots composited" },
  { value: 8, decimals: 0, prefix: "", suffix: "", label: "Pipeline tools mastered" },
];

export const AFFILIATIONS = [
  { name: "Halsey Conservatory", role: "BFA Candidate" },
  { name: "Northern Lights Animation Fest", role: "Official Selection" },
  { name: "SIGGRAPH Student Showcase", role: "Volunteer" },
  { name: "Lumen Studios", role: "VFX Intern" },
  { name: "Forge Interactive", role: "Animation Intern" },
  { name: "CGSociety", role: "Featured Spotlight" },
];

export const STACK_LAYERS = [
  { layer: "01", name: "Plate", desc: "Raw live-action background footage, locked and stabilized." },
  { layer: "02", name: "Roto / Matte", desc: "Hand-rotoscoped mask isolating the subject from the plate." },
  { layer: "03", name: "CG Render", desc: "The animated 3D element, lit to match the plate's key light." },
  { layer: "04", name: "FX / Sim", desc: "Particle, smoke, and destruction simulation passes." },
  { layer: "05", name: "Grade", desc: "Color grade unifying every layer's contrast and temperature." },
  { layer: "06", name: "Final Comp", desc: "Every pass merged into one shot nobody should question." },
];

export const GALLERY = [
  { src: workstation, alt: "A glowing dual-monitor 3D workstation setup in a dark room", caption: "Late-night render sessions" },
  { src: cgRender, alt: "A vibrant 3D-rendered abstract geometric scene", caption: "Lighting test, Undertow" },
  { src: renderFarm, alt: "A modern server room with network racks for render farm computing", caption: "The render farm queue" },
  { src: tabletSketch, alt: "Close-up of a stylus pen sketching on a digital drawing tablet", caption: "Blocking out a new shot" },
  { src: controlRoom, alt: "A person monitoring multiple screens in a studio control room", caption: "Dailies review" },
];

export const EXPERIENCE = [
  {
    role: "VFX Intern",
    company: "Lumen Studios",
    period: "Summer 2025",
    description: "Supported the comp team on a feature film, owning roto and tracking passes across 40+ shots.",
    highlights: ["Rotoscoping", "Tracking", "Nuke"],
  },
  {
    role: "Animation Intern",
    company: "Forge Interactive",
    period: "Summer 2024",
    description: "Animated secondary characters and props for a cinematic trailer under a senior animator's mentorship.",
    highlights: ["Character Animation", "Rigging Support", "Maya"],
  },
  {
    role: "Render Wrangler",
    company: "Halsey Conservatory",
    period: "2023 — Present",
    description: "Manage the school's render farm queue and mentor first-year students on pipeline basics.",
    highlights: ["Render Management", "Mentorship", "Pipeline Tools"],
  },
];

export const SKILLS = [
  { label: "Maya", level: 92 },
  { label: "Blender", level: 95 },
  { label: "Nuke", level: 85 },
  { label: "Houdini", level: 78 },
  { label: "Substance Painter", level: 88 },
  { label: "Unreal Engine", level: 80 },
];

export const CREDENTIALS = [
  { title: "BFA, Animation & Visual Effects", issuer: "Halsey Conservatory (Expected 2026)", year: "2026" },
  { title: "SIGGRAPH Student Volunteer", issuer: "SIGGRAPH", year: "2024" },
  { title: "Adobe Certified Professional", issuer: "After Effects", year: "2023" },
  { title: "Official Selection", issuer: "Northern Lights Animation Fest", year: "2025" },
];

export const TESTIMONIALS = [
  {
    quote: "Kai's roto work is cleaner than most juniors I've hired full-time. The attention to edge detail on Undertow was genuinely professional-grade.",
    name: "Priya Nandakumar",
    role: "VFX Supervisor, Lumen Studios",
  },
  {
    quote: "Most students animate to finish the assignment. Kai animates to solve the performance. That difference is the whole job.",
    name: "Marcus Oyelaran",
    role: "Faculty, Halsey Conservatory",
  },
  {
    quote: "We brought Kai on for a three-week internship and extended it twice. The trailer work held up next to our senior team's shots.",
    name: "Sasha Lindqvist",
    role: "Lead Animator, Forge Interactive",
  },
];
