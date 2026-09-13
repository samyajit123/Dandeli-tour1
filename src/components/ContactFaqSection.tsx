import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  Clock,
  Mail,
  Navigation,
} from 'lucide-react';
import { FOOTER_DATA, FAQS_DATA } from '../data/dandeliData';

export const ContactFaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS_DATA[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleDirections = () => {
    window.open(
      'https://maps.google.com/?q=Dandeli+K.C+Circle+Karnataka+581325',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(FOOTER_DATA.whatsappMessage);
    window.open(
      `https://wa.me/${FOOTER_DATA.whatsappNumber}?text=${encoded}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${FOOTER_DATA.phone.replace(/\s+/g, '')}`;
  };

  return (
    <section id="contact" className="py-12 px-4 max-w-[430px] mx-auto overflow-hidden">
      {/* Contact Header */}
      <div className="text-center space-y-1 mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0c2b20]">
          Come find us
        </h2>
        <p className="text-xs sm:text-sm text-[#5c6660] font-normal">
          Heart of Dandeli, Karnataka
        </p>
      </div>

      {/* Styled Map Preview Card */}
      <div className="rounded-xl overflow-hidden border border-[#0c2b20]/10 bg-white shadow-2xs mb-4">
        {/* Map Header Preview */}
        <div className="relative aspect-[16/9] w-full bg-[#133e2f] overflow-hidden">
          {/* Western Ghats / Dandeli Map Graphic */}
          <div className="absolute inset-0 bg-[#0c2b20]">
            {/* Map Roads & River Pattern */}
            <svg
              className="w-full h-full opacity-30"
              viewBox="0 0 400 220"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Kali River Curve */}
              <path
                d="M-20,40 Q100,160 220,100 T420,180"
                fill="none"
                stroke="#22c55e"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.5"
              />
              <path
                d="M-20,40 Q100,160 220,100 T420,180"
                fill="none"
                stroke="#86efac"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Roads */}
              <path
                d="M50,-10 L180,230"
                stroke="#fcfbf7"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
              <path
                d="M-10,130 L410,90"
                stroke="#fcfbf7"
                strokeWidth="1.5"
              />
              {/* Forest Patches */}
              <circle cx="80" cy="70" r="30" fill="#22c55e" opacity="0.12" />
              <circle cx="320" cy="140" r="45" fill="#22c55e" opacity="0.12" />
            </svg>

            {/* Central Pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#22c55e] text-[#061912] flex items-center justify-center shadow-md border-2 border-white">
                  <MapPin className="w-4 h-4 fill-current" />
                </div>
                <span className="bg-[#0c2b20]/90 text-white text-[10px] font-medium px-2 py-0.5 rounded-md mt-1 border border-white/10">
                  Dandeli Tours Office
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Address & Hours Info */}
        <div className="p-4 space-y-2">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#1b533f] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-[#0c2b20] leading-snug">
                {FOOTER_DATA.address}
              </p>
              <p className="text-[11px] text-[#5c6660] mt-0.5">
                Opposite IOC Fuel Station • 2 mins from Dandeli Bus Stand
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pt-1 text-[11px] text-[#5c6660]">
            <Clock className="w-3.5 h-3.5 text-[#1b533f] shrink-0" />
            <span>Open Daily: 7:00 AM – 9:30 PM IST</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 mb-10">
        {/* DIRECTIONS */}
        <button
          onClick={handleDirections}
          className="w-full bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3 px-4 rounded-lg text-xs font-medium transition-colors flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Navigation className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>Get Directions</span>
          </div>
          <span className="text-sm">→</span>
        </button>

        {/* WHATSAPP US */}
        <button
          onClick={handleWhatsApp}
          className="w-full bg-[#1b533f] hover:bg-[#23634c] active:scale-[0.98] text-white py-3 px-4 rounded-lg text-xs font-medium transition-colors flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <MessageCircle className="w-3.5 h-3.5 text-[#86efac]" />
            <span>WhatsApp Us</span>
          </div>
          <span className="text-sm">→</span>
        </button>

        {/* CALL NOW */}
        <button
          onClick={handleCall}
          className="w-full bg-white hover:bg-[#f6f4ee] active:scale-[0.98] text-[#0c2b20] py-3 px-4 rounded-lg text-xs font-medium transition-colors flex items-center justify-between border border-[#0c2b20]/10"
        >
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#1b533f]" />
            <span>Call {FOOTER_DATA.phone}</span>
          </div>
          <span className="text-sm">→</span>
        </button>
      </div>

      {/* Expandable FAQ Accordion */}
      <div className="space-y-3">
        <div className="text-center space-y-1 mb-4">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c2b20]">
            Frequently asked questions
          </h3>
          <p className="text-xs text-[#5c6660] font-normal">
            Everything you need to know before travelling
          </p>
        </div>

        <div className="space-y-2">
          {FAQS_DATA.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-[#0c2b20]/10 bg-white overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 focus:outline-none"
                >
                  <span className="text-xs sm:text-sm font-medium text-[#0c2b20] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-md bg-[#0c2b20]/5 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0c2b20] text-white' : 'text-[#0c2b20]'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-[#4a5550] leading-relaxed border-t border-[#0c2b20]/5">
                    {faq.answer}
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
