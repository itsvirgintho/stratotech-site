import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "StratoTech — Where Surfaces Become Systems",
  description:
    "Advanced multi-layer surface engineering systems designed for structural performance and architectural precision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${bodyFont.variable} bg-transparent`}>
      <head>
        <meta property="og:title" content="StratoTech — Where Surfaces Become Systems" />
        <meta property="og:description" content="Advanced multi-layer surface engineering systems designed for structural performance and architectural precision." />
        <meta property="og:image" content="https://www.stratotechsystems.com/favicon.png?v=2" />
        <meta property="og:url" content="https://www.stratotechsystems.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StratoTech — Where Surfaces Become Systems" />
        <meta name="twitter:description" content="Advanced multi-layer surface engineering systems designed for structural performance and architectural precision." />
        <meta name="twitter:image" content="https://www.stratotechsystems.com/favicon.png?v=2" />
        <style>{`
          :root {
            --app-height: 100vh;
          }
          @supports (-webkit-touch-callout: none) {
            :root {
              --app-height: 100dvh;
            }
          }
        `}</style>
      </head>
      <body className="text-white font-body antialiased selection:bg-white/20 selection:text-white relative overflow-x-hidden min-h-[var(--app-height)] flex flex-col pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
        {/* Gradient Background */}
        <div className="fixed inset-[-20px] -z-30 bg-gradient-to-b from-[#0388cc] to-[#afdce4] pointer-events-none" />

        {/* Topographic Overlay */}
        <div className="fixed inset-0 -z-20 pointer-events-none">
          <img
            src="/topography.webp"
            alt="Topographic Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Contrast Overlay */}
        <div className="fixed inset-0 -z-10 bg-black/10 pointer-events-none" />
        <Header />
        <main className="pt-24 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
