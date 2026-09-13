import React from 'react';
import { X, Clock, MapPin, Zap, CheckCircle, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { FeaturedExperience, ThrillExperience } from '../types';
import { FOOTER_DATA } from '../data/dandeliData';

interface ExperienceModalProps {
  experience: FeaturedExperience | ThrillExperience | null;
  onClose: () => void;
  onBookNow: (title: string) => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({
  experience,
  onClose,
  onBookNow,
}) => {
  if (!experience) return null;

  const isFeatured = 'highlights' in experience;
  const thrillRating = 'thrillLevel' in experience ? experience.thrillLevel : 'High-Thrill';

  const handleWhatsAppBooking = () => {
    const text = `Hi Dandeli Tours! I'm interested in booking the "${experience.title}" experience. Please share available time slots and group rates.`;
    window.open(`https://wa.me/${FOOTER_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      id="experience-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#061912]/85 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        id="experience-modal-card"
        className="w-full sm:max-w-lg bg-[#fcfbf7] rounded-t-2xl sm:rounded-2xl border border-[#0c2b20]/15 max-h-[90vh] overflow-y-auto shadow-xl p-6 relative flex flex-col animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-lg bg-[#fcfbf7]/90 backdrop-blur-md flex items-center justify-center text-[#0c2b20] hover:bg-[#eae3d2] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Photo Banner */}
        <div className="aspect-[16/10] w-full rounded-xl overflow-hidden relative bg-[#0c2b20] mb-4">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/90 via-[#061912]/25 to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="bg-white/95 text-[#0c2b20] text-[10px] font-medium px-2 py-0.5 rounded-md uppercase tracking-wider">
              {experience.tag || ('category' in experience ? experience.category : 'Adventure')}
            </span>
            <span className="bg-[#0c2b20]/80 text-[#86efac] text-[10px] font-medium px-2 py-0.5 rounded-md uppercase tracking-wider border border-white/10 flex items-center gap-1">
              <Zap className="w-2.5 h-2.5" />
              {thrillRating}
            </span>
          </div>

          <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
            <span className="text-[10px] font-medium text-white/75 uppercase tracking-wider block mb-0.5">
              {experience.subtitle}
            </span>
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight leading-tight text-white">
              {experience.title}
            </h3>
          </div>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          <div className="bg-white p-3 rounded-xl border border-[#0c2b20]/10 flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#1b533f] shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-medium text-[#5c6660] block">
                Activity Duration
              </span>
              <span className="text-xs font-semibold text-[#0c2b20]">
                {experience.duration}
              </span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-[#0c2b20]/10 flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#1b533f] shrink-0" />
            <div className="truncate">
              <span className="text-[10px] uppercase font-medium text-[#5c6660] block">
                Primary Zone
              </span>
              <span className="text-xs font-semibold text-[#0c2b20] truncate block">
                {'location' in experience ? experience.location : 'Kali River Rapids'}
              </span>
            </div>
          </div>
        </div>

        {/* Description Story */}
        <div className="space-y-3 mb-5">
          <p className="text-xs sm:text-sm text-[#5c6660] leading-relaxed font-normal">
            {experience.description}
          </p>

          {/* Highlights Checklist if available */}
          {isFeatured && (
            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-semibold text-[#0c2b20] block">
                Expedition highlights:
              </span>
              {(experience as FeaturedExperience).highlights.map((hl, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#0c2b20]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#1b533f] shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          )}

          {/* Safety Protocols */}
          <div className="flex items-start gap-2 bg-[#f5f1e8] p-3 rounded-xl border border-[#0c2b20]/10 text-xs text-[#5c6660]">
            <ShieldCheck className="w-4 h-4 text-[#1b533f] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0c2b20] font-semibold">Safety Certified:</strong> All gear is sterilized, ISO-standard life jackets and helmets supplied, with trained rescue marshals accompanying every participant.
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-2 pt-2 border-t border-[#0c2b20]/10">
          <button
            onClick={() => {
              onClose();
              onBookNow(experience.title);
            }}
            className="w-full bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <span>Book {experience.title}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#22c55e]" />
          </button>

          <button
            onClick={handleWhatsAppBooking}
            className="w-full bg-[#1b533f] hover:bg-[#23634c] text-white py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#86efac]" />
            <span>Check availability on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
