'use client'

import { motion } from 'framer-motion'
import {
  Scissors,
  Cake,
  Stethoscope,
  ShoppingBag,
  Briefcase,
} from 'lucide-react'

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
    <section
      id="clients"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gray-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6"
          >
            <span className="text-sm font-medium text-gray-700">Our Clients</span>
          </motion.div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4 script-font" style={{ color: 'rgb(138, 178, 242)' }}>
            Who We Work With
          </h3>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap');
            
            * {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

            }
            .script-font {
              font-family: 'Instrument Serif', serif;
              font-weight: 400;
              font-style: italic;
            }
          `}</style>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with local businesses across multiple industries to help them grow their online presence and attract more customers.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => {
            const Icon = client.icon

            return (
        
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white hover:bg-gray-50 shadow-sm transition-all duration-300 text-center overflow-hidden"
                style={{
                  border: '1px solid transparent',
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(to bottom, rgba(229, 231, 235, 0.3), rgba(255, 255, 255, 0))',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top, rgba(229, 231, 235, 0.3), transparent 70%)'
                  }}
                ></div>

                <div className="relative z-10">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-3 bg-gray-100 rounded-2xl group-hover:bg-gray-200 transition-colors">
                      <Icon className="w-6 h-6 text-gray-900 transition-colors" />
                    </div>
                  </motion.div>

                  <h4 className="text-base font-bold text-gray-900 mb-2 transition-colors">
                    {client.name}
                  </h4>

                  <p className="text-sm text-gray-600 leading-relaxed transition-colors">
                    {client.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}