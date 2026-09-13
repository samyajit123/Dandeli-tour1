import React, { useState } from 'react';
import { Camera, X, MapPin, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/dandeliData';
import { GalleryItem } from '../types';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItem?: GalleryItem | null;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  initialItem = null,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(initialItem);

  if (!isOpen) return null;

  const categories = ['All', 'Adventure', 'River & Water', 'Jungle & Nature', 'Happy Customers', 'Stays'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div
      id="full-gallery-modal"
      className="fixed inset-0 z-50 bg-[#061912]/95 backdrop-blur-md flex flex-col justify-between overflow-y-auto animate-fadeIn"
    >
      {/* Modal Sticky Top Header */}
      <div className="sticky top-0 z-20 bg-[#061912]/95 border-b border-white/10 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Camera className="w-5 h-5 text-[#22c55e]" />
          <div>
            <h3 className="text-base font-semibold text-white tracking-tight">
              Dandeli Photographic Archive
            </h3>
            <span className="text-xs text-white/60 font-medium">
              {filteredItems.length} Photographs
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          aria-label="Close Gallery"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Category Filter Pills in Modal */}
      <div className="px-4 py-2.5 bg-[#0c2b20]/60 border-b border-white/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 ${
              selectedCategory === cat
                ? 'bg-[#1b533f] text-white'
                : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Gallery Photos */}
      <div className="p-4 flex-1 max-w-2xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="bg-[#0c2b20] rounded-xl overflow-hidden border border-white/10 shadow-sm group cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/80 via-transparent to-transparent" />
                <span className="absolute top-2.5 left-2.5 bg-[#061912]/80 backdrop-blur-xs text-[#86efac] text-[9px] font-medium px-2 py-0.5 rounded-md uppercase tracking-wider border border-white/10">
                  {item.category}
                </span>
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-[#061912]/70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-3 space-y-1">
                <h4 className="text-sm font-semibold text-white leading-snug">
                  {item.title}
                </h4>
                {item.caption && (
                  <p className="text-xs text-white/65 line-clamp-2">
                    {item.caption}
                  </p>
                )}
                <div className="text-[11px] text-white/50 flex items-center gap-1 pt-0.5">
                  <MapPin className="w-2.5 h-2.5 text-[#22c55e]" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Close Footer Button */}
      <div className="p-4 border-t border-white/10 bg-[#061912] text-center sticky bottom-0">
        <button
          onClick={onClose}
          className="bg-white/10 hover:bg-white/20 text-[#fcfbf7] px-5 py-2 rounded-lg text-xs font-medium transition-colors"
        >
          Close Gallery
        </button>
      </div>

      {/* Lightbox Zoom Viewer */}
      {activePhoto && (
        <div
          id="photo-lightbox"
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#22c55e] p-1"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activePhoto.image}
              alt={activePhoto.title}
              className="w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-3 text-white">
              <span className="text-[10px] font-medium text-white/60 uppercase tracking-wider block">
                {activePhoto.category} • {activePhoto.location}
              </span>
              <h3 className="text-base font-semibold text-white mt-0.5">{activePhoto.title}</h3>
              {activePhoto.caption && (
                <p className="text-xs text-white/70 mt-1">{activePhoto.caption}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
