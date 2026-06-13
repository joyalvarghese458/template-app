"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Wind,
  Moon,
  Heart,
  Activity,
  Users,
  MapPin,
  Clock,
  Mail,
  MessageCircle,
  Camera,
  X as XIcon,
  Play,
  BookOpen,
  Headphones,
  FileText,
  ChevronRight,
  ArrowRight,
  Menu,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import { useState } from "react";
import { data } from "./data";

type IconComponent = ComponentType<LucideProps>;

const iconMap: Record<string, IconComponent> = {
  sun: Sun,
  wind: Wind,
  moon: Moon,
  heart: Heart,
  activity: Activity,
  users: Users,
  book: BookOpen,
  headphones: Headphones,
  file: FileText,
};

const VP = { once: true, amount: 0.16 } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VP,
    transition: { duration: 0.7, ease: EASE, delay },
  } as const;
}

function scaleIn(delay = 0) {
  return {
    initial: { opacity: 0, scale: 0.94 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: VP,
    transition: { duration: 0.7, ease: EASE, delay },
  } as const;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="tracking-widest text-xs uppercase text-ink-soft font-mono">
      {children}
    </p>
  );
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#practice", label: "Classes" },
  { href: "#journey", label: "Journey" },
  { href: "#retreats", label: "Retreats" },
  { href: "#gallery", label: "Gallery" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-black/6">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-serif text-lg text-ink leading-none tracking-tight"
        >
          {data.name}
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft hover:text-ink transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-brand text-white text-sm px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors duration-200 hidden sm:inline-flex"
          >
            Work With Me
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-ink-soft hover:text-ink transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-black/6 px-6 pb-5 pt-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-ink-soft hover:text-ink transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex bg-brand text-white text-sm px-5 py-2.5 rounded-full mt-2"
          >
            Work With Me
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const stats = [
    { value: `${data.students.toLocaleString()}+`, label: "Students" },
    { value: `${data.yearsOfExperience}`, label: "Years Teaching" },
    { value: `${data.retreats.length}`, label: "Retreats Hosted" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
      style={{
        background:
          "radial-gradient(ellipse 120% 80% at 60% 50%, rgba(180,210,190,0.2) 0%, transparent 65%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-7">
            <motion.div {...fadeUp(0)} className="flex items-center gap-2">
              <MapPin size={13} className="text-ink-soft" />
              <span className="font-mono text-xs text-ink-soft tracking-widest uppercase">
                {data.location}
              </span>
            </motion.div>

            <motion.div {...fadeUp(0.07)}>
              <p className="font-mono text-xs tracking-widest uppercase text-ink-soft mb-3">
                {data.title}
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.25rem] leading-[1.04] tracking-tight text-ink">
                Hi, I&rsquo;m {data.name.split(" ")[0]}.
              </h1>
            </motion.div>

            <motion.p
              {...fadeUp(0.14)}
              className="text-base text-ink-soft leading-relaxed max-w-md"
            >
              {data.philosophy}
            </motion.p>

            <motion.div
              {...fadeUp(0.2)}
              className="flex flex-wrap gap-4 pt-1"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand text-white px-7 py-3.5 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-brand-dark"
              >
                Work With Me
              </a>
              <a
                href="#practice"
                className="inline-flex items-center gap-2 border border-black/20 text-ink px-7 py-3.5 rounded-full text-sm font-medium transition-colors duration-200 hover:border-black/40"
              >
                My Classes
                <ArrowRight size={14} />
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.27)}
              className="flex gap-8 pt-2 border-t border-black/6"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl text-ink leading-none">
                    {s.value}
                  </p>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-ink-soft mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            {...scaleIn(0.1)}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-72 sm:w-80 lg:w-[22rem] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.12)]">
                <img
                  src={data.profileImage}
                  alt={`${data.name} — ${data.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[3rem] border border-black/6 pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-ink-soft">
          Scroll
        </span>
        <div className="w-px h-10 bg-ink/12 animate-[scrollBounce_1.6s_ease-in-out_infinite]" />
      </motion.div>
    </section>
  );
}

function About() {
  const paragraphs = data.bio.split("\n\n");

  return (
    <section id="about" className="py-24 lg:py-32 bg-canvas-bg">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          <div>
            <motion.div {...fadeUp()}>
              <SectionLabel>About me</SectionLabel>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-ink mt-3 mb-8">
                A bit about
                <br />
                who I am
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-ink-soft leading-relaxed">
                  {p}
                </p>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.18)} className="mt-8">
              <SectionLabel>Specialties</SectionLabel>
              <div className="mt-4 flex flex-wrap gap-2">
                {data.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="px-4 py-1.5 rounded-full border border-black/10 text-xs text-ink-soft font-mono tracking-wide"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-10">
            <motion.div
              {...fadeUp(0.05)}
              className="bg-slate-50 rounded-3xl p-8"
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif text-7xl text-brand leading-none tabular-nums">
                  {data.yearsOfExperience}
                </span>
                <span className="text-ink-soft text-sm leading-snug">
                  years of
                  <br />
                  practice &amp;
                  <br />
                  teaching
                </span>
              </div>
              <SectionLabel>Certifications</SectionLabel>
              <ul className="mt-4 space-y-2.5">
                {data.certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-start gap-3 text-sm text-ink-soft"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticeAreas() {
  return (
    <section
      id="practice"
      className="py-24 lg:py-32"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(180,210,190,0.13) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp()} className="mb-14">
          <SectionLabel>What I teach</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-ink mt-3 max-w-md">
            My classes &amp; offerings
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.practiceAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div
                key={area.title}
                {...fadeUp(i * 0.07)}
                className="bg-white rounded-3xl p-7 shadow-[0_4px_28px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_44px_rgba(0,0,0,0.09)] transition-shadow duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(0,119,181,0.08)" }}
                >
                  {Icon && <Icon size={18} className="text-brand" />}
                </div>
                <h3 className="font-serif text-xl text-ink mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeUp(0.3)} className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-brand font-medium group"
          >
            Interested in a private session?
            <ChevronRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="py-24 lg:py-32 bg-canvas-bg">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp()} className="mb-14">
          <SectionLabel>Journey</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-ink mt-3">
            My story so far
          </h2>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[0.6875rem] sm:left-[1.125rem] top-0 bottom-0 w-px bg-slate-200"
          />

          <div className="space-y-8">
            {data.experience.map((item, i) => (
              <motion.div
                key={item.year}
                {...fadeUp(i * 0.06)}
                className="relative pl-10 sm:pl-14"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-[0.6875rem] sm:left-[1.125rem] top-[1.375rem] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand ring-4 ring-white z-10"
                />
                <div className="bg-white rounded-2xl px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <span className="font-mono text-xs text-brand tracking-widest uppercase">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-lg text-ink mt-1 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Retreats() {
  return (
    <section id="retreats" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp()} className="mb-14">
          <SectionLabel>Retreats &amp; Workshops</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-ink mt-3">
            Retreats I host
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.retreats.map((retreat, i) => (
            <motion.div
              key={retreat.name}
              {...fadeUp(i * 0.08)}
              className="bg-white rounded-3xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_44px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col"
            >
              <h3 className="font-serif text-xl text-ink mb-3">
                {retreat.name}
              </h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="flex items-center gap-1.5 text-xs text-ink-soft font-mono">
                  <MapPin size={11} />
                  {retreat.location}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-ink-soft font-mono">
                  <Clock size={11} />
                  {retreat.duration}
                </span>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed flex-1">
                {retreat.overview}
              </p>
              <div className="mt-5 pt-5 border-t border-slate-100">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm text-brand font-medium group"
                >
                  Ask me about this retreat
                  <ChevronRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-canvas-bg">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp()} className="mb-14">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-ink mt-3">
            What students say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp(i * 0.07)}
              className="bg-slate-50 rounded-3xl p-7 flex flex-col"
            >
              <span
                className="font-serif text-5xl leading-none select-none mb-2"
                style={{ color: "rgba(0,119,181,0.16)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-ink-soft leading-relaxed flex-1 -mt-3 text-[0.9375rem]">
                {t.quote}
              </p>
              <div className="mt-5 pt-5 border-t border-black/6">
                <p className="font-medium text-ink text-sm">{t.name}</p>
                <p className="font-mono text-xs text-ink-soft tracking-wide mt-0.5">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-32"
      style={{
        background:
          "radial-gradient(ellipse 90% 60% at 50% 50%, rgba(180,210,190,0.11) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp()} className="mb-14">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-ink mt-3">
            Glimpses of my world
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {data.gallery.map((src, i) => (
            <motion.div
              key={i}
              {...scaleIn(i * 0.06)}
              className="break-inside-avoid mb-4"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full object-cover block"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section id="resources" className="py-24 lg:py-32 bg-canvas-bg">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp()} className="mb-14">
          <SectionLabel>Resources</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-ink mt-3">
            Things I share
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.resources.map((resource, i) => {
            const Icon = iconMap[resource.icon];
            return (
              <motion.div
                key={resource.title}
                {...fadeUp(i * 0.09)}
                className="bg-slate-50 rounded-3xl p-7"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(0,119,181,0.08)" }}
                >
                  {Icon && <Icon size={18} className="text-brand" />}
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft mb-2">
                  {resource.type}
                </p>
                <h3 className="font-serif text-lg text-ink mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {resource.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const whatsappNumber = data.contact.whatsapp.replace(/\D/g, "");

  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(180,210,190,0.16) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-xl mx-auto px-6 sm:px-8 text-center">
        <motion.div {...fadeUp()}>
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-ink mt-3 mb-5">
            Let&rsquo;s connect
          </h2>
        </motion.div>

        <motion.p
          {...fadeUp(0.1)}
          className="text-ink-soft leading-relaxed mb-10"
        >
          {data.contact.tagline}
        </motion.p>

        <motion.div
          {...fadeUp(0.18)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={`mailto:${data.contact.email}`}
            className="inline-flex items-center gap-2.5 bg-brand text-white px-7 py-3.5 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-brand-dark w-full sm:w-auto justify-center"
          >
            <Mail size={15} />
            Send me an email
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="inline-flex items-center gap-2.5 border border-black/20 text-ink px-7 py-3.5 rounded-full text-sm font-medium transition-colors duration-200 hover:border-black/40 w-full sm:w-auto justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={15} />
            Message on WhatsApp
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.26)}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <a
            href={data.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-ink-soft hover:text-ink transition-colors duration-200"
          >
            <Camera size={19} />
          </a>
          <a
            href={data.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="text-ink-soft hover:text-ink transition-colors duration-200"
          >
            <XIcon size={19} />
          </a>
          <a
            href={data.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-ink-soft hover:text-ink transition-colors duration-200"
          >
            <Play size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/6 py-8 bg-canvas-bg">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-serif text-sm text-ink">{data.name}</p>
        <p className="font-mono text-xs text-ink-soft">
          {data.title} &middot; {data.location}
        </p>
        <p className="font-mono text-xs text-ink-soft">
          &copy; {new Date().getFullYear()} &middot; {data.contact.email}
        </p>
      </div>
    </footer>
  );
}

export default function Serenity() {
  return (
    <div className="bg-canvas-bg text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-lg focus:text-sm"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <PracticeAreas />
        <Journey />
        <Retreats />
        <Testimonials />
        <Gallery />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
