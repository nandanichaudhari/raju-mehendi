import React from 'react';

export const HeroTransition: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F7F1E8] relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
        {/* Tiny Editorial Label */}
        <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#A96658] uppercase block">
          THE ART BEHIND THE EXPERIENCE
        </span>

        {/* Large Elegant Serif Statement */}
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium text-[#3A2522] italic leading-tight max-w-2xl mx-auto">
          “Every bridal story deserves a design of its own.”
        </h2>

        {/* Subtle Horizontal Champagne Gold Line */}
        <div className="pt-6 flex items-center justify-center gap-3">
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C6A477]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C6A477]" />
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C6A477]" />
        </div>
      </div>
    </section>
  );
};
