"use client";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import SmoothScroll from "./components/common/SmoothScroll";
import About from "./components/sections/About";
import Classes from "./components/sections/Classes";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Schedule from "./components/sections/Schedule";
import Specialties from "./components/sections/Specialties";
import Testimonials from "./components/sections/Testimonials";
import { trainer } from "./data/trainer";
import styles from "./styles.module.css";

const sectionIds = ["about", "classes", "schedule", "contact"];

export default function ElevateTemplate() {
  return (
    <div className={styles.templateShell}>
      <SmoothScroll />
      <Navbar trainerName={trainer.name} sectionIds={sectionIds} />
      <main>
        <Hero trainer={trainer} />
        <About trainer={trainer} />
        <Specialties trainer={trainer} />
        <Classes />
        <Testimonials trainer={trainer} />
        <Schedule trainer={trainer} />
        <Contact trainer={trainer} />
      </main>
      <Footer trainerName={trainer.name} />
    </div>
  );
}
