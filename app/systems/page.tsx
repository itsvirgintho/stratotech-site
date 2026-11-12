"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    name: "Topcoat",
    colorFrom: "#2a2a2a",
    colorTo: "#1f1f1f",
    systems: [
      {
        title: "Strato Scudo",
        logo: "/systems/StratoScudo.png",
        description:
          "Water-based polyurethane protective surface sealant and clear coating preparation designed for sealing building structures and resinous systems.",
      },
    ],
  },
  {
    name: "Advanced Resins",
    colorFrom: "#2a2a2a",
    colorTo: "#1f1f1f",
    systems: [
      {
        title: "Strato Stampa",
        logo: "/systems/StratoStampa.png",
        description:
          "High-viscosity epoxy adhesive bonding mortar and building mix formulated for stamped, textured, and decorative surface overlays.",
      },
      {
        title: "Strato Forte",
        logo: "/systems/StratoForte.png",
        description:
          "100% solids polymer binding mortar and construction resin matrix engineered for substrate priming and aggregate surface systems.",
      },
      {
        title: "Strato VB",
        logo: "/systems/StratoVB.png",
        description:
          "Solvent-free liquid waterproofing chemical composition and vapor membrane preparation formulated for concrete construction substrates.",
      },
    ],
  },
  {
    name: "Precision Granules",
    colorFrom: "#2a2a2a",
    colorTo: "#1f1f1f",
    systems: [
      {
        title: "Strato Croma",
        logo: "/systems/StratoCroma.png",
        description:
          "Non-metal aggregate material consisting of synthetic acrylic colored flakes engineered for decorative building and surface finishes.",
      },
      {
        title: "Strato Minerale",
        logo: "/systems/StratoMinerale.png",
        description:
          "Natural mineral concrete aggregate composed of graded quartz, granite, and silicates designed for building and surfacing applications.",
      },
      {
        title: "Strato Metallico",
        logo: "/systems/StratoMetallico.png",
        description:
          "Metallic aggregate material composed of fine metal powders and granules formulated for concrete, mortar, and decorative finishes.",
      },
      {
        title: "Strato Aqua",
        logo: "/systems/StratoAqua.png",
        description:
          "Non-metal aggregate material blend composed of synthetic acrylic flakes and mineral granules engineered for swimming pool and submerged aquatic finishes.",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const systemId = (title: string) => title.toLowerCase().replace(/ /g, "-");

export default function Systems() {
  const [activeTab, setActiveTab] = useState(categories[0].name);
  const pendingSystem = useRef<string | null>(null);

  const scrollToPendingSystem = () => {
    if (!pendingSystem.current) return;
    const target = document.getElementById(pendingSystem.current);
    if (!target) return;
    target.scrollIntoView({ behavior: "instant", block: "center" });
    pendingSystem.current = null;
  };

  useEffect(() => {
    const openLinkedSystem = () => {
      const id = window.location.hash.slice(1);
      const category = categories.find((category) =>
        category.systems.some((system) => systemId(system.title) === id)
      );
      pendingSystem.current = category ? id : null;
      if (!category) return;
      setActiveTab(category.name);
      scrollToPendingSystem();
    };

    openLinkedSystem();
    window.addEventListener("hashchange", openLinkedSystem);
    return () => window.removeEventListener("hashchange", openLinkedSystem);
  }, []);

  const activeCategory = categories.find((cat) => cat.name === activeTab);

  return (
    <div className="min-h-screen font-sans px-6 py-12 md:px-16 lg:px-24">

      <section className="relative mx-6 md:mx-12 lg:mx-24 mt-12 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl overflow-hidden">
        <div className="grid lg:grid-cols-[35%_65%] min-h-[600px]">

          {/* LEFT COLUMN - TEXT */}
          <div className="flex flex-col justify-center px-6 md:px-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">The StratoTech Integrated System</h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/80 mb-6">
              Non-metal building materials and polymer-modified surface coating systems engineered for architectural concrete and structural substrates.
            </p>
          </div>

          {/* RIGHT COLUMN - IMAGE */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/system-diagram.png"
              alt="StratoTech System"
              width={1200}
              height={729}
              sizes="(min-width: 1024px) 900px, 90vw"
              quality={75}
              className="w-full max-w-[900px] h-auto object-contain mx-auto my-auto"
              priority
            />
          </div>

        </div>
      </section>

      <div className="relative max-w-6xl mx-auto mt-12 px-6 md:px-12">
        <div className="px-6 py-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-lg max-w-3xl mx-auto">
          <h4 className="text-white font-semibold mb-2">Environmentally Responsible</h4>
          <p className="text-white/70 text-sm md:text-base">
            StratoTech’s High Performance Resin Systems extend the life of existing surfaces, minimizing demolition and waste. Our Strato Metallico and Strato Minerale lines incorporate reclaimed metals and natural mineral byproducts, turning waste streams into high-performance decorative aggregates. With reduced system thickness and efficient material use, StratoTech delivers durable, sustainable solutions with minimal environmental impact.
          </p>
        </div>
      </div>

      {/* Interactive Systems Tabs */}
      <div className="max-w-7xl mx-auto mt-24">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map(({ name }) => {
            const isActive = name === activeTab;
            return (
              <button
                key={name}
                onClick={() => {
                  pendingSystem.current = null;
                  setActiveTab(name);
                }}
                className={`px-6 py-3 rounded-full border border-white/20 text-xl font-semibold transition-all duration-300 ${isActive ? 'bg-white/20 text-white backdrop-blur-lg' : 'bg-white/5 text-white/60 backdrop-blur-lg hover:text-white hover:bg-white/10'}`}
                aria-selected={isActive}
                role="tab"
                type="button"
              >
                {name}
              </button>
            );
          })}
        </div>

        {/* Systems Content */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeCategory.name}
              initial={{ opacity: 1, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              onAnimationComplete={scrollToPendingSystem}
              className="flex flex-wrap justify-center gap-8"
              role="tabpanel"
              aria-labelledby={`tab-${activeCategory.name}`}
            >
              {activeCategory.systems.length > 0 ? (
                activeCategory.systems.map(({ title, description, logo }) => (
                  <motion.div
                    key={title}
                    id={systemId(title)}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05 }}
                    className="group w-full sm:w-[45%] md:w-[30%] lg:w-[22%] min-h-[260px] rounded-2xl p-6 border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-300 flex flex-col items-center text-center justify-between hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                  >
                    {logo && (
                      <div className="h-16 flex items-center justify-center mb-4">
                        <img
                          src={logo}
                          alt={title}
                          className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    )}
                    <h4 className="text-white text-xl font-semibold mb-2">{title}</h4>
                    <p className="text-white text-sm leading-relaxed font-bold">{description}</p>
                  </motion.div>
                ))
              ) : (
                <p className="col-span-full text-center font-light text-white/60">
                  No systems available in this category.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
