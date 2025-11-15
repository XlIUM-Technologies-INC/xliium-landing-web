"use client";

import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">XlIUM Technologies Inc.</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Custom websites and proven SEO strategies to help local businesses
              grow online.
            </p>
            <p className="text-xs opacity-75 mt-3">XlIUM Technologies Inc.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:underline opacity-90">
                  SEO & Local Search
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline opacity-90">
                  Website Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline opacity-90">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline opacity-90">
                  Website Migration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:underline opacity-90">
                  About Us
                </a>
              </li>
              <li>
                <a href="#process" className="hover:underline opacity-90">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline opacity-90">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline opacity-90">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="mailto:info@xliium.com" className="hover:underline">
                  info@xliium.com
                </a>
              </li>
              <li>
                <a href="tel:+12368671555" className="hover:underline">
                  +1 (236) 867-1555
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="mailto:info@xliium.com"
                aria-label="Email"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75 gap-2">
          <p>© {currentYear} XlIUM Technologies Inc. All rights reserved.</p>
          <p>Helping local businesses grow online across North America.</p>
        </div>
      </div>
    </footer>
  );
}
