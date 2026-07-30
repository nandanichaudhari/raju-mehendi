import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Send, MessageSquare, CheckCircle2, Sparkles, User, Mail, Phone, Users } from 'lucide-react';
import { InquiryFormData } from '../types';
import { ARTIST_INFO } from '../data/content';
import { Logo } from './Logo';

interface BookingInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedPackage?: string;
}

export const BookingInquiryModal: React.FC<BookingInquiryModalProps> = ({
  isOpen,
  onClose,
  preSelectedPackage,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    brideName: '',
    email: '',
    phone: '',
    weddingDate: '',
    eventType: 'Bridal',
    locationCity: 'Bhopal',
    estimatedGuests: 'Bridal Only (0-10)',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedPackage) {
      setFormData((prev) => ({
        ...prev,
        specialRequests: `Interested in: ${preSelectedPackage}`,
      }));
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [preSelectedPackage, isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Generate pre-filled WhatsApp link
  const getWhatsAppLink = () => {
    const text = `Hello Raju Mehendi Studio!%0A%0AI would like to check availability for my wedding mehendi:%0A%0A👰 *Bride Name:* ${encodeURIComponent(formData.brideName || 'Bride')}%0A📅 *Wedding/Event Date:* ${encodeURIComponent(formData.weddingDate || 'TBD')}%0A📍 *Location/City:* ${encodeURIComponent(formData.locationCity || 'Bhopal')}%0A✨ *Event Type:* ${encodeURIComponent(formData.eventType)}%0A👥 *Guests:* ${encodeURIComponent(formData.estimatedGuests)}%0A📱 *Phone:* ${encodeURIComponent(formData.phone)}%0A📝 *Notes:* ${encodeURIComponent(formData.specialRequests || 'Standard Bridal Inquiry')}`;
    return `https://wa.me/${ARTIST_INFO.whatsapp}?text=${text}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#3A2522]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FBF7F1] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#C6A477]/40 relative my-auto p-6 sm:p-8"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 rounded-full bg-[#F7F1E8] text-[#3A2522] hover:bg-[#A96658] hover:text-[#FBF7F1] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            
            {/* Header */}
            <div className="text-center space-y-2 mb-6 flex flex-col items-center">
              <Logo variant="monogram" size="md" theme="dark" className="mb-1" />
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#A96658] uppercase">
                EXCLUSIVITY GUARANTEED
              </span>
              <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#3A2522]">
                Check Booking Availability
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#76635D] max-w-md mx-auto">
                Fill in your wedding details below to reserve Master Raju Mehendi for your celebration.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Bride Name */}
                <div className="space-y-1">
                  <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#A96658]" />
                    <span>Bride's Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Sharma"
                    value={formData.brideName}
                    onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                    className="w-full bg-[#F7F1E8] border border-[#C6A477]/30 rounded-lg p-3 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658]"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1">
                  <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#A96658]" />
                    <span>WhatsApp Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F7F1E8] border border-[#C6A477]/30 rounded-lg p-3 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#A96658]" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="ananya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F7F1E8] border border-[#C6A477]/30 rounded-lg p-3 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658]"
                  />
                </div>

                {/* Event Date */}
                <div className="space-y-1">
                  <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#A96658]" />
                    <span>Wedding / Mehendi Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className="w-full bg-[#F7F1E8] border border-[#C6A477]/30 rounded-lg p-3 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658]"
                  />
                </div>

                {/* Event Type */}
                <div className="space-y-1">
                  <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider">
                    Package / Service Required
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value as any })}
                    className="w-full bg-[#F7F1E8] border border-[#C6A477]/30 rounded-lg p-3 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658]"
                  >
                    <option value="Bridal">Royal Full Bridal Package</option>
                    <option value="Sangeet Party">Sangeet Guest Station</option>
                    <option value="Destination Wedding">Destination Wedding Suite</option>
                    <option value="Celebrity Custom">Celebrity Custom Concept</option>
                  </select>
                </div>

                {/* Location / Destination City */}
                <div className="space-y-1">
                  <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#A96658]" />
                    <span>City & Venue Location *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bhopal / Udaipur / Goa"
                    value={formData.locationCity}
                    onChange={(e) => setFormData({ ...formData, locationCity: e.target.value })}
                    className="w-full bg-[#F7F1E8] border border-[#C6A477]/30 rounded-lg p-3 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658]"
                  />
                </div>

              </div>

              {/* Guest Count */}
              <div className="space-y-1">
                <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#A96658]" />
                  <span>Estimated Total Guests Needing Mehendi</span>
                </label>
                <select
                  value={formData.estimatedGuests}
                  onChange={(e) => setFormData({ ...formData, estimatedGuests: e.target.value })}
                  className="w-full bg-[#F7F1E8] border border-[#C6A477]/30 rounded-lg p-3 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658]"
                >
                  <option value="Bridal Only (0-10)">Bride Only + Close Family (Up to 10)</option>
                  <option value="15-30 Guests">15 - 30 Guests (Sangeet Family)</option>
                  <option value="30-60 Guests">30 - 60 Guests (Medium Wedding)</option>
                  <option value="60+ Guests">60+ Guests (Grand Destination Event)</option>
                </select>
              </div>

              {/* Special Requests */}
              <div className="space-y-1">
                <label className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider">
                  Special Notes / Design Inspirations
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention custom motif requests (portraits, dates, hashtags, etc.)"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-[#F7F1E8] border border-[#C6A477]/30 rounded-lg p-3 text-xs sm:text-sm text-[#3A2522] font-sans focus:outline-none focus:border-[#A96658]"
                />
              </div>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="w-full bg-[#A96658] hover:bg-[#8D5245] text-[#FBF7F1] py-3.5 rounded-lg font-sans text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 text-[#C6A477]" />
                  <span>Submit Booking Request</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 bg-[#A96658]/15 text-[#A96658] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A2522]">
                Inquiry Details Received!
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#76635D] max-w-md mx-auto">
                Thank you, <strong>{formData.brideName}</strong>. Our bridal concierge team will review date availability for <strong>{formData.weddingDate}</strong> in <strong>{formData.locationCity}</strong> and contact you within 2 hours.
              </p>
            </div>

            {/* Instant WhatsApp Connect Button */}
            <div className="p-5 bg-[#F7F1E8] rounded-xl border border-[#C6A477]/30 space-y-3">
              <span className="text-xs font-sans font-bold text-[#3A2522] uppercase tracking-wider block">
                FOR FASTEST CONFIRMATION:
              </span>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1EBE5A] text-white py-3.5 px-6 rounded-lg font-sans text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Send Direct Inquiry on WhatsApp</span>
              </a>
              <p className="text-[11px] font-sans text-[#76635D]">
                Connects directly with Master Raju Mehendi's desk (+91 98260 12345)
              </p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs font-sans font-semibold text-[#76635D] hover:text-[#3A2522] underline cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
