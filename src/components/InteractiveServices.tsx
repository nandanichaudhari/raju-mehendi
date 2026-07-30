import React, { useState } from 'react';
import { BridalHennaIcon, IndianWeddingIcon, DestinationPinIcon, CustomMotifIcon, ArrowRightIcon, CalendarIcon, CheckIcon } from './LuxuryIcons';

interface InteractiveServicesProps {
  onOpenBookingWithService: (serviceTitle: string) => void;
}

interface ServiceRow {
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
}

const SERVICES_DATA: ServiceRow[] = [
  {
    number: "01",
    title: "BRIDAL MEHENDI",
    tagline: "Full-Length Masterpiece & Storytelling Motifs",
    description: "Bespoke full arm and leg bridal layout incorporating couple portraits, doli & baraat processions, sacred mantras, and personal dates.",
    features: ["100% Organic Sojat Henna", "Full Arm & Knee Coverage", "Portrait & Story Motifs", "Aftercare Kit Included"],
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "DESTINATION WEDDINGS",
    tagline: "Worldwide Travel & Dedicated Bridal Artist Crew",
    description: "Master Raju Mehendi and senior assistant artists travel directly to your resort or palace in Udaipur, Jaipur, Goa, Dubai, or internationally.",
    features: ["On-Site Artist Team", "Full Bridal + VIP Guest Coverage", "Travel & Lodging Coordinated", "Oxidation Monitoring"],
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "INDIAN WEDDINGS",
    tagline: "Royal Heritage Aesthetics & Traditional Jali Craft",
    description: "Traditional Rajasthani and Central Indian Nawabi designs with 0.3mm ultra-fine cone precision, peacock crests, and payal anklets.",
    features: ["Classic Royal Motifs", "Precision 0.3mm Cone", "Symmetrical Balance", "Zero-Chemical Stain"],
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "CUSTOM / PERSONALIZED DESIGNS",
    tagline: "Contemporary Minimalist & Modern Negative Space",
    description: "Tailored modern layouts with geometric lace, botanical glove fingers, floating lotus buds, and minimalist negative space.",
    features: ["Modern Geometric Mesh", "Breathable Negative Space", "Fast-Dry Organic Formula", "Bespoke Monograms"],
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
  },
];

export const InteractiveServices: React.FC<InteractiveServicesProps> = ({
  onOpenBookingWithService,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);
  const [expandedMobileIdx, setExpandedMobileIdx] = useState<number | null>(0);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F7F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#A96658] uppercase block">
            CRAFTED FOR YOUR CELEBRATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A2522]">
            Mehendi designed <br />
            <span className="italic font-normal text-[#A96658]">around your moment.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#76635D] leading-relaxed max-w-2xl">
            From intimate bridal ceremonies to grand destination celebrations, every design is approached with detail, patience and individuality.
          </p>
          <div className="w-12 h-0.5 bg-[#C6A477] rounded-full pt-1" />
        </div>

        {/* Spatial Grid: Left Interactive List, Right Floating Preview Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Interactive Row List (7 cols) */}
          <div className="lg:col-span-7 space-y-0 border-t border-[#C6A477]/30">
            {SERVICES_DATA.map((service, idx) => {
              const isHovered = hoveredIdx === idx;
              const isExpandedMobile = expandedMobileIdx === idx;

              const getServiceIcon = (index: number) => {
                switch (index) {
                  case 0: return <BridalHennaIcon size="md" color="#A96658" />;
                  case 1: return <DestinationPinIcon size="md" color="#A96658" />;
                  case 2: return <IndianWeddingIcon size="md" color="#A96658" />;
                  case 3: return <CustomMotifIcon size="md" color="#A96658" />;
                  default: return <BridalHennaIcon size="md" color="#A96658" />;
                }
              };

              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className="border-b border-[#C6A477]/30 transition-all duration-300 group"
                >
                  {/* Desktop / Main Row Header */}
                  <div
                    onClick={() => {
                      setHoveredIdx(idx);
                      setExpandedMobileIdx(isExpandedMobile ? null : idx);
                    }}
                    className={`py-6 sm:py-8 px-2 sm:px-4 cursor-pointer flex items-center justify-between gap-4 transition-colors ${
                      isHovered ? 'bg-[#FBF7F1]/80 rounded-lg' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="flex items-center gap-2">
                        {getServiceIcon(idx)}
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A477] group-hover:text-[#A96658] transition-colors">
                          {service.number}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3A2522] tracking-tight group-hover:text-[#A96658] transition-colors">
                          {service.title}
                        </h3>
                        <p className="font-sans text-xs text-[#76635D] font-medium mt-0.5">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full border border-[#C6A477]/40 flex items-center justify-center text-[#3A2522] transition-all transform ${
                        isHovered ? 'bg-[#A96658] border-[#A96658] text-[#FBF7F1] translate-x-1' : ''
                      }`}>
                        <ArrowRightIcon size="sm" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content for Mobile & Hover Details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 px-4 pb-6 ${
                      isHovered || isExpandedMobile ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:max-h-0 lg:opacity-0'
                    }`}
                  >
                    <p className="font-sans text-xs sm:text-sm text-[#76635D] leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-[10px] font-sans font-semibold text-[#3A2522] bg-[#FBF7F1] border border-[#C6A477]/30 px-2.5 py-1 rounded-md flex items-center gap-1.5"
                        >
                          <CheckIcon size={12} color="#A96658" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBookingWithService(service.title);
                      }}
                      className="inline-flex items-center gap-2 bg-[#3A2522] hover:bg-[#A96658] text-[#FBF7F1] px-5 py-2.5 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <CalendarIcon size="sm" color="#C6A477" />
                      <span>Enquire for {service.title}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Floating Preview Frame (5 cols - Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FBF7F1] bg-[#3A2522] aspect-4/5">
              {SERVICES_DATA.map((serv, idx) => (
                <div
                  key={serv.number}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredIdx === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={serv.image}
                    alt={serv.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A2522]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-[#FBF7F1] space-y-1">
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#C6A477] uppercase">
                      SERVICE LOOKBOOK 0{idx + 1}
                    </span>
                    <h4 className="font-serif text-2xl font-bold">{serv.title}</h4>
                    <p className="font-sans text-xs text-[#FBF7F1]/80">{serv.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
