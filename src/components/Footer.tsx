import React from 'react';
import { PhoneIcon, InstagramIcon, ArrowUpIcon, CalendarIcon, WhatsAppIcon } from './LuxuryIcons';
import { ARTIST_INFO } from '../data/content';
import { Logo } from './Logo';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hello Raju Mehendi, I’d love to enquire about mehendi for my wedding.`);
    window.open(`https://wa.me/${ARTIST_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#3A2522] text-[#F7F1E8] pt-20 pb-12 relative overflow-hidden border-t border-[#C6A477]/20">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A477]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#C6A477]/20">
          
          {/* LEFT: Brand Logo & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="pb-1">
              <Logo variant="primary" theme="light" size="lg" />
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#F7F1E8]/70 leading-relaxed max-w-sm pt-1">
              Bridal Mehendi • Destination Weddings • Worldwide
            </p>

            <p className="font-sans text-xs text-[#F7F1E8]/60 leading-relaxed max-w-sm">
              Crafting bespoke royal heritage mehendi narratives with 100% pure organic Sojat henna for discerning brides globally.
            </p>

            {/* Subtle Signature Monogram Stroke */}
            <div className="pt-2 flex items-center gap-3">
              <div className="w-12 h-px bg-[#C6A477]/40" />
              <span className="font-serif italic text-xs text-[#C6A477]">Raju Mehendi Studio</span>
            </div>
          </div>

          {/* CENTER: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C6A477] uppercase tracking-wider">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#F7F1E8]/80">
              <li><a href="#hero" className="hover:text-[#C6A477] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C6A477] transition-colors">About Raju Mehendi</a></li>
              <li><a href="#services" className="hover:text-[#C6A477] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#C6A477] transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-[#C6A477] transition-colors">Testimonials</a></li>
              <li><a href="#enquire" className="hover:text-[#C6A477] transition-colors">Enquire</a></li>
            </ul>
          </div>

          {/* RIGHT: Connect Details (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold text-[#C6A477] uppercase tracking-wider">
              CONNECT
            </h4>
            
            <div className="space-y-3 font-sans text-xs text-[#F7F1E8]/80">
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-[#C6A477]/40 flex items-center justify-center text-[#C6A477] hover:bg-[#C6A477] hover:text-[#3A2522] transition-colors shrink-0"
                  aria-label="Instagram"
                >
                  <InstagramIcon size="sm" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6A477] transition-colors"
                >
                  {ARTIST_INFO.instagram}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={openWhatsApp}
                  className="w-8 h-8 rounded-full border border-[#C6A477]/40 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors shrink-0 cursor-pointer"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size="sm" />
                </button>
                <button
                  onClick={openWhatsApp}
                  className="hover:text-[#C6A477] transition-colors text-left cursor-pointer"
                >
                  WhatsApp Studio Desk (+91 98260 12345)
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`tel:${ARTIST_INFO.phone}`}
                  className="w-8 h-8 rounded-full border border-[#C6A477]/40 flex items-center justify-center text-[#C6A477] hover:bg-[#C6A477] hover:text-[#3A2522] transition-colors shrink-0"
                  aria-label="Phone"
                >
                  <PhoneIcon size="sm" />
                </a>
                <a href={`tel:${ARTIST_INFO.phone}`} className="hover:text-[#C6A477] transition-colors">
                  {ARTIST_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-[#A96658] hover:bg-[#C98F8F] text-[#F7F1E8] px-5 py-2.5 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <CalendarIcon size="sm" color="#C6A477" />
                <span>START YOUR ENQUIRY</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#F7F1E8]/60">
          <div>
            © {new Date().getFullYear()} Raju Mehendi. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#C6A477]/80">
              Bhopal • Madhya Pradesh • India
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#C6A477] transition-colors cursor-pointer text-xs font-semibold uppercase"
            >
              <span>BACK TO TOP</span>
              <ArrowUpIcon size="sm" color="#C6A477" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
