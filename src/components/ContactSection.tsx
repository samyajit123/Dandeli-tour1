import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ChevronDown,
  Clock,
} from 'lucide-react';
import { FOOTER_DATA, FAQS_DATA } from '../data/dandeliData';

export const ContactSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS_DATA[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
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
    window.location.href = `tel:${FOOTER_DATA.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${FOOTER_DATA.email}`;
  };

  return (
    <section id="contact" className="py-12 px-4 max-w-[430px] mx-auto overflow-hidden">
      {/* Contact Header */}
      <div className="text-center space-y-1 mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0c2b20]">
          Contact us
        </h2>
        <p className="text-xs sm:text-sm text-[#5c6660] font-normal">
          Plan your Dandeli getaway directly with local experts
        </p>
      </div>

      {/* Official Client Contact Information Card */}
      <div className="rounded-xl border border-[#0c2b20]/10 bg-white p-5 shadow-2xs mb-4 space-y-4">
        {/* Address */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#f0ecdf] flex items-center justify-center text-[#1b533f] shrink-0 mt-0.5">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-medium text-[#5c6660] uppercase tracking-wider block">Office Address</span>
            <p className="text-xs font-semibold text-[#0c2b20] leading-snug mt-0.5">
              {FOOTER_DATA.address}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3 pt-3 border-t border-[#0c2b20]/8">
          <div className="w-8 h-8 rounded-lg bg-[#f0ecdf] flex items-center justify-center text-[#1b533f] shrink-0 mt-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-medium text-[#5c6660] uppercase tracking-wider block">Phone / Helpline</span>
            <a
              href={`tel:${FOOTER_DATA.phone}`}
              className="text-xs font-semibold text-[#0c2b20] hover:text-[#1b533f] transition-colors leading-snug mt-0.5 block"
            >
              {FOOTER_DATA.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3 pt-3 border-t border-[#0c2b20]/8">
          <div className="w-8 h-8 rounded-lg bg-[#f0ecdf] flex items-center justify-center text-[#1b533f] shrink-0 mt-0.5">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-medium text-[#5c6660] uppercase tracking-wider block">Email Inquiries</span>
            <a
              href={`mailto:${FOOTER_DATA.email}`}
              className="text-xs font-semibold text-[#0c2b20] hover:text-[#1b533f] transition-colors leading-snug mt-0.5 block"
            >
              {FOOTER_DATA.email}
            </a>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="flex items-center gap-2 pt-2 text-[11px] text-[#5c6660]">
          <Clock className="w-3.5 h-3.5 text-[#1b533f] shrink-0" />
          <span>Open Daily: 7:00 AM – 9:30 PM IST</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 mb-10">
        {/* WHATSAPP US */}
        <button
          onClick={handleWhatsApp}
          className="w-full bg-[#1b533f] hover:bg-[#23634c] active:scale-[0.98] text-white py-3 px-4 rounded-lg text-xs font-medium transition-colors flex items-center justify-between shadow-2xs"
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
          className="w-full bg-white hover:bg-[#f6f4ee] active:scale-[0.98] text-[#0c2b20] py-3 px-4 rounded-lg text-xs font-medium transition-colors flex items-center justify-between border border-[#0c2b20]/10 shadow-2xs"
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
