export type PracticeArea = {
  icon: string;
  title: string;
  description: string;
};

export type JourneyItem = {
  year: string;
  title: string;
  description: string;
};

export type Retreat = {
  name: string;
  location: string;
  duration: string;
  overview: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Resource = {
  type: string;
  icon: string;
  title: string;
  description: string;
};

export type SerenityData = {
  name: string;
  title: string;
  location: string;
  philosophy: string;
  bio: string;
  profileImage: string;
  aboutImage: string;
  students: number;
  certifications: string[];
  specialties: string[];
  yearsOfExperience: number;
  practiceAreas: PracticeArea[];
  experience: JourneyItem[];
  retreats: Retreat[];
  testimonials: Testimonial[];
  gallery: string[];
  resources: Resource[];
  socialLinks: {
    instagram: string;
    twitter: string;
    youtube: string;
  };
  contact: {
    email: string;
    whatsapp: string;
    tagline: string;
  };
};

export const data: SerenityData = {
  name: "Aria Blossom",
  title: "Yoga Teacher & Wellness Coach",
  location: "Bali, Indonesia",
  philosophy:
    "I believe the mat is a mirror. Every practice reveals something true — about how we move, how we breathe, and who we are becoming.",
  bio: "I found yoga at a crossroads — when life felt loud and my body felt like a stranger. That first practice in a small studio in Rishikesh didn't just stretch my muscles; it gave me back a sense of home inside myself. Fifteen years later, that feeling is exactly what I try to pass on to every student I meet.\n\nI trained in India, deepened my practice in Bali, and have since taught thousands of students across four continents. My classes are warm, unhurried, and honest. I don't teach yoga as performance — I teach it as a conversation between you and your breath.\n\nWhen I'm not on the mat, you'll find me wandering rice paddies, reading philosophy, or attempting to grow things in my garden.",
  profileImage:
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=520&h=650&fit=crop&q=80&auto=format",
  aboutImage:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=520&h=680&fit=crop&q=80&auto=format",
  students: 2400,
  certifications: [
    "E-RYT 500 — Yoga Alliance",
    "YACEP Continuing Education Provider",
    "Mindfulness-Based Stress Reduction (MBSR)",
    "Yin Yoga — Paul Grilley Lineage",
    "Pranayama & Breathwork — Himalayan Institute",
    "Trauma-Informed Yoga — Integrative Trauma Institute",
  ],
  specialties: [
    "Hatha & Vinyasa",
    "Yin & Restorative",
    "Mindfulness Meditation",
    "Pranayama",
    "Yoga Nidra",
    "1-on-1 Coaching",
  ],
  yearsOfExperience: 15,
  practiceAreas: [
    {
      icon: "sun",
      title: "Hatha Yoga",
      description:
        "Foundational postures with careful attention to breath and alignment. My go-to for students returning to their bodies.",
    },
    {
      icon: "wind",
      title: "Vinyasa Flow",
      description:
        "Movement as meditation. We link breath and posture into sequences that feel intuitive, alive, and deeply satisfying.",
    },
    {
      icon: "moon",
      title: "Yin Yoga",
      description:
        "Slow, quiet, and profound. Long holds that soften deep tissue and invite genuine stillness into the body.",
    },
    {
      icon: "heart",
      title: "Meditation",
      description:
        "Guided sits in mindfulness, loving-kindness, and body scan. I keep it simple, accessible, and real.",
    },
    {
      icon: "activity",
      title: "Breathwork",
      description:
        "Pranayama and contemporary breathwork to shift your nervous system, clear stagnation, and open energy.",
    },
    {
      icon: "users",
      title: "1-on-1 Sessions",
      description:
        "Private coaching tailored entirely to you — your body, your history, your goals. My most intimate offering.",
    },
  ],
  experience: [
    {
      year: "2009",
      title: "200-Hour Training — Rishikesh, India",
      description:
        "Everything started here. Six weeks in the foothills of the Himalayas, studying Ashtanga and classical Hatha under teachers who changed how I see the world.",
    },
    {
      year: "2012",
      title: "E-RYT 500 Advanced Certification",
      description:
        "300 more hours of study — anatomy, yoga philosophy, Ayurveda, and therapeutic applications. It made me a much more careful and curious teacher.",
    },
    {
      year: "2014",
      title: "First Retreat — Ubud, Bali",
      description:
        "I was terrified to lead my first retreat. It sold out in ten days and drew 22 students from nine countries. I've never looked back.",
    },
    {
      year: "2017",
      title: "Yin Yoga & Pranayama Deep Dive",
      description:
        "Spent six months studying Yin under Paul Grilley and pranayama at the Himalayan Institute. These practices completely changed my teaching.",
    },
    {
      year: "2020",
      title: "Trauma-Informed Yoga Training",
      description:
        "A certification that reshaped how I hold space. Every class I teach now is informed by this work — safety, choice, and compassion above all.",
    },
    {
      year: "2023",
      title: "Wellness Educator of the Year",
      description:
        "Recognised by the Global Wellness Institute. The student messages mean far more — but it was a beautiful moment to share.",
    },
  ],
  retreats: [
    {
      name: "Bali Deep Rest",
      location: "Ubud, Bali",
      duration: "10 Days",
      overview:
        "My flagship retreat. We slow down completely — morning Vinyasa, afternoon Yin, evening meditation, sacred water temple visits, and incredible food. Intimate groups of 12.",
    },
    {
      name: "Himalayan Silence",
      location: "Manali, India",
      duration: "7 Days",
      overview:
        "Altitude practice in the mountains. No WiFi, no agenda. Traditional Hatha, pranayama at dawn, Ayurvedic meals, and the quietest nights of your life.",
    },
    {
      name: "Pacific Reset",
      location: "Nosara, Costa Rica",
      duration: "5 Days",
      overview:
        "Ocean air, jungle mornings, and serious breathwork. We practice open-air with the sound of the Pacific. A wildly alive reset for the whole body.",
    },
    {
      name: "City Escape Weekend",
      location: "Online & Local Studios",
      duration: "2 Days",
      overview:
        "A gentle reframe for people who can't travel far. Two full days of practice, reflection, and community — wherever you are.",
    },
  ],
  testimonials: [
    {
      quote:
        "Aria's classes changed how I relate to my own body. There is a tenderness in her teaching that made me feel completely safe to explore for the first time.",
      name: "Maya Okonkwo",
      role: "Student, Lagos",
    },
    {
      quote:
        "The Bali retreat was the most meaningful ten days of my adult life. I went looking for rest and came back with a completely different relationship to myself.",
      name: "Thomas Heller",
      role: "Retreat Participant, Berlin",
    },
    {
      quote:
        "I've practiced with many teachers over twenty years. Aria combines depth of knowledge with a warmth that is simply extraordinary. She truly sees you.",
      name: "Sunita Rao",
      role: "Senior Practitioner, Mumbai",
    },
    {
      quote:
        "My private sessions with Aria helped me heal from a spinal injury that three physiotherapists couldn't resolve. I owe her more than I can say.",
      name: "James Whitfield",
      role: "Private Client, London",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=500&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=740&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=480&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=600&h=580&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1529693662653-9d480530a697?w=600&h=640&fit=crop&q=80&auto=format",
  ],
  resources: [
    {
      type: "Book",
      icon: "book",
      title: "The Yoga Sutras of Patanjali",
      description:
        "My worn, annotated copy. The philosophical bedrock of classical yoga — I return to it every year and find something new.",
    },
    {
      type: "Audio",
      icon: "headphones",
      title: "Morning Pranayama Series",
      description:
        "Fifteen recorded sessions I made for students who wanted to practice at home. Free, always. No sign-up needed.",
    },
    {
      type: "Guide",
      icon: "file",
      title: "30-Day Home Practice",
      description:
        "A structured beginner guide I wrote for people who feel intimidated by studios. Honest, simple, and actually doable.",
    },
  ],
  socialLinks: {
    instagram: "https://instagram.com/ariablossom",
    twitter: "https://twitter.com/ariablossom",
    youtube: "https://youtube.com/@ariablossom",
  },
  contact: {
    email: "hello@ariablossom.com",
    whatsapp: "+12345678900",
    tagline:
      "Whether you want to join a class, plan a retreat, or just say hello — my inbox is always open.",
  },
};
