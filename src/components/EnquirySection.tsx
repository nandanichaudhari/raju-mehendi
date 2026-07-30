import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Phone,
  Mail,
  Instagram,
  User,
  Users,
  Sparkles,
  ArrowRight,
  Clock,
  Globe
} from 'lucide-react';
import { ARTIST_INFO } from '../data/content';

interface EnquirySectionProps {
  preSelectedPackage?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ preSelectedPackage }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    weddingDate: '',
    weddingLocation: '',
    weddingType: 'Bridal',
    requirements: preSelectedPackage ? `Interested in: ${preSelectedPackage}` : '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = 'Please enter a valid WhatsApp / phone number.';
    }

    if (!formData.weddingDate) {
      newErrors.weddingDate = 'Please select your wedding date.';
    }

    if (!formData.weddingLocation.trim()) {
      newErrors.weddingLocation = 'Please enter your wedding location or city.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate secure backend API dispatch
    setTimeout(() => {
      const generatedRef = `RM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const getWhatsAppPrefilledLink = () => {
    const text = `Hello Raju Mehendi, I’d love to enquire about mehendi for my wedding.%0A%0A👰 *Name:* ${encodeURIComponent(formData.fullName || 'Bride')}%0A📅 *Wedding Date:* ${encodeURIComponent(formData.weddingDate || 'TBD')}%0A📍 *Location:* ${encodeURIComponent(formData.weddingLocation || 'Bhopal')}%0A✨ *Type:* ${encodeURIComponent(formData.weddingType)}%0A📱 *Contact:* ${encodeURIComponent(formData.phone)}%0A📝 *Style/Requirements:* ${encodeURIComponent(formData.requirements || 'Standard Bridal Package')}`;
    return `https://wa.me/${ARTIST_INFO.whatsapp}?text=${text}`;
  };

  return (
    <section id="enquire" className="py-20 lg:py-28 bg-[#F7F1E8] relative overflow-hidden">
      
      {/* Subtle Background Mehendi Line Art */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A477]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* 1. ENQUIRY FORM AREA */}
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#A96658] uppercase block">
              RESERVE YOUR DATE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A2522]">
              Tell us about your wedding.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#76635D]">
              A few details are all we need to get started.
            </p>
            <div className="w-12 h-0.5 bg-[#C6A477] mx-auto pt-1" />
          </div>

          {/* Desktop 2-Column Grid / Mobile 1-Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Premium Editorial Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FBF7F1] rounded-2xl p-6 sm:p-10 border border-[#C6A477]/30 shadow-xl relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider flex items-center justify-between">
                        <span>FULL NAME *</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ananya Sharma"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        className={`w-full bg-[#F7F1E8] border ${
                          errors.fullName ? 'border-red-500' : 'border-[#C6A477]/30'
                        } rounded-lg p-3.5 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658] transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] font-sans text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        placeholder="ananya@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full bg-[#F7F1E8] border ${
                          errors.email ? 'border-red-500' : 'border-[#C6A477]/30'
                        } rounded-lg p-3.5 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658] transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-sans text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider">
                        WHATSAPP / PHONE *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full bg-[#F7F1E8] border ${
                          errors.phone ? 'border-red-500' : 'border-[#C6A477]/30'
                        } rounded-lg p-3.5 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658] transition-colors`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] font-sans text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Wedding Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider">
                        WEDDING DATE *
                      </label>
                      <input
                        type="date"
                        value={formData.weddingDate}
                        onChange={(e) => {
                          setFormData({ ...formData, weddingDate: e.target.value });
                          if (errors.weddingDate) setErrors({ ...errors, weddingDate: '' });
                        }}
                        className={`w-full bg-[#F7F1E8] border ${
                          errors.weddingDate ? 'border-red-500' : 'border-[#C6A477]/30'
                        } rounded-lg p-3.5 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658] transition-colors`}
                      />
                      {errors.weddingDate && (
                        <p className="text-[11px] font-sans text-red-600 mt-1">{errors.weddingDate}</p>
                      )}
                    </div>

                    {/* Wedding Location */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider">
                        WEDDING LOCATION *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bhopal / Udaipur / Goa"
                        value={formData.weddingLocation}
                        onChange={(e) => {
                          setFormData({ ...formData, weddingLocation: e.target.value });
                          if (errors.weddingLocation) setErrors({ ...errors, weddingLocation: '' });
                        }}
                        className={`w-full bg-[#F7F1E8] border ${
                          errors.weddingLocation ? 'border-red-500' : 'border-[#C6A477]/30'
                        } rounded-lg p-3.5 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658] transition-colors`}
                      />
                      {errors.weddingLocation && (
                        <p className="text-[11px] font-sans text-red-600 mt-1">{errors.weddingLocation}</p>
                      )}
                    </div>

                    {/* Wedding Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider">
                        WEDDING TYPE
                      </label>
                      <select
                        value={formData.weddingType}
                        onChange={(e) => setFormData({ ...formData, weddingType: e.target.value })}
                        className="w-full bg-[#F7F1E8] border border-[#C6A477]/30 rounded-lg p-3.5 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658] transition-colors"
                      >
                        <option value="Bridal">Bridal</option>
                        <option value="Indian Wedding">Indian Wedding</option>
                        <option value="Destination Wedding">Destination Wedding</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                  </div>

                  {/* Mehendi Style / Requirements */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider">
                      MEHENDI STYLE / REQUIREMENTS
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your preferred style, functions, or any design ideas…"
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full bg-[#F7F1E8] border border-[#C6A477]/30 rounded-lg p-3.5 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658] transition-colors"
                    />
                  </div>

                  {/* Form Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#A96658] hover:bg-[#8D5245] text-[#FBF7F1] py-4 rounded-lg font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#FBF7F1] border-t-transparent rounded-full animate-spin" />
                          <span>SENDING YOUR ENQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#C6A477]" />
                          <span>SEND MY ENQUIRY</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] font-sans text-[#76635D] text-center pt-1">
                    🔒 Your details remain private. We process enquiries within 2-4 hours.
                  </p>

                </form>
              ) : (
                /* Success Confirmation Experience */
                <div className="text-center py-8 space-y-6">
                  
                  <div className="w-16 h-16 bg-[#A96658]/15 text-[#A96658] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#C6A477] uppercase bg-[#3A2522] text-[#FBF7F1] px-3 py-1 rounded">
                      ENQUIRY RECEIVED
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A2522] pt-2">
                      Your enquiry is on its way.
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#76635D] max-w-md mx-auto">
                      Thank you for sharing your wedding details. We’ll be in touch soon.
                    </p>
                  </div>

                  {/* Reference ID Callout */}
                  <div className="p-4 bg-[#F7F1E8] rounded-xl border border-[#C6A477]/30 max-w-sm mx-auto text-center space-y-1">
                    <span className="text-[10px] font-sans text-[#76635D] uppercase tracking-wider block">
                      YOUR ENQUIRY REFERENCE
                    </span>
                    <span className="font-mono text-base font-bold text-[#3A2522]">
                      {referenceId}
                    </span>
                  </div>

                  {/* Instant WhatsApp Secondary CTA */}
                  <div className="space-y-3 pt-2 max-w-md mx-auto">
                    <p className="text-xs font-sans text-[#76635D]">
                      Prefer immediate communication with Master Raju Mehendi’s studio desk?
                    </p>
                    <a
                      href={getWhatsAppPrefilledLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#1EBE5A] text-white py-3.5 px-6 rounded-lg font-sans text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2.5 cursor-pointer shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>CHAT ON WHATSAPP</span>
                    </a>
                  </div>

                </div>
              )}

            </div>

            {/* RIGHT COLUMN: Helpful Booking Info & Destination Callout (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* BEFORE YOU ENQUIRE BOX */}
              <div className="bg-[#FBF7F1] rounded-2xl p-6 sm:p-8 border border-[#C6A477]/30 space-y-6">
                <h3 className="font-serif text-xl font-bold text-[#3A2522] tracking-wide">
                  BEFORE YOU ENQUIRE
                </h3>

                <div className="space-y-5">
                  
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-sm font-bold text-[#C6A477] bg-[#3A2522] w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      01
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-serif text-sm font-bold text-[#3A2522]">
                        SHARE YOUR DATE
                      </h4>
                      <p className="font-sans text-xs text-[#76635D]">
                        Tell us when your celebration is happening.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="font-serif text-sm font-bold text-[#C6A477] bg-[#3A2522] w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      02
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-serif text-sm font-bold text-[#3A2522]">
                        TELL US YOUR LOCATION
                      </h4>
                      <p className="font-sans text-xs text-[#76635D]">
                        Bhopal, India or destination wedding.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="font-serif text-sm font-bold text-[#C6A477] bg-[#3A2522] w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      03
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-serif text-sm font-bold text-[#3A2522]">
                        TELL US YOUR VISION
                      </h4>
                      <p className="font-sans text-xs text-[#76635D]">
                        Share any design preferences or ideas.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* DESTINATION WEDDING ELEGANT CALLOUT */}
              <div className="p-6 rounded-2xl bg-[#3A2522] text-[#F7F1E8] border border-[#C6A477]/40 relative overflow-hidden space-y-3">
                <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#C6A477] uppercase block">
                  PLANNING A DESTINATION WEDDING?
                </span>
                <p className="font-serif text-lg leading-snug italic font-normal text-[#F7F1E8]/90">
                  “Raju Mehendi is available for destination celebrations across India and worldwide.”
                </p>
                <div className="pt-2 flex items-center gap-2 text-[11px] font-sans text-[#C6A477]">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Udaipur • Jaipur • Goa • Dubai • Bali • International</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 2. BOOKING PROCESS: "HOW IT WORKS" */}
        <div className="pt-12 border-t border-[#C6A477]/20 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#A96658] uppercase">
              THE JOURNEY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3A2522]">
              HOW IT WORKS
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#76635D]">
              A calm, structured booking experience designed for peace of mind.
            </p>
          </div>

          {/* 4 Steps Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Horizontal Line on Desktop */}
            <div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-[#C6A477]/30 z-0" />

            {/* Step 1 */}
            <div className="relative z-10 bg-[#FBF7F1] p-6 rounded-2xl border border-[#C6A477]/30 space-y-3 text-center md:text-left">
              <span className="font-serif text-2xl font-bold text-[#C6A477] bg-[#3A2522] w-10 h-10 rounded-full flex items-center justify-center mx-auto md:mx-0">
                01
              </span>
              <h4 className="font-serif text-lg font-bold text-[#3A2522]">ENQUIRE</h4>
              <p className="font-sans text-xs text-[#76635D] leading-relaxed">
                Share your wedding details and preferred date through our simple form.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 bg-[#FBF7F1] p-6 rounded-2xl border border-[#C6A477]/30 space-y-3 text-center md:text-left">
              <span className="font-serif text-2xl font-bold text-[#C6A477] bg-[#3A2522] w-10 h-10 rounded-full flex items-center justify-center mx-auto md:mx-0">
                02
              </span>
              <h4 className="font-serif text-lg font-bold text-[#3A2522]">CONNECT</h4>
              <p className="font-sans text-xs text-[#76635D] leading-relaxed">
                Discuss your requirements, package customisations, and date availability.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 bg-[#FBF7F1] p-6 rounded-2xl border border-[#C6A477]/30 space-y-3 text-center md:text-left">
              <span className="font-serif text-2xl font-bold text-[#C6A477] bg-[#3A2522] w-10 h-10 rounded-full flex items-center justify-center mx-auto md:mx-0">
                03
              </span>
              <h4 className="font-serif text-lg font-bold text-[#3A2522]">PLAN</h4>
              <p className="font-sans text-xs text-[#76635D] leading-relaxed">
                Finalize your preferred mehendi style, story motifs, and custom elements.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 bg-[#FBF7F1] p-6 rounded-2xl border border-[#C6A477]/30 space-y-3 text-center md:text-left">
              <span className="font-serif text-2xl font-bold text-[#C6A477] bg-[#3A2522] w-10 h-10 rounded-full flex items-center justify-center mx-auto md:mx-0">
                04
              </span>
              <h4 className="font-serif text-lg font-bold text-[#3A2522]">CREATE</h4>
              <p className="font-sans text-xs text-[#76635D] leading-relaxed">
                Enjoy a luxurious, soothing mehendi ceremony on your special day.
              </p>
            </div>

          </div>

        </div>

        {/* 3. MINIMAL CONTACT SECTION */}
        <div className="pt-12 border-t border-[#C6A477]/20">
          <div className="bg-[#FBF7F1] rounded-3xl p-8 sm:p-12 border border-[#C6A477]/30 relative overflow-hidden">
            
            {/* Faint Background Mehendi Line */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#C6A477]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* LEFT: Large Serif */}
              <div className="md:col-span-6 space-y-2">
                <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#A96658] uppercase">
                  DIRECT CONCIERGE
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3A2522] leading-tight">
                  Let’s talk <br />
                  <span className="italic font-normal text-[#A96658]">about your day.</span>
                </h3>
              </div>

              {/* RIGHT: Verified Contact Details */}
              <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-sans text-[#3A2522]">
                
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#C6A477] uppercase tracking-wider block">
                    STUDIO LOCATION
                  </span>
                  <p className="font-serif font-bold text-sm text-[#3A2522]">RAJU MEHENDI</p>
                  <p className="text-[#76635D]">Bhopal, Madhya Pradesh, India</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#C6A477] uppercase tracking-wider block">
                    DIRECT PHONE / WHATSAPP
                  </span>
                  <a
                    href={`https://wa.me/${ARTIST_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif font-bold text-sm text-[#3A2522] hover:text-[#A96658] block"
                  >
                    {ARTIST_INFO.phone}
                  </a>
                  <p className="text-[#76635D]">Calls & WhatsApp Concierge Desk</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#C6A477] uppercase tracking-wider block">
                    EMAIL ENQUIRIES
                  </span>
                  <a
                    href={`mailto:${ARTIST_INFO.email}`}
                    className="font-serif font-bold text-sm text-[#3A2522] hover:text-[#A96658] block"
                  >
                    {ARTIST_INFO.email}
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#C6A477] uppercase tracking-wider block">
                    INSTAGRAM PORTFOLIO
                  </span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif font-bold text-sm text-[#3A2522] hover:text-[#A96658] block"
                  >
                    {ARTIST_INFO.instagram}
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
