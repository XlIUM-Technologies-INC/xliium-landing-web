'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import WhoWeWorkWith from '@/components/who-we-work-with'
import Process from '@/components/process'
// import CaseStudies from '@/components/case-studies'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <WhoWeWorkWith />
      <Process />
      {/* <CaseStudies /> */}
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
