"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function StratoScudoPage() {
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
              initial={{ opacity: 1, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              <div className="h-20 flex items-center mb-8">
                <img
                  src="/systems/StratoScudo.png"
                  alt="Strato Scudo"
                  className="max-h-16 w-auto object-contain"
                />
              </div>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Strato Scudo is a high‑performance protective topcoat designed
                to seal and protect decorative and structural layers within
                the StratoTech surface system. The coating enhances surface
                durability while preserving color, texture, and overall
                architectural appearance.
              </p>

              <p className="text-white/70 leading-relaxed">
                Applied as the final protective layer, Strato Scudo improves
                chemical resistance, surface durability, and long‑term
                performance. It helps maintain the visual integrity of
                decorative systems while providing protection against wear,
                moisture, and environmental exposure.
              </p>

            </motion.div>
          </div>

          {/* IMAGE / VISUAL */}
          <motion.div
            initial={{ opacity: 1, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/system-diagram.png"
              alt="Strato Scudo Visual"
              width={1200}
              height={729}
              sizes="(min-width: 1024px) 420px, 80vw"
              quality={75}
              onClick={() => setImageOpen(true)}
              className="max-w-[420px] w-full object-contain rounded-xl cursor-zoom-in transition hover:scale-105"
              priority
            />
          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto mt-16">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 transition-transform duration-300 md:hover:scale-110">
            <h3 className="font-semibold mb-3">Protective Topcoat</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Forms a durable protective barrier that shields the
              underlying decorative system from wear and environmental
              exposure.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 transition-transform duration-300 md:hover:scale-110">
            <h3 className="font-semibold mb-3">Chemical Resistance</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Engineered to resist chemicals, moisture, and surface
              contaminants commonly found in demanding environments.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 transition-transform duration-300 md:hover:scale-110">
            <h3 className="font-semibold mb-3">Long‑Term Surface Protection</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Maintains surface appearance while protecting decorative
              layers from abrasion, UV exposure, and environmental wear.
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
            <Image
              src="/system-diagram.png"
              alt="StratoTech System Diagram"
              width={1200}
              height={729}
              sizes="(min-width: 1024px) 420px, 80vw"
              quality={75}
              className="max-w-[420px] w-full object-contain"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {imageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
          onClick={() => setImageOpen(false)}
        >
          <Image
            src="/system-diagram.png"
            alt="Strato Scudo Visual Large"
            width={1200}
            height={729}
            sizes="95vw"
            quality={80}
            className="max-h-[95vh] max-w-[95vw] object-contain cursor-zoom-out"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
