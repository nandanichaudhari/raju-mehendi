import React, { useState, useEffect } from 'react';
import { WhatsAppIcon, ArrowUpIcon, CalendarIcon } from './LuxuryIcons';
import { ARTIST_INFO } from '../data/content';

interface FloatingControlsProps {
  onOpenBooking: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenBooking }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hideMobileBar, setHideMobileBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button after 500px scroll
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Hide mobile sticky conversion bar near the enquiry form or footer
      const enquireEl = document.getElementById('enquire');
      const footerEl = document.querySelector('footer');

      let nearEnquire = false;
      let nearFooter = false;

      if (enquireEl) {
        const rect = enquireEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          nearEnquire = true;
        }
      }

      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          nearFooter = true;
        }
      }

      setHideMobileBar(nearEnquire || nearFooter);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hello Raju Mehendi, I’d love to enquire about mehendi for my wedding.`);
    window.open(`https://wa.me/${ARTIST_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* 1. FLOATING DESKTOP & MOBILE WHATSAPP BUTTON (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3">
        
        {/* Back to Top Circular Outline Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-11 h-11 rounded-full border border-[#C6A477]/50 bg-[#FBF7F1] text-[#3A2522] hover:bg-[#3A2522] hover:text-[#FBF7F1] transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer transform hover:-translate-y-0.5"
          >
            <ArrowUpIcon size="sm" color="#C6A477" />
          </button>
        )}

        {/* Floating WhatsApp CTA */}
        <button
          onClick={openWhatsApp}
          className="bg-[#3A2522] hover:bg-[#2A1A18] text-[#FBF7F1] border border-[#C6A477]/40 pl-4 pr-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm">
            <WhatsAppIcon size="sm" color="#FFFFFF" />
          </div>
          <span className="font-sans text-xs font-bold tracking-wider uppercase">
            WhatsApp Concierge
          </span>
        </button>
      </div>

      {/* 2. REFINED MOBILE STICKY CONVERSION BAR (Bottom Screen on Mobile) */}
      {!hideMobileBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FBF7F1] border-t border-[#C6A477]/30 shadow-2xl p-3 sm:hidden flex items-center gap-2 pb-safe">
          
          <button
            onClick={openWhatsApp}
            className="flex-1 bg-[#3A2522] text-[#FBF7F1] border border-[#C6A477]/30 py-3 rounded-lg font-sans text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
          >
            <WhatsAppIcon size="sm" color="#25D366" />
            <span>WHATSAPP</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="flex-1 bg-[#A96658] text-[#FBF7F1] py-3 rounded-lg font-sans text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <CalendarIcon size="sm" color="#C6A477" />
            <span>ENQUIRE</span>
          </button>

        </div>
      )}

      {/* Mobile Back to Top floating button if scrolled */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-20 right-4 z-40 sm:hidden w-10 h-10 rounded-full border border-[#C6A477]/40 bg-[#FBF7F1] text-[#3A2522] flex items-center justify-center shadow-lg cursor-pointer"
        >
          <ArrowUpIcon size="sm" color="#C6A477" />
        </button>
      )}
    </>
  );
};
