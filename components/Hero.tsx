"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import Link from 'next/link';

export default function Hero() {
  return (
    <Section className="text-center pt-6 pb-10 md:pt-8 md:pb-14">
      <motion.div
        initial={{ opacity: 1, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto p-6 md:p-8 border border-white/10 bg-white/1 backdrop-blur-xl rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
      >
        <p className="font-body text-lg md:text-2xl font-normal leading-relaxed max-w-3xl mx-auto text-white mt-4">
  Stratotech Advanced Surfaces offers innovative polymer-based surface systems designed to protect, enhance, and improve architectural and building surfaces. Our advanced coating technologies create durable, high-performance surface solutions for a variety of construction and architectural applications.
</p>

<p className="font-body text-lg md:text-2xl font-normal leading-relaxed max-w-3xl mx-auto text-white mt-4">
  Engineered for long-lasting performance, these systems combine surface protection, durability, and design flexibility to meet the needs of modern building projects.
</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 space-y-4 sm:space-y-0">
          <Link
            href="/systems"
            className="w-full sm:w-auto text-center px-8 py-3 rounded-full border border-white/30 bg-[#0b4a63]/90 backdrop-blur-md text-white text-sm font-semibold tracking-wide hover:bg-[#0b4a63] transition-all duration-300 supports-[-webkit-touch-callout:none]:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
          >
            Explore Systems
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center px-8 py-3 rounded-full border border-white/50 bg-white/90 backdrop-blur-md text-[#0b4a63] text-sm font-semibold tracking-wide hover:bg-white transition-all duration-300 supports-[-webkit-touch-callout:none]:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
