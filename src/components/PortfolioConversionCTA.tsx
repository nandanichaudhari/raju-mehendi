import React from 'react';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface PortfolioConversionCTAProps {
  onOpenBooking: () => void;
  onExploreWork?: () => void;
}

export const PortfolioConversionCTA: React.FC<PortfolioConversionCTAProps> = ({
  onOpenBooking,
  onExploreWork,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#3A2522] text-[#F7F1E8] relative overflow-hidden">
      {/* Soft Radial Glow */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#C6A477]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Content & Invitation (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#C6A477] uppercase block">
              YOUR BRIDAL JOURNEY
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F7F1E8] leading-tight">
              Seen enough to <br />
              <span className="italic font-normal text-[#C6A477]">imagine yours?</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#F7F1E8]/80 leading-relaxed max-w-xl">
              Tell us about your wedding, your date and the kind of mehendi you have in mind. We operate with limited monthly bridal bookings to ensure undivided artistic dedication for every bride.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 bg-[#A96658] hover:bg-[#C98F8F] text-[#F7F1E8] px-8 py-4 rounded-lg font-sans text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C6A477]" />
                <span>START YOUR ENQUIRY</span>
              </button>

              {onExploreWork && (
                <button
                  onClick={onExploreWork}
                  className="inline-flex items-center gap-2 border border-[#C6A477]/40 hover:border-[#C6A477] text-[#F7F1E8] px-6 py-4 rounded-lg font-sans text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <span>VIEW MORE WORK</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A477]" />
                </button>
              )}
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-sans text-[#F7F1E8]/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A477]" />
              <span>Bhopal Studio Desk • Destination Weddings Worldwide • 100% Pure Organic Sojat Henna</span>
            </div>
          </div>

          {/* RIGHT: Overlapping Close-up Artwork Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C6A477]/40 bg-[#3A2522] aspect-4/5 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1000&auto=format&fit=crop"
                  alt="Raju Mehendi Intricate Bridal Story Motifs"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2522]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-[#F7F1E8]">
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#C6A477] uppercase block">
                    RESERVE EARLY
                  </span>
                  <p className="font-serif text-lg font-semibold">Peak Wedding Season Dates Booking Fast</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
