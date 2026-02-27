import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={className}>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {children}
      </div>
    </section>
  );
}