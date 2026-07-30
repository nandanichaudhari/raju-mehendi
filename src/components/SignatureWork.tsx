import React from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

interface SignatureWorkProps {
  onOpenBooking: () => void;
}

export const SignatureWork: React.FC<SignatureWorkProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF7F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* PART 1: FEATURED SIGNATURE WORK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Signature Image (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F7F1E8] bg-[#3A2522] aspect-4/5">
                <img
                  src="images/10.jpg"
                  alt="Raju Mehendi Signature Royal Bridal Fine Line Work"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2522]/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-6 right-6 bg-[#3A2522]/90 backdrop-blur-md text-[#FBF7F1] border border-[#C6A477]/40 px-3.5 py-1.5 rounded-md text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
                  <span>SIGNATURE EDITION</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Story Narrative & 3 Micro Characteristics (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#A96658] uppercase block">
                SIGNATURE WORK
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A2522] leading-[1.15]">
                Where every detail <br />
                <span className="italic font-normal text-[#A96658]">has a reason.</span>
              </h2>
            </div>

            <div className="space-y-4 text-[#76635D] font-sans text-sm sm:text-base leading-relaxed">
              <p>
                From sacred wedding vows subtly hidden within palm lace to hand-drawn peacock crests mirroring royal palace architecture, every bridal piece is an individual artistic composition.
              </p>
            </div>

            {/* 3 Detail Characteristics */}
            <div className="space-y-4 pt-2 border-t border-[#C6A477]/20">
              
              <div className="flex items-start gap-4">
                <span className="font-serif text-base font-bold text-[#C6A477]">01</span>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#3A2522]">FINE LINES</h4>
                  <p className="font-sans text-xs text-[#76635D]">Intricate details designed to reward a closer look.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-serif text-base font-bold text-[#C6A477]">02</span>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#3A2522]">BALANCE</h4>
                  <p className="font-sans text-xs text-[#76635D]">A thoughtful composition from wrist to fingertips.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-serif text-base font-bold text-[#C6A477]">03</span>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#3A2522]">PERSONALITY</h4>
                  <p className="font-sans text-xs text-[#76635D]">Details that make the design feel uniquely yours.</p>
                </div>
              </div>

            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#3A2522] hover:bg-[#A96658] text-[#FBF7F1] px-6 py-3.5 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Discuss Your Custom Motif</span>
                <ArrowRight className="w-4 h-4 text-[#C6A477]" />
              </button>
            </div>
          </div>

        </div>

        {/* PART 2: THE DETAILS MATTER (OVERLAPPING CLOSE-UP EXPERIENCE) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F7F1E8] border border-[#C6A477]/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-sans font-bold tracking-[0.3em] text-[#A96658] uppercase block">
                THE DETAILS MATTER
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3A2522] leading-snug">
                Fingertips to wrists: <br />
                <span className="italic font-normal text-[#A96658]">precision in every 0.3mm stroke.</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#76635D] leading-relaxed">
                Notice how the mesh density gradually eases from dense palm motifs to breathable wristbands, ensuring your hands look elongated, elegant, and timeless in wedding photography.
              </p>
            </div>

            {/* Overlapping Close-up Composition with Connecting Stroke Motif */}
            <div className="lg:col-span-7 relative">
              <div className="relative flex items-center justify-center">
                
                {/* Main Full Hand Image */}
                <div className="w-3/4 aspect-4/5 rounded-2xl overflow-hidden shadow-xl border-2 border-[#FBF7F1] bg-[#3A2522]">
                  <img
                    src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=1000&auto=format&fit=crop"
                    alt="Full Bridal Henna Hand Artwork"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Overlapping Extreme Close-up Detail Image */}
                <div className="absolute bottom-[-15%] right-0 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FBF7F1] bg-[#3A2522]">
                  <img
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop"
                    alt="Extreme Close-up 0.3mm Cone Henna Precision"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 bg-[#3A2522]/90 backdrop-blur-md text-[#C6A477] px-2.5 py-1 rounded text-[9px] font-sans font-bold tracking-widest uppercase">
                    0.3mm MAGNIFICATION
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
