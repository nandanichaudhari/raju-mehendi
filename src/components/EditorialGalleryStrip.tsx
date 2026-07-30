import React, { useState } from 'react';
import { ArrowUpRight, Eye, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  aspect: string;
}

const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: "g1",
    url: "images/1.png",
    title: "Royal Doli & Bridal Palms",
    subtitle: "Fine 0.3mm Cone Heritage Art",
    aspect: "aspect-3/4",
  },
  {
    id: "g2",
    url: "images/2.png",
    title: "Intricate Lotus Mesh",
    subtitle: "Negative Space Wristband Detail",
    aspect: "aspect-square",
  },
  {
    id: "g3",
    url: "images/3.png",
    title: "Full Arm Royal Peacock",
    subtitle: "Sojat Organic Dark Stain",
    aspect: "aspect-3/4",
  },
  {
    id: "g4",
    url: "images/4.png",
    title: "Destination Bridal Feet Payal",
    subtitle: "Resort Palace Setting",
    aspect: "aspect-4/5",
  },
  {
    id: "g5",
    url: "images/5.png",
    title: "Bespoke Couple Monogram",
    subtitle: "Personal Story Motifs",
    aspect: "aspect-3/4",
  },
];

export const EditorialGalleryStrip: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<GalleryImage | null>(null);

  return (
    <section className="py-20 lg:py-24 bg-[#F7F1E8] relative overflow-hidden border-y border-[#C6A477]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center space-y-2">
        <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#A96658] uppercase block">
          EDITORIAL LOOKBOOK
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#3A2522]">
          A visual journey through fine henna craftsmanship.
        </h2>
      </div>

      {/* Gallery Strip with Varying Aspect Ratios & Subtle Zoom Hover */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className={`group relative rounded-xl overflow-hidden shadow-md cursor-pointer border border-[#C6A477]/30 bg-[#3A2522] ${item.aspect}`}
            >
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Soft Warm Translucent Hover Overlay */}
              <div className="absolute inset-0 bg-[#3A2522]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-[#FBF7F1]">
                <div className="flex justify-end">
                  <span className="w-7 h-7 rounded-full bg-[#C6A477] text-[#3A2522] flex items-center justify-center">
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h4 className="font-serif text-sm font-bold text-[#FBF7F1] leading-tight">{item.title}</h4>
                  <p className="font-sans text-[10px] text-[#C6A477]">{item.subtitle}</p>
                  <span className="inline-flex items-center gap-1 text-[9px] font-sans font-bold uppercase tracking-widest text-[#FBF7F1] pt-1">
                    VIEW DETAIL →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-50 bg-[#3A2522]/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#FBF7F1] rounded-2xl overflow-hidden shadow-2xl border border-[#C6A477]/40 p-4 sm:p-6"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#3A2522] text-[#FBF7F1] flex items-center justify-center cursor-pointer hover:bg-[#A96658] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-3/4 rounded-xl overflow-hidden mb-4 bg-[#3A2522]">
              <img
                src={selectedImg.url}
                alt={selectedImg.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#A96658] uppercase">
                RAJU MEHENDI PORTFOLIO
              </span>
              <h3 className="font-serif text-xl font-bold text-[#3A2522]">{selectedImg.title}</h3>
              <p className="font-sans text-xs text-[#76635D]">{selectedImg.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
