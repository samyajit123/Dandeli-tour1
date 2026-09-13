import React from 'react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface PlanTripCtaSectionProps {
  onOpenTripPlanner: () => void;
  onOpenBooking: () => void;
}

export const PlanTripCtaSection: React.FC<PlanTripCtaSectionProps> = ({
  onOpenTripPlanner,
  onOpenBooking,
}) => {
  return (
    <section id="plan-trip-cta" className="py-8 px-4 max-w-[430px] mx-auto overflow-hidden">
      <div className="bg-[#0c2b20] text-[#fcfbf7] rounded-2xl p-6 sm:p-7 text-center overflow-hidden border border-[#133e2f]">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
          Ready to escape?
        </h2>

        {/* Short Copy */}
        <p className="text-xs sm:text-sm text-white/80 max-w-xs mx-auto leading-relaxed mb-6 font-normal">
          Plan your Dandeli getaway today. Tailored itineraries, certified guides, and best seasonal pricing.
        </p>

        {/* Buttons */}
        <div className="space-y-2.5 max-w-xs mx-auto">
          {/* Button 1: Cream Primary */}
          <button
            onClick={onOpenTripPlanner}
            className="w-full bg-[#fcfbf7] hover:bg-[#f0ecdf] active:scale-[0.98] text-[#0c2b20] py-3 px-5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            <span>Plan My Trip</span>
            <ArrowRight className="w-4 h-4 text-[#0c2b20]" />
          </button>

          {/* Button 2: Subtle Forest Accent */}
          <button
            onClick={onOpenBooking}
            className="w-full bg-[#1b533f] hover:bg-[#23634c] active:scale-[0.98] text-white py-3 px-5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-white/10"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4 text-[#22c55e]" />
          </button>
        </div>

        {/* Reassurance Footer */}
        <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-center gap-1.5 text-xs text-white/70 font-normal">
          <ShieldCheck className="w-3.5 h-3.5 text-[#22c55e]" />
          <span>Instant WhatsApp confirmation • No hidden fees</span>
        </div>
      </div>
    </section>
  );
};
