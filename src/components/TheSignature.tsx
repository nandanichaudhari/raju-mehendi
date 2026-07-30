import React from 'react';

export const TheSignature: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F1E8] relative overflow-hidden border-t border-[#C6A477]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#A96658] uppercase block">
            THE SIGNATURE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A2522] leading-tight">
            Traditional roots. <br />
            <span className="italic font-normal text-[#A96658]">A distinctly personal finish.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#76635D] max-w-lg mx-auto">
            Our studio visual language balances centuries-old royal motifs with modern negative space layouts designed for the contemporary bride.
          </p>
        </div>

        {/* Spatial Typography Composition: INTRICATE, PERSONAL, TIMELESS */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-center justify-center">
          
          <div className="space-y-2 p-6 rounded-2xl bg-[#FBF7F1] border border-[#C6A477]/30 transform sm:-rotate-1 hover:rotate-0 transition-transform">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#C6A477] uppercase block">
              CHARACTERISTIC 01
            </span>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#3A2522] block tracking-tight">
              INTRICATE
            </span>
            <p className="font-sans text-xs text-[#76635D]">
              Fine-line precision using 0.3mm natural cone application for maximum detail density.
            </p>
          </div>

          <div className="space-y-2 p-8 rounded-2xl bg-[#3A2522] text-[#FBF7F1] border border-[#C6A477]/40 shadow-xl transform sm:scale-105 z-10">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#C6A477] uppercase block">
              CHARACTERISTIC 02
            </span>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#F7F1E8] block tracking-tight">
              PERSONAL
            </span>
            <p className="font-sans text-xs text-[#F7F1E8]/80">
              Custom couple portraits, love stories, dates, and sacred wedding vows embedded in the palm.
            </p>
          </div>

          <div className="space-y-2 p-6 rounded-2xl bg-[#FBF7F1] border border-[#C6A477]/30 transform sm:rotate-1 hover:rotate-0 transition-transform">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#C6A477] uppercase block">
              CHARACTERISTIC 03
            </span>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#3A2522] block tracking-tight">
              TIMELESS
            </span>
            <p className="font-sans text-xs text-[#76635D]">
              A balance that ages gracefully from wedding day mahogany stain to lasting post-ceremony memories.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
