import React from 'react';
import { Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface BridalDarkExperienceProps {
  onOpenBooking: () => void;
}

export const BridalDarkExperience: React.FC<BridalDarkExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#3A2522] text-[#F7F1E8] relative overflow-hidden">
      {/* Muted Champagne Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C6A477]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#C6A477] uppercase block">
            THE BRIDAL EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F7F1E8] leading-tight">
            “Your bridal mehendi should feel <br />
            <span className="italic font-normal text-[#C6A477]">as personal as your story.”</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A477] mx-auto pt-1" />
        </div>

        {/* Spatial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Editorial Image with Vertical Label (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Vertical Side Label */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 hidden xl:block origin-bottom -rotate-90 text-[10px] font-sans font-bold tracking-[0.35em] text-[#C6A477]/60 uppercase whitespace-nowrap">
                BRIDAL EXPERIENCE — RAJU MEHENDI
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C6A477]/30 bg-[#3A2522] aspect-4/5">
                <img
                  src="images/1.png"
                  alt="Intricate Royal Bridal Henna Artwork"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2522] via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#3A2522]/90 backdrop-blur-md border border-[#C6A477]/30">
                  <div className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#C6A477] uppercase">
                    DESTINATION READY
                  </div>
                  <div className="font-serif text-base font-semibold text-[#F7F1E8]">
                    Worldwide Travel & On-Site Care
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: 3 Concise Experience Points & Minimal Journey Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Reassurance Narrative */}
            <p className="font-sans text-sm sm:text-base text-[#F7F1E8]/80 leading-relaxed">
              We understand that choosing your bridal mehendi artist is a deeply personal decision. From ensuring your stain reaches deep mahogany dark tones to translating your love story into fine cone lines, our process eliminates stress so you can cherish every minute of your sangeet and mehendi ceremony.
            </p>

            {/* 3 Experience Points */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F7F1E8]/5 border border-[#C6A477]/20 hover:border-[#C6A477]/50 transition-colors">
                <span className="font-serif text-xl font-bold text-[#C6A477] mt-0.5">01</span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#F7F1E8]">DESIGN DISCOVERY</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#F7F1E8]/70 leading-relaxed mt-1">
                    Understand the bride’s preferences, outfit, ceremony and desired style.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F7F1E8]/5 border border-[#C6A477]/20 hover:border-[#C6A477]/50 transition-colors">
                <span className="font-serif text-xl font-bold text-[#C6A477] mt-0.5">02</span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#F7F1E8]">PERSONALIZED ARTISTRY</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#F7F1E8]/70 leading-relaxed mt-1">
                    Create a design direction that feels personal rather than generic.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F7F1E8]/5 border border-[#C6A477]/20 hover:border-[#C6A477]/50 transition-colors">
                <span className="font-serif text-xl font-bold text-[#C6A477] mt-0.5">03</span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#F7F1E8]">DETAIL-FOCUSED APPLICATION</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#F7F1E8]/70 leading-relaxed mt-1">
                    Careful execution focused on precision, balance and beautiful finishing.
                  </p>
                </div>
              </div>

            </div>

            {/* Minimal Vertical Journey Bar */}
            <div className="pt-4 border-t border-[#C6A477]/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-[10px] font-sans font-bold tracking-[0.25em] text-[#C6A477] uppercase">
                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#C6A477]" />01 DISCOVER</div>
                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#C6A477]" />02 DESIGN</div>
                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#C6A477]" />03 CREATE</div>
                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#C6A477]" />04 CELEBRATE</div>
              </div>

              <button
                onClick={onOpenBooking}
                className="bg-[#C6A477] hover:bg-[#A96658] text-[#3A2522] hover:text-[#F7F1E8] px-6 py-3 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reserve Your Date
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
