import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Users,
  Calendar,
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageSquare,
  Phone,
  ShieldCheck,
  UserCheck,
  Check,
} from 'lucide-react';
import { FOOTER_DATA } from '../data/dandeliData';

interface PlanMyTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedActivity?: string;
}

export const PlanMyTripModal: React.FC<PlanMyTripModalProps> = ({
  isOpen,
  onClose,
  preselectedActivity,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);

  // Step 1: Travellers
  const [travelerType, setTravelerType] = useState<string>('Friends Crew');
  // Step 2: Duration
  const [duration, setDuration] = useState<string>('2 Days / 1 Night');
  // Step 3: Vibe
  const [vibe, setVibe] = useState<string>('Extreme Thrill & Rapids');
  // Step 4: Booking preferences
  const [activity, setActivity] = useState<string>(
    preselectedActivity || 'White Water Rafting (9.5 KM Grade 3+)'
  );
  const [stayOption, setStayOption] = useState<string>('Riverside Swiss Tent with Meals');
  const [date, setDate] = useState<string>('');
  const [guests, setGuests] = useState<number>(4);
  // Step 5: Personal Details
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Track if user manually modified guests/stay so intelligent prefill doesn't overwrite manual edits
  const [hasManuallyEditedStay, setHasManuallyEditedStay] = useState(false);
  const [hasManuallyEditedGuests, setHasManuallyEditedGuests] = useState(false);

  // Today's date string YYYY-MM-DD for min date attribute
  const todayStr = new Date().toISOString().split('T')[0];

  // Update activity if preselectedActivity changes when opening
  useEffect(() => {
    if (preselectedActivity) {
      setActivity(preselectedActivity);
    }
  }, [preselectedActivity, isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset modal state on close if needed
  const handleClose = () => {
    onClose();
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
  };

  // Handle traveller selection with intelligent defaults
  const handleSelectTraveler = (type: string) => {
    setTravelerType(type);
    if (!hasManuallyEditedGuests) {
      if (type === 'Solo Explorer') setGuests(1);
      else if (type === 'Couples Escape') setGuests(2);
      else setGuests(4);
    }
    if (!hasManuallyEditedStay) {
      if (type === 'Couples Escape') setStayOption('Deluxe Forest Cottages');
      else if (type === 'Solo Explorer') setStayOption('Riverside Swiss Tent with Meals');
      else if (type === 'Friends Crew') setStayOption('Riverside Swiss Tent with Meals');
      else if (type === 'Family Vacation') setStayOption('Resort Nature Rooms');
    }
  };

  const handleConfirmPlan = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = `Hi Dandeli Tours! I have planned my trip on your website:

📋 YOUR DANDELI PLAN:
• Travellers: ${travelerType}
• Duration: ${duration}
• Adventure Vibe: ${vibe}
• Selected Experience: ${activity}
• Accommodation: ${stayOption}
• Travel Date: ${date || 'Upcoming Weekend'}
• Guests: ${guests} ${guests === 1 ? 'Guest' : 'Guests'}

👤 CONTACT DETAILS:
• Full Name: ${name || 'Explorer'}
• Phone Number: ${phone || 'Not provided'}

Please confirm availability, river permit slots, and pricing!`;

    const url = `https://wa.me/${FOOTER_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  const stepLabels = [
    { num: 1, label: 'Travellers' },
    { num: 2, label: 'Duration' },
    { num: 3, label: 'Vibe' },
    { num: 4, label: 'Booking' },
    { num: 5, label: 'Details' },
    { num: 6, label: 'Review' },
  ];

  return (
    <div
      id="plan-my-trip-backdrop"
      className="fixed inset-0 z-50 bg-[#061912]/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 transition-all"
      onClick={handleClose}
    >
      <div
        id="plan-my-trip-modal-card"
        className="w-full sm:max-w-lg bg-[#fcfbf7] rounded-t-2xl sm:rounded-2xl border border-[#0c2b20]/15 max-h-[92vh] overflow-hidden shadow-2xl flex flex-col relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Unified Modal Header */}
        <div className="px-5 pt-4 pb-3 border-b border-[#0c2b20]/10 bg-[#fcfbf7] shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0c2b20] flex items-center justify-center text-[#22c55e] shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1b533f] block">
                  Official Reservation & Itinerary
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0c2b20] tracking-tight uppercase">
                  PLAN MY TRIP
                </h3>
              </div>
            </div>
            <button
              id="plan-my-trip-close-btn"
              onClick={handleClose}
              className="w-8 h-8 rounded-lg bg-[#f5f1e8] hover:bg-[#eae3d2] active:scale-95 flex items-center justify-center text-[#0c2b20] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* 6-Step Progress Indicator (Hidden on submission screen) */}
          {!isSubmitted && (
            <div className="mt-3.5 pt-2 border-t border-[#0c2b20]/5">
              <div className="flex items-center justify-between">
                {stepLabels.map((s, idx) => {
                  const isCompleted = step > s.num;
                  const isCurrent = step === s.num;
                  return (
                    <React.Fragment key={s.num}>
                      <button
                        type="button"
                        disabled={step < s.num}
                        onClick={() => {
                          if (step > s.num) setStep(s.num as any);
                        }}
                        className={`flex flex-col items-center gap-1 group transition-all ${
                          step >= s.num ? 'cursor-pointer' : 'cursor-default'
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-semibold transition-all ${
                            isCompleted
                              ? 'bg-[#1b533f] text-[#86efac]'
                              : isCurrent
                              ? 'bg-[#0c2b20] text-white ring-2 ring-[#22c55e]/40'
                              : 'bg-[#f0ebe1] text-[#8a948e]'
                          }`}
                        >
                          {isCompleted ? <Check className="w-3 h-3" /> : s.num}
                        </div>
                        <span
                          className={`text-[9px] uppercase tracking-wider hidden sm:block font-medium ${
                            isCurrent
                              ? 'text-[#0c2b20] font-semibold'
                              : isCompleted
                              ? 'text-[#1b533f]'
                              : 'text-[#8a948e]'
                          }`}
                        >
                          {s.label}
                        </span>
                      </button>
                      {idx < stepLabels.length - 1 && (
                        <div
                          className={`flex-1 h-[2px] mx-1 transition-colors ${
                            step > idx + 1 ? 'bg-[#1b533f]' : 'bg-[#0c2b20]/10'
                          }`}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {/* ──────────────────────────────────────────────────────────
              CONFIRMATION STATE
             ────────────────────────────────────────────────────────── */}
          {isSubmitted ? (
            <div className="py-4 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-[#22c55e]/15 text-[#1b533f] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#1b533f]" />
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1b533f]">
                  Plan Confirmed
                </span>
                <h4 className="text-xl font-bold text-[#0c2b20] tracking-tight mt-0.5">
                  Reservation Request Received
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-[#5c6660] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#0c2b20] font-semibold">{name || 'Explorer'}</strong>!
                Your Dandeli trip plan has been registered. Our certified tour coordinator will
                contact you at <strong className="text-[#0c2b20] font-semibold">{phone}</strong> within
                15 minutes to confirm permit slots, river timing, and check-in details.
              </p>

              {/* Summary Card inside confirmation */}
              <div className="p-3.5 bg-[#f5f1e8] rounded-xl border border-[#0c2b20]/10 text-left text-xs space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between pb-1 border-b border-[#0c2b20]/10">
                  <span className="text-[#5c6660]">Travelers & Vibe:</span>
                  <span className="font-semibold text-[#0c2b20]">
                    {travelerType} • {duration}
                  </span>
                </div>
                <div className="flex justify-between pb-1 border-b border-[#0c2b20]/10">
                  <span className="text-[#5c6660]">Experience:</span>
                  <span className="font-semibold text-[#0c2b20] text-right max-w-[200px] truncate">
                    {activity}
                  </span>
                </div>
                <div className="flex justify-between pb-1 border-b border-[#0c2b20]/10">
                  <span className="text-[#5c6660]">Accommodation:</span>
                  <span className="font-semibold text-[#0c2b20] text-right max-w-[200px] truncate">
                    {stayOption}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5c6660]">Date & Guests:</span>
                  <span className="font-semibold text-[#0c2b20]">
                    {date || 'Flexible'} • {guests} {guests === 1 ? 'Guest' : 'Guests'}
                  </span>
                </div>
              </div>

              <div className="pt-2 space-y-2.5 max-w-sm mx-auto">
                <button
                  id="confirm-whatsapp-btn"
                  onClick={handleWhatsAppBooking}
                  className="w-full bg-[#1b533f] hover:bg-[#23634c] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#86efac]" />
                  <span>Send Full Plan to WhatsApp for Instant Confirmation</span>
                </button>

                <button
                  onClick={handleClose}
                  className="w-full bg-white hover:bg-[#f6f4ee] border border-[#0c2b20]/15 text-[#0c2b20] py-2.5 px-4 rounded-xl text-xs font-medium transition-colors"
                >
                  Done & Return to Guide
                </button>

                <button
                  onClick={handleReset}
                  className="text-xs text-[#5c6660] hover:text-[#0c2b20] underline transition-colors"
                >
                  Plan another trip
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* ──────────────────────────────────────────────────────────
                  STEP 1: WHO ARE YOU TRAVELLING WITH?
                 ────────────────────────────────────────────────────────── */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1b533f]">
                      Step 1 of 6
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0c2b20] tracking-tight">
                      Who are you travelling with?
                    </h4>
                    <p className="text-xs text-[#5c6660]">
                      Helps us recommend the best-suited rapids, safety equipment, and cottage styles.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      {
                        label: 'Solo Explorer',
                        desc: 'Treks, wildlife & pure freedom',
                        badge: '1 Guest',
                      },
                      {
                        label: 'Couples Escape',
                        desc: 'Romantic river cottages & privacy',
                        badge: '2 Guests',
                      },
                      {
                        label: 'Friends Crew',
                        desc: 'Adrenaline, rapids & campfire',
                        badge: 'Group Thrill',
                      },
                      {
                        label: 'Family Vacation',
                        desc: 'All-age gentle adventures & safety',
                        badge: 'All Ages',
                      },
                    ].map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => handleSelectTraveler(item.label)}
                        className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between h-28 ${
                          travelerType === item.label
                            ? 'border-[#1b533f] bg-white ring-2 ring-[#1b533f]/30 shadow-xs'
                            : 'border-[#0c2b20]/10 bg-white hover:bg-[#f6f4ee]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] uppercase tracking-wider font-semibold text-[#1b533f] bg-[#1b533f]/10 px-1.5 py-0.5 rounded">
                            {item.badge}
                          </span>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              travelerType === item.label
                                ? 'border-[#1b533f] bg-[#1b533f] text-white'
                                : 'border-[#0c2b20]/20'
                            }`}
                          >
                            {travelerType === item.label && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            )}
                          </div>
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-[#0c2b20] block">
                            {item.label}
                          </span>
                          <span className="text-[11px] text-[#5c6660] leading-tight block mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
                    >
                      <span>Next: How Long Are You Staying?</span>
                      <ArrowRight className="w-4 h-4 text-[#22c55e]" />
                    </button>
                  </div>
                </div>
              )}

              {/* ──────────────────────────────────────────────────────────
                  STEP 2: HOW LONG ARE YOU STAYING?
                 ────────────────────────────────────────────────────────── */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1b533f]">
                      Step 2 of 6
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0c2b20] tracking-tight">
                      How long are you staying?
                    </h4>
                    <p className="text-xs text-[#5c6660]">
                      Most guests find 2 Days / 1 Night perfect for combining rafting, river camp, and jungle safari.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      {
                        label: '1 Day',
                        sub: 'Day Blitz (No night stay)',
                        desc: 'Kali River Rafting + Zipline + Kayaking + Riverside Lunch buffet',
                      },
                      {
                        label: '2 Days / 1 Night',
                        sub: 'Signature Weekend Escape',
                        desc: 'Rafting + Riverside Swiss Tent / Cottage + Jungle Safari + Campfire BBQ',
                      },
                      {
                        label: '3 Days / 2 Nights',
                        sub: 'Complete Forest Expedition',
                        desc: 'Water sports, Anshi Safari, Kavala Caves, Shiroli Peak sunset & organic cuisine',
                      },
                    ].map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setDuration(item.label)}
                        className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                          duration === item.label
                            ? 'border-[#1b533f] bg-white ring-2 ring-[#1b533f]/30 shadow-xs'
                            : 'border-[#0c2b20]/10 bg-white hover:bg-[#f6f4ee]'
                        }`}
                      >
                        <div className="pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-semibold text-[#0c2b20]">
                              {item.label}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1b533f] bg-[#1b533f]/10 px-1.5 py-0.5 rounded">
                              {item.sub}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#5c6660] block mt-1 leading-relaxed">
                            {item.desc}
                          </span>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center ${
                            duration === item.label
                              ? 'border-[#1b533f] bg-[#1b533f] text-white'
                              : 'border-[#0c2b20]/20'
                          }`}
                        >
                          {duration === item.label && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-white border border-[#0c2b20]/15 hover:bg-[#f6f4ee] text-[#0c2b20] py-3 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-2 bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
                    >
                      <span>Next: Adventure Vibe</span>
                      <ArrowRight className="w-4 h-4 text-[#22c55e]" />
                    </button>
                  </div>
                </div>
              )}

              {/* ──────────────────────────────────────────────────────────
                  STEP 3: WHAT DO YOU WANT TO EXPERIENCE?
                 ────────────────────────────────────────────────────────── */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1b533f]">
                      Step 3 of 6
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0c2b20] tracking-tight">
                      What do you want to experience?
                    </h4>
                    <p className="text-xs text-[#5c6660]">
                      Tune the adventure intensity and rhythm of your Dandeli trip.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      {
                        label: 'Extreme Thrill & Rapids',
                        desc: '9.5 KM Grade 3+ Kali Rafting, Zipline, River Crossing & Night Safari',
                        tag: 'High Adrenaline',
                      },
                      {
                        label: 'Wildlife Safari & Birding',
                        desc: 'Anshi tiger reserve jeep trails, hornbill sanctuary walks & misty dawn boat float',
                        tag: 'Nature & Birds',
                      },
                      {
                        label: 'Serene River & Campfire',
                        desc: 'Gentle coracle rides, natural jacuzzi bath, cozy wooden cottages & starry woodfire BBQ',
                        tag: 'Relaxed & Scenic',
                      },
                    ].map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setVibe(item.label)}
                        className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                          vibe === item.label
                            ? 'border-[#1b533f] bg-white ring-2 ring-[#1b533f]/30 shadow-xs'
                            : 'border-[#0c2b20]/10 bg-white hover:bg-[#f6f4ee]'
                        }`}
                      >
                        <div className="pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-semibold text-[#0c2b20]">
                              {item.label}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1b533f] bg-[#1b533f]/10 px-1.5 py-0.5 rounded">
                              {item.tag}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#5c6660] block mt-1 leading-relaxed">
                            {item.desc}
                          </span>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center ${
                            vibe === item.label
                              ? 'border-[#1b533f] bg-[#1b533f] text-white'
                              : 'border-[#0c2b20]/20'
                          }`}
                        >
                          {vibe === item.label && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 bg-white border border-[#0c2b20]/15 hover:bg-[#f6f4ee] text-[#0c2b20] py-3 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="flex-2 bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
                    >
                      <span>Next: Booking Details</span>
                      <ArrowRight className="w-4 h-4 text-[#22c55e]" />
                    </button>
                  </div>
                </div>
              )}

              {/* ──────────────────────────────────────────────────────────
                  STEP 4: PLAN YOUR BOOKING
                 ────────────────────────────────────────────────────────── */}
              {step === 4 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1b533f]">
                      Step 4 of 6
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0c2b20] tracking-tight">
                      Plan your booking details
                    </h4>
                    <p className="text-xs text-[#5c6660]">
                      Customized based on your {travelerType} & {duration} choice. You can adjust any option.
                    </p>
                  </div>

                  <div className="space-y-3.5 bg-white p-4 rounded-xl border border-[#0c2b20]/10">
                    {/* Activity / Package Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-[#0c2b20] mb-1">
                        Selected Activity or Package
                      </label>
                      <select
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                        className="w-full bg-[#fcfbf7] border border-[#0c2b20]/20 rounded-lg px-3 py-2.5 text-xs text-[#0c2b20] font-medium focus:outline-hidden focus:ring-1 focus:ring-[#1b533f]"
                      >
                        <option value="White Water Rafting (9.5 KM Grade 3+)">
                          White Water Rafting (9.5 KM Grade 3+ Rapids)
                        </option>
                        <option value="1N/2D Adventure Combo Package">
                          1N/2D Adventure Combo (Rafting + Stay + Meals)
                        </option>
                        <option value="2N/3D Complete Jungle Expedition">
                          2N/3D Complete Jungle & Safari Expedition
                        </option>
                        <option value="Student Package (Rafting + Zorbing + Food)">
                          Student Package (Rafting + Kayak + Zorbing + Food)
                        </option>
                        <option value="Group Adventure Package">
                          Group Adventure Package (Campfire + Rafting + River Crossing)
                        </option>
                        <option value="Family Vacation Package">
                          Family Vacation Package (Gentle Rafting + Safari + Cottages)
                        </option>
                        <option value="Couple Romance Package">
                          Couple Romance Package (Riverside Cottage + Rafting + Jacuzzi)
                        </option>
                        <option value="Kayaking & River Crossing Combo">
                          Kayaking & River Crossing Combo
                        </option>
                        <option value="Jungle Safari & Bird Watching">
                          Jungle Safari & Bird Watching (Anshi Reserve)
                        </option>
                      </select>
                    </div>

                    {/* Accommodation Preference */}
                    <div>
                      <label className="block text-xs font-semibold text-[#0c2b20] mb-1">
                        Accommodation Preference
                      </label>
                      <select
                        value={stayOption}
                        onChange={(e) => {
                          setStayOption(e.target.value);
                          setHasManuallyEditedStay(true);
                        }}
                        className="w-full bg-[#fcfbf7] border border-[#0c2b20]/20 rounded-lg px-3 py-2.5 text-xs text-[#0c2b20] font-medium focus:outline-hidden focus:ring-1 focus:ring-[#1b533f]"
                      >
                        <option value="Riverside Swiss Tent with Meals">
                          Riverside Swiss Tent with All Meals (Glamping)
                        </option>
                        <option value="Deluxe Forest Cottages">
                          Deluxe Forest Cottages (AC, River View & Balcony)
                        </option>
                        <option value="Luxury Wooden Suites">
                          Luxury Wooden Suites (Premium Rainforest Jacuzzi)
                        </option>
                        <option value="Resort Nature Rooms">
                          Resort Nature Rooms (Comfortable Twin / Queen)
                        </option>
                        <option value="Group Adventure Dormitory">
                          Group Adventure Dormitory (Bunk Beds for 6-12)
                        </option>
                        <option value="Day Visit (No Accommodation Needed)">
                          Day Visit (No Night Stay Required)
                        </option>
                      </select>
                    </div>

                    {/* Date & Guests row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#0c2b20] mb-1">
                          Travel Date
                        </label>
                        <input
                          type="date"
                          min={todayStr}
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full bg-[#fcfbf7] border border-[#0c2b20]/20 rounded-lg px-3 py-2 text-xs text-[#0c2b20] font-medium focus:outline-hidden focus:ring-1 focus:ring-[#1b533f]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0c2b20] mb-1">
                          Number of Guests
                        </label>
                        <div className="flex items-center border border-[#0c2b20]/20 rounded-lg bg-[#fcfbf7] overflow-hidden">
                          <button
                            type="button"
                            onClick={() => {
                              setGuests(Math.max(1, guests - 1));
                              setHasManuallyEditedGuests(true);
                            }}
                            className="w-9 py-2 text-sm font-bold text-[#0c2b20] hover:bg-[#eae3d2] active:scale-95 transition-colors"
                          >
                            –
                          </button>
                          <span className="flex-1 text-center text-xs font-semibold text-[#0c2b20]">
                            {guests} {guests === 1 ? 'Guest' : 'Guests'}
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              setGuests(guests + 1);
                              setHasManuallyEditedGuests(true);
                            }}
                            className="w-9 py-2 text-sm font-bold text-[#0c2b20] hover:bg-[#eae3d2] active:scale-95 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 bg-white border border-[#0c2b20]/15 hover:bg-[#f6f4ee] text-[#0c2b20] py-3 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(5)}
                      className="flex-2 bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
                    >
                      <span>Next: Your Details</span>
                      <ArrowRight className="w-4 h-4 text-[#22c55e]" />
                    </button>
                  </div>
                </div>
              )}

              {/* ──────────────────────────────────────────────────────────
                  STEP 5: YOUR DETAILS
                 ────────────────────────────────────────────────────────── */}
              {step === 5 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1b533f]">
                      Step 5 of 6
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0c2b20] tracking-tight">
                      Where should we send your plan?
                    </h4>
                    <p className="text-xs text-[#5c6660]">
                      Our team will reach out with official slot confirmation and direct permit rates.
                    </p>
                  </div>

                  <div className="space-y-3 bg-white p-4 rounded-xl border border-[#0c2b20]/10">
                    <div>
                      <label className="block text-xs font-semibold text-[#0c2b20] mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#fcfbf7] border border-[#0c2b20]/20 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#0c2b20] placeholder-[#8a948e] focus:outline-hidden focus:ring-1 focus:ring-[#1b533f]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0c2b20] mb-1">
                        WhatsApp / Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#fcfbf7] border border-[#0c2b20]/20 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#0c2b20] placeholder-[#8a948e] focus:outline-hidden focus:ring-1 focus:ring-[#1b533f]"
                      />
                    </div>

                    <div className="pt-1 flex items-start gap-2 text-[11px] text-[#5c6660] leading-tight">
                      <ShieldCheck className="w-4 h-4 text-[#1b533f] shrink-0 mt-0.5" />
                      <span>
                        No spam. Your contact info is strictly used by licensed river marshals to
                        confirm permit time slots and water level safety.
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="flex-1 bg-white border border-[#0c2b20]/15 hover:bg-[#f6f4ee] text-[#0c2b20] py-3 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      disabled={!name.trim() || !phone.trim()}
                      onClick={() => setStep(6)}
                      className="flex-2 bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none text-[#fcfbf7] py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
                    >
                      <span>Review Your Plan</span>
                      <ArrowRight className="w-4 h-4 text-[#22c55e]" />
                    </button>
                  </div>
                </div>
              )}

              {/* ──────────────────────────────────────────────────────────
                  STEP 6: REVIEW & CONFIRM
                 ────────────────────────────────────────────────────────── */}
              {step === 6 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1b533f]">
                      Step 6 of 6
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0c2b20] tracking-tight">
                      Review your Dandeli trip plan
                    </h4>
                    <p className="text-xs text-[#5c6660]">
                      Please verify your selections before confirming your reservation.
                    </p>
                  </div>

                  {/* Clean Scannable Summary Card */}
                  <div className="bg-white rounded-xl border border-[#0c2b20]/15 overflow-hidden shadow-xs">
                    <div className="bg-[#0c2b20] px-4 py-2.5 flex items-center justify-between text-white">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#86efac]">
                        YOUR DANDELI PLAN
                      </span>
                      <span className="text-[10px] text-white/70">
                        {duration} • {travelerType}
                      </span>
                    </div>

                    <div className="p-4 divide-y divide-[#0c2b20]/10 text-xs space-y-2">
                      <div className="grid grid-cols-2 gap-2 pb-2">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#5c6660] block font-medium">
                            Travellers
                          </span>
                          <span className="font-semibold text-[#0c2b20] text-xs">
                            {travelerType}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#5c6660] block font-medium">
                            Duration
                          </span>
                          <span className="font-semibold text-[#0c2b20] text-xs">
                            {duration}
                          </span>
                        </div>
                      </div>

                      <div className="py-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#5c6660] block font-medium">
                          Adventure Vibe
                        </span>
                        <span className="font-semibold text-[#0c2b20] text-xs">
                          {vibe}
                        </span>
                      </div>

                      <div className="py-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#5c6660] block font-medium">
                          Selected Activity / Package
                        </span>
                        <span className="font-semibold text-[#0c2b20] text-xs">
                          {activity}
                        </span>
                      </div>

                      <div className="py-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#5c6660] block font-medium">
                          Accommodation
                        </span>
                        <span className="font-semibold text-[#0c2b20] text-xs">
                          {stayOption}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 py-2">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#5c6660] block font-medium">
                            Travel Date
                          </span>
                          <span className="font-semibold text-[#0c2b20] text-xs">
                            {date || 'Upcoming Weekend'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#5c6660] block font-medium">
                            Total Guests
                          </span>
                          <span className="font-semibold text-[#0c2b20] text-xs">
                            {guests} {guests === 1 ? 'Guest' : 'Guests'}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#5c6660] block font-medium">
                            Name
                          </span>
                          <span className="font-semibold text-[#0c2b20] text-xs">
                            {name || 'Explorer'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#5c6660] block font-medium">
                            Phone / WhatsApp
                          </span>
                          <span className="font-semibold text-[#0c2b20] text-xs">
                            {phone}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submission CTA Actions */}
                  <div className="space-y-2 pt-2">
                    <button
                      id="plan-my-trip-confirm-btn"
                      type="button"
                      onClick={() => handleConfirmPlan()}
                      className="w-full bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <span>Confirm My Plan</span>
                      <ArrowRight className="w-4 h-4 text-[#22c55e]" />
                    </button>

                    <button
                      id="plan-my-trip-direct-whatsapp-btn"
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="w-full bg-[#1b533f] hover:bg-[#23634c] active:scale-[0.98] text-white py-2.5 px-4 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#86efac]" />
                      <span>Send Directly to WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(5)}
                      className="w-full text-center text-xs text-[#5c6660] hover:text-[#0c2b20] py-1 transition-colors"
                    >
                      ← Change personal details or choices
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
