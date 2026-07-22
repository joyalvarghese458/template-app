'use client'

import dynamic from 'next/dynamic'
import SmoothScroll from './_components/SmoothScroll'
import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import s from './theme.module.css'

const sectionFallback = <div className="bg-black w-full" style={{ minHeight: 120 }} />

const Stats    = dynamic(() => import('./_components/Stats'),    { loading: () => sectionFallback })
const About    = dynamic(() => import('./_components/About'),    { loading: () => sectionFallback })
const Services = dynamic(() => import('./_components/Services'), { loading: () => sectionFallback })
const Works    = dynamic(() => import('./_components/Works'),    { loading: () => sectionFallback })
const Contact  = dynamic(() => import('./_components/Contact'),  { loading: () => sectionFallback })

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
