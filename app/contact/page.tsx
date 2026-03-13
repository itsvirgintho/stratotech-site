"use client";
import { motion } from "framer-motion";
import Section from "../../components/Section";
import React from "react";

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value || "",
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value || "",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Error sending message: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
  };

  return (
    <div className="min-h-screen px-6 py-20 md:px-12 bg-transparent text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 1, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-14 shadow-[0_40px_120px_rgba(0,0,0,0.45)] text-center">
          <h1 className="text-5xl font-display text-white mb-6">Contact Us</h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            We’d love to hear about your project. Tell us what you're building and how we can help bring it to life.
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 flex flex-col shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        >
          <label htmlFor="name" className="mb-3 font-semibold text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mb-8 p-4 rounded-xl bg-white/5 border border-white/15 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            placeholder="Your name"
          />

          <label htmlFor="email" className="mb-3 font-semibold text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mb-8 p-4 rounded-xl bg-white/5 border border-white/15 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            placeholder="you@example.com"
          />

          <label htmlFor="company" className="mb-3 font-semibold text-white">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="mb-8 p-4 rounded-xl bg-white/5 border border-white/15 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            placeholder="Your company"
          />

          <label htmlFor="phone" className="mb-3 font-semibold text-white">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mb-8 p-4 rounded-xl bg-white/5 border border-white/15 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            placeholder="Your phone number"
          />

          <label htmlFor="message" className="mb-3 font-semibold text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mb-8 p-4 rounded-xl bg-white/5 border border-white/15 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/40 resize-none"
            placeholder="Your message"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="font-semibold py-4 rounded-2xl border border-white/30 bg-[#0b4a63]/90 text-white transition duration-300 hover:bg-[#0b4a63]"
          >
            Submit
          </motion.button>
        </motion.form>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        >
          <h2 className="text-3xl font-display mb-10 text-white text-center">
            Contact Information
          </h2>

          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <p className="text-white/60 text-sm uppercase tracking-widest">
              Email
            </p>

            <a
              href="mailto:info@stratotechsystems.com"
              className="text-2xl md:text-3xl font-semibold text-white hover:text-white/80 transition duration-300 border-b border-white/20 hover:border-white/50 pb-2 break-words max-w-full text-center leading-tight"
            >
              info@stratotechsystems.com
            </a>

            <p className="text-white/50 text-sm max-w-xs">
              Reach out to discuss your project requirements, system specifications, or partnership opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
