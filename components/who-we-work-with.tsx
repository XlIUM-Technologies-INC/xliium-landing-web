'use client'

import { Sparkles, Scissors, Cake, Stethoscope, ShoppingBag, Briefcase } from 'lucide-react'

export default function WhoWeWorkWith() {
  const clients = [
    {
      name: 'Beauty and Nail Salons',
      description: 'Hair, nails, and beauty services',
      icon: Scissors,
    },
    {
      name: 'Bakeries and Cafes',
      description: 'Pastries, cakes, and coffee shops',
      icon: Cake,
    },
    {
      name: 'Clinics and Wellness',
      description: 'Medical and wellness studios',
      icon: Stethoscope,
    },
    {
      name: 'Retail and Shops',
      description: 'Local retail and e-commerce',
      icon: ShoppingBag,
    },
    {
      name: 'Service Businesses',
      description: 'Professionals and consultants',
      icon: Briefcase,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Our Clients</span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Who We Work With
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We partner with diverse local businesses across different industries to help them grow their online presence and attract more customers through strategic web and SEO solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => {
            const IconComponent = client.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-card border border-border/50 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {client.name}
                  </h4>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {client.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
