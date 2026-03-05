"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function StratoStampaPage() {
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans px-6 py-12 md:px-16 lg:px-24 text-white">

      {/* BACK LINK */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link
          href="/systems"
          className="text-sm text-white/60 hover:text-white transition"
        >
          ← Back to Systems
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-10 md:p-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              <div className="h-20 flex items-center mb-8">
                <img
                  src="/systems/StratoStampa.png"
                  alt="Strato Stampa"
                  className="max-h-16 w-auto object-contain"
                />
              </div>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Strato Stampa is a decorative stamped surface system designed to
                replicate the appearance of natural stone, tile, or architectural
                patterns while maintaining the durability of a high‑performance
                resin-based flooring system.
              </p>

              <p className="text-white/70 leading-relaxed">
                Ideal for plazas, walkways, hospitality environments, and
                architectural spaces, Strato Stampa provides a visually rich
                surface texture while delivering long‑term durability and
                performance in both interior and exterior installations.
              </p>

            </motion.div>
          </div>

          {/* IMAGE / VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="/system-diagram.png"
              alt="Strato Stampa Visual"
              onClick={() => setImageOpen(true)}
              className="max-w-[420px] w-full object-contain rounded-xl cursor-zoom-in transition hover:scale-105"
            />
          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto mt-16">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 transition-transform duration-300 md:hover:scale-110">
            <h3 className="font-semibold mb-3">Stamped Surface Patterns</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Creates decorative stamped textures that replicate natural
              stone, tile, or architectural paving patterns.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 transition-transform duration-300 md:hover:scale-110">
            <h3 className="font-semibold mb-3">Architectural Texture</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Surface embossing adds visual depth and texture to create
              distinctive architectural finishes.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 transition-transform duration-300 md:hover:scale-110">
            <h3 className="font-semibold mb-3">Decorative Versatility</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Allows a wide range of pattern and color combinations to
              achieve unique decorative flooring designs.
            </p>
          </div>

        </div>
      </section>

      {/* SYSTEM INTEGRATION */}
      <section className="max-w-6xl mx-auto mt-20 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-10 md:p-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Part of the StratoTech Integrated Surface System
            </h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Strato Aqua works in conjunction with the StratoTech layered
              surface system. Combined with Strato Forte primers, Strato VB
              moisture control, and Strato Scudo protective topcoats, the
              system creates a seamless architectural surface capable of
              withstanding the most demanding aquatic environments.
            </p>

            <Link
              href="/systems"
              className="inline-block mt-2 text-sm text-white/70 hover:text-white transition"
            >
              Explore the Full System →
            </Link>
          </div>

          <div className="flex justify-center">
            <img
              src="/system-diagram.png"
              alt="StratoTech System Diagram"
              className="max-w-[420px] w-full object-contain"
            />
          </div>

        </div>
      </section>

      {imageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
          onClick={() => setImageOpen(false)}
        >
          <img
            src="/system-diagram.png"
            alt="Strato Stampa Visual Large"
            className="max-h-[95vh] max-w-[95vw] object-contain cursor-zoom-out"
          />
        </div>
      )}
    </div>
  );
}