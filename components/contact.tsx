"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    website: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          businessName: "",
          email: "",
          website: "",
          description: "",
        });
      }, 3000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
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

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-10 left-20 w-96 h-96 bg-gray-300 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-96 h-96 bg-gray-400 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
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

      <div className="max-w-5xl mx-auto px-6 relative z-10">
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 script-font "
          >
            Get Started Today
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gray-900 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600"
          >
            Tell us about your website and we'll be in touch within 1-2 business
            days.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Form Column */}
          <motion.div variants={itemVariants}>
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white/80 border-gray-200 focus:border-gray-900 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Business Name
                  </label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your business name"
                    className="bg-white/80 border-gray-200 focus:border-gray-900 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-white/80 border-gray-200 focus:border-gray-900 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Website URL
                  </label>
                  <Input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="bg-white/80 border-gray-200 focus:border-gray-900 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    What do you need <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your website needs..."
                    className="h-32 bg-white/80 border-gray-200 focus:border-gray-900 rounded-xl resize-none"
                    required
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gray-900 text-white hover:bg-gray-800 h-14 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <>
                        Book Consultation
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </motion.div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Message sent successfully! We'll be in touch soon.
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800"
                  >
                    {error}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 script-font ">
                Contact Info
              </h3>
              <p className="text-gray-600">
                Prefer to reach out directly? We're here to help.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="flex items-start gap-4 p-6 backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 5 }}
                  >
                    <Mail className="w-6 h-6 text-gray-900" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                      Email
                    </h4>
                    <a
                      href="mailto:info@xliium.com"
                      className="text-gray-900 hover:text-gray-700 font-medium hover:underline"
                    >
                      info@xliium.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="flex items-start gap-4 p-6 backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: -5 }}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                      Phone
                    </h4>
                    <a
                      href="tel:+12368671555"
                      className="text-gray-900 hover:text-gray-700 font-medium hover:underline"
                    >
                      +1 (236) 867-1555
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 backdrop-blur-xl bg-gradient-to-br from-gray-50/80 to-gray-100/80 border border-white/50 rounded-2xl"
            >
              <h4 className="font-bold text-gray-900 mb-3 text-lg script-font">
                Quick Response
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                We typically respond to all inquiries within 1-2 business days.
                For urgent matters, please call us directly.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
