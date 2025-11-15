'use client'

import { Button } from '@/components/ui/button'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative py-20 md:py-40 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/50"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <p className="text-sm font-semibold text-primary">
              Done-for-you websites and SEO
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
            Grow your local business online
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
            We help local businesses get more clients with custom websites and proven SEO and local search strategies. No technical knowledge required. 
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              size="lg"
            >
              Book Your Free Consultation
            </Button>
            <Button
              onClick={() => scrollToSection('services')}
              variant="outline"
              className="text-base px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold transition-all"
              size="lg"
            >
              Explore Services
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-6 font-medium">
            Based in Ontario, Canada • Serving Local Service Businesses Across North America
          </p>
        </div>
      </div>
    </section>
  )
}
