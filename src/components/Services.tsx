import React, { useState } from 'react';
import { Check, Clock, Sparkles, Calendar, ArrowRight, Calculator, MapPin, Users } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/content';
import { ServicePackage } from '../types';

interface ServicesProps {
  onOpenBookingWithPackage: (pkgName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBookingWithPackage }) => {
  // Estimator State
  const [selectedFunction, setSelectedFunction] = useState<'royal' | 'minimal' | 'destination' | 'sangeet'>('royal');
  const [coverage, setCoverage] = useState<'full' | 'mid' | 'palm'>('full');
  const [guests, setGuests] = useState<number>(20);
  const [locationType, setLocationType] = useState<'bhopal' | 'mp' | 'destination-india' | 'international'>('bhopal');

  // Calculate Estimator Output
  const calculateEstimate = () => {
    let basePrice = 25000;
    let baseHours = 5;
    let teamSize = 1;

    if (selectedFunction === 'royal') {
      basePrice = 35000;
      baseHours = 6;
      teamSize = 1;
    } else if (selectedFunction === 'minimal') {
      basePrice = 24000;
      baseHours = 4;
      teamSize = 1;
    } else if (selectedFunction === 'destination') {
      basePrice = 75000;
      baseHours = 12;
      teamSize = 3;
    } else if (selectedFunction === 'sangeet') {
      basePrice = 18000;
      baseHours = 4;
      teamSize = 3;
    }

    // Adjust for guest count
    if (guests > 0 && selectedFunction !== 'destination') {
      const guestCost = Math.ceil(guests / 10) * 4000;
      basePrice += guestCost;
      if (guests > 30) teamSize += 2;
      else if (guests > 15) teamSize += 1;
    }

    // Location adjustment
    if (locationType === 'mp') basePrice += 5000;
    else if (locationType === 'destination-india') basePrice += 18000;
    else if (locationType === 'international') basePrice += 45000;

    return {
      price: `₹${basePrice.toLocaleString('en-IN')}`,
      hours: `${baseHours} - ${baseHours + 2} Hours`,
      team: `${teamSize} ${teamSize === 1 ? 'Master Artist' : 'Artists Team'}`,
    };
  };

  const estimate = calculateEstimate();

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F7F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#A96658] uppercase">
            CURATED PACKAGES & PRICING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A2522]">
            Bespoke Bridal Services <br />
            <span className="italic font-normal text-[#A96658]">Tailored Around Your Vision</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#76635D] max-w-xl mx-auto">
            From intricate heritage royal storylines to lightweight contemporary lace, every package includes 100% pure organic henna and complete aftercare.
          </p>
          <div className="w-12 h-0.5 bg-[#C6A477] mx-auto rounded-full mt-2" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICE_PACKAGES.map((pkg: ServicePackage) => (
            <div
              key={pkg.id}
              className={`bg-[#FBF7F1] rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                pkg.popular
                  ? 'border-[#A96658] shadow-md ring-1 ring-[#A96658]/30'
                  : 'border-[#C6A477]/30 shadow-2xs hover:border-[#A96658]/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 right-6 bg-[#A96658] text-[#FBF7F1] px-3.5 py-1 rounded-full text-[10px] font-sans font-bold tracking-widest uppercase shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C6A477]" />
                  <span>Most Preferred Choice</span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#3A2522]">{pkg.name}</h3>
                    <p className="font-sans text-xs text-[#A96658] font-semibold mt-1">{pkg.tagline}</p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <span className="text-[10px] font-sans uppercase tracking-wider text-[#76635D]">Starting From</span>
                    <div className="font-serif text-2xl font-bold text-[#3A2522]">{pkg.priceStartingFrom}</div>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#76635D] leading-relaxed mb-6 pb-4 border-b border-[#C6A477]/20">
                  {pkg.description}
                </p>

                {/* Duration & Target */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-[#F7F1E8] p-3 rounded-lg text-xs font-sans text-[#3A2522]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#A96658]" />
                    <div>
                      <span className="block text-[10px] text-[#76635D] uppercase">Duration</span>
                      <span className="font-semibold">{pkg.durationHours}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C6A477]" />
                    <div>
                      <span className="block text-[10px] text-[#76635D] uppercase">Style</span>
                      <span className="font-semibold truncate">{pkg.idealFor.split(' ')[0]} Artistry</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-[11px] font-sans font-bold text-[#3A2522] uppercase tracking-wider block">
                    PACKAGE HIGHLIGHTS:
                  </span>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-sans text-[#76635D]">
                      <Check className="w-4 h-4 text-[#A96658] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenBookingWithPackage(pkg.name)}
                className="w-full bg-[#3A2522] hover:bg-[#A96658] text-[#FBF7F1] py-3.5 rounded-lg font-sans text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C6A477]" />
                <span>Reserve {pkg.name}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Bridal Package Estimator & Quote Calculator Component */}
        <div className="bg-[#FBF7F1] rounded-2xl border border-[#C6A477]/40 p-6 sm:p-10 shadow-lg relative">
          <div className="max-w-3xl mx-auto space-y-8">
            
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A96658]/10 text-[#A96658] text-xs font-sans font-bold tracking-widest uppercase">
                <Calculator className="w-3.5 h-3.5" />
                <span>INSTANT BRIDAL QUOTE ESTIMATOR</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A2522]">
                Custom Package Estimator
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#76635D]">
                Select your event details below to calculate estimated duration, artist crew size, and tailored investment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Option 1: Function Type */}
              <div className="space-y-2">
                <label className="block text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider">
                  1. Function Style & Primary Focus
                </label>
                <select
                  value={selectedFunction}
                  onChange={(e) => setSelectedFunction(e.target.value as any)}
                  className="w-full bg-[#F7F1E8] border border-[#C6A477]/40 rounded-lg p-3 text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658]"
                >
                  <option value="royal">Royal Maharani Bridal (Story & Portraits)</option>
                  <option value="minimal">Contemporary Minimalist Bridal (Geometric Lace)</option>
                  <option value="destination">Worldwide Destination Bridal Suite</option>
                  <option value="sangeet">Sangeet & Guest Mehendi Party Only</option>
                </select>
              </div>

              {/* Option 2: Location */}
              <div className="space-y-2">
                <label className="block text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider">
                  2. Venue Location / City
                </label>
                <select
                  value={locationType}
                  onChange={(e) => setLocationType(e.target.value as any)}
                  className="w-full bg-[#F7F1E8] border border-[#C6A477]/40 rounded-lg p-3 text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658]"
                >
                  <option value="bhopal">Bhopal Studio or In-City Hotel</option>
                  <option value="mp">Central Madhya Pradesh (Indore / Ujjain / Gwalior)</option>
                  <option value="destination-india">Destination India (Udaipur / Jaipur / Goa / Mumbai)</option>
                  <option value="international">International Destination (Dubai / Bali / Worldwide)</option>
                </select>
              </div>

              {/* Option 3: Additional Guest Count */}
              <div className="space-y-2 md:col-span-2">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider">
                    3. Additional Guest Mehendi Count (Bridesmaids / Family)
                  </label>
                  <span className="text-xs font-bold text-[#A96658] font-sans">{guests} Guests</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  step="5"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full accent-[#A96658] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#76635D] font-sans">
                  <span>0 Guests (Bride Only)</span>
                  <span>25 Guests</span>
                  <span>50 Guests</span>
                  <span>80+ Guests</span>
                </div>
              </div>

            </div>

            {/* Estimator Calculation Result Display */}
            <div className="bg-[#F7F1E8] p-6 rounded-xl border border-[#C6A477]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#76635D] font-semibold">
                  ESTIMATED INVESTMENT RANGE
                </span>
                <div className="font-serif text-3xl font-bold text-[#3A2522]">{estimate.price}</div>
                <div className="flex items-center justify-center sm:justify-start gap-3 text-xs font-sans text-[#76635D] pt-1">
                  <span>⏱ {estimate.hours}</span>
                  <span>•</span>
                  <span>👥 {estimate.team}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBookingWithPackage(`Custom Estimator Quote: ${estimate.price}`)}
                className="bg-[#A96658] hover:bg-[#8D5245] text-[#FBF7F1] px-6 py-3.5 rounded-lg font-sans text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-sm"
              >
                <span>Request Availability For This Quote</span>
                <ArrowRight className="w-4 h-4 text-[#C6A477]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
