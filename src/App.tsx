import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandLoader } from './components/BrandLoader';
import { HeroTransition } from './components/HeroTransition';
import { About } from './components/About';
import { InteractiveServices } from './components/InteractiveServices';
import { BridalDarkExperience } from './components/BridalDarkExperience';
import { DestinationFeature } from './components/DestinationFeature';
import { EditorialGalleryStrip } from './components/EditorialGalleryStrip';
import { Portfolio } from './components/Portfolio';
import { SignatureWork } from './components/SignatureWork';
import { TheSignature } from './components/TheSignature';
import { ExperienceProcess } from './components/ExperienceProcess';
import { InstagramBridge } from './components/InstagramBridge';
import { Testimonials } from './components/Testimonials';
import { PreBookingCTA } from './components/PreBookingCTA';
import { EnquirySection } from './components/EnquirySection';
import { FAQ } from './components/FAQ';
import { FinalEmotionalCTA } from './components/FinalEmotionalCTA';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { BookingInquiryModal } from './components/BookingInquiryModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preSelectedPackage, setPreSelectedPackage] = useState<string>('');

  const handleOpenBooking = () => {
    setPreSelectedPackage('');
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithPackage = (pkgName: string) => {
    setPreSelectedPackage(pkgName);
    // Scroll smoothly to enquiry form on page, or open modal if preferred
    const enquireEl = document.getElementById('enquire');
    if (enquireEl) {
      enquireEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingModalOpen(true);
    }
  };

  const handleScrollToEnquire = () => {
    const el = document.getElementById('enquire');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#3A2522] font-sans antialiased selection:bg-[#C98F8F]/30 selection:text-[#3A2522] relative">
      {/* Initial Luxury Brand Intro Loader */}
      <BrandLoader />

      {/* Header & Sticky Navbar */}
      <Navbar onOpenBooking={handleScrollToEnquire} />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleScrollToEnquire} />

        {/* 2. Visual Transition After Hero */}
        <HeroTransition />

        {/* 3. About / Artist Introduction & Personal Brand Story */}
        <About />

        {/* 4. Signature Services (Interactive Spatial Row List) */}
        <InteractiveServices onOpenBookingWithService={handleOpenBookingWithPackage} />

        {/* 5. Bridal Experience Feature (Deep Espresso Section) */}
        <BridalDarkExperience onOpenBooking={handleScrollToEnquire} />

        {/* 6. Destination Wedding Feature (Beyond Bhopal) */}
        <DestinationFeature onOpenBooking={handleScrollToEnquire} />

        {/* 7. Editorial Gallery Strip (Lookbook) */}
        <EditorialGalleryStrip />

        {/* 8. Main Portfolio Showcase + Lightbox */}
        <Portfolio onOpenBookingWithDesign={handleOpenBookingWithPackage} />

        {/* 9. Featured Signature Work & Detail Magnification */}
        <SignatureWork onOpenBooking={handleScrollToEnquire} />

        {/* 10. The Signature Aesthetic (Intricate, Personal, Timeless) */}
        <TheSignature />

        {/* 11. Experience & Oxidation Care Timeline */}
        <ExperienceProcess />

        {/* 12. Instagram / Social Proof Bridge */}
        <InstagramBridge />

        {/* 13. Verified Experience & Kind Words Testimonials */}
        <Testimonials />

        {/* 14. Pre-Booking CTA Transition ("YOUR DATE. YOUR STORY. YOUR MEHENDI.") */}
        <PreBookingCTA onOpenBooking={handleScrollToEnquire} />

        {/* 15. Dedicated Enquiry Section (Form + "Before You Enquire" + How It Works + Direct Contact) */}
        <EnquirySection preSelectedPackage={preSelectedPackage} />

        {/* 16. Compact FAQ Accordion */}
        <FAQ />

        {/* 17. Pre-Footer Final Emotional CTA ("Your wedding will be remembered...") */}
        <FinalEmotionalCTA onOpenBooking={handleScrollToEnquire} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleScrollToEnquire} />

      {/* Floating Controls (WhatsApp, Mobile Sticky Bar, Back-To-Top) */}
      <FloatingControls onOpenBooking={handleScrollToEnquire} />

      {/* Booking Inquiry Modal */}
      <BookingInquiryModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preSelectedPackage={preSelectedPackage}
      />
    </div>
  );
}
