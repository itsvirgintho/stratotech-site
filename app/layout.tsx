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
  metadataBase: new URL("https://www.stratotechsystems.com"),
  title: "StratoTech | High Performance Resin Systems",
  description:
    "StratoTech builds high-performance resin surface systems engineered layer by layer for durability, design freedom, and architectural precision.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "StratoTech | High Performance Resin Systems",
    description:
      "StratoTech builds high-performance resin surface systems engineered layer by layer for durability, design freedom, and architectural precision.",
    url: "https://www.stratotechsystems.com",
    siteName: "StratoTech",
    type: "website",
    images: [
      {
        url: "/favicon.png?v=2",
        width: 512,
        height: 512,
        alt: "StratoTech logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StratoTech | High Performance Resin Systems",
    description:
      "StratoTech builds high-performance resin surface systems engineered layer by layer for durability, design freedom, and architectural precision.",
    images: ["/favicon.png?v=2"],
  },
  keywords: [
    "StratoTech",
    "high-performance resin systems",
    "surface engineering",
    "architectural surfaces",
    "resin surface systems",
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.stratotechsystems.com/#organization",
      name: "StratoTech",
      alternateName: "StratoTech Advanced Surfaces",
      url: "https://www.stratotechsystems.com",
      logo: "https://www.stratotechsystems.com/logo.png",
      description:
        "StratoTech builds high-performance resin surface systems engineered layer by layer for durability, design freedom, and architectural precision.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.stratotechsystems.com/#website",
      url: "https://www.stratotechsystems.com",
      name: "StratoTech",
      publisher: { "@id": "https://www.stratotechsystems.com/#organization" },
      description:
        "StratoTech builds high-performance resin surface systems engineered layer by layer for durability, design freedom, and architectural precision.",
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.stratotechsystems.com/#webpage",
      url: "https://www.stratotechsystems.com",
      name: "StratoTech | High Performance Resin Systems",
      description:
        "High-performance resin systems engineered by StratoTech to deliver durable, design-forward architectural surfaces.",
      about: {
        "@type": "Thing",
        name: "High-performance resin systems",
      },
      isPartOf: { "@id": "https://www.stratotechsystems.com/#website" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${bodyFont.variable} bg-transparent`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
