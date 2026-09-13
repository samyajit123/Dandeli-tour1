import React, { useState } from 'react';
import { X, Calendar, Users, Phone, CheckCircle, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { FOOTER_DATA } from '../data/dandeliData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedActivity?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedActivity,
}) => {
  const [activity, setActivity] = useState<string>(
    preselectedActivity || 'White Water Rafting (9.5 KM)'
  );
  const [stayOption, setStayOption] = useState<string>('Riverside Swiss Tent with Meals');
  const [date, setDate] = useState<string>('');
  const [guests, setGuests] = useState<number>(2);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = `Hi Dandeli Tours! I'd like to book:
• Experience: ${activity}
• Stay: ${stayOption}
• Date: ${date || 'Upcoming Weekend'}
• Number of Guests: ${guests}
• Name: ${name || 'Explorer'}
• Phone: ${phone || 'Not provided'}
Please confirm availability and package pricing!`;

    const url = `https://wa.me/${FOOTER_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#061912]/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        id="booking-modal-card"
        className="w-full sm:max-w-lg bg-[#fcfbf7] rounded-t-2xl sm:rounded-2xl border border-[#0c2b20]/15 max-h-[90vh] overflow-y-auto shadow-xl p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#0c2b20]/10 mb-4">
          <div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-[#1b533f]">
              Official Reservation Desk
            </span>
            <h3 className="text-lg sm:text-xl font-semibold text-[#0c2b20] tracking-tight">
              Book your Dandeli escape
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#f5f1e8] hover:bg-[#eae3d2] flex items-center justify-center text-[#0c2b20] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#22c55e]/15 text-[#1b533f] mx-auto flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-[#1b533f]" />
            </div>
            <h4 className="text-lg font-semibold text-[#0c2b20] tracking-tight">
              Reservation request received
            </h4>
            <p className="text-xs text-[#5c6660] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-[#0c2b20] font-semibold">{name || 'Explorer'}</strong>! Our certified coordinator will contact you at <strong className="text-[#0c2b20] font-semibold">{phone}</strong> within 15 minutes to confirm permit slots and timing.
            </p>

            <div className="pt-2">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full bg-[#1b533f] hover:bg-[#23634c] text-white py-3 px-4 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#86efac]" />
                <span>Instant confirmation on WhatsApp</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="mt-2 text-xs font-medium text-[#1b533f] hover:underline"
            >
              Done & return to guide
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Experience / Package select */}
            <div>
              <label className="block text-xs font-medium text-[#0c2b20] mb-1.5">
                Select Activity or Package
              </label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="w-full bg-white border border-[#0c2b20]/15 rounded-lg px-3.5 py-2.5 text-xs font-normal text-[#0c2b20] focus:outline-hidden focus:ring-1 focus:ring-[#1b533f]"
              >
                <option value="White Water Rafting (9.5 KM)">White Water Rafting (9.5 KM Grade 3+)</option>
                <option value="1N/2D Adventure Combo Package">1N/2D Adventure Combo (Rafting + Stay + Food)</option>
                <option value="2N/3D Complete Jungle Expedition">2N/3D Complete Jungle & Safari Expedition</option>
                <option value="Kayaking & River Crossing Combo">Kayaking & River Crossing Combo</option>
                <option value="Anshi Tiger Reserve Jeep Safari">Anshi Tiger Reserve Jeep Safari</option>
                <option value="Couples Riverside Wilderness Retreat">Couples Riverside Retreat (Luxury Cottages)</option>
                <option value="Custom Group / Corporate Package">Custom Group Package (10+ Explorers)</option>
              </select>
            </div>

            {/* Stay Option */}
            <div>
              <label className="block text-xs font-medium text-[#0c2b20] mb-1.5">
                Accommodation Preference
              </label>
              <select
                value={stayOption}
                onChange={(e) => setStayOption(e.target.value)}
                className="w-full bg-white border border-[#0c2b20]/15 rounded-lg px-3.5 py-2.5 text-xs font-normal text-[#0c2b20] focus:outline-hidden focus:ring-1 focus:ring-[#1b533f]"
              >
                <option value="Riverside Swiss Tent with Meals">Riverside Swiss Glamping Tent (All Meals)</option>
                <option value="Luxury Teak Wood Treehouse">Luxury Teak Wood Treehouse</option>
                <option value="Forest View Family Cottage">Forest View Family Cottage</option>
                <option value="Day Trip Only (No Stay Required)">Day Trip Only (Activities only)</option>
              </select>
            </div>

            {/* Travel Date & Guests Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#0c2b20] mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#1b533f]" />
                  <span>Travel Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-[#0c2b20]/15 rounded-lg px-3 py-2 text-xs font-normal text-[#0c2b20] focus:outline-hidden focus:ring-1 focus:ring-[#1b533f]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0c2b20] mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#1b533f]" />
                  <span>Guests</span>
                </label>
                <div className="flex items-center bg-white border border-[#0c2b20]/15 rounded-lg p-1 justify-between">
                  <button
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-7 h-7 rounded-md bg-[#f5f1e8] text-sm font-medium text-[#0c2b20] flex items-center justify-center hover:bg-[#eae3d2]"
                  >
                    -
                  </button>
                  <span className="text-xs font-medium text-[#0c2b20] px-2">{guests} {guests === 1 ? 'Person' : 'People'}</span>
                  <button
                    type="button"
                    onClick={() => setGuests(guests + 1)}
                    className="w-7 h-7 rounded-md bg-[#f5f1e8] text-sm font-medium text-[#0c2b20] flex items-center justify-center hover:bg-[#eae3d2]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Guest Contact Details */}
            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-medium text-[#0c2b20] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-[#0c2b20]/15 rounded-lg px-3.5 py-2.5 text-xs text-[#0c2b20] focus:outline-hidden focus:ring-1 focus:ring-[#1b533f]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0c2b20] mb-1.5 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#1b533f]" />
                  <span>WhatsApp / Phone Number</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-[#0c2b20]/15 rounded-lg px-3.5 py-2.5 text-xs text-[#0c2b20] focus:outline-hidden focus:ring-1 focus:ring-[#1b533f]"
                />
              </div>
            </div>

            {/* Safety & Guarantee Badge */}
            <div className="flex items-center gap-2 bg-[#f5f1e8] p-2.5 rounded-lg text-xs text-[#1b533f]">
              <ShieldCheck className="w-4 h-4 text-[#1b533f] shrink-0" />
              <span>Zero cancellation fee up to 48 hours before trip date.</span>
            </div>

            {/* Submit Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                type="submit"
                className="w-full bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Request Booking Slot</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#22c55e]" />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full bg-[#1b533f] hover:bg-[#23634c] active:scale-[0.98] text-white py-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#86efac]" />
                <span>Book on WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
