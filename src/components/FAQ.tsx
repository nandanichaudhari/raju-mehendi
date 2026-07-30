import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './LuxuryIcons';

interface FAQItemData {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItemData[] = [
    {
      question: "Do you travel for destination weddings?",
      answer: "Yes. Master Raju Mehendi travels regularly across Udaipur, Jaipur, Goa, Mumbai, Delhi, Gujarat, and international destinations including Dubai and Bali. Travel and lodging arrangements are customized during your enquiry."
    },
    {
      question: "How far in advance should I enquire?",
      answer: "Because we limit monthly bridal bookings to guarantee undivided artistic dedication, key dates during peak wedding season (October to March) fill 4 to 8 months in advance. We recommend enquiring as soon as your venue is confirmed."
    },
    {
      question: "Can I request a personalized mehendi design?",
      answer: "Yes! Custom storytelling is our signature specialty. You can include your couple portraits, proposal milestones, sacred wedding vows, dates, or custom monograms seamlessly woven into royal palm layouts."
    },
    {
      question: "How can I check availability for my wedding date?",
      answer: "Simply fill out our short enquiry form or message us directly on WhatsApp with your wedding date and venue location. Our studio desk will verify date availability within 2-4 hours."
    },
    {
      question: "How do I enquire for a bridal mehendi booking?",
      answer: "Click the 'START YOUR ENQUIRY' button or use our direct WhatsApp link. Share your wedding date, location, and preferred style, and our concierge team will guide you through the next steps."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FBF7F1] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#A96658] uppercase block">
            A FEW THINGS YOU MAY BE WONDERING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A2522]">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A477] mx-auto pt-1" />
        </div>

        {/* Minimal Accordion List */}
        <div className="divide-y divide-[#C6A477]/20 border-t border-b border-[#C6A477]/20">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 sm:py-8">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-6 text-left cursor-pointer group focus:outline-none"
                >
                  <span className="font-serif text-xl sm:text-2xl font-semibold text-[#3A2522] group-hover:text-[#A96658] transition-colors leading-snug">
                    {faq.question}
                  </span>

                  <div className="p-2 rounded-full border border-[#C6A477]/40 text-[#3A2522] group-hover:border-[#A96658] group-hover:text-[#A96658] transition-colors shrink-0">
                    {isOpen ? <MinusIcon size="sm" /> : <PlusIcon size="sm" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-2 font-sans text-xs sm:text-sm text-[#76635D] leading-relaxed max-w-2xl">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
