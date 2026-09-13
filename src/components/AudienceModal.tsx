import React from 'react';
import { X, CheckCircle2, Clock, Calendar, ArrowRight, Quote, MessageSquare } from 'lucide-react';
import { AudienceCard } from '../types';
import { FOOTER_DATA } from '../data/dandeliData';

interface AudienceModalProps {
  card: AudienceCard | null;
  onClose: () => void;
  onBookNow: (title: string) => void;
}

export const AudienceModal: React.FC<AudienceModalProps> = ({ card, onClose, onBookNow }) => {
  if (!card) return null;

  const handleWhatsAppInquiry = () => {
    const text = `Hi Dandeli Tours! We are planning a trip as "${card.category}" (${card.title}) and would like recommendations for our group!`;
    window.open(`https://wa.me/${FOOTER_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      id="audience-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#061912]/85 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        id="audience-modal-card"
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

        {/* Image Header */}
        <div className="aspect-[16/10] w-full rounded-xl overflow-hidden relative bg-[#0c2b20] mb-4">
          <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/90 via-[#061912]/25 to-transparent" />

          <div className="absolute top-3 left-3 bg-[#0c2b20]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
            <span className="text-[10px] font-medium text-white uppercase tracking-wider">
              {card.category}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 text-white">
            <span className="text-[10px] font-medium text-white/75 uppercase tracking-wider block">
              {card.tag}
            </span>
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight leading-tight text-white">
              {card.title}
            </h3>
          </div>
        </div>

        {/* Quote Block */}
        <div className="bg-[#f5f1e8] p-3.5 rounded-xl border border-[#0c2b20]/10 flex items-start gap-2.5 mb-4">
          <Quote className="w-4 h-4 text-[#1b533f] shrink-0 mt-0.5" />
          <p className="text-xs text-[#5c6660] italic font-normal leading-relaxed">
            "{card.quote}"
          </p>
        </div>

        {/* Travel Specs */}
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          <div className="bg-white p-3 rounded-xl border border-[#0c2b20]/10">
            <span className="text-[10px] uppercase font-medium text-[#5c6660] flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#1b533f]" /> Ideal Stay
            </span>
            <span className="text-xs font-semibold text-[#0c2b20] mt-0.5 block">
              {card.idealDuration}
            </span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-[#0c2b20]/10">
            <span className="text-[10px] uppercase font-medium text-[#5c6660] flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#1b533f]" /> Best Season
            </span>
            <span className="text-xs font-semibold text-[#0c2b20] mt-0.5 block truncate">
              {card.seasonTip.split(' ')[0]} to {card.seasonTip.split(' ')[2] || 'May'}
            </span>
          </div>
        </div>

        {/* Recommended Activities List */}
        <div className="space-y-2 mb-5">
          <span className="text-xs font-semibold text-[#0c2b20] block">
            Tailored experiences for you:
          </span>
          <div className="space-y-1.5">
            {card.recommendedActivities.map((act, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[#0c2b20]/5 text-xs font-medium text-[#0c2b20]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b533f] shrink-0" />
                <span>{act}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2 border-t border-[#0c2b20]/10">
          <button
            onClick={() => {
              onClose();
              onBookNow(`${card.category} Package`);
            }}
            className="w-full bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <span>Book This Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#22c55e]" />
          </button>

          <button
            onClick={handleWhatsAppInquiry}
            className="w-full bg-[#1b533f] hover:bg-[#23634c] text-white py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#86efac]" />
            <span>Chat with Group Travel Specialist</span>
          </button>
        </div>
      </div>
    </div>
  );
};
