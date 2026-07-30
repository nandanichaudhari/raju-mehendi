import React from 'react';
import { Sparkles, MapPin, Globe, Compass, Award, Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FBF7F1] relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A477]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C98F8F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Spatial Grid Layout: Left Portrait (45-50%), Right Content (50-55%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Asymmetric Portrait & Overlapping Detail Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Vertical Portrait Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F7F1E8] bg-[#F7F1E8] aspect-3/4">
                <img
                  src="images/10.jpg"
                  alt="Raju Mehendi Master Bridal Artist creating intricate henna art"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-102"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2522]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Small Detail Image (Lower Corner) */}
              <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 w-44 sm:w-52 aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-[#FBF7F1] bg-[#FBF7F1] hidden sm:block">
                <img
                  src="images/8.png"
                  alt="Intricate Fine Line Henna Craftsmanship Detail"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Editorial Floating Annotations (Not standard pill badges) */}
              <div className="absolute top-6 -left-3 sm:-left-6 bg-[#3A2522] text-[#FBF7F1] px-3.5 py-1.5 rounded-md text-[10px] font-sans font-bold tracking-[0.25em] uppercase shadow-lg border border-[#C6A477]/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A477]" />
                <span>BHOPAL • INDIA</span>
              </div>

              <div className="absolute bottom-12 left-4 sm:-left-4 bg-[#FBF7F1]/95 backdrop-blur-md text-[#3A2522] px-3 py-1.5 rounded-md text-[10px] font-sans font-bold tracking-[0.25em] uppercase shadow-md border border-[#C6A477]/40">
                <span>WORLDWIDE</span>
              </div>

            </div>
          </div>

          {/* RIGHT: Editorial Content & Credentials (7 cols) */}
          <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-4">
            
            <div className="space-y-3">
              {/* Eyebrow */}
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#A96658] uppercase block">
                THE ARTIST
              </span>

              {/* Large Serif Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A2522] leading-[1.15]">
                Where tradition <br />
                <span className="italic font-normal text-[#A96658]">meets personal artistry.</span>
              </h2>
            </div>

            {/* Concise Narrative */}
            <p className="font-sans text-base text-[#76635D] leading-relaxed max-w-2xl">
              Raju Mehendi is a premier Bhopal-based bridal and celebrity mehendi artist renowned for fine 0.3mm cone application, organic henna purity, and bespoke storytelling. With extensive expertise in royal palace celebrations and international destination weddings, every design is individually crafted to reflect the bride’s heritage, journey, and celebration.
            </p>

            {/* Personal Brand Story Quote Block with subtle mehendi line motif */}
            <div className="relative p-6 sm:p-8 rounded-xl bg-[#F7F1E8] border border-[#C6A477]/30">
              <div className="absolute top-2 right-4 text-3xl font-serif text-[#C6A477]/20 select-none">❖</div>
              <p className="font-serif text-xl sm:text-2xl text-[#3A2522] italic leading-snug">
                “Mehendi is more than a design. It becomes part of the memories you carry long after the celebration.”
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-8 h-[1px] bg-[#A96658]" />
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#A96658] uppercase">
                  RAJU MEHENDI STUDIO
                </span>
              </div>
            </div>

            {/* Artist Credentials List (Refined Editorial Typography, No Heavy Cards) */}
            <div className="pt-2 border-t border-[#C6A477]/20">
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#3A2522] uppercase block mb-4">
                EXPERTISE & RECOGNITION
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                <div className="space-y-1">
                  <div className="text-xs font-serif text-[#C6A477] font-semibold">01 — SPECIALTY</div>
                  <div className="font-serif text-lg font-bold text-[#3A2522]">CELEBRITY PROJECTS</div>
                  <div className="text-[11px] font-sans text-[#76635D]">High-profile custom art</div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-serif text-[#C6A477] font-semibold">02 — COVERAGE</div>
                  <div className="font-serif text-lg font-bold text-[#3A2522]">DESTINATION WEDDINGS</div>
                  <div className="text-[11px] font-sans text-[#76635D]">Palaces & luxury resorts</div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-serif text-[#C6A477] font-semibold">03 — HERITAGE</div>
                  <div className="font-serif text-lg font-bold text-[#3A2522]">INDIAN WEDDINGS</div>
                  <div className="text-[11px] font-sans text-[#76635D]">Royal doli & portrait motifs</div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-serif text-[#C6A477] font-semibold">04 — LOGISTICS</div>
                  <div className="font-serif text-lg font-bold text-[#3A2522]">AVAILABLE WORLDWIDE</div>
                  <div className="text-[11px] font-sans text-[#76635D]">Bhopal desk to globe</div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
