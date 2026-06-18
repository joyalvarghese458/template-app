export const trainer = {
  name: "Alex Carter",
  title: "Personal Trainer & Nutrition Coach",
  tagline: "12 weeks. Zero excuses. Guaranteed results.",
  location: "Dubai, UAE",
  certifications: ["NASM CPT", "CrossFit L2", "Precision Nutrition"],
  stats: [
    { label: "Years", value: "8+", target: 8, suffix: "+" },
    { label: "Clients", value: "500+", target: 500, suffix: "+" },
    { label: "Programs", value: "12", target: 12, suffix: "" },
  ],
  about: [
    "I coach ambitious people who want more than generic workouts. Every session is built around strength, movement quality, and a plan you can actually sustain in real life.",
    "From private transformations to high-energy group classes, my approach blends intensity with structure so you train with purpose, recover smarter, and keep showing up stronger every week.",
  ],
  specialties: [
    {
      icon: "dumbbell",
      title: "Strength Coaching",
      description:
        "Progressive lifting programs built for muscle, confidence, and durable performance.",
    },
    {
      icon: "pulse",
      title: "Conditioning",
      description:
        "Fast-paced metabolic sessions that raise endurance without wasting time.",
    },
    {
      icon: "mobility",
      title: "Mobility Flow",
      description:
        "Athletic movement resets to improve range, control, and recovery quality.",
    },
  ],
  skillBars: [
    { label: "Strength Training", value: 92 },
    { label: "Nutrition Coaching", value: 85 },
    { label: "HIIT Programming", value: 96 },
  ],
  specialtyPills: ["HIIT", "Strength", "Fat Loss", "Nutrition", "Mobility"],
  schedule: {
    Mon: [
      { name: "Strength Lab", time: "6:30 AM", duration: "60 min" },
      { name: "Core Ignite", time: "7:15 PM", duration: "45 min" },
    ],
    Tue: [{ name: "HIIT Burn", time: "7:00 AM", duration: "45 min" }],
    Wed: [
      { name: "Mobility Reset", time: "6:30 AM", duration: "45 min" },
      { name: "Strength Lab", time: "7:30 PM", duration: "60 min" },
    ],
    Thu: [{ name: "Athlete Engine", time: "7:00 AM", duration: "45 min" }],
    Fri: [
      { name: "Power Circuit", time: "6:30 AM", duration: "50 min" },
      { name: "Mobility Reset", time: "6:30 PM", duration: "45 min" },
    ],
    Sat: [{ name: "Weekend Shred", time: "9:00 AM", duration: "60 min" }],
    Sun: [],
  },
  testimonials: [
    {
      name: "Maya S.",
      classType: "Strength Coaching",
      quote:
        "Alex rebuilt the way I train. I dropped fat, got stronger, and stopped second-guessing every workout.",
      rating: 5,
    },
    {
      name: "Omar K.",
      classType: "HIIT Burn",
      quote:
        "The sessions are intense but smart. I feel challenged every week without feeling broken the next day.",
      rating: 5,
    },
    {
      name: "Leah R.",
      classType: "Mobility Reset",
      quote:
        "I came in for fitness and stayed for the coaching. My posture, energy, and consistency are on another level.",
      rating: 5,
    },
    {
      name: "Daniel P.",
      classType: "Weekend Shred",
      quote:
        "Best group training environment I have joined in Dubai. It feels premium, focused, and seriously effective.",
      rating: 5,
    },
  ],
  social: {
    instagram: "#",
    youtube: "#",
    tiktok: "#",
  },
  contact: {
    whatsapp: "+971 50 000 0000",
    email: "alex@elevate.com",
    location: "Dubai Marina, UAE",
  },
} as const;

export type Trainer = typeof trainer;
