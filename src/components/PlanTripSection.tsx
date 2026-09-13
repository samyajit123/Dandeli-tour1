import React, { useState } from 'react';
import {
  Calendar,
  Compass,
  Clock,
  Navigation,
  Sparkles,
  Package,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { PLAN_TRIP_TOPICS } from '../data/dandeliData';
import { PlanTripTopic } from '../types';

interface PlanTripSectionProps {
  onOpenTripPlanner: () => void;
  onOpenBooking: () => void;
}

export const PlanTripSection: React.FC<PlanTripSectionProps> = ({
  onOpenTripPlanner,
  onOpenBooking,
}) => {
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);

  const getTopicIcon = (id: string) => {
    switch (id) {
      case 'where-to-stay':
        return <Package className="w-4 h-4 text-[#22c55e]" />;
      case 'what-to-do':
        return <Compass className="w-4 h-4 text-[#22c55e]" />;
      case 'best-time':
        return <Clock className="w-4 h-4 text-[#22c55e]" />;
      case 'how-to-reach':
        return <Navigation className="w-4 h-4 text-[#22c55e]" />;
      case 'activities':
        return <Sparkles className="w-4 h-4 text-[#22c55e]" />;
      case 'packages':
        return <Package className="w-4 h-4 text-[#22c55e]" />;
      default:
        return <Calendar className="w-4 h-4 text-[#22c55e]" />;
    }
  };

  const toggleTopic = (id: string) => {
    setExpandedTopicId(expandedTopicId === id ? null : id);
  };

  return (
    <section id="plan-trip" className="py-12 px-4 max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
      {/* Editorial Header */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#22c55e]" />
          <span className="text-[11px] font-bold tracking-widest text-[#1b533f] uppercase">
            Official Travel Concierge
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2b20] tracking-tight uppercase font-editorial">
          PLAN YOUR DANDELI TRIP
        </h2>
        <p className="text-sm text-[#133e2f]/85 font-medium leading-relaxed max-w-xl">
          Everything required to craft your wilderness getaway: resorts, transport, seasonal windows, and customized packages.
        </p>
      </div>

      {/* Grid of Compact Cards for the 6 Core Topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mb-8">
        {PLAN_TRIP_TOPICS.map((topic: PlanTripTopic) => {
          const isExpanded = expandedTopicId === topic.id;
          return (
            <div
              key={topic.id}
              className={`bg-[#fcfbf7] rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                isExpanded
                  ? 'border-[#22c55e] ring-1 ring-[#22c55e]/30 shadow-sm'
                  : 'border-[#0c2b20]/15 hover:border-[#0c2b20]/30 shadow-xs'
              }`}
            >
              {/* Card Click Header */}
              <button
                onClick={() => toggleTopic(topic.id)}
                className="p-4 text-left w-full flex items-start justify-between gap-2"
                aria-expanded={isExpanded}
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f5f1e8] flex items-center justify-center shrink-0 mt-0.5 border border-[#0c2b20]/10">
                    {getTopicIcon(topic.id)}
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1b533f]">
                      {topic.tag}
                    </span>
                    <h3 className="text-base font-extrabold text-[#0c2b20] tracking-tight uppercase font-editorial leading-tight">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-[#133e2f]/80 mt-0.5 font-medium">
                      {topic.subtitle}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-full bg-[#f5f1e8] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180 bg-[#0c2b20] text-[#fcfbf7]' : 'text-[#0c2b20]'
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </button>

              {/* Summary snippet always visible */}
              <div className="px-4 pb-3">
                <p className="text-xs text-[#133e2f]/75 line-clamp-2">
                  {topic.summary}
                </p>
              </div>

              {/* Expandable Details Drawer */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t border-[#0c2b20]/10 bg-[#f5f1e8]/40 space-y-2.5 animate-fadeIn">
                  <div className="space-y-1.5">
                    {topic.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-[#0c2b20]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onOpenTripPlanner}
                      className="w-full bg-[#0c2b20] text-[#fcfbf7] py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:bg-[#133e2f] transition-colors"
                    >
                      <span>{topic.ctaLabel || 'Plan Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#22c55e]" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Strong CTA Conversion Banner */}
      <div className="bg-[#0c2b20] text-[#fcfbf7] rounded-3xl p-6 sm:p-8 border border-[#1b533f]/50 relative overflow-hidden shadow-lg">
        <div className="relative z-10 space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0">
          <div className="space-y-1.5 max-w-md">
            <span className="bg-[#22c55e] text-[#061912] text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
              Hassle-Free Booking
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-editorial uppercase text-white tracking-tight">
              Ready for the Dandeli Wild?
            </h3>
            <p className="text-xs sm:text-sm text-[#e9e2d0]/80">
              Get an instant personalized itinerary or reserve river rafting & cottage stays directly with certified local guides.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 pt-2 sm:pt-0">
            {/* Strong Primary CTA: PLAN MY TRIP -> */}
            <button
              id="plan-trip-primary-cta"
              onClick={onOpenTripPlanner}
              className="bg-[#22c55e] hover:bg-[#16a34a] active:scale-95 text-[#061912] py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span>PLAN MY TRIP →</span>
            </button>

            {/* Secondary CTA: BOOK NOW */}
            <button
              id="plan-trip-secondary-cta"
              onClick={onOpenBooking}
              className="bg-[#fcfbf7] hover:bg-[#f5f1e8] active:scale-95 text-[#0c2b20] py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <span>BOOK NOW</span>
              <ArrowRight className="w-4 h-4 text-[#1b533f]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
