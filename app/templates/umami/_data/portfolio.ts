import smokeTrout from "../_assets/pass/smoke-trout.jpg";
import charRibeye from "../_assets/pass/char-ribeye.jpg";
import rootVegetables from "../_assets/pass/root-vegetables.jpg";
import brineOysters from "../_assets/pass/brine-oysters.jpg";
import emberLamb from "../_assets/pass/ember-lamb.jpg";
import ashDessert from "../_assets/pass/ash-dessert.jpg";
import chefFlame from "../_assets/gallery/chef-flame.jpg";
import chefPlating from "../_assets/gallery/chef-plating.jpg";
import herbsBoard from "../_assets/gallery/herbs-board.jpg";
import restaurantInterior from "../_assets/gallery/restaurant-interior.jpg";
import dishesSpread from "../_assets/gallery/dishes-spread.jpg";

export const OWNER = {
  name: "Theo Marchetti",
  title: "Executive Chef & Culinary Director",
  tagline: "Great food isn't plated. It's earned, course by course.",
  subtagline:
    "I run live-fire kitchens that chase flavor over flash — sourcing obsessively, training relentlessly, and sending out plates that taste like where they came from.",
  email: "theo.marchetti@example.com",
  linkedin: "https://linkedin.com/in/theomarchetti",
  resumeUrl: "#",
  location: "Charleston, SC",
  availability: "Open to chef residencies & consulting",
  stats: [
    { value: "9", label: "Years at Cinder" },
    { value: "1★", label: "Michelin star" },
    { value: "40K+", label: "Covers served" },
    { value: "4.9", label: "Critic average" },
  ],
};

export const ABOUT = {
  intro:
    "I started in a dish pit at sixteen. By nineteen I was on the line. The kitchen taught me everything school couldn't — discipline, timing, and how to taste with intention.",
  philosophy:
    "A menu is a promise. I build mine around what's actually good that week, not what looks good on paper — which means the dish changes before my ego does.",
  focus: [
    "Live-fire & wood cookery",
    "Hyper-local sourcing",
    "Seasonal tasting menus",
    "Kitchen culture & mentorship",
  ],
};

export const PROCESS = [
  { step: "01", title: "Source", desc: "Walk the farms and the docks before writing a single line of the menu." },
  { step: "02", title: "Develop", desc: "Test a dish a dozen times before it's allowed anywhere near a guest." },
  { step: "03", title: "Refine", desc: "Cut every ingredient that isn't earning its place on the plate." },
  { step: "04", title: "Plate", desc: "Build the plate like it has to survive being looked at for ten seconds." },
  { step: "05", title: "Serve", desc: "Get it to the table hot, fast, and exactly as tasted in the kitchen." },
];

export const MENUS = [
  {
    id: "01",
    title: "Cinder — Live-Fire Tasting Menu",
    category: "Flagship · Live-Fire · Charleston",
    description: "A nine-course, wood-and-ember tasting menu built entirely around what the coastal Carolinas grow, raise, and pull from the water.",
    scope: ["Live-Fire", "Tasting Menu", "Seasonal"],
    metrics: [{ label: "Covers / mo", value: "1,200" }, { label: "Avg. ticket", value: "$185" }, { label: "Critic score", value: "4.9" }],
  },
  {
    id: "02",
    title: "Verjus — Seasonal French-American",
    category: "Head Chef · French-American",
    description: "Ran the kitchen for a 60-seat French-American bistro, rebuilding the menu around a rotating relationship with six regional farms.",
    scope: ["Menu Development", "Farm Relationships", "Bistro"],
    metrics: [{ label: "Menu changes", value: "52/yr" }, { label: "Farms sourced", value: "6" }, { label: "Tenure", value: "4 yrs" }],
  },
  {
    id: "03",
    title: "Ash & Bone — Wood-Fired Pop-Up",
    category: "Pop-Up · Wood-Fired BBQ",
    description: "A sold-out monthly pop-up built around a single whole animal, broken down and cooked entirely over hardwood coals.",
    scope: ["Whole-Animal", "Wood-Fired", "Pop-Up"],
    metrics: [{ label: "Sellouts", value: "18/18" }, { label: "Waitlist", value: "400+" }, { label: "Press features", value: "9" }],
  },
  {
    id: "04",
    title: "La Brasserie Margaux — Paris Stage",
    category: "Stagiaire · Classical French",
    description: "Trained the sauce station and the grill under a Michelin-starred chef, learning the discipline classical technique demands.",
    scope: ["Classical Technique", "Sauce Station", "Discipline"],
    metrics: [{ label: "Hours/week", value: "70+" }, { label: "Stations rotated", value: "5" }, { label: "Stage", value: "11 mo" }],
  },
  {
    id: "05",
    title: "Harvest Table — Farm Dinner Series",
    category: "Chef-in-Residence · Farm Dinners",
    description: "A quarterly long-table dinner series cooked on-site at partner farms, menu written the morning of from what was picked that day.",
    scope: ["Farm-to-Table", "Long-Table", "Same-Day Menu"],
    metrics: [{ label: "Dinners hosted", value: "22" }, { label: "Guests/dinner", value: "80" }, { label: "Farms featured", value: "11" }],
  },
  {
    id: "06",
    title: "The Salt Room — Chef's Counter",
    category: "Chef's Counter · 12 Seats",
    description: "A twelve-seat counter built around direct service — every course explained and served by the cook who made it.",
    scope: ["Chef's Counter", "Direct Service", "Intimate"],
    metrics: [{ label: "Seats", value: "12" }, { label: "Booking lead time", value: "6 wks" }, { label: "Reviews", value: "5.0★" }],
  },
];

