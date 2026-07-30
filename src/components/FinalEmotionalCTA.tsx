import React from 'react';
import { CalendarIcon, WhatsAppIcon } from './LuxuryIcons';
import { ARTIST_INFO } from '../data/content';

interface FinalEmotionalCTAProps {
  onOpenBooking: () => void;
  onOpenWhatsApp?: () => void;
}

export const FinalEmotionalCTA: React.FC<FinalEmotionalCTAProps> = ({
  onOpenBooking,
  onOpenWhatsApp,
}) => {
  const handleWhatsApp = () => {
    if (onOpenWhatsApp) {
      onOpenWhatsApp();
    } else {
      const text = encodeURIComponent(`Hello Raju Mehendi, I’d love to enquire about mehendi for my wedding.`);
      window.open(`https://wa.me/${ARTIST_INFO.whatsapp}?text=${text}`, '_blank');
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#3A2522] text-[#F7F1E8] relative overflow-hidden">
      
      {/* Background Soft Radial Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C6A477]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Bridal Image Frame (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C6A477]/40 bg-[#3A2522] aspect-4/5 transform lg:rotate-1 hover:rotate-0 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
                  alt="Raju Mehendi Masterpiece Bridal Storytelling"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2522]/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#C6A477] uppercase block">
                    THE BRIDAL EXPERIENCE
                  </span>
                  <p className="font-serif text-lg font-medium text-[#F7F1E8] mt-1">
                    Unforgettable Royal Bridal Heritage
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Emotional Copy & Conversion CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            
            <div className="space-y-4">
              <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.3em] text-[#C6A477] uppercase block">
                RAJU MEHENDI • BHOPAL • INDIA • WORLDWIDE
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F7F1E8] leading-[1.15]">
                Your wedding will be remembered. <br />
                <span className="italic font-normal text-[#C6A477]">
                  Let the mehendi be part of the story.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#F7F1E8]/80 leading-relaxed max-w-lg pt-2">
                Ready to talk about your celebration? Tell us about your wedding date and location, and we’ll begin designing your custom bridal suite.
              </p>
            </div>

            {/* Small Champagne Gold Line */}
            <div className="w-16 h-0.5 bg-[#C6A477]" />

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 bg-[#A96658] hover:bg-[#C98F8F] text-[#F7F1E8] px-8 py-4 rounded-lg font-sans text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
              >
                <CalendarIcon size="sm" color="#C6A477" />
                <span>ENQUIRE FOR YOUR WEDDING</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2.5 border border-[#C6A477]/40 hover:border-[#C6A477] text-[#F7F1E8] hover:bg-[#F7F1E8]/5 px-7 py-4 rounded-lg font-sans text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
              >
                <WhatsAppIcon size="sm" color="#25D366" />
                <span>WHATSAPP US</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
