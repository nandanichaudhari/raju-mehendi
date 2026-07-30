import React from 'react';
import { MapPin, Plane, Globe2, Compass, ArrowRight } from 'lucide-react';

interface DestinationFeatureProps {
  onOpenBooking: () => void;
}

export const DestinationFeature: React.FC<DestinationFeatureProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF7F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Content & Worldwide Positioning (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#A96658] uppercase block">
                BEYOND BHOPAL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A2522] leading-[1.15]">
                From Bhopal <br />
                <span className="italic font-normal text-[#A96658]">to wherever your story takes you.</span>
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#76635D] leading-relaxed">
              Based in Bhopal, Madhya Pradesh, Raju Mehendi specializes in seamless destination travel for royal weddings across Rajasthan, Goa, Mumbai, Delhi, and luxury international venues. From logistics management for large bridal parties to on-site stain optimization, our studio handles travel with white-glove precision.
            </p>

            {/* Refined Icon Language List (No Emoji-Heavy Cards) */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-[#F7F1E8] border border-[#C6A477]/30 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#A96658] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#3A2522]">BHOPAL STUDIO</h4>
                  <p className="font-sans text-xs text-[#76635D]">Primary Flagship Desk</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F1E8] border border-[#C6A477]/30 flex items-start gap-3">
                <Plane className="w-5 h-5 text-[#A96658] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#3A2522]">DESTINATION WEDDINGS</h4>
                  <p className="font-sans text-xs text-[#76635D]">Resort & Palace Logistics</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F1E8] border border-[#C6A477]/30 flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#A96658] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#3A2522]">INDIAN WEDDINGS</h4>
                  <p className="font-sans text-xs text-[#76635D]">Pan-India Coverage</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F1E8] border border-[#C6A477]/30 flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-[#A96658] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#3A2522]">AVAILABLE WORLDWIDE</h4>
                  <p className="font-sans text-xs text-[#76635D]">International Bookings</p>
                </div>
              </div>

            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#A96658] hover:bg-[#3A2522] text-[#FBF7F1] px-6 py-3.5 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Check Destination Availability</span>
                <ArrowRight className="w-4 h-4 text-[#C6A477]" />
              </button>
            </div>
          </div>

          {/* RIGHT: Destination Editorial Visual + Abstract Route Lines (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Destination Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F7F1E8] bg-[#F7F1E8] aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000&auto=format&fit=crop"
                  alt="Royal Destination Palace Wedding Mehendi Setting"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Subtle Route Line Overlay Graphic */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2522]/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[#FBF7F1]">
                  <div>
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#C6A477] uppercase block">
                      GLOBAL DESTINATIONS
                    </span>
                    <span className="font-serif text-lg font-semibold">Udaipur • Jaipur • Goa • Dubai</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
