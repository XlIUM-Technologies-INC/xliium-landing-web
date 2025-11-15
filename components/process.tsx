'use client'

import { Card } from '@/components/ui/card'
import { FileText, Search, CheckSquare, Wrench, CheckCircle, Check } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: FileText,
    title: 'Discovery Call',
    description: 'A free 30-60 minute online meeting to learn about the business, goals, and current website.',
  },
  {
    number: 2,
    icon: Search,
    title: 'Website & SEO Audit',
    description: 'We review the existing site, SEO, speed, and user experience.',
  },
  {
    number: 3,
    icon: CheckSquare,
    title: 'Plan & Proposal',
    description: 'Clear scope, timeline, and pricing with practical recommendations.',
  },
  {
    number: 4,
    icon: Wrench,
    title: 'Implementation',
    description: 'Design, development, SEO fixes, and new features, with regular check-ins.',
  },
  {
    number: 5,
    icon: CheckCircle,
    title: 'Launch & Ongoing Support',
    description: 'Smooth launch, tracking setup, and optional monthly support.',
  },
]

const approaches = [
  "Technical-first. Your project is handled by full-stack developers and SEO specialists—not generic marketers.",
  "Straightforward & honest. We'll tell you what matters, what doesn't, and what results you can realistically expect.",
  "Analysis before action. We review your site's speed, structure, SEO, and competitors so every improvement is based on real data.",
  "Built for visibility. Our work focuses on making your business easier to find online—on Google, Google Maps, AI search and across local search.",
  "Clear plan, no confusion. You'll always know what we're doing, the timeline, and how each step helps your business grow.",
  "Transparent pricing. No long-term contracts, no hidden fees, and no surprise add-ons—just clear, predictable pricing.",
  "Direct access, no layers. You work directly with our small team. No ticket systems, no waiting days for a response."
]


export default function Process() {
  return (
    <>
      <section id="process" className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A straightforward, transparent approach to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex flex-col items-center">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-1/2 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 mt-12 transform translate-x-full"></div>
                  )}
                  
                  <Card className="w-full p-6 mb-4 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-bold text-foreground text-center mb-2 text-sm">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-r from-background via-primary/5 to-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                  Why Choose Us
                </h2>
              </div>
            </div>

            <div className="flex-1">
              <Card className="p-8 border border-border/30 bg-white/50 dark:bg-background/50">
                <div className="space-y-4">
                  {approaches.map((approach, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {approach}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
