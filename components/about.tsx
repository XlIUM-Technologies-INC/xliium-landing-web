"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const teamMembers = [
    {
      name: "Xiaohong Xu",
      role: "Technical Lead & Full-Stack Developer",
      image: "/xiaohong.jpg",
    },
    {
      name: "Shuyang (Daphne) Liu",
      role: "Client Success & Project Manager",
      image: "/daphne.png",
    },
    {
      name: "Hakim Nshimiyimana",
      role: "SEO Specialist & Content Strategist",
      image: "/hakim.jpg",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: i * 0.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap');
        
       
        .script-font {
          font-family: 'Instrument Serif', serif;
          font-weight: 400;
          font-style: italic;
        }
        .gradient-text {
          background: linear-gradient(to right, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4  script-font  "
          >
            Meet Our Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto"
          >
            We are a small, technical team based in Canada focused on delivering
            practical results for local businesses. With deep expertise in
            full-stack development and SEO, we understand what it takes to build
            websites that work.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            We believe in clear communication, transparency, and long-term
            relationships. We work together as a family to help your business
            succeed online.
          </motion.p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Profile Image with Glassmorphism */}
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glassmorphism container */}
                <motion.div
                  className="relative p-2 backdrop-blur-xl bg-white/30 border border-white/50 shadow-2xl"
                  style={{
                    borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
                  }}
                  animate={{
                    borderRadius: [
                      "60% 40% 30% 70%/60% 30% 70% 40%",
                      "30% 60% 70% 40%/50% 60% 30% 60%",
                      "60% 40% 30% 70%/60% 30% 70% 40%",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  <div className="relative w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
              </motion.div>

              {/* Name and Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 font-medium">
                  {member.role}
                </p>
              </motion.div>

              {/* Decorative line */}
              <motion.div className="w-0 h-0.5 bg-black mt-4 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Mobile swipe hint (hidden on desktop) */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm text-gray-500 mt-8 md:hidden"
        >
          ← Swipe to see more team members →
        </motion.p>
      </div>
    </section>
  );
}
