// Services.tsx - Complete version with unique card animations

"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap, Smartphone, Move, Plus, Shield, Share2 } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Zap,
    title: "SEO, GEO & Local Search Optimization",
    description:
      "We fix technical issues, improve your on-page SEO, and optimize for local search results.",
    benefit: "So you can get more local clients without learning SEO yourself.",
  },
  {
    icon: Smartphone,
    title: "Website Redesign & Performance Optimization",
    description:
      "Refresh outdated sites with modern design, faster loading, and better user experience.",
    benefit:
      "So your site impresses visitors and converts them into customers.",
  },
  {
    icon: Share2,
    title: "Social Media Management & Content Support",
    description:
      "Keep your business active and visible across social platforms with consistent, engaging content.",
    benefit: "So you can build trust and attract more clients.",
  },
  {
    icon: Move,
    title: "Website Migration & Replatforming",
    description:
      "Safely move websites between platforms, preserving SEO rankings and improving performance.",
    benefit: "So you can upgrade without losing rankings.",
  },
  {
    icon: Plus,
    title: "New Features & Integrations",
    description:
      "Add online booking, forms, analytics, payment systems, and custom functionality.",
    benefit: "So you can offer more without hassle.",
  },
  {
    icon: Shield,
    title: "Ongoing Care & Support",
    description:
      "Monthly support, security updates, backups, monitoring, and technical assistance.",
    benefit: "So your website stays secure, fast, and up-to-date.",
  },
];

// Unique animation variants for each card position
const cardVariants = {
  // Top left - Slide from left with rotation
  topLeft: {
    hidden: { opacity: 0, x: -100, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.1,
      },
    },
  },
  // Top right - Slide from right with rotation
  topRight: {
    hidden: { opacity: 0, x: 100, rotate: 10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.2,
      },
    },
  },
  // Middle left - Scale up from center
  middleLeft: {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.3,
      },
    },
  },
  // Middle right - Fade in with bounce
  middleRight: {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.4,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  },
  // Bottom left - Slide from bottom with fade
  bottomLeft: {
    hidden: { opacity: 0, y: 100, x: -50 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.5,
      },
    },
  },
  // Bottom right - Spiral in
  bottomRight: {
    hidden: { opacity: 0, scale: 0, rotate: 180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.6,
      },
    },
  },
};

const animationSequence = [
  "topLeft",
  "topRight",
  "middleLeft",
  "middleRight",
  "bottomLeft",
  "bottomRight",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-linear-to-t from-gray-50 via-white to-gray-50 pt-48 pb-72 md:pt-24 md:pb-60 lg:pt-28 lg:pb-72"
    >
      <motion.div
        className="absolute inset-0 w-full h-full mt-40 bg-cover bg-center pointer-events-none bg-linear-to-t from-white via-gray-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/background@2x.png"
          width={1920}
          height={1080}
          alt="Image of hills"
          className="absolute w-full h-full object-cover opacity-30"
        />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 ">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gray-200 rounded-full blur-3xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gray-200 rounded-full blur-3xl"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        ></motion.div>
      </div>

      {/* Floating Google Image - Top Left with Glassmorphism */}
      <motion.div
        className="absolute top-78 left-2 md:top-48 md:left-6 lg:top-48 lg:left-8 z-20 pointer-events-none"
        initial={{ opacity: 0, x: -150, y: -100, rotate: -25 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: -15 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [-15, -12, -15],
            borderRadius: [
              "60% 40% 30% 70%/60% 30% 70% 40%",
              "30% 60% 70% 40%/50% 60% 30% 60%",
              "60% 40% 30% 70%/60% 30% 70% 40%",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-48 h-48 p-6 backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl"
          style={{
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
            boxShadow:
              "0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)",
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/Google.png"
              alt="Google"
              width={90}
              height={90}
              className="object-contain w-full h-full bg-transparent opacity-90"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Analytics Image - Bottom Right with Glassmorphism */}
      <motion.div
        className="absolute bottom-20 right-16 md:right-6 lg:right-8 z-20 pointer-events-none"
        initial={{ opacity: 0, x: 150, y: 100, rotate: 25 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 15 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [15, 18, 15],
            borderRadius: [
              "40% 60% 70% 30%/60% 40% 60% 40%",
              "70% 30% 40% 60%/40% 70% 30% 60%",
              "40% 60% 70% 30%/60% 40% 60% 40%",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="relative w-52 h-52 p-6 backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl"
          style={{
            borderRadius: "40% 60% 70% 30%/60% 40% 60% 40%",
            boxShadow:
              "0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)",
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/analytics.webp"
              alt="Analytics"
              width={176}
              height={176}
              className="object-contain w-full h-full"
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-48 "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6"
          >
            <span className="text-sm font-medium text-gray-700">
              What We Do
            </span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 script-font"
            style={{ color: "rgb(138, 178, 242)" }}
          >
            Our Services
          </h2>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap');
            .script-font {
              font-family: 'Instrument Serif', serif;
              font-weight: 400;
              font-style: italic;
            }
          `}</style>
        </motion.div>

        {/* Cards Grid with Unique Animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const animationType = animationSequence[
              index
            ] as keyof typeof cardVariants;

            return (
              <motion.div
                key={index}
                variants={cardVariants[animationType]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card
                  className="relative p-8 rounded-3xl bg-white hover:bg-gray-50 transition-all duration-300 group h-full"
                  style={{
                    border: "1px solid transparent",
                    backgroundImage:
                      "linear-gradient(white, white), linear-gradient(to bottom, rgba(229, 231, 235, 0.3), rgba(255, 255, 255, 0))",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                  }}
                >
                  {/* Icon with unique hover animation */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gray-100 transition-all duration-300"
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Icon className="w-7 h-7 text-gray-900 transition-all duration-300" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-900 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefit */}
                  <motion.div
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, x: 5 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0 bg-gray-900"></div>
                    <p className="font-medium italic text-gray-900">
                      {service.benefit}
                    </p>
                  </motion.div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at top right, rgba(229, 231, 235, 0.3), transparent 70%)",
                    }}
                  ></motion.div>

                  {/* Floating particles on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full"
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
