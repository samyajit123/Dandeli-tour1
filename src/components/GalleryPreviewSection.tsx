import React from 'react';
import { Camera, ArrowRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/dandeliData';
import { GalleryItem } from '../types';

interface GalleryPreviewSectionProps {
  onOpenFullGallery: () => void;
  onSelectGalleryItem?: (item: GalleryItem) => void;
}

export const GalleryPreviewSection: React.FC<GalleryPreviewSectionProps> = ({
  onOpenFullGallery,
  onSelectGalleryItem,
}) => {
  // Select 4 distinct aesthetic images for the collage
  const largeItem = GALLERY_ITEMS[0]; // Rafting on Kali River
  const smallItem1 = GALLERY_ITEMS[1]; // Sunset kayaking
  const smallItem2 = GALLERY_ITEMS[4]; // Coracle boat ride
  const wideItem = GALLERY_ITEMS[8]; // Sykes Point valley gorge view

  return (
    <section id="gallery" className="py-12 px-4 max-w-[430px] mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center space-y-1.5 mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0c2b20]">
          Through their eyes
        </h2>
        <p className="text-xs sm:text-sm text-[#5c6660] font-normal">
          Moments captured in the Western Ghats
        </p>
      </div>

      {/* Collage Grid: 1 Large, 2 Smaller, 1 Wide */}
      <div className="space-y-3 mb-6">
        {/* 1. Large Image */}
        <div
          onClick={() => {
            if (onSelectGalleryItem) onSelectGalleryItem(largeItem);
            else onOpenFullGallery();
          }}
          className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#0c2b20] cursor-pointer group border border-[#0c2b20]/10"
        >
          <img
            src={largeItem.image}
            alt={largeItem.title}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[#fcfbf7]">
            <div>
              <span className="text-[10px] font-medium tracking-wider uppercase text-[#86efac]">
                {largeItem.category}
              </span>
              <p className="text-sm font-semibold tracking-tight leading-tight">
                {largeItem.title}
              </p>
            </div>
            <div className="w-7 h-7 rounded-md bg-white/20 backdrop-blur-xs flex items-center justify-center">
              <Eye className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>

        {/* 2 & 3. Two Smaller Images Side-by-Side */}
        <div className="grid grid-cols-2 gap-3">
          {/* Small 1 */}
          <div
            onClick={() => {
              if (onSelectGalleryItem) onSelectGalleryItem(smallItem1);
              else onOpenFullGallery();
            }}
            className="relative rounded-xl overflow-hidden aspect-square bg-[#0c2b20] cursor-pointer group border border-[#0c2b20]/10"
          >
            <img
              src={smallItem1.image}
              alt={smallItem1.title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/75 via-transparent to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-2.5 left-3 right-3 text-[#fcfbf7]">
              <span className="text-[9px] font-medium tracking-wider uppercase text-[#86efac] block">
                {smallItem1.category}
              </span>
              <p className="text-xs font-semibold tracking-tight truncate">
                {smallItem1.title}
              </p>
            </div>
          </div>

          {/* Small 2 */}
          <div
            onClick={() => {
              if (onSelectGalleryItem) onSelectGalleryItem(smallItem2);
              else onOpenFullGallery();
            }}
            className="relative rounded-xl overflow-hidden aspect-square bg-[#0c2b20] cursor-pointer group border border-[#0c2b20]/10"
          >
            <img
              src={smallItem2.image}
              alt={smallItem2.title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/75 via-transparent to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-2.5 left-3 right-3 text-[#fcfbf7]">
              <span className="text-[9px] font-medium tracking-wider uppercase text-[#86efac] block">
                {smallItem2.category}
              </span>
              <p className="text-xs font-semibold tracking-tight truncate">
                {smallItem2.title}
              </p>
            </div>
          </div>
        </div>

        {/* 4. One Wide Panoramic Image */}
        <div
          onClick={() => {
            if (onSelectGalleryItem) onSelectGalleryItem(wideItem);
            else onOpenFullGallery();
          }}
          className="relative rounded-xl overflow-hidden aspect-[16/9] bg-[#0c2b20] cursor-pointer group border border-[#0c2b20]/10"
        >
          <img
            src={wideItem.image}
            alt={wideItem.title}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/75 via-transparent to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[#fcfbf7]">
            <div>
              <span className="text-[10px] font-medium tracking-wider uppercase text-[#86efac]">
                {wideItem.category}
              </span>
              <p className="text-sm font-semibold tracking-tight leading-tight">
                {wideItem.title}
              </p>
            </div>
            <div className="w-7 h-7 rounded-md bg-white/20 backdrop-blur-xs flex items-center justify-center">
              <Eye className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        id="explore-full-gallery-btn"
        onClick={onOpenFullGallery}
        className="w-full bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3.5 px-5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
      >
        <span>Explore Full Gallery ({GALLERY_ITEMS.length} Photos)</span>
        <span className="text-sm">→</span>
      </button>
    </section>
  );
};
