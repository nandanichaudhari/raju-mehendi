import React, { useState, useEffect } from 'react';
import { CalendarIcon, PhoneIcon, MenuIcon, CloseIcon, ArrowRightIcon } from './LuxuryIcons';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F1E8]/90 backdrop-blur-md py-3 shadow-xs border-b border-[#C6A477]/20'
            : 'bg-transparent py-5 sm:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Direction */}
          <a href="#hero" className="inline-block hover:opacity-95 transition-opacity">
            <Logo variant="primary" size="md" theme="dark" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs lg:text-sm font-medium tracking-wider text-[#3A2522] hover:text-[#A96658] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C6A477] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 bg-[#A96658] hover:bg-[#8D5245] text-[#FBF7F1] px-5 py-2.5 rounded-lg font-sans text-xs font-semibold tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-xs hover:shadow-md cursor-pointer"
            >
              <CalendarIcon size="sm" color="#C6A477" />
              <span>Enquire Now</span>
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#3A2522] hover:text-[#A96658] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <CloseIcon size="lg" /> : <MenuIcon size="lg" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#F7F1E8] transition-all duration-500 flex flex-col justify-between p-6 sm:p-10 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Subtle background henna pattern */}
        <div className="absolute inset-0 bg-henna-pattern pointer-events-none opacity-10" />

        <div className="flex items-center justify-between relative z-10">
          <a href="#hero" onClick={() => setMobileMenuOpen(false)}>
            <Logo variant="primary" size="sm" theme="dark" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 rounded-full border border-[#76635D]/20 text-[#3A2522] hover:bg-[#FBF7F1]"
          >
            <CloseIcon size="md" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col space-y-5 my-auto relative z-10">
          <span className="text-[11px] font-sans tracking-[0.25em] text-[#C6A477] uppercase font-semibold">
            NAVIGATION
          </span>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl font-semibold text-[#3A2522] hover:text-[#A96658] transition-colors flex items-center justify-between group"
            >
              <span>{link.name}</span>
              <ArrowRightIcon size="md" color="#C6A477" className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>

        {/* Footer in Drawer */}
        <div className="space-y-4 pt-6 border-t border-[#C6A477]/20 relative z-10 pb-safe">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full bg-[#A96658] text-[#FBF7F1] py-3.5 rounded-lg font-sans text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2"
          >
            <CalendarIcon size="sm" color="#C6A477" />
            <span>Enquire for Your Wedding</span>
          </button>
          <div className="flex items-center justify-between text-xs text-[#76635D] font-sans pt-2">
            <span>Bhopal, MP • India</span>
            <a href="tel:+919826012345" className="hover:text-[#3A2522] flex items-center gap-1.5">
              <PhoneIcon size="sm" color="#A96658" />
              <span>+91 98260 12345</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
