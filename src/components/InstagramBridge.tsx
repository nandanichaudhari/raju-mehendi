import React from 'react';
import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';

const INSTA_GRID = [
  {
    id: "ig1",
    url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
    likes: "2.4k",
    caption: "Fine line bridal peacock artwork for our royal Udaipur bride.",
  },
  {
    id: "ig2",
    url: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800&auto=format&fit=crop",
    title: "Organic Henna Stain",
    likes: "1.8k",
    caption: "Deep rich mahogany stain result after 48 hours of natural oxidation.",
  },
  {
    id: "ig3",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
    likes: "3.1k",
    caption: "Destination wedding session in Jaipur palace courtyard.",
  },
  {
    id: "ig4",
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop",
    likes: "1.5k",
    caption: "Full leg payal anklet henna design for bridal sangeet night.",
  },
  {
    id: "ig5",
    url: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop",
    likes: "2.9k",
    caption: "Personalized couple story motifs & sacred wedding dates.",
  },
  {
    id: "ig6",
    url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop",
    likes: "2.1k",
    caption: "Intricate Rajasthani bridal payal & feet mehendi artistry.",
  },
];

export const InstagramBridge: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF7F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#A96658] uppercase block">
              FROM THE STUDIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A2522]">
              More of the artistry, <br />
              <span className="italic font-normal text-[#A96658]">behind the scenes.</span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3A2522] hover:bg-[#A96658] text-[#FBF7F1] px-6 py-3.5 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider transition-colors shadow-md group cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-[#C6A477] group-hover:text-[#FBF7F1] transition-colors" />
            <span>VIEW INSTAGRAM</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A477]" />
          </a>
        </div>

        {/* Curated Social Proof Grid (6 items) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTA_GRID.map((item) => (
            <a
              key={item.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-square bg-[#3A2522] border border-[#C6A477]/30 shadow-sm block"
            >
              <img
                src={item.url}
                alt="Raju Mehendi Instagram Bridal Showcase"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-108"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2522]/80 via-[#3A2522]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-[#FBF7F1]">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-[#C6A477]" />
                </div>
                <div>
                  <p className="font-sans text-[10px] text-[#FBF7F1]/90 line-clamp-2 leading-tight">
                    {item.caption}
                  </p>
                  <span className="text-[9px] font-sans font-bold text-[#C6A477] block mt-1">
                    ♥ {item.likes}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Reassurance Social Proof Note */}
        <div className="mt-10 p-6 rounded-xl bg-[#F7F1E8] border border-[#C6A477]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C6A477] animate-ping" />
            <span className="font-sans text-xs sm:text-sm font-semibold text-[#3A2522]">
              Real brides • Real destination weddings • Continuous studio updates
            </span>
          </div>

          <span className="text-xs font-serif text-[#A96658] italic font-medium">
            Follow @rajumehendi for daily live bridal sessions
          </span>
        </div>

      </div>
    </section>
  );
};
