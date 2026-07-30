import React, { useState } from 'react';
import { Sparkles, Calendar, HeartHandshake, ShieldCheck, Flame, Sun, Droplets, CheckCircle2 } from 'lucide-react';

export const ExperienceProcess: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2); // Default 48h peak

  const processSteps = [
    {
      number: "01",
      title: "Design & Story Consultation",
      subtitle: "Pre-Wedding Customization",
      description: "We review your Pinterest inspirations, bridal lehenga motif patterns, groom's initials, wedding date, and personal couple milestones (first date, proposal city, hobbies).",
      highlight: "Personalized Storyboard Included"
    },
    {
      number: "02",
      title: "Fresh Organic Henna Batching",
      subtitle: "24-Hour Pre-Ceremony Preparation",
      description: "Master Raju Ji hand-prepares a fresh batch of triple-sifted Sojat Lawsonia powder mixed with pure essential lavender and eucalyptus oils, yielding maximum dye release without synthetic chemicals.",
      highlight: "100% Zero Chemical Guarantee"
    },
    {
      number: "03",
      title: "Precision Application Day",
      subtitle: "Comfortable Royal Sitting",
      description: "Our team arrives punctually at your resort or venue with custom ergonomic arm cushions, lighting, and specialized 0.3mm ultra-fine cones for painless, comfortable, zero-rush application.",
      highlight: "Master Punctuality & Comfort"
    },
    {
      number: "04",
      title: "Aftercare & Clove Oxidation",
      subtitle: "48-Hour Stain Ritual",
      description: "We apply warm lemon-sugar sealing, provide bespoke cotton wrapping, and guide you through our sacred clove-smoke steam treatment to lock in the deepest mahogany stain.",
      highlight: "Peak Richness On Pheras Day"
    }
  ];

  const stainStages = [
    {
      hours: "0 Hours",
      label: "Paste Scrape-Off",
      color: "bg-[#C6A477]",
      textColor: "text-[#3A2522]",
      stainTitle: "Vibrant Bright Amber Gold",
      stainDesc: "Henna paste is gently scraped off without water. The fresh stain appears bright yellowish-orange as oxygen begins reacting with the Lawsonia dye."
    },
    {
      hours: "24 Hours",
      label: "Active Oxidation",
      color: "bg-[#C98F8F]",
      textColor: "text-[#FBF7F1]",
      stainTitle: "Rich Warm Ruby Chestnut",
      stainDesc: "Natural oils on skin react with atmospheric oxygen. Color deepens rapidly into warm reddish-brown across palms and arms."
    },
    {
      hours: "48 Hours",
      label: "Wedding Day Peak",
      color: "bg-[#A96658]",
      textColor: "text-[#FBF7F1]",
      stainTitle: "Deep Royal Mahogany & Dark Espresso",
      stainDesc: "Maximum color saturation reached right on your wedding ceremony day! Magnificent high-contrast darkness for photography."
    },
    {
      hours: "7 - 12 Days",
      label: "Natural Fading",
      color: "bg-[#76635D]",
      textColor: "text-[#FBF7F1]",
      stainDesc: "Color fades evenly and gently with skin exfoliation, leaving skin clean with zero allergic residue."
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F7F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#A96658] uppercase">
            THE LUXURY BRIDAL JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A2522]">
            An Uncompromising Experience <br />
            <span className="italic font-normal text-[#A96658]">From First Call to Final Stain</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A477] mx-auto rounded-full mt-2" />
        </div>

        {/* 4-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FBF7F1] p-6 sm:p-8 rounded-2xl border border-[#C6A477]/30 shadow-2xs hover:border-[#A96658] transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-4xl font-bold text-[#C6A477]/50 group-hover:text-[#A96658] transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#A96658] bg-[#A96658]/10 px-2.5 py-1 rounded-full">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#3A2522] mb-2">{step.title}</h3>
                <p className="font-sans text-xs text-[#76635D] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#C6A477]/20 flex items-center gap-2 text-[11px] font-sans font-semibold text-[#3A2522]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A96658]" />
                <span>{step.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stain Care & 48-Hour Oxidation Guide Interactive Widget */}
        <div className="bg-[#FBF7F1] rounded-2xl border border-[#C6A477]/40 p-6 sm:p-10 shadow-md">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="text-center space-y-2">
              <span className="text-[11px] font-sans font-bold tracking-widest text-[#A96658] uppercase">
                SCIENCE OF ORGANIC HENNA
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A2522]">
                The 48-Hour Oxidation Timeline
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#76635D]">
                Pure organic henna requires 24 to 48 hours of natural atmospheric oxidation to reach its rich mahogany peak.
              </p>
            </div>

            {/* Stage Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stainStages.map((stage, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-xl text-center border transition-all cursor-pointer ${
                    activeStage === idx
                      ? 'border-[#A96658] bg-[#F7F1E8] shadow-sm ring-1 ring-[#A96658]/30'
                      : 'border-[#C6A477]/20 bg-[#FBF7F1] hover:bg-[#F7F1E8]'
                  }`}
                >
                  <div className="font-serif text-lg font-bold text-[#3A2522]">{stage.hours}</div>
                  <div className="text-[10px] font-sans font-semibold text-[#76635D] uppercase mt-0.5">
                    {stage.label}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Stage Details Card */}
            <div className="bg-[#F7F1E8] p-6 sm:p-8 rounded-xl border border-[#C6A477]/30 flex flex-col sm:flex-row items-center gap-6">
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full ${stainStages[activeStage].color} flex items-center justify-center shrink-0 shadow-inner border-2 border-[#FBF7F1]`}>
                <Flame className={`w-8 h-8 ${stainStages[activeStage].textColor}`} />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#3A2522] text-[#FBF7F1] text-[10px] font-sans font-bold uppercase tracking-widest">
                  STAGE {activeStage + 1}: {stainStages[activeStage].hours}
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#3A2522]">
                  {stainStages[activeStage].stainTitle || stainStages[activeStage].label}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#76635D] leading-relaxed">
                  {stainStages[activeStage].stainDesc}
                </p>
              </div>
            </div>

            {/* Essential Care Rules */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#C6A477]/20 text-xs font-sans text-[#76635D]">
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-[#A96658]" />
                <span>Avoid water contact for first 12 hours after paste removal</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#A96658]" />
                <span>Apply warm clove steam ritual to intensify darkness</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A96658]" />
                <span>Use provided natural coconut & essential aftercare balm</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
