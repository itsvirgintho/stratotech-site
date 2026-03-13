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
        className="max-w-4xl mx-auto p-6 md:p-8 border border-white/15 bg-white/10 backdrop-blur-xl rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
      >
        <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/70 mb-3">
          StratoTech
        </p>
        <h1 className="font-display text-2xl md:text-4xl lg:text-5xl tracking-tight leading-[1.05] mb-3 text-white">
          High Performance Resin Systems
        </h1>

        <p className="font-body text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto text-white/85 mt-2">
          Engineered layer by layer to stand the test of time, without ever sacrificing design.
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
