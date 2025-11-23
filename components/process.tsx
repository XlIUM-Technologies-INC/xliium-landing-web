"use client";

import { Card } from "@/components/ui/card";
import {
  FileText,
  Search,
  CheckSquare,
  Wrench,
  CheckCircle,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Discovery Call",
    description:
      "A free 30-60 minute online meeting to learn about the business, goals, and current website.",
  },
  {
    number: 2,
    icon: Search,
    title: "Website & SEO Audit",
    description:
      "We review the existing site, SEO, speed, and user experience.",
  },
  {
    number: 3,
    icon: CheckSquare,
    title: "Plan & Proposal",
    description:
      "Clear scope, timeline, and pricing with practical recommendations.",
  },
  {
    number: 4,
    icon: Wrench,
    title: "Implementation",
    description:
      "Design, development, SEO fixes, and new features, with regular check-ins.",
  },
  {
    number: 5,
    icon: CheckCircle,
    title: "Launch & Ongoing Support",
    description: "Smooth launch, tracking setup, and optional monthly support.",
  },
];

const approaches = [
  "Technical-first. Your project is handled by full-stack developers and SEO specialists—not generic marketers.",
  "Straightforward & honest. We'll tell you what matters, what doesn't, and what results you can realistically expect.",
  "Analysis before action. We review your site's speed, structure, SEO, and competitors so every improvement is based on real data.",
  "Built for visibility. Our work focuses on making your business easier to find online—on Google, Google Maps, AI search and across local search.",
  "Clear plan, no confusion. You'll always know what we're doing, the timeline, and how each step helps your business grow.",
  "Transparent pricing. No long-term contracts, no hidden fees, and no surprise add-ons—just clear, predictable pricing.",
  "Direct access, no layers. You work directly with our small team. No ticket systems, no waiting days for a response.",
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Determine if card should be on left or right (zigzag pattern)
  const isLeft = index % 2 === 0;

  // Create a curved path animation
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    isLeft ? [-200, -100, 0, -50, -150] : [200, 100, 0, 50, 150]
  );

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.7, 1.05, 1, 0.85]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 0.9],
    [0, 1, 1, 0.3]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isLeft ? [-8, 0, 5] : [8, 0, -5]
  );

  const Icon = step.icon;

  return (
    <motion.div
      ref={cardRef}
      style={{ x, y, scale, opacity, rotate }}
      className={`mb-32 ${isLeft ? "mr-auto" : "ml-auto"}`}
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

      {/* Number Badge with path indicator */}
      <motion.div
        className={`flex ${isLeft ? "justify-start" : "justify-end"} mb-6`}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-lg relative z-10">
            <span className="text-white font-bold text-xl">{step.number}</span>
          </div>
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gray-900 rounded-full blur-xl opacity-50"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Card */}
      <Card
        className={`max-w-xl p-8 bg-white hover:bg-gray-50 transition-all duration-500 rounded-3xl overflow-hidden ${
          isLeft ? "ml-12" : "mr-12"
        }`}
        style={{
          border: "1px solid transparent",
          backgroundImage:
            "linear-gradient(white, white), linear-gradient(to bottom, rgba(229, 231, 235, 0.3), rgba(255, 255, 255, 0))",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        {/* Icon */}
        <div
          className={`flex items-center ${
            isLeft ? "justify-start" : "justify-end"
          } mb-6`}
        >
          <motion.div
            className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shadow-sm"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-8 h-8 text-gray-900" />
          </motion.div>
        </div>

        {/* Content */}
        <h3
          className={`font-bold text-gray-900 mb-3 text-xl ${
            isLeft ? "text-left" : "text-right"
          }`}
        >
          {step.title}
        </h3>

        <p
          className={`text-sm text-gray-600 leading-relaxed ${
            isLeft ? "text-left" : "text-right"
          }`}
        >
          {step.description}
        </p>

        {/* Decorative corner element */}
        <motion.div
          className={`absolute ${
            isLeft ? "top-0 left-0" : "top-0 right-0"
          } w-16 h-16 opacity-10`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div
            className={`w-full h-full bg-gray-900 ${
              isLeft ? "rounded-br-full" : "rounded-bl-full"
            }`}
          />
        </motion.div>
      </Card>
    </motion.div>
  );
}

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Process Section */}
      <section
        id="process"
        className="relative py-24 md:py-32 overflow-hidden bg-linear-to-b from-gray-50 via-white to-gray-50"
      >
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gray-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-200 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-32"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight script-font ">
              Our Process
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A straightforward approach to transforming your online presence
            </p>
          </motion.div>

          {/* Steps with scroll effect - Desktop */}
          <div className="hidden lg:block relative" ref={containerRef}>
            {/* Curved Road Path SVG */}
            <svg
              className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full pointer-events-none"
              style={{ maxWidth: "1400px" }}
            >
              <defs>
                <linearGradient
                  id="roadGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#9ca3af" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Curved path representing the road */}
              <motion.path
                d="M 700 0 Q 400 300, 700 600 Q 1000 900, 700 1200 Q 400 1500, 700 1800 Q 1000 2100, 700 2400"
                stroke="url(#roadGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10 15"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Animated progress line */}
              <motion.path
                d="M 700 0 Q 400 300, 700 600 Q 1000 900, 700 1200 Q 400 1500, 700 1800 Q 1000 2100, 700 2400"
                stroke="#111827"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                style={{ pathLength: lineProgress }}
                initial={{ pathLength: 0 }}
              />
            </svg>

            {/* Floating Image 1 - Top Left (Adventure) */}
            <motion.div
              className="absolute -left-32 top-20 z-0 pointer-events-none"
              initial={{ opacity: 0, x: -100, y: -50, rotate: -20 }}
              whileInView={{ opacity: 0.6, x: 0, y: 0, rotate: -15 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [-15, -10, -15],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-40 h-40 p-4 backdrop-blur-xl bg-white/40 border border-white/60 shadow-2xl"
                style={{ borderRadius: "60% 40% 35% 65%/55% 40% 60% 45%" }}
              >
                <motion.div
                  animate={{
                    borderRadius: [
                      "60% 40% 35% 65%/55% 40% 60% 45%",
                      "35% 65% 60% 40%/50% 60% 35% 65%",
                      "60% 40% 35% 65%/55% 40% 60% 45%",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/10"
                />
                <Image
                  src="/undraw_adventure_9my9.png"
                  alt="Adventure"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full relative z-10"
                />
              </motion.div>
            </motion.div>

            {/* Floating Image 2 - Middle Right (Search) */}
            <motion.div
              className="absolute -right-32 top-[40%] z-0 pointer-events-none"
              initial={{ opacity: 0, x: 100, y: 50, rotate: 18 }}
              whileInView={{ opacity: 0.6, x: 0, y: 0, rotate: 12 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [12, 16, 12],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="relative w-44 h-44 p-4 backdrop-blur-xl bg-white/40 border border-white/60 shadow-2xl"
                style={{ borderRadius: "45% 55% 50% 50%/60% 45% 55% 40%" }}
              >
                <motion.div
                  animate={{
                    borderRadius: [
                      "45% 55% 50% 50%/60% 45% 55% 40%",
                      "50% 50% 55% 45%/45% 60% 40% 60%",
                      "45% 55% 50% 50%/60% 45% 55% 40%",
                    ],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/10"
                />
                <Image
                  src="/undraw_search_vimp.png"
                  alt="Search"
                  width={220}
                  height={220}
                  className="object-contain w-full h-full relative z-10"
                />
              </motion.div>
            </motion.div>

            {/* Floating Image 3 - Bottom Left (Web Search) */}
            <motion.div
              className="absolute -left-28 bottom-40 z-0 pointer-events-none"
              initial={{ opacity: 0, x: -80, y: 80, rotate: -22 }}
              whileInView={{ opacity: 0.6, x: 0, y: 0, rotate: -16 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  rotate: [-16, -12, -16],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="relative w-38 h-38 p-4 backdrop-blur-xl bg-white/40 border border-white/60 shadow-2xl"
                style={{ borderRadius: "50% 50% 40% 60%/55% 45% 60% 40%" }}
              >
                <motion.div
                  animate={{
                    borderRadius: [
                      "50% 50% 40% 60%/55% 45% 60% 40%",
                      "40% 60% 50% 50%/45% 55% 40% 60%",
                      "50% 50% 40% 60%/55% 45% 60% 40%",
                    ],
                  }}
                  transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/10"
                />
                <Image
                  src="/undraw_web-search_9qqc.png"
                  alt="Web Search"
                  width={190}
                  height={190}
                  className="object-contain w-full h-full relative z-10"
                />
              </motion.div>
            </motion.div>

            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>

          {/* Steps - Mobile/Tablet Layout */}
          <div className="lg:hidden space-y-6 mb-20">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card
                    className="p-6 bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-2xl"
                    style={{
                      border: "1px solid transparent",
                      backgroundImage:
                        "linear-gradient(white, white), linear-gradient(to bottom, rgba(229, 231, 235, 0.3), rgba(255, 255, 255, 0))",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Number */}
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {step.number}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-gray-900" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-base">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Connecting line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="ml-6 h-8 w-0.5 bg-gradient-to-b from-gray-300 to-transparent"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 md:py-32 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-8"
              >
                <span className="text-sm font-medium text-gray-700">
                  What Sets Us Apart
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight script-font ">
                Built Different.
                <br />
                <span className="text-gray-600">Built Better.</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We're not your typical agency. We're technical experts who speak
                plain English and deliver real results.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="h-1 w-16 bg-gray-900 rounded-full"></div>
                <span className="text-sm text-gray-600 font-medium">
                  No BS. Just Results.
                </span>
              </motion.div>
            </motion.div>

            {/* Right: Benefits Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <Card
                className="p-8 md:p-10 bg-white rounded-3xl shadow-xl"
                style={{
                  border: "1px solid transparent",
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(to bottom, rgba(229, 231, 235, 0.5), rgba(255, 255, 255, 0))",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                <div className="space-y-6">
                  {approaches.map((approach, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 8 }}
                      className="flex gap-4 group cursor-default"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Check
                            className="w-4 h-4 text-white"
                            strokeWidth={3}
                          />
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                        {approach}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom highlight */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="mt-8 pt-8 origin-left"
                  style={{
                    borderTop: "1px solid transparent",
                    backgroundImage:
                      "linear-gradient(90deg, rgba(229, 231, 235, 0.5), rgba(255, 255, 255, 0))",
                    backgroundOrigin: "border-box",
                    backgroundClip: "border-box",
                    backgroundSize: "100% 1px",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <p className="text-sm text-gray-600 text-center mt-8">
                    <span className="text-gray-900 font-semibold">500+</span>{" "}
                    websites optimized and counting
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
