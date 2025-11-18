'use client'

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as React from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import WhoWeWorkWith from '@/components/who-we-work-with';
import Process from '@/components/process';
// import CaseStudies from '@/components/case-studies';
import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero can be full screen without animation */}
      <Hero />

      {/* Sections with scroll animations */}
      <AnimatedSection>
        <Services />
      </AnimatedSection>

      <AnimatedSection>
        <WhoWeWorkWith />
      </AnimatedSection>

      <AnimatedSection>
        <Process />
      </AnimatedSection>

      {/* <AnimatedSection>
        <CaseStudies />
      </AnimatedSection> */}

      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>

      <Footer />
    </div>
  );
}
