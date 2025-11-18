"use client";

import Link from "next/link";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <footer className="relative bg-gray-50 text-gray-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gray-300 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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

        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-4 text-gray-900 script-font ">
              XlIUM Technologies Inc.
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Custom websites and proven SEO strategies to help local businesses
              grow online.
            </p>

          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "SEO & Local Search", href: "#services" },
                { label: "Website Design", href: "#services" },
                { label: "Social Media", href: "#services" },
                { label: "Website Migration", href: "#services" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-gray-900 transition-colors" />
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Process", href: "#process" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-gray-900 transition-colors" />
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a
                  href="mailto:info@xliium.com"
                  className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-900/10 flex items-center justify-center group-hover:bg-gray-900/20 transition-colors">
                    <Mail size={16} className="text-gray-900" />
                  </div>
                  <span>info@xliium.com</span>
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a
                  href="tel:+12368671555"
                  className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-900/10 flex items-center justify-center group-hover:bg-gray-900/20 transition-colors">
                    <Phone size={16} className="text-gray-900" />
                  </div>
                  <span>+1 (236) 867-1555</span>
                </a>
              </motion.li>
            </ul>
</motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4"
        >
          <p>© {currentYear} XlIUM Technologies Inc. All rights reserved.</p>
          <p className="text-center md:text-right">
            Helping local businesses grow online across North America.
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gray-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-800 transition-colors"
        aria-label="Scroll to top"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowUp size={20} />
        </motion.div>
      </motion.button>
    </footer>
  );
}