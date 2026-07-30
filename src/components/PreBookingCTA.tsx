import React from 'react';
import { Calendar, MessageSquare, Sparkles } from 'lucide-react';
import { ARTIST_INFO } from '../data/content';

interface PreBookingCTAProps {
  onOpenBooking: () => void;
  onOpenWhatsApp?: () => void;
}

export const PreBookingCTA: React.FC<PreBookingCTAProps> = ({
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
    <section className="py-20 lg:py-28 bg-[#3A2522] text-[#F7F1E8] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#C6A477]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] text-[#C6A477] uppercase block">
                YOUR DATE. YOUR STORY. YOUR MEHENDI.
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F7F1E8] leading-[1.15]">
                Let’s create something <br />
                <span className="italic font-normal text-[#C6A477]">beautiful for your day.</span>
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#F7F1E8]/80 leading-relaxed max-w-xl">
              Share a few details about your celebration and we’ll get back to you with the next steps.
            </p>

            {/* Decorative Mehendi Curve Accent Line */}
            <div className="pt-2 flex items-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-[#C6A477] to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#C6A477]" />
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 bg-[#A96658] hover:bg-[#C98F8F] text-[#F7F1E8] px-8 py-4 rounded-lg font-sans text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C6A477]" />
                <span>START YOUR ENQUIRY</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2.5 border border-[#C6A477]/40 hover:border-[#C6A477] text-[#F7F1E8] hover:bg-[#F7F1E8]/5 px-7 py-4 rounded-lg font-sans text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WHATSAPP US</span>
              </button>
            </div>

          </div>

          {/* RIGHT: Spatial Visual Composition with Overlapping Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Vertical Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C6A477]/40 bg-[#3A2522] aspect-4/5 transform lg:-rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="images/10.jpg"
                  alt="Royal Bridal Mehendi Journey Artistry"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2522]/80 via-transparent to-transparent pointer-events-none" />

                {/* Tiny Floating Editorial Label around the Image */}
                <div className="absolute top-4 right-4 bg-[#3A2522]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#C6A477]/30 text-[9px] font-sans font-bold tracking-[0.25em] text-[#C6A477] uppercase">
                  BRIDAL • DESTINATION • PERSONAL
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-[#F7F1E8]">
                  <p className="font-serif text-base italic font-normal text-[#F7F1E8]/90">
                    “Every palm tells a love story.”
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
