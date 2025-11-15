'use client'

import { Card } from '@/components/ui/card'

const caseStudies = [
  {
    business: 'Local Wellness Clinic',
    challenge: 'Outdated website with poor mobile experience and low Google visibility',
    improvement: 'Full website redesign, technical SEO optimization, local search setup',
    result: '3x increase in local search traffic, 40% more online bookings',
    industry: 'Healthcare',
  },
  {
    business: 'Independent Hair Salon',
    challenge: 'Website was losing search rankings after domain migration',
    improvement: 'Complete SEO audit, URL structure optimization, backlink analysis',
    result: 'Recovered all lost rankings within 6 weeks, +50% organic traffic',
    industry: 'Beauty',
  },
  {
    business: 'Local Retail Shop',
    challenge: 'Wanted to add online booking and improve customer experience',
    improvement: 'New booking system integration, UX improvements, speed optimization',
    result: '25% reduction in bounce rate, 60% increase in repeat customers',
    industry: 'Retail',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from local businesses we have helped
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-8 border border-border hover:shadow-lg transition-shadow flex flex-col">
              <div className="mb-6">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {study.industry}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {study.business}
              </h3>
              <div className="space-y-4 flex-grow">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                    Challenge
                  </p>
                  <p className="text-sm text-foreground">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                    Solution
                  </p>
                  <p className="text-sm text-foreground">{study.improvement}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase mb-1">
                    Result
                  </p>
                  <p className="text-sm font-semibold text-primary">{study.result}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
