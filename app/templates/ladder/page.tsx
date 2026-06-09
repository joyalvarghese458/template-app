'use client'

import dynamic from 'next/dynamic'
import SmoothScroll from './_components/SmoothScroll'
import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import s from './theme.module.css'

// Below-fold sections — loaded only after initial paint
const Stats    = dynamic(() => import('./_components/Stats'))
const About    = dynamic(() => import('./_components/About'))
const Services = dynamic(() => import('./_components/Services'))
const Works    = dynamic(() => import('./_components/Works'))
const Contact  = dynamic(() => import('./_components/Contact'))

export default function LadderPage() {
  return (
    <SmoothScroll>
      <div className={`${s.page} ${s.grain}`}>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Works />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  )
}
