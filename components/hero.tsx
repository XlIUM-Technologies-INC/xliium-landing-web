import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  Star,
  Users,
  Target,
  BarChart3,
  Sparkles,
  Zap,
  Globe,
  Rocket,
} from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "go Viral",
    "grow Online",
    "get Found",
    "dominate Local SEO",
  ];
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentPhrase.length) {
            setTypedText(currentPhrase.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(typedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentPhraseIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <>
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

      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-blue-600 via-blue-500 to-orange-400 overflow-hidden">
        <Image
          src="/background@2x.png"
          width={100}
          height={100}
          alt="Image of hills"
          className=" absolute w-full mb-20  h-full"
        />
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="absolute top-20 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 rounded-full blur-3xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
          <motion.div
            className="text-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Heading */}
            <motion.div variants={itemVariants} className="mt-[13px]">
              <h1 className="script-font text-6xl md:text-8xl lg:text-9xl font-normal text-white leading-[0.9]">
                Help your business
              </h1>
              <div className="relative inline-block">
                <h1 className="script-font text-6xl md:text-8xl lg:text-9xl gradient-text leading-[0.9] p-3">
                  {typedText}
                  <motion.span
                    className="inline-block w-1 h-20 md:h-32 bg-white ml-2"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                  />
                </h1>
              </div>
            </motion.div>

            {/* Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto"
            >
              <motion.div
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              >
                <Globe className="w-4 h-4" /> Local SEO
              </motion.div>

              <motion.div
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              >
                <Rocket className="w-4 h-4" /> Viral Marketing
              </motion.div>

              <motion.div
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              >
                <Zap className="w-4 h-4" /> Website Design
              </motion.div>

              <motion.div
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              >
                <Target className="w-4 h-4" /> GEO Targeting
              </motion.div>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed"
            >
              Done-for-you websites, local SEO, and viral marketing strategies.
              We help your business dominate local search and reach more
              customers.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="group bg-white  hover:bg-white/95 text-lg px-10 py-7 rounded-2xl  shadow-2xl inline-flex items-center justify-center gap-2"
                style={{ color: "rgb(138, 178, 242)" }}
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Button
                onClick={() => scrollToSection("services")}
                className="text-black border-white/70 hover:border-white hover:bg-white/10 text-lg px-10 py-7 rounded-2xl  shadow-lg"
                variant="outline"
              >
                See How It Works
              </Button>
            </motion.div>

            {/* Location */}
            <motion.p
              variants={itemVariants}
              className="text-md text-white/80 pt-6 font-extrabold inline-flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Based in Ontario, Canada • Serving North America
            </motion.p>
          </motion.div>
          {/* Product Mockup - macOS Style */}
          <motion.div
            className="mt-20 relative mx-auto max-w-5xl z-20"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            variants={floatingVariants}
          >
            {/* macOS Window Container */}
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-2xl h-[550px] border border-white/10"
              style={{
                background: "rgba(40, 45, 55, 0.92)",
                backdropFilter: "blur(40px) saturate(180%)",
                WebkitBackdropFilter: "blur(40px) saturate(180%)",
                boxShadow:
                  "0 0 0 0.5px rgba(255,255,255,0.1), 0 50px 100px -20px rgba(0,0,0,0.6)",
              }}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 0 0 0.5px rgba(255,255,255,0.1), 0 60px 120px -20px rgba(0,0,0,0.7)",
              }}
            >
              <Image
                src="/wallpaper@2x.b7df867c.png"
                width={100}
                height={100}
                className="absolute w-full h-full object-cover"
                alt="wallpaper"
              />

              {/* macOS Menu Bar */}
              <div
                className="h-7 bg-black/40 backdrop-blur-xl flex items-center justify-between px-4 text-white text-xs relative z-20"
                style={{
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                {/* Left Side - Apple Menu and App Menus */}
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <img
                      src="safari-icon (1).png"
                      alt="Safari"
                      className="w-4 h-4"
                    />
                    <span className="font-semibold">Safari</span>
                  </div>
                  <span className="font-medium">File</span>
                  <span className="font-medium">Edit</span>
                  <span className="font-medium">View</span>
                  <span className="font-medium">History</span>
                  <span className="font-medium">Bookmarks</span>
                  <span className="font-medium">Window</span>
                  <span className="font-medium">Help</span>
                </div>

                {/* Right Side - Status Icons and Time */}
                <div className="flex items-center gap-3">
                  {/* Battery Icon */}
                  <svg
                    className="w-6 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="6" width="18" height="12" rx="2" ry="2" />
                    <rect
                      x="5"
                      y="9"
                      width="12"
                      height="6"
                      fill="currentColor"
                    />
                    <path d="M20 10v4" />
                  </svg>

                  {/* WiFi Icon */}
                  <svg
                    className="w-5 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 20h.01" />
                    <path d="M8.5 16.5a5 5 0 0 1 7 0" />
                    <path d="M5 12.5a10 10 0 0 1 14 0" />
                    <path d="M2 8.5a15 15 0 0 1 20 0" />
                  </svg>

                  {/* Time */}
                  <span className="font-medium">
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    {new Date().toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                </div>
              </div>

              {/* Browser Chrome Title Bar */}
              <div className="h-12 bg-gradient-to-b from-gray-800/95 to-gray-800/80 flex items-center px-4 border-b border-white/5 relative z-10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:brightness-110 transition-all"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer hover:brightness-110 transition-all"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer hover:brightness-110 transition-all"></div>
                </div>
                <div className="flex-1 text-center text-white/60 text-sm font-medium">
                  Dashboard Analytics
                </div>
              </div>

              {/* Window Content */}
              <div
                className="p-8 relative z-10 overflow-y-auto"
                style={{ maxHeight: "calc(550px - 76px)" }}
              >
                <div className="space-y-4">
                  {/* Google Analytics Screenshots Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Search Console Screenshot */}
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 cursor-pointer"
                      whileHover={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        y: -5,
                      }}
                    >
                      {/* Traffic Lights for Screenshot Window */}
                      <div className="bg-gradient-to-b from-gray-800/95 to-gray-800/80 px-3 py-2 border-b border-white/5 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-white/70 text-xs font-semibold ml-2">
                          Google Search Console
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <img
                          src="page1.png"
                          alt="Google Search Console Rankings"
                          className="w-full h-auto rounded opacity-95"
                          style={{ display: "block" }}
                        />
                      </div>
                    </motion.div>

                    {/* Analytics Screenshot */}
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 cursor-pointer"
                      whileHover={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        y: -5,
                      }}
                    >
                      {/* Traffic Lights for Screenshot Window */}
                      <div className="bg-gradient-to-b from-gray-800/95 to-gray-800/80 px-3 py-2 border-b border-white/5 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-white/70 text-xs font-semibold ml-2">
                          Google Analytics - Real-time
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <img
                          src="realtimeoverview.webp"
                          alt="Google Analytics Real-time Overview"
                          className="w-full h-auto rounded opacity-95"
                          style={{ display: "block" }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* macOS Dock at Bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                <motion.div
                  className="rounded-2xl px-3 py-2.5 flex items-end gap-2.5"
                  style={{
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(30px) saturate(180%)",
                    WebkitBackdropFilter: "blur(30px) saturate(180%)",
                    border: "1px solid rgba(255, 255, 255, 0.35)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  {/* Launchpad Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl cursor-pointer shadow-lg overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                    whileHover={{ scale: 1.3, y: -10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <img
                      src="launchpad-icon.png"
                      alt="Launchpad"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Safari Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl cursor-pointer shadow-lg overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                    }}
                    whileHover={{ scale: 1.3, y: -10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <img
                      src="safari-icon (1).png"
                      alt="Safari"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Settings Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl cursor-pointer shadow-lg overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #d4d4d8 0%, #a1a1aa 100%)",
                    }}
                    whileHover={{ scale: 1.3, y: -10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <img
                      src="settings-icon.png"
                      alt="Settings"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Divider */}
                  <div className="w-px h-10 bg-white/30 mx-1"></div>

                  {/* Trash Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl cursor-pointer shadow-lg flex items-center justify-center overflow-hidden"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 70%), linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                    whileHover={{ scale: 1.3, y: -10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <img
                      src="trash-icon.png"
                      alt="Trash"
                      className="w-10 h-10 object-contain"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <style jsx>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-15px);
              }
            }
          `}</style>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-20">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-gray-50/50 to-gray-50"></div>
        </div>
      </section>
    </>
  );
}
