'use client'

import { Card } from '@/components/ui/card'
import { Zap, Smartphone, Move, Plus, Shield, Share2 } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'SEO, GEO & Local Search Optimization',
    description: 'We fix technical issues, improve your on-page SEO, research the right keywords, and optimize your Google Business Profile so your business shows up higher on Google and Google Maps when people search in your area.',
    benefit: 'So you can get more local clients without learning SEO yourself.',
  },
  {
    icon: Smartphone,
    title: 'Website Redesign & Performance Optimization',
    description: 'Refresh outdated sites with modern design, better UX, mobile-friendly layouts, faster loading, and improved conversion.',
    benefit: 'So your site impresses visitors and converts them into customers.',
  },  
  {
    icon: Share2,
    title: 'Social Media Management & Content Support',
    description: 'Keep your business active and visible on platforms like Instagram, Facebook, and TikTok with consistent posts, branded content, and engagement. We help you plan, create, and publish content so your business stays top-of-mind for local customers without the stress of doing it yourself.',
    benefit: 'So you can build trust, increase visibility, and attract more clients from social channels.',
  },
  {
    icon: Move,
    title: 'Website Migration & Replatforming',
    description: 'Safely move websites between platforms (e.g., Wix, WordPress, Shopify, custom stacks) while protecting SEO, URLs, and tracking.',
    benefit: 'So you can upgrade platforms or move away from costly platforms without losing your rankings, and save money every month.',
  },
  {
    icon: Plus,
    title: 'New Features & Integrations',
    description: 'Add online booking, contact forms, e-commerce, membership areas, analytics, email newsletter signup, and other custom features.',
    benefit: 'So you can offer more to your customers without the hassle.',
  },
  {
    icon: Shield,
    title: 'Ongoing Care & Support',
    description: 'Monthly support, security updates, backups, and small improvements so business owners do not have to worry about their site.',
    benefit: 'So your website stays secure, fast, and up-to-date.',
  },

]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything your local business needs to succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group relative p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden bg-card hover:bg-card/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <p className="text-sm text-primary font-medium italic">
                    {service.benefit}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
