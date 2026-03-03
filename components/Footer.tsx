import React from 'react';
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-32 mx-6 md:mx-12 lg:mx-24 px-6 py-16 text-white/80 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 pt-4">
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-sm tracking-widest uppercase text-white/60 mb-6">Company</h3>
          <ul className="space-y-3">
            <li><Link href="/about-us" className="text-white/70 hover:text-white transition-colors duration-300">About Us</Link></li>
            <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors duration-300">Contact Us</Link></li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-sm tracking-widest uppercase text-white/60 mb-6">Systems</h3>
          <ul className="space-y-3">
            <li><Link href="/systems" className="text-white/70 hover:text-white transition-colors duration-300">Stratotech Systems</Link></li>
            <li><Link href="/services" className="text-white/70 hover:text-white transition-colors duration-300">Services</Link></li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-sm tracking-widest uppercase text-white/60 mb-6">Legal</h3>
          <ul className="space-y-3">
            <li><Link href="/terms" className="text-white/70 hover:text-white transition-colors duration-300">Terms of Service</Link></li>
            <li><Link href="/privacy" className="text-white/70 hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <p className="text-white/60 mb-6">info@stratotechsystems.com</p>
        <div className="flex justify-center space-x-8">
          <a href="#" aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.354c.672-1.018 2.064-1.354 3.5-1.354 2.481 0 4.5 2.019 4.5 4.5v5.5z"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="text-white/50 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" >
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.892-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.919.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.59l-.467 3.622h-3.123v9.294h6.116c.732 0 1.324-.592 1.324-1.324v-21.35c0-.733-.592-1.325-1.324-1.325z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.243 1.31 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.365-.335 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.365-.062-2.633-.335-3.608-1.31-.975-.975-1.247-2.243-1.31-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.365.335-2.633 1.31-3.608.975-.975 2.243-1.247 3.608-1.31 1.266-.058 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.676.077-3.178.46-4.356 1.639-1.178 1.178-1.562 2.68-1.639 4.356-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.077 1.676.46 3.178 1.639 4.356 1.178 1.178 2.68 1.562 4.356 1.639 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.676-.077 3.178-.46 4.356-1.639 1.178-1.178 1.562-2.68 1.639-4.356.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.077-1.676-.46-3.178-1.639-4.356-1.178-1.178-2.68-1.562-4.356-1.639-1.28-.059-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="text-center text-xs mt-16 pt-8 text-white/40 tracking-wide">
        © {new Date().getFullYear()} Stratotech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
