import React, { useState, useEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../data/content';
import { PortfolioItem, PortfolioCategory } from '../types';
import { MapPin, Eye, X, ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';

interface PortfolioProps {
  onOpenBookingWithDesign: (designTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenBookingWithDesign }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'ALL' },
    { id: 'royal-bridal', label: 'BRIDAL' },
    { id: 'full-hand', label: 'FULL HAND' },
    { id: 'full-arm', label: 'FULL ARM' },
    { id: 'modern-minimal', label: 'INTRICATE' },
    { id: 'portrait-motifs', label: 'PORTRAIT' },
    { id: 'sangeet-guest', label: 'DESTINATION' },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => {
        if (activeCategory === 'full-hand') return item.title.toLowerCase().includes('hand') || item.detailMotifs.some(m => m.toLowerCase().includes('palm') || m.toLowerCase().includes('hand'));
        if (activeCategory === 'full-arm') return item.title.toLowerCase().includes('arm') || item.detailMotifs.some(m => m.toLowerCase().includes('arm') || m.toLowerCase().includes('full'));
        return item.category === activeCategory;
      });

  // Lock body scroll when Lightbox is open & handle Keyboard Navigation
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, filteredItems.length]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#F7F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#A96658] uppercase block">
            THE ARTISTRY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A2522]">
            Stories drawn by hand.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#76635D] max-w-md mx-auto leading-relaxed">
            Every pattern is created to complement the bride, the celebration and the story behind it.
          </p>
          <div className="w-12 h-0.5 bg-[#C6A477] mx-auto pt-1" />
        </div>

        {/* Portfolio Intro Visual: Large immersive showcase (~70-80% width) */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FBF7F1] bg-[#3A2522]">
          <div className="aspect-16/9 sm:aspect-21/9 relative overflow-hidden">
            <img
              src="images/10.jpg"
              alt="Raju Mehendi Signature Masterpiece Showcase"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3A2522]/80 via-transparent to-transparent pointer-events-none" />

            {/* Editorial Floating Overlay Text Element */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-[#FBF7F1]">
              <div className="space-y-1">
                <span className="text-[10px] font-sans font-bold tracking-[0.3em] text-[#C6A477] uppercase block">
                  RAJU MEHENDI BRIDAL ARTISTRY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold italic">
                  Royal Doli & Palace Storylines
                </h3>
              </div>

              <div className="flex items-center gap-2 bg-[#3A2522]/90 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-[#C6A477]/30 text-[10px] font-sans font-bold tracking-[0.2em] text-[#FBF7F1] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A477]" />
                <span>BHOPAL • INDIA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Category Filter UI (Text Buttons with Animated Underline, No Rounded Pills) */}
        <div className="flex items-center justify-start md:justify-center gap-6 sm:gap-8 overflow-x-auto pb-4 no-scrollbar border-b border-[#C6A477]/20 px-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative py-2 text-xs font-sans font-bold tracking-[0.2em] uppercase transition-colors whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-[#3A2522]' : 'text-[#76635D] hover:text-[#3A2522]'
                }`}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A96658] rounded-full transition-all duration-300" />
                )}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Grid (Varying Aspect Ratios: 4:5, 3:4, 1:1, 16:10, 2:3) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => {
            // Select aspect ratio class based on index for rhythm
            const aspectClasses = [
              "aspect-3/4",
              "aspect-4/5",
              "aspect-square",
              "aspect-2/3",
              "aspect-3/4",
              "aspect-4/5"
            ];
            const aspectClass = aspectClasses[idx % aspectClasses.length];

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer border border-[#C6A477]/30 bg-[#3A2522] shadow-sm hover:shadow-2xl transition-all duration-500 break-inside-avoid ${aspectClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-103"
                />

                {/* Soft Warm Overlay on Hover */}
                <div className="absolute inset-0 bg-[#3A2522]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-[#FBF7F1]">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase bg-[#C6A477] text-[#3A2522] px-2.5 py-0.5 rounded">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[10px] font-sans font-mono text-[#C6A477]">
                      0{idx + 1} / 0{filteredItems.length}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-bold leading-tight">{item.title}</h4>
                    <div className="flex items-center gap-1 text-[11px] font-sans text-[#C6A477]">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-sans font-bold uppercase tracking-widest text-[#FBF7F1] pt-2">
                      VIEW DETAIL →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && activeItem && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-[#3A2522]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#FBF7F1] text-[#3A2522] hover:bg-[#A96658] hover:text-[#FBF7F1] transition-colors cursor-pointer shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous / Next Arrow Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#FBF7F1]/20 hover:bg-[#FBF7F1] text-[#FBF7F1] hover:text-[#3A2522] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#FBF7F1]/20 hover:bg-[#FBF7F1] text-[#FBF7F1] hover:text-[#3A2522] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Card Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#FBF7F1] rounded-2xl overflow-hidden shadow-2xl border border-[#C6A477]/40 max-h-[90vh] flex flex-col md:flex-row"
          >
            {/* Image Box */}
            <div className="md:w-3/5 bg-[#3A2522] relative aspect-4/5 md:aspect-auto">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-[#3A2522]/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-sans font-mono text-[#C6A477] uppercase">
                {lightboxIndex + 1 < 10 ? `0${lightboxIndex + 1}` : lightboxIndex + 1} / {filteredItems.length < 10 ? `0${filteredItems.length}` : filteredItems.length}
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#A96658] uppercase block">
                    {activeItem.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#3A2522] mt-1">
                    {activeItem.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-sans text-[#76635D] mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C6A477]" />
                    <span>{activeItem.location}</span>
                  </div>
                </div>

                <p className="font-sans text-xs text-[#76635D] leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#C6A477]/20">
                  <span className="text-[10px] font-sans font-bold tracking-wider text-[#3A2522] uppercase block">
                    KEY MOTIF DETAILS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeItem.detailMotifs.map((motif, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[10px] font-sans bg-[#F7F1E8] border border-[#C6A477]/30 text-[#3A2522] px-2.5 py-1 rounded-md"
                      >
                        {motif}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#C6A477]/20">
                <button
                  onClick={() => {
                    const title = activeItem.title;
                    setLightboxIndex(null);
                    onOpenBookingWithDesign(title);
                  }}
                  className="w-full bg-[#A96658] hover:bg-[#3A2522] text-[#FBF7F1] py-3.5 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#C6A477]" />
                  <span>Enquire About This Design</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
