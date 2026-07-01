export const PROFILE = {
  name: "Dr. Amelia Noor",
  role: "Concierge Internal Medicine Specialist",
  focus: "Preventive care, executive health, and long-horizon wellness planning.",
  location: "Dubai Healthcare City",
  email: "care@dramelianoor.com",
  phone: "+971 568450406",
  availability: "Accepting a limited number of new private patients",
};

export const CALL_LINK = "tel:+971568450406";

export const MEDICAL_IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1612349316228-5942a9b489c2?auto=format&fit=crop&w=1400&q=80",
  portrait:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
  clinic:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80",
  consultation:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80",
  contact:
    "https://images.unsplash.com/photo-1631217868264-e6b90bb7e133?auto=format&fit=crop&w=1400&q=80",
} as const;

export const NAV_ITEMS = [
  { href: "/templates/p2", label: "Home" },
  { href: "/templates/p2/about", label: "About" },
  { href: "/templates/p2/services", label: "Services" },
  { href: "/templates/p2/stories", label: "Stories" },
  { href: "/templates/p2/contact", label: "Contact" },
] as const;

export const HERO_METRICS = [
  { value: "14+", label: "Years in patient care" },
  { value: "2.4k", label: "Care plans delivered" },
  { value: "96%", label: "Long-term retention" },
];

export const CARE_PILLARS = [
  {
    title: "Evidence-led prevention",
    body: "Annual strategy reviews, advanced screening, and practical lifestyle mapping built around real life.",
  },
  {
    title: "Warm, unhurried appointments",
    body: "Long-form visits designed to listen first, then create a care roadmap with clarity and confidence.",
  },
  {
    title: "High-touch follow-through",
    body: "Messaging support, coordinated referrals, and a shared plan that stays active between visits.",
  },
];

export const FEATURED_SERVICES = [
  {
    title: "Executive Health Programs",
    body: "A premium annual model for founders, leaders, and professionals who need proactive care that keeps pace.",
    detail: "Comprehensive labs, imaging coordination, habit design, and same-week follow-ups.",
  },
  {
    title: "Preventive Medicine Visits",
    body: "Full-spectrum internal medicine appointments focused on early detection, resilience, and sustainable health.",
    detail: "Cardiometabolic risk review, nutrition strategy, sleep care, and clinical monitoring.",
  },
  {
    title: "Women's Wellness Planning",
    body: "A calm, whole-person framework for energy, hormones, longevity, and life-stage transitions.",
    detail: "Perimenopause support, menstrual health insight, bone health planning, and recovery guidance.",
  },
];

export const JOURNEY_STEPS = [
  {
    title: "Discover",
    body: "A 60-minute intake to understand symptoms, history, goals, and daily realities.",
  },
  {
    title: "Decode",
    body: "Clear interpretation of results and risk patterns, without jargon or rushed decisions.",
  },
  {
    title: "Design",
    body: "A personalized medical and lifestyle plan with realistic milestones and accountability.",
  },
  {
    title: "Stay With It",
    body: "Check-ins, refinements, and direct access so momentum does not disappear after the first visit.",
  },
];

export const TIMELINE = [
  {
    year: "2012",
    title: "Graduated with distinction in Internal Medicine",
    body: "Completed specialist training with a focus on preventive cardiometabolic care.",
  },
  {
    year: "2016",
    title: "Led an urban prevention clinic",
    body: "Built care systems combining diagnostics, nutrition support, and longitudinal follow-up.",
  },
  {
    year: "2020",
    title: "Launched concierge private practice",
    body: "Created a slower, more personal model for ambitious patients seeking continuity and clarity.",
  },
  {
    year: "2024",
    title: "Expanded into executive health strategy",
    body: "Introduced tailored care planning for founders, operators, and internationally mobile professionals.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "For the first time, I felt like my health plan matched the pace and complexity of my life.",
    name: "Leila M.",
    detail: "Founder, annual executive health member",
  },
  {
    quote:
      "Dr. Amelia connected the dots between my lab work, sleep, stress, and energy in a way no one had before.",
    name: "Sara R.",
    detail: "Preventive medicine patient",
  },
  {
    quote:
      "Every follow-up felt thoughtful. Nothing was generic, and nothing was rushed.",
    name: "Omar T.",
    detail: "Private patient, 3-year care relationship",
  },
];

export const STORY_CARDS = [
  {
    title: "From burnout to baseline",
    body: "An operator with constant fatigue used phased testing, sleep recovery, and nutrition changes to regain steady energy.",
  },
  {
    title: "A clearer longevity plan",
    body: "A couple in their forties translated biomarkers into an achievable, shared preventive health rhythm.",
  },
  {
    title: "A calmer menopause transition",
    body: "Targeted care planning helped reduce uncertainty, improve symptoms, and build confidence in the next stage.",
  },
];

export const CREDENTIALS = [
  "Board-certified internal medicine specialist",
  "Preventive health and longevity-focused practice",
  "Concierge care model with coordinated referrals",
  "Virtual follow-up support for traveling patients",
];

export const CONTACT_DETAILS = [
  {
    label: "Clinic",
    value: "Noor Private Medical Studio, Building 27, Dubai Healthcare City",
  },
  {
    label: "Hours",
    value: "Monday to Thursday, 9:00 AM to 6:00 PM",
  },
  {
    label: "Email",
    value: PROFILE.email,
  },
  {
    label: "Phone",
    value: PROFILE.phone,
  },
];

export const FAQS = [
  {
    question: "Who is this practice best for?",
    answer:
      "Adults who want continuity, preventive thinking, and a care relationship that balances medical rigor with calm communication.",
  },
  {
    question: "Do you offer virtual appointments?",
    answer:
      "Yes. Virtual follow-ups are available for travel-heavy patients and for care-plan reviews when an in-person visit is not necessary.",
  },
  {
    question: "Can you coordinate specialist care?",
    answer:
      "Yes. Referrals and next steps are curated carefully so patients have a smoother path through imaging, testing, and specialist opinions.",
  },
];
