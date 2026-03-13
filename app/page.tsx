"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { motion, useAnimation, useViewportScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Layers, Leaf } from "lucide-react";

const features = [
  { 
    title: "Unmatched Durability", 
    description: "Engineered for harsh conditions and heavy use.", 
    Icon: ShieldCheck 
  },
  { 
    title: "Total Design Freedom", 
    description: "Limitless possibilities on virtually any surface.", 
    Icon: Layers 
  },
  { 
    title: "Responsible Engineering", 
    description: "Safety oriented systems with minimal waste for better building practices.", 
    Icon: Leaf 
  }
];

const carouselIcons = [
  "/feature-icons/feature1.png",
  "/feature-icons/feature2.png",
  "/feature-icons/feature3.png",
  "/feature-icons/feature4.png",
  "/feature-icons/feature5.png",
  "/feature-icons/feature6.png",
  "/feature-icons/feature7.png",
  "/feature-icons/feature8.png",
  "/feature-icons/feature9.png"
];

const ecoPoolImages = [
  "/home-gallery/eco-pool.png",
  "/home-gallery/stratoTech-community.png",
  "/home-gallery/stratotech-shopping.png",
  "/home-gallery/stratotech-wavy.png",
  "/home-gallery/stratotech-zoo.png"
];

const squares = Array(9).fill(0);

export default function Home() {
  const controls = useAnimation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  // Animation controls for Hero text and CTA
  const heroControls = useAnimation();
  const ctaControls = useAnimation();
  const projectImageControls = useAnimation();
  const ctaButtonControls = useAnimation();

  useEffect(() => {
    heroControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    });
    ctaControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3, ease: "easeOut" },
    });
  }, [heroControls, ctaControls]);

  // Scroll listener for project image zoom-in effect and parallax
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrollY(scrollPos);
      if (scrollPos > 0) {
        projectImageControls.start({
          scale: 1.05,
          transition: { duration: 0.5, ease: "easeOut" },
        });
      } else {
        projectImageControls.start({
          scale: 1,
          transition: { duration: 0.5, ease: "easeOut" },
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projectImageControls]);

  // Animation controls for CTA button fade-in + y-offset on scroll
  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById("view-projects-cta");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          ctaButtonControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ctaButtonControls]);

  // Use framer-motion's useViewportScroll and useTransform for Hero background parallax
  const { scrollY: viewportScrollY } = useViewportScroll();
  // Map scrollY from 0 to 500 to background position from 0 to 150px (multiplied by 0.3 * 500)
  const heroBgParallax = useTransform(viewportScrollY, [0, 500], [0, 150], { clamp: false });
  const heroBgPosition = useMotionTemplate`center ${heroBgParallax}px`;

  // Parallax offset for Project Image (subtle)
  const projectImageParallax = scrollY * 0.2;

  const [ecoIndex, setEcoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEcoIndex((prev) => (prev + 1) % ecoPoolImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div className="relative">
        <div
          className="relative pb-0"
        >
          <motion.div
            initial={{ opacity: 1, y: 12 }}
            animate={heroControls}
            className="relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
              {/* LEFT: Hero content */}
              <div className="relative flex flex-col items-center justify-start h-full w-full pt-0">
                {/* Strato Icon Above Hero */}
                <div className="relative mt-0 mb-0 flex justify-center z-20">
                  <img
                    src="/logo.png"
                    alt="StratoTech Logo"
                    className="w-80 md:w-[370px] lg:w-[485px] xl:w-[600px] h-auto object-contain"
                  />
                </div>

                {/* Slogan */}
                <div className="w-80 md:w-[370px] lg:w-[485px] xl:w-[600px] text-center mt-2 mb-2">
                  <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
                    Design Crafted<br />
                    Precision Engineered<br />
                    Performance Proven
                  </p>
                </div>

                <Hero />
              </div>
              {/* RIGHT: Closeup Texture Cube */}
              <div className="hidden lg:flex h-full items-center justify-center">
                <div className="relative w-[80%] h-[80%] max-w-[700px] max-h-[700px] overflow-hidden rounded-2xl">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "url('/closeup-texture.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {/* Updated Hero title and tagline classes and iOS-specific fixes */}
          <style jsx global>{`
            /* Hero text subtle shadow */
            .hero-title {
              text-shadow: 0 2px 4px rgba(0,0,0,0.15);
            }
            .hero-tagline {
              text-shadow: 0 2px 4px rgba(0,0,0,0.15);
            }

            /* iOS-specific layout fixes */
            @supports (-webkit-touch-callout: none) {
              html, body {
                height: -webkit-fill-available;
              }

              body {
                min-height: 100vh;
                min-height: -webkit-fill-available;
                overflow-x: hidden;
              }

              /* Prevent top/bottom white gaps on iOS */
              .relative.pb-0 {
                padding-top: env(safe-area-inset-top);
              }

              .container-architectural {
                padding-bottom: calc(3.5rem + env(safe-area-inset-bottom));
              }
            }
          `}</style>
        </div>
      </motion.div>

      <Section>
        <div id="systems" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 rounded-xl border border-border bg-white/10 backdrop-blur-md hover:shadow-2xl hover:scale-105 transition-all duration-500 flex flex-col items-center"
              title={feature.title}
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <feature.Icon
                className="w-16 h-16 mb-4 text-white/90 transition-transform duration-500"
              />
              <h3 className="font-display text-2xl mb-4 text-white">{feature.title}</h3>
              <p className="text-white/80 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <div style={{ position: 'relative', zIndex: 0, paddingTop: '0.5rem', paddingBottom: '3.5rem', maxHeight: 850, padding: '2.5rem 1.25rem', marginTop: '0rem', marginBottom: '3rem' }} className='relative w-full rounded-xl overflow-hidden container-architectural'>
        <img
          src={ecoPoolImages[ecoIndex]}
          alt="Eco Pool"
          className="w-full aspect-video object-cover rounded-xl transition-opacity duration-1000"
          loading="lazy"
        />
        <motion.a
          href="/contact"
          id="view-projects-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 inline-flex items-center border border-white/30 text-white font-bold py-4 px-8 rounded-xl backdrop-blur-md bg-[#0b4a63]/90 hover:bg-[#0b4a63] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
        >
          Get Started
        </motion.a>
      </div>

      <h2
        className="text-white text-4xl sm:text-5xl font-bold text-center py-10"
        style={{
          margin: "2rem 0 2.5rem 0", // Increased marginTop for more vertical gap
          paddingBottom: 0,
          paddingTop: '1rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        System Features
      </h2>

      <Section>
        <div className="overflow-x-auto overflow-y-hidden py-4">
          <motion.div
            className="flex w-max gap-4"
            animate={controls}
          >
            {[...carouselIcons, ...carouselIcons].map((icon, index) => (
              <div
                key={index}
                className="w-56 h-56 rounded-2xl p-6 flex-shrink-0 flex items-center justify-center relative border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-300"
              >
                <img src={icon} alt="" aria-hidden="true" className="object-contain w-full h-full" loading="lazy" />
              </div>
            ))}
          </motion.div>
        </div>
      </Section>
    </>
  );
}
