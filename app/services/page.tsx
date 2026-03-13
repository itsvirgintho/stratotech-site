"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Strato Unico",
    description:
      "Strato Unico is our bespoke tailoring service for special projects requiring fully customized surface solutions. Designed for unique architectural, themed, or technically demanding environments, this service allows us to engineer a system specifically adapted to your project’s structural, environmental, and aesthetic requirements. From concept development through material selection and technical detailing, Strato Unico delivers precision-crafted, project-specific performance without compromising design intent.",
    image: "/services/imagine.png",
    imageWidth: 1024,
    imageHeight: 942,
    logo: "/services/StratoUnicoVector.svg",
  },
  {
    title: "Design & Specification",
    description:
      "Our expert design and specification services ensure every detail of your project is meticulously planned and fully compliant, tailored precisely to your unique requirements. Leveraging advanced modeling tools and industry best practices, we collaborate closely with your team to create detailed blueprints and specifications that optimize functionality, safety, and cost-effectiveness. From initial concept through final approval, our comprehensive approach guarantees that your project meets all regulatory standards while reflecting your vision and goals.",
    image: "/services/design.png",
    imageWidth: 1024,
    imageHeight: 945,
    popup: true,
  },
  {
    title: "Installation",
    description:
      "Benefit from our skilled installation team’s precision and professionalism, guaranteeing a smooth, timely setup that maximizes operational efficiency from day one. Our installers are trained to handle complex systems with care and expertise, ensuring every component is correctly positioned and securely integrated. We prioritize minimizing disruptions to your operations and maintaining strict safety protocols, delivering an installation experience that is efficient, reliable, and aligned with your project timeline.",
    image: "/services/car-dealership.png",
    imageWidth: 1184,
    imageHeight: 782,
    popup: true,
  },
  {
    title: "Installer Training & Certification",
    description:
      "Empower your installers with our comprehensive training and certification programs, designed to equip them with advanced skills and industry-leading knowledge for superior execution. Our curriculum covers the latest techniques, safety standards, and product innovations, ensuring your team is fully prepared to install and maintain systems to the highest quality standards. Certification from our program not only validates expertise but also enhances credibility and confidence in your workforce, supporting ongoing professional development and operational excellence.",
    image: "/services/resort-pool.png",
    imageWidth: 1184,
    imageHeight: 785,
    popup: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  const [activeService, setActiveService] = useState<null | {
    title: string;
    description: string;
  }>(null);

  return (
    <div className="min-h-screen bg-transparent px-6 py-20 md:px-12">
      {/* Hero Section */}
      <section className="mb-24 text-center max-w-5xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
          <h1 className="text-5xl font-display text-white mb-6">Our Services</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover the comprehensive solutions we offer to meet your project’s unique demands with precision, durability, and architectural excellence.
          </p>
        </div>
      </section>

      {/* Strato Unico (Primary Service) */}
      {services.slice(0, 1).map(({ title, description, image, imageWidth, imageHeight, logo }, index) => (
        <motion.section
          key={title}
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
          viewport={{ once: true }}
          className="mb-24 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_50px_140px_rgba(0,0,0,0.6)] p-16 md:p-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 text-center md:text-left md:pr-10 min-w-[280px]">
            {logo && (
              <div className="mb-6 flex justify-center md:justify-start">
                <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6">
                  <img
                    src={logo}
                    alt={`${title} Logo`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>
            )}
            <h2 className="font-display text-white mb-6 text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="text-white/70 leading-relaxed">{description}</p>
          </div>
          <div className="flex-1 w-full max-w-md min-w-[280px]">
            <Image
              src={image}
              alt={title}
              width={imageWidth}
              height={imageHeight}
              sizes="(min-width: 1024px) 420px, 90vw"
              quality={75}
              className="w-full rounded-2xl object-cover max-h-[420px] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              loading="lazy"
            />
          </div>
        </motion.section>
      ))}

      {/* Additional Services (Three in One Row) */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {services.slice(1).map(({ title, image, imageWidth, imageHeight, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 1, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.1 } }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 flex flex-col items-center text-center hover:scale-[1.02] transition duration-500"
            >
              <h3 className="text-2xl font-display text-white mb-6">
                {title}
              </h3>
              <Image
                src={image}
                alt={title}
                width={imageWidth}
                height={imageHeight}
                sizes="(min-width: 1024px) 320px, 90vw"
                quality={75}
                className="w-full rounded-2xl object-cover max-h-[260px] mb-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
                loading="lazy"
              />
              <button
                onClick={() => setActiveService({ title, description })}
                className="mt-2 rounded-xl border border-white/30 bg-[#0b4a63]/90 px-6 py-3 text-white font-semibold transition hover:bg-[#0b4a63]"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 1, y: 8 }}
        animate={{ opacity: 1, transition: { duration: 0.6, delay: services.length * 0.2 } }}
        viewport={{ once: true }}
        className="mb-16 flex justify-center"
      >
        <a
          href="/contact"
          className="rounded-2xl border border-white/50 bg-white/90 backdrop-blur-md px-10 py-5 text-[#0b4a63] font-semibold transition duration-300 hover:bg-white"
        >
          Contact Us
        </a>
      </motion.div>

      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
          <div className="max-w-2xl w-full rounded-3xl border border-white/10 bg-[#111] p-10 relative">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-3xl font-display text-white mb-6">
              {activeService.title}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {activeService.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
