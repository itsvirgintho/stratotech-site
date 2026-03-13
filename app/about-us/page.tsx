"use client";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHeart, FaLeaf, FaTools, FaUsers, FaLightbulb, FaStar, FaTrophy, FaRocket, FaHandshake } from "react-icons/fa";

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 1, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const highlights = [
    {
      icon: <FaBullseye className="text-white/60 w-8 h-8" />,
      title: "Our Mission",
      description:
        "To deliver advanced surface solutions that empower creativity and durability, enabling our clients to realize bold designs without compromise.",
    },
    {
      icon: <FaEye className="text-white/60 w-8 h-8" />,
      title: "Our Vision",
      description:
        "To be the leading provider of engineered surface systems that inspire innovation, sustainability, and excellence across industries worldwide.",
    },
    {
      icon: <FaHeart className="text-white/60 w-8 h-8" />,
      title: "Core Values",
      description: (
        <ul className="list-disc pl-5 text-white/70 space-y-1">
          <li>Innovation without Limits</li>
          <li>Design-centric Thinking</li>
          <li>Environmental Responsibility</li>
          <li>Precision Engineering</li>
          <li>Collaboration & Adaptability</li>
          <li>Integrity & Transparency</li>
        </ul>
      ),
    },
    {
      icon: <FaLeaf className="text-white/60 w-8 h-8" />,
      title: "Sustainability",
      description:
        "Committed to environmentally responsible practices that minimize impact and promote a greener future.",
    },
    {
      icon: <FaTools className="text-white/60 w-8 h-8" />,
      title: "Innovation",
      description:
        "Constantly pushing technological boundaries to create durable, versatile, and beautiful surface solutions.",
    },
    {
      icon: <FaUsers className="text-white/60 w-8 h-8" />,
      title: "Collaboration",
      description:
        "Partnering closely with designers, builders, and clients to bring visionary projects to life seamlessly.",
    },
    {
      icon: <FaLightbulb className="text-white/60 w-8 h-8" />,
      title: "Expertise",
      description:
        "Decades of experience in themed entertainment and construction ensuring unmatched quality and performance.",
    },
  ];

  return (
    <main className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col gap-20">
      {/* Hero Section */}
      <section className="relative rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] flex flex-col items-center text-center px-6 py-32 md:py-40">
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl text-white">
          Redefining Surfaces, From the Ground Up
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80">
          At StratoTech, we combine cutting-edge technology with inspired design to create surface systems that elevate every space.
        </p>
        <a
          href="/systems"
          className="mt-12 inline-block px-8 py-3 rounded-full border border-white/30 bg-[#0b4a63]/90 backdrop-blur-md text-white text-sm font-semibold tracking-wide hover:bg-[#0b4a63] transition-all duration-300"
          aria-label="Learn more about StratoTech"
        >
          Learn More
        </a>
      </section>

      {/* Intro Paragraph with Fade-in Animation */}
      <motion.section
        className="max-w-4xl mx-auto text-center text-white/80 text-lg md:text-xl leading-relaxed px-4 flex flex-col gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <p>
          StratoTech Advanced Surfaces is dedicated to delivering innovative engineered surface systems that blend durability with aesthetic excellence. Our expertise enables architects, designers, and builders to push creative boundaries while ensuring lasting performance.
        </p>
        <p>
          We uphold a commitment to precision, sustainability, and collaboration, working closely with our partners to transform visionary concepts into tangible realities. Through continuous innovation and rigorous quality standards, StratoTech drives impactful solutions that elevate environments across industries.
        </p>
      </motion.section>

      {/* Highlights Grid */}
      <section
        id="highlights"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4"
      >
        {highlights.map(({ icon, title, description }, idx) => (
          <motion.div
            key={title}
            className={`rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-8 flex flex-col gap-4 ${
              idx === highlights.length - 1
                ? "lg:col-span-3 lg:max-w-xl lg:mx-auto"
                : ""
            }`}
            initial={{ opacity: 1, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            aria-labelledby={`${title.toLowerCase().replace(/\s/g, "-")}-title`}
          >
            <div className="flex items-center justify-center mb-3">
              {icon}
            </div>
            <h3
              id={`${title.toLowerCase().replace(/\s/g, "-")}-title`}
              className="font-display text-2xl text-white text-center"
            >
              {title}
            </h3>
            <div className="text-white/70 text-center">{description}</div>
          </motion.div>
        ))}
      </section>

      {/* Call-to-Action Section */}
      <section className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl py-20 px-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] mx-auto max-w-4xl">
        <motion.h2
          className="font-display text-4xl mb-6 text-white"
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch with StratoTech
        </motion.h2>
        <motion.p
          className="mb-10 max-w-xl mx-auto text-lg text-white/80"
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have questions or ready to start your project? Submit a form or reach out to us via our Contact Us page. We're here to help bring your vision to life.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block px-10 py-4 rounded-full border border-white/50 bg-white/90 backdrop-blur-md text-[#0b4a63] text-sm font-semibold tracking-wide hover:bg-white transition-all duration-300"
          aria-label="Contact Us"
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          Contact Us
        </motion.a>
      </section>
    </main>
  );
}
