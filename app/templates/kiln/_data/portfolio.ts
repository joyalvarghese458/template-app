import studioShelves from "../_assets/gallery/studio-shelves.jpg";
import wheelStudio from "../_assets/gallery/wheel-studio.jpg";
import potteryTable from "../_assets/gallery/pottery-table.jpg";
import glazeCloseup from "../_assets/gallery/glaze-closeup.jpg";

export const OWNER = {
  name: "Mira Solberg",
  title: "Studio Ceramicist",
  tagline: "A pot doesn't have to be perfect. It has to be honest about being made by hand.",
  subtagline:
    "Founder of Studio Solberg — a one-woman pottery studio on Bornholm, Denmark, throwing and firing functional stoneware in small, numbered batches.",
  email: "mira@studiosolberg.dk",
  instagram: "https://instagram.com",
  shop: "https://example.com",
  resumeUrl: "mailto:mira@studiosolberg.dk?subject=Resume%20request",
  atelier: "Studio Solberg",
  location: "Bornholm, Denmark",
  availability: "Autumn kiln load open · booking now",
  stats: [
    { value: "1,200+", label: "Pieces thrown" },
    { value: "38", label: "Kiln loads fired" },
    { value: "06", label: "Glazes in rotation" },
    { value: "2016", label: "Studio founded" },
  ],
};

export const ABOUT = {
  intro:
    "I trained as a graphic designer for six years before I ever touched clay. The first time I centered a lump on the wheel, I understood why nothing at a desk had felt finished the way that did.",
  philosophy:
    "Wheel-thrown pottery keeps the fingerprint of the hand that made it — a faint spiral, a rim that's a millimeter off true. I don't sand that out. It's the only proof a person, not a mold, made the piece.",
  focus: [
    "Wheel throwing",
    "Glaze chemistry",
    "Small-batch production",
    "Wholesale & commissions",
  ],
};

export const PROCESS = [
  { step: "01", title: "Wedging & Centering", desc: "Air is worked out of the clay by hand, then the lump is centered dead-true on the wheel head before anything is shaped." },
  { step: "02", title: "Throwing", desc: "The form is opened and pulled up in a few unhurried passes — too many corrections and the wall remembers it." },
  { step: "03", title: "Trimming", desc: "Once leather-hard, the piece is turned upside down and trimmed to its final foot and wall thickness." },
  { step: "04", title: "Bisque Firing", desc: "A slow first firing to around 1000°C hardens the clay enough to handle without dissolving in glaze." },
  { step: "05", title: "Glazing", desc: "Glaze is mixed, tested, and applied by dipping or brushing — the last chance to change the piece before fire decides." },
  { step: "06", title: "Glaze Firing", desc: "A final firing to cone 6 melts the glaze into glass, fusing color and clay into one surface for good." },
];

export const COLLECTION = [
  {
    id: "01",
    title: "Bornholm Bowl",
    category: "Tableware · Stoneware",
    description: "The studio's best-seller — a wide, shallow bowl thrown to sit comfortably in one hand, glazed in a break-tested oatmeal.",
    notes: ["Stoneware, cone 6 fired", "Oatmeal matte glaze", "18cm diameter"],
    metrics: [{ label: "Clay", value: "Stoneware" }, { label: "Cone", value: "6" }, { label: "Since", value: "2017" }],
  },
  {
    id: "02",
    title: "Tide Vase",
    category: "Vessel · Altered Form",
    description: "Thrown round, then gently altered off the wheel while still soft — no two Tide Vases dry into quite the same lean.",
    notes: ["Stoneware, hand-altered rim", "Celadon reactive glaze", "24cm height"],
    metrics: [{ label: "Clay", value: "Stoneware" }, { label: "Cone", value: "6" }, { label: "Since", value: "2019" }],
  },
  {
    id: "03",
    title: "Skagen Mug",
    category: "Tableware · Daily Use",
    description: "Built around a pulled handle sized for a real hand, not a display shelf — this is the mug I actually drink from every morning.",
    notes: ["Stoneware, pulled handle", "Speckled clear glaze", "340ml capacity"],
    metrics: [{ label: "Clay", value: "Stoneware" }, { label: "Cone", value: "6" }, { label: "Since", value: "2016" }],
  },
  {
    id: "04",
    title: "Ash Carafe",
    category: "Vessel · Wood-Fired",
    description: "Fired unglazed in a borrowed wood kiln twice a year — the surface is entirely accidental, drawn by flame path and falling ash.",
    notes: ["Stoneware, unglazed", "Natural wood-ash surface", "1.1L capacity"],
    metrics: [{ label: "Clay", value: "Stoneware" }, { label: "Cone", value: "10" }, { label: "Since", value: "2021" }],
  },
  {
    id: "05",
    title: "Ester Platter",
    category: "Tableware · Serving",
    description: "A commission gone permanent — a wedding client asked for a serving platter and eighteen months later it's a studio staple.",
    notes: ["Stoneware, slab-built rim", "Sage break glaze", "34cm diameter"],
    metrics: [{ label: "Clay", value: "Stoneware" }, { label: "Cone", value: "6" }, { label: "Since", value: "2022" }],
  },
  {
    id: "06",
    title: "First Cylinder",
    category: "Vessel · Reference Piece",
    description: "The first pot I ever centered without help, kept on the studio windowsill, slightly lopsided, not for sale.",
    notes: ["Earthenware, unglazed interior", "Iron-oxide wash exterior", "14cm height"],
    metrics: [{ label: "Clay", value: "Earthenware" }, { label: "Cone", value: "04" }, { label: "Since", value: "2016" }],
  },
];

