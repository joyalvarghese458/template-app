'use client'

import SmoothScroll from './_components/SmoothScroll'
import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import About from './_components/About'
import Works from './_components/Works'
import Contact from './_components/Contact'
import s from './theme.module.css'

export default function LadderPage() {
  return (
    <SmoothScroll>
      <div className={`${s.page} ${s.grain}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Works />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  )
}
