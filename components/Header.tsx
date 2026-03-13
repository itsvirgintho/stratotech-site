"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Systems", path: "/systems" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="StratoTech Logo"
            width={2850}
            height={1200}
            sizes="(min-width: 1024px) 200px, 160px"
            className="h-[70px] w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-10">
          {menuItems.map(({ name, path }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                  isActive
                    ? "text-white after:w-full"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </nav>
        <button
          className="sm:block md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden fixed top-20 left-0 w-full z-40 backdrop-blur-xl bg-black/40 ios-menu-overlay border-t border-white/5">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {menuItems.map(({ name, path }) => {
              const isActive = pathname === path;
              return (
                <li key={path}>
                  <Link
                    href={path}
                    className={`block text-base font-medium tracking-wide transition-colors duration-200 border-b-2 pb-1 ${
                      isActive
                        ? "text-white border-white"
                        : "text-white/70 border-transparent hover:text-white hover:border-white"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
