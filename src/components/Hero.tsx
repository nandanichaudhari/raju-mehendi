import React from 'react';
import { Calendar, ArrowDown, Sparkles, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { ARTIST_INFO } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#F7F1E8] flex flex-col justify-between">
      {/* Subtle Background Pattern & Glow */}
      <div className="absolute inset-0 bg-henna-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#C98F8F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C6A477]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Spatial Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 pr-0 lg:pr-6">
            
            {/* Editorial Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#C6A477]/40 bg-[#FBF7F1]/80 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A96658] animate-pulse" />
              <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#A96658] uppercase">
                RAJU MEHENDI • BHOPAL • INDIA • WORLDWIDE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold text-[#3A2522] leading-[1.08] tracking-tight">
              Mehendi Artistry <br />
              <span className="italic font-normal text-[#A96658]">Made for Your</span> <br />
              Most Unforgettable Moments.
            </h1>

            {/* Short Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-[#76635D] max-w-2xl font-normal leading-relaxed">
              From intimate bridal ceremonies in Bhopal to destination weddings across the world — 
              timeless mehendi artistry, organic henna purity, and bespoke story motifs crafted around your wedding.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-[#A96658] hover:bg-[#8D5245] text-[#FBF7F1] px-8 py-4 rounded-lg font-sans text-sm font-semibold tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C6A477]" />
                <span>Enquire for Your Wedding</span>
              </button>

              <a
                href="#portfolio"
                className="border border-[#3A2522]/20 hover:border-[#3A2522] bg-[#FBF7F1]/50 hover:bg-[#FBF7F1] text-[#3A2522] px-8 py-4 rounded-lg font-sans text-sm font-medium tracking-wider uppercase transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Explore My Work</span>
              </a>
            </div>

            {/* Trust Micro-Signals Row */}
            <div className="pt-6 border-t border-[#C6A477]/25 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-full bg-[#C6A477]/15 text-[#A96658]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-[#3A2522]">15+ Years</div>
                  <div className="text-[11px] font-sans text-[#76635D] uppercase tracking-wider">Master Craftsmanship</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-full bg-[#C6A477]/15 text-[#A96658]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-[#3A2522]">1,200+</div>
                  <div className="text-[11px] font-sans text-[#76635D] uppercase tracking-wider">Brides Styled</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-full bg-[#C6A477]/15 text-[#A96658]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-[#3A2522]">100% Organic</div>
                  <div className="text-[11px] font-sans text-[#76635D] uppercase tracking-wider">Sojat Henna Powder</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Spatial Layered Editorial Photography Composition (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Decorative Frame Line */}
              <div className="absolute -inset-4 border border-[#C6A477]/30 rounded-2xl transform rotate-2 pointer-events-none" />

              {/* Main Vertical Photograph */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-[#FBF7F1] bg-[#FBF7F1] aspect-3/4">
                <img
                  src="images/10.jpg"
                  alt="Royal Indian Bridal Mehendi Hands by Raju Mehendi"
                  loading="eager"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />
                
                {/* Floating Badge 1: BRIDAL ARTISTRY */}
                <div className="absolute top-4 left-4 bg-[#FBF7F1]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-[#C6A477]/30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A96658]" />
                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#3A2522] uppercase">
                    BRIDAL ARTISTRY
                  </span>
                </div>
              </div>

              {/* Overlapping Secondary Detail Image (Floating Spatial Component) */}
              <div className="absolute -bottom-8 -left-6 sm:-bottom-10 sm:-left-10 w-48 sm:w-56 aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-[#FBF7F1] bg-[#FBF7F1] hidden sm:block">
                <img
                  src="images/6.png"
                  alt="Intricate Fine Line Mehendi Motif Detail"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-2 right-2 bg-[#3A2522]/90 text-[#FBF7F1] px-2.5 py-1 rounded-md text-[9px] font-sans font-semibold tracking-widest uppercase">
                  0.3mm Precision Cone
                </div>
              </div>

              {/* Floating Badge 2: DESTINATION WEDDINGS */}
              <div className="absolute -top-5 -right-3 sm:-top-6 sm:-right-6 bg-[#3A2522] text-[#FBF7F1] px-4 py-2.5 rounded-lg shadow-xl border border-[#C6A477]/40 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C6A477]" />
                <span className="font-sans text-xs font-semibold tracking-wider uppercase">
                  DESTINATION WEDDINGS
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Vertical Editorial Accent Text (Desktop Only) */}
      <div className="hidden xl:block absolute left-6 bottom-1/3 transform -translate-y-1/2 opacity-25 pointer-events-none">
        <p className="font-serif text-xs font-semibold tracking-[0.4em] text-[#3A2522] uppercase writing-mode-vertical">
          MEHENDI • BRIDAL • DESTINATION
        </p>
      </div>

      {/* Trust Micro-Signal Bar & Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 relative z-10">
        <div className="border-t border-[#C6A477]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex items-center gap-2 text-xs sm:text-sm font-sans text-[#76635D] font-medium">
            <span className="text-[#A96658] font-bold">Celebrity Mehendi Artist</span>
            <span>•</span>
            <span>Bhopal</span>
            <span>•</span>
            <span>Destination Weddings</span>
            <span>•</span>
            <span className="text-[#3A2522]">Available Worldwide</span>
          </div>

          <a
            href="#about"
            className="group flex items-center gap-2 font-sans text-xs font-semibold tracking-widest text-[#76635D] hover:text-[#A96658] transition-colors uppercase"
          >
            <span>SCROLL TO EXPLORE</span>
            <div className="w-6 h-6 rounded-full border border-[#C6A477]/50 flex items-center justify-center group-hover:border-[#A96658] transition-colors">
              <ArrowDown className="w-3 h-3 text-[#A96658] animate-bounce" />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};
