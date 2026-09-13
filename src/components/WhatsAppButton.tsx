import React from 'react';
import { FOOTER_DATA } from '../data/dandeliData';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${FOOTER_DATA.whatsappNumber}?text=${encodeURIComponent(
    FOOTER_DATA.whatsappMessage
  )}`;

  return (
    <aside
      aria-label="Contact assistance"
      className="fixed bottom-5 right-4 sm:right-5 z-50 flex items-center select-none"
    >
      {/* Tooltip on desktop hover */}
      <span className="hidden sm:inline-block mr-2.5 bg-[#0c2b20] text-[#fcfbf7] text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#22c55e]/25">
        Chat with Dandeli Expert
      </span>

      {/* Floating container with continuous gentle 4px vertical float */}
      <div className="animate-whatsapp-float flex items-center justify-center">
        <a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Dandeli Tours"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.22),0_0_18px_rgba(37,211,102,0.38)] hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        >
          {/* Official WhatsApp Vector Icon (Speech bubble with tail + phone handset) */}
          <svg
            className="w-7 h-7 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.301-.15-1.777-.877-2.052-.977-.275-.101-.475-.15-.675.15-.2.3-.775.977-.95 1.177-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.49-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.13-.612.136-.135.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.585-.492-.506-.675-.515-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.116 3.23 5.125 4.53.716.31 1.275.495 1.71.634.72.23 1.375.197 1.892.121.577-.086 1.777-.727 2.027-1.429.25-.702.25-1.303.175-1.429-.075-.126-.275-.201-.575-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.42 1.27 4.86L2 22l5.3-1.23c1.44.79 3.08 1.23 4.74 1.23 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.25c-1.5 0-2.98-.4-4.26-1.16l-.31-.18-3.15.73.84-3.07-.2-.32a8.217 8.217 0 01-1.27-4.25c0-4.55 3.7-8.25 8.25-8.25 4.55 0 8.25 3.7 8.25 8.25 0 4.55-3.7 8.25-8.25 8.25z" />
          </svg>
        </a>
      </div>
    </aside>
  );
};