export const IMPACT = [
  { value: 1200, decimals: 0, prefix: "", suffix: "+", label: "Pieces thrown" },
  { value: 38, decimals: 0, prefix: "", suffix: "", label: "Kiln loads fired" },
  { value: 6, decimals: 0, prefix: "", suffix: "", label: "Glazes in rotation" },
  { value: 9, decimals: 0, prefix: "", suffix: "", label: "Countries shipped to" },
];

export const AFFILIATIONS = [
  { name: "The Design Files", role: "Studio Feature" },
  { name: "Kinfolk", role: "Press Feature" },
  { name: "Remodelista", role: "Maker Spotlight" },
  { name: "American Craft Council", role: "Member" },
  { name: "Ceramics Monthly", role: "Contributor" },
  { name: "Nordic Craft Fair", role: "Exhibitor" },
];

export const FIRING_STAGES = [
  { layer: "01", name: "Raw Clay", desc: "A wedged, air-free lump of stoneware — inert until it's centered and opened on the wheel." },
  { layer: "02", name: "Thrown Form", desc: "Pulled up wet on the wheel in a few steady passes, still soft enough to change its mind." },
  { layer: "03", name: "Trimmed", desc: "Leather-hard and turned upside down, the foot and final wall are cut clean with a trimming tool." },
  { layer: "04", name: "Bisqued", desc: "Fired once to around 1000°C — hard enough to hold glaze, still porous enough to drink it in." },
  { layer: "05", name: "Glazed", desc: "Dipped in a tested glaze recipe, the last reversible step before the second firing decides its surface." },
  { layer: "06", name: "Fired", desc: "Cone 6 melts the glaze to glass — clay and color fuse into one finished, waterproof surface." },
];

export const GALLERY = [
  { src: wheelStudio, alt: "A potter's wheel surrounded by tools and finished ceramics in a studio", caption: "The wheel, mid-session" },
  { src: studioShelves, alt: "Shelves crowded with finished clay pots and woven baskets", caption: "The greenware shelf, before bisque" },
  { src: potteryTable, alt: "A table topped with an assortment of finished ceramic pieces", caption: "A finished kiln load, cooling" },
  { src: glazeCloseup, alt: "A close-up of a glossy blue ceramic glaze surface", caption: "A test glaze, cone 6" },
];

export const EXPERIENCE = [
  {
    role: "Founder & Potter",
    company: "Studio Solberg",
    period: "2016 — Present",
    description: "Left a design studio job to build a pottery practice from a rented garage — now a proper studio with two wheels and a kiln shed.",
    highlights: ["Wheel Throwing", "Glaze Development", "Wholesale Production"],
  },
  {
    role: "Studio Assistant",
    company: "Guldager Keramik, Copenhagen",
    period: "2014 — 2016",
    description: "Mixed glazes, loaded kilns, and threw production ware for a working ceramics studio while building my own practice on the side.",
    highlights: ["Glaze Mixing", "Kiln Loading", "Production Throwing"],
  },
  {
    role: "Evening Ceramics Course",
    company: "Krabbesholm Højskole",
    period: "2013 — 2014",
    description: "A year of evening classes that turned into the only thing I wanted to do during the day — the start of everything since.",
    highlights: ["Hand Building", "Wheel Basics", "Glaze Theory"],
  },
];

export const CRAFT = [
  { label: "Wheel Throwing", level: 96 },
  { label: "Glaze Chemistry", level: 88 },
  { label: "Hand Building", level: 82 },
  { label: "Kiln Firing", level: 90 },
  { label: "Surface Decoration", level: 78 },
  { label: "Wholesale Production", level: 84 },
];

export const AWARDS = [
  { title: "Maker Spotlight", issuer: "Remodelista", year: "2023" },
  { title: "Best in Show, Functional Ware", issuer: "Nordic Craft Fair", year: "2022" },
  { title: "Studio Feature", issuer: "The Design Files", year: "2021" },
  { title: "Emerging Ceramicist Grant", issuer: "Danish Crafts Council", year: "2018" },
];

export const TESTIMONIALS = [
  {
    quote: "I ordered four mugs and got four pieces that were subtly, deliberately not identical. That's exactly what I didn't know I wanted.",
    name: "Freya Lindqvist",
    role: "Café Owner, Copenhagen",
  },
  {
    quote: "Most wholesale potters chase consistency until the work goes flat. Mira's line has stayed alive through six years of restocks — that's rare.",
    name: "Thomas Berger",
    role: "Buyer, Nordic Living Store",
  },
  {
    quote: "She talked me out of the glaze I asked for and was right to. The platter she suggested instead is the one guests always ask about.",
    name: "Anneke Voss",
    role: "Private Client, Aarhus",
  },
];