export const IMPACT = [
  { value: 40, decimals: 0, prefix: "", suffix: "K+", label: "Covers served" },
  { value: 1, decimals: 0, prefix: "", suffix: "", label: "Michelin star" },
  { value: 14, decimals: 0, prefix: "", suffix: "", label: "Years in kitchens" },
  { value: 4.9, decimals: 1, prefix: "", suffix: "★", label: "Average critic score" },
];

export const PRESS = [
  { name: "Michelin Guide", role: "1 Star" },
  { name: "James Beard Foundation", role: "Semifinalist" },
  { name: "Bon Appétit", role: "Featured" },
  { name: "Eater Carolinas", role: "Chef of the Year" },
  { name: "Food & Wine", role: "Best New Chef" },
  { name: "Southern Living", role: "Featured" },
];

export const PASS = [
  { course: "01", name: "Smoke", desc: "Charred Carolina trout, brown butter, burnt lemon.", image: smokeTrout },
  { course: "02", name: "Char", desc: "Wood-grilled ribeye, ember-roasted onion, bone marrow jus.", image: charRibeye },
  { course: "03", name: "Root", desc: "Heirloom carrots, goat cheese, charred scallion oil.", image: rootVegetables },
  { course: "04", name: "Brine", desc: "Cured local oysters, mignonette, sea fennel.", image: brineOysters },
  { course: "05", name: "Ember", desc: "Slow-roast lamb shoulder, smoked eggplant, pomegranate.", image: emberLamb },
  { course: "06", name: "Ash", desc: "Burnt honey custard, toasted oats, sea salt.", image: ashDessert },
];

export const GALLERY = [
  { src: chefFlame, alt: "Chef managing a dramatic flame flare-up over a pan in a professional kitchen", caption: "Flambé on the line" },
  { src: chefPlating, alt: "Chef carefully plating grilled salmon with fresh vegetables", caption: "Plating, course four" },
  { src: herbsBoard, alt: "Sliced lemons and fresh herbs on a wooden board", caption: "Mise en place, every morning" },
  { src: restaurantInterior, alt: "Warm, ambient lighting inside the dining room", caption: "The room at golden hour" },
  { src: dishesSpread, alt: "Several elegant plated gourmet dishes arranged on a table", caption: "Tonight's tasting, laid out" },
];

export const EXPERIENCE = [
  {
    role: "Executive Chef & Partner",
    company: "Cinder",
    period: "2016 — Present",
    description: "Built and run a live-fire tasting-menu restaurant in Charleston, earning a Michelin star within six years of opening.",
    highlights: ["Live-Fire Cuisine", "Menu Development", "Kitchen Leadership"],
  },
  {
    role: "Head Chef",
    company: "Verjus",
    period: "2012 — 2016",
    description: "Took over a struggling bistro kitchen and rebuilt it around seasonal, farm-direct sourcing and a tighter, sharper menu.",
    highlights: ["Farm Sourcing", "Menu Rebuild", "Bistro Service"],
  },
  {
    role: "Sous Chef / Stagiaire",
    company: "La Brasserie Margaux, Paris",
    period: "2009 — 2012",
    description: "Trained across the sauce, grill, and garde manger stations under classical French discipline.",
    highlights: ["Classical Technique", "Sauce Work", "Station Rotation"],
  },
];

export const SKILLS = [
  { label: "Live-Fire Cookery", level: 97 },
  { label: "Menu Development", level: 93 },
  { label: "Kitchen Leadership", level: 95 },
  { label: "Sourcing & Purveyors", level: 90 },
  { label: "Plating & Presentation", level: 88 },
  { label: "Wine & Pairing", level: 82 },
];

export const CREDENTIALS = [
  { title: "Culinary Arts Diploma", issuer: "Institute of Culinary Education", year: "2009" },
  { title: "Stage, La Brasserie Margaux", issuer: "Paris, France", year: "2010" },
  { title: "ServSafe Certified Executive Chef", issuer: "National Restaurant Assoc.", year: "2014" },
  { title: "Best Chef Southeast, Semifinalist", issuer: "James Beard Foundation", year: "2022" },
];

export const TESTIMONIALS = [
  {
    quote: "Marchetti cooks like the fire is part of the recipe, not just the method. Cinder is the most exciting tasting menu in Charleston, full stop.",
    name: "Renata Kos",
    role: "Restaurant Critic, Southern Table",
  },
  {
    quote: "He rebuilt Verjus from the walk-in out. Every supplier call, every prep list — within a year it was the kitchen everyone wanted to work in.",
    name: "Adam Forsythe",
    role: "Owner, Verjus",
  },
  {
    quote: "I've eaten at Cinder eleven times. The menu changes, the standard never does. That's the rarest thing in this business.",
    name: "Lillian Brooks",
    role: "Regular Guest & Supper Club Host",
  },
];
