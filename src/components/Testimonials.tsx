import React, { useState } from 'react';
import { MapPin, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FBF7F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#A96658] uppercase block">
            KIND WORDS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A2522]">
            Loved by brides and their families.
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A477] mx-auto pt-1" />
        </div>

        {/* Large Editorial Quote & Minimal Testimonial Layout */}
        <div className="max-w-4xl mx-auto bg-[#F7F1E8] rounded-2xl border border-[#C6A477]/30 shadow-xl p-8 sm:p-12 relative">
          
          <Quote className="absolute top-8 right-8 w-20 h-20 text-[#C6A477]/10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Bride Photo */}
            <div className="md:col-span-5 relative">
              <div className="aspect-3/4 rounded-xl overflow-hidden shadow-md border-2 border-[#FBF7F1] relative bg-[#3A2522]">
                <img
                  src={activeReview.image}
                  alt={activeReview.brideName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 bg-[#3A2522]/90 text-[#FBF7F1] px-3 py-1 rounded-md text-[10px] font-sans font-bold tracking-widest uppercase border border-[#C6A477]/30">
                  {activeReview.weddingDate}
                </div>
              </div>
            </div>

            {/* Right Quote Content */}
            <div className="md:col-span-7 space-y-6">
              
              <blockquote className="font-serif text-2xl sm:text-3xl text-[#3A2522] italic font-medium leading-relaxed">
                “{activeReview.quote}”
              </blockquote>

              <p className="font-sans text-xs sm:text-sm text-[#76635D] leading-relaxed">
                {activeReview.fullStory}
              </p>

              {/* Author & Location */}
              <div className="pt-4 border-t border-[#C6A477]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#3A2522]">
                    {activeReview.brideName} {activeReview.groomName && `& ${activeReview.groomName}`}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-[#A96658] font-sans font-medium mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeReview.venueLocation}</span>
                  </div>
                </div>

                {activeReview.featuredMotif && (
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#3A2522] bg-[#FBF7F1] border border-[#C6A477]/30 px-3 py-1 rounded-md">
                    {activeReview.featuredMotif}
                  </span>
                )}
              </div>

            </div>

          </div>

          {/* Minimal Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#C6A477]/20">
            <div className="text-xs font-sans font-bold tracking-widest text-[#C6A477]">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full border border-[#C6A477]/40 bg-[#FBF7F1] text-[#3A2522] hover:bg-[#3A2522] hover:text-[#FBF7F1] transition-colors cursor-pointer"
                aria-label="Previous quote"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full border border-[#C6A477]/40 bg-[#FBF7F1] text-[#3A2522] hover:bg-[#3A2522] hover:text-[#FBF7F1] transition-colors cursor-pointer"
                aria-label="Next quote"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
