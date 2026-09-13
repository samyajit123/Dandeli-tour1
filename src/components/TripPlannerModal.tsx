import React, { useState } from 'react';
import { X, Sparkles, Users, Calendar, Compass, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { FOOTER_DATA } from '../data/dandeliData';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCustomPlan: (planSummary: string) => void;
}

export const TripPlannerModal: React.FC<TripPlannerModalProps> = ({
  isOpen,
  onClose,
  onBookCustomPlan,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [travelerType, setTravelerType] = useState<string>('Friends Crew');
  const [duration, setDuration] = useState<string>('2 Days / 1 Night');
  const [vibe, setVibe] = useState<string>('Extreme Thrill & Rapids');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
  };

  const getCustomItinerary = () => {
    if (duration.includes('1 Day')) {
      return [
        { time: '08:30 AM', title: 'Arrival & Breakfast by Kali River', desc: 'Fresh local South Indian breakfast and briefing by river marshals.' },
        { time: '10:00 AM', title: 'Kali White Water Rafting Run', desc: '9.5 km grade 3 rapids through virgin rainforest canyons.' },
        { time: '02:00 PM', title: 'Riverside Buffet Lunch', desc: 'Savor authentic Karnataka buffet spread with fresh organic produce.' },
        { time: '03:30 PM', title: 'Zipline River Crossing & Kayak', desc: 'Traverse the river gorge and paddle along tranquil backwaters.' },
        { time: '06:00 PM', title: 'Sunset at Sykes Point & Departure', desc: 'Breathtaking canyon view before concluding your trip.' },
      ];
    } else if (duration.includes('2 Days')) {
      return [
        { time: 'Day 1 - Morning', title: 'Check-in to Riverside Glamping & Rafting', desc: 'Unpack in Swiss tents, gear up for the 9.5km signature Kali rapids.' },
        { time: 'Day 1 - Afternoon', title: 'River Crossing, Kayaking & Jacuzzi Bath', desc: 'Aerial zipline across the Kali and relaxing in gentle swirling river rapids.' },
        { time: 'Day 1 - Night', title: 'Campfire, Barbecue & Stargazing', desc: 'Warm wood-fire dinner under pristine dark night skies.' },
        { time: 'Day 2 - Dawn', title: 'Anshi Tiger Reserve Jeep Safari', desc: 'Dawn wildlife tracking for leopards, hornbills, and wild elephants.' },
        { time: 'Day 2 - Noon', title: 'Coracle Boat Float & Hornbill Park', desc: 'Traditional saucer boat ride and spotting Malabar Pied Hornbills.' },
      ];
    } else {
      return [
        { time: 'Day 1', title: 'Immersion & Water Thrills', desc: 'Riverside eco-cottage check-in, full Kali rafting expedition, and evening sunset kayaking.' },
        { time: 'Day 2', title: 'Deep Jungle & Kavala Caves Expedition', desc: 'Trek ancient volcanic caverns, limestone stalagmites, and deep Anshi forest trails.' },
        { time: 'Day 3', title: 'Sunrise Peak & Relaxed River Drift', desc: 'Golden dawn at Shiroli Peak, tranquil coracle float, and local spice souvenir shopping.' },
      ];
    }
  };

  const planSummary = `${travelerType} • ${duration} • ${vibe}`;

  return (
    <div
      id="trip-planner-modal"
      className="fixed inset-0 z-50 bg-[#061912]/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg bg-[#fcfbf7] rounded-t-2xl sm:rounded-2xl border border-[#0c2b20]/15 max-h-[90vh] overflow-y-auto shadow-xl p-6 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#0c2b20]/10 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0c2b20] flex items-center justify-center text-[#22c55e]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-medium uppercase tracking-wider text-[#1b533f]">
                Trip Planner Assistant
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-[#0c2b20] tracking-tight">
                Craft your Dandeli itinerary
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#f5f1e8] hover:bg-[#eae3d2] flex items-center justify-center text-[#0c2b20] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-5 px-1">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-1">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium ${
                  step >= s ? 'bg-[#0c2b20] text-[#22c55e]' : 'bg-[#f5f1e8] text-[#5c6660]'
                }`}
              >
                {s}
              </div>
              {s < 4 && (
                <div
                  className={`w-8 sm:w-12 h-0.5 ${
                    step > s ? 'bg-[#0c2b20]' : 'bg-[#0c2b20]/10'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* STEP 1: Who are you travelling with? */}
        {step === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-semibold text-[#0c2b20] tracking-tight">
                Step 1: Who are you travelling with?
              </h4>
              <p className="text-xs text-[#5c6660]">
                Helps us select the safest rapids, accommodation style, and pace.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {[
                { label: 'Solo Explorer', desc: 'Treks, wildlife & freedom' },
                { label: 'Couples Escape', desc: 'Romantic river cottages' },
                { label: 'Friends Crew', desc: 'Adrenaline & campfires' },
                { label: 'Family Vacation', desc: 'All-age gentle adventures' },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setTravelerType(item.label)}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-22 ${
                    travelerType === item.label
                      ? 'border-[#1b533f] bg-white ring-1 ring-[#1b533f]'
                      : 'border-[#0c2b20]/10 bg-white hover:bg-[#f6f4ee]'
                  }`}
                >
                  <span className="text-xs font-semibold text-[#0c2b20]">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-[#5c6660] leading-tight">
                    {item.desc}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full mt-4 bg-[#0c2b20] hover:bg-[#133e2f] text-[#fcfbf7] py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Next: Duration</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#22c55e]" />
            </button>
          </div>
        )}

        {/* STEP 2: Trip Duration */}
        {step === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-semibold text-[#0c2b20] tracking-tight">
                Step 2: How many days in Dandeli?
              </h4>
              <p className="text-xs text-[#5c6660]">
                Most visitors find 2 Days / 1 Night ideal for both river sports and wildlife safaris.
              </p>
            </div>

            <div className="space-y-2">
              {[
                { label: '1 Day Blitz', desc: 'Rafting + Zipline + Kayaking (No night stay)' },
                { label: '2 Days / 1 Night', desc: 'Signature Combo: Rafting + Resort Tent + Safari + Campfire' },
                { label: '3 Days / 2 Nights', desc: 'Complete Expedition: Water sports, Caves, Peak sunset & relaxation' },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setDuration(item.label)}
                  className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                    duration === item.label
                      ? 'border-[#1b533f] bg-white ring-1 ring-[#1b533f]'
                      : 'border-[#0c2b20]/10 bg-white hover:bg-[#f6f4ee]'
                  }`}
                >
                  <div>
                    <span className="text-xs font-semibold text-[#0c2b20] block">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-[#5c6660]">
                      {item.desc}
                    </span>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      duration === item.label ? 'border-[#1b533f] bg-[#1b533f] text-white' : 'border-[#0c2b20]/20'
                    }`}
                  >
                    {duration === item.label && <CheckCircle2 className="w-3 h-3 text-white" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-white border border-[#0c2b20]/10 text-[#0c2b20] py-2.5 rounded-lg text-xs font-medium"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-2 bg-[#0c2b20] hover:bg-[#133e2f] text-[#fcfbf7] py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Next: Adventure Vibe</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#22c55e]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Adventure Vibe */}
        {step === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-semibold text-[#0c2b20] tracking-tight">
                Step 3: What's your primary vibe?
              </h4>
              <p className="text-xs text-[#5c6660]">
                Tune the energy level of your personalized Dandeli schedule.
              </p>
            </div>

            <div className="space-y-2">
              {[
                { label: 'Extreme Thrill & Rapids', desc: 'Grade 3+ Rafting, Zipline, River Crossing & Night Safari' },
                { label: 'Wildlife Safari & Birding', desc: 'Hornbill sanctuary, Anshi tiger reserve jeep, early morning walks' },
                { label: 'Serene River & Campfire', desc: 'Quiet coracle float, riverside cottage relaxation, starry BBQ' },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setVibe(item.label)}
                  className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                    vibe === item.label
                      ? 'border-[#1b533f] bg-white ring-1 ring-[#1b533f]'
                      : 'border-[#0c2b20]/10 bg-white hover:bg-[#f6f4ee]'
                  }`}
                >
                  <div>
                    <span className="text-xs font-semibold text-[#0c2b20] block">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-[#5c6660]">
                      {item.desc}
                    </span>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      vibe === item.label ? 'border-[#1b533f] bg-[#1b533f] text-white' : 'border-[#0c2b20]/20'
                    }`}
                  >
                    {vibe === item.label && <CheckCircle2 className="w-3 h-3 text-white" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(2)}
                className="flex-1 bg-white border border-[#0c2b20]/10 text-[#0c2b20] py-2.5 rounded-lg text-xs font-medium"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="flex-2 bg-[#1b533f] hover:bg-[#23634c] text-white py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Generate Itinerary</span>
                <Sparkles className="w-3.5 h-3.5 text-[#86efac]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Generated Itinerary Result */}
        {step === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-[#0c2b20] text-white p-4 rounded-xl border border-[#1b533f]/50">
              <span className="text-[10px] font-medium uppercase tracking-wider text-[#22c55e]">
                Tailored Recommendation
              </span>
              <h4 className="text-sm sm:text-base font-semibold text-white mt-0.5">
                {duration} • {travelerType}
              </h4>
              <p className="text-xs text-white/70 font-normal">
                Vibe: {vibe}
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-2 py-1">
              <span className="text-xs font-medium text-[#0c2b20] block">
                Suggested Daily Schedule:
              </span>
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {getCustomItinerary().map((slot, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white rounded-xl border border-[#0c2b20]/10 flex flex-col space-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-[#1b533f] uppercase">
                        {slot.time}
                      </span>
                      <span className="text-[10px] text-[#5c6660]">
                        Included
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#0c2b20]">
                      {slot.title}
                    </span>
                    <p className="text-xs text-[#5c6660] font-normal">
                      {slot.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2 border-t border-[#0c2b20]/10">
              <button
                onClick={() => {
                  onClose();
                  onBookCustomPlan(planSummary);
                }}
                className="w-full bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <span>Book This Customized Plan</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#22c55e]" />
              </button>

              <button
                onClick={() => {
                  const text = `Hi Dandeli Tours! I used your Trip Planner and generated this custom plan:
• Traveler Type: ${travelerType}
• Duration: ${duration}
• Vibe: ${vibe}
Please send me pricing options and availability for this custom itinerary!`;
                  window.open(
                    `https://wa.me/${FOOTER_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`,
                    '_blank'
                  );
                }}
                className="w-full bg-[#1b533f] hover:bg-[#23634c] text-white py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#86efac]" />
                <span>Send Plan to WhatsApp</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full text-center text-xs text-[#5c6660] hover:text-[#0c2b20] py-1 transition-colors"
              >
                Re-calculate with different options
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
