import React, { useState } from 'react';
import { Camera, ArrowRight, X, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/dandeliData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [isFullGalleryOpen, setIsFullGalleryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Adventure', 'River & Water', 'Jungle & Nature', 'Happy Customers', 'Stays'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  // Curated preview: top 4 high-impact shots
  const previewItems = GALLERY_ITEMS.slice(0, 4);

  return (
    <section id="gallery" className="py-12 bg-[#f5f1e8]/50 border-t border-[#0c2b20]/10">
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="space-y-1.5 mb-6">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#22c55e]" />
            <span className="text-[11px] font-bold tracking-widest text-[#1b533f] uppercase">
              Visual Chronicles
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2b20] tracking-tight uppercase font-editorial">
            DANDELI IN FRAMES
          </h2>
          <p className="text-xs sm:text-sm text-[#133e2f]/80 max-w-lg">
            Glimpses of raging whitewaters, emerald canopies, mist-shrouded rivers, and vibrant riverside stays.
          </p>
        </div>

        {/* Curated Preview - High Impact Editorial Mosaic */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {previewItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => {
                setActivePhoto(item);
                setIsFullGalleryOpen(true);
              }}
              className={`rounded-2xl overflow-hidden relative group cursor-pointer shadow-xs border border-[#0c2b20]/15 ${
                idx === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-2.5 left-2.5 bg-[#fcfbf7]/90 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold text-[#0c2b20] uppercase tracking-wider">
                {item.category}
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <span className="text-xs font-bold font-editorial block line-clamp-1">
                  {item.title}
                </span>
                <span className="text-[10px] text-[#22c55e] flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5" />
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* EXPLORE FULL GALLERY -> Button */}
        <div className="text-center">
          <button
            id="explore-full-gallery-btn"
            onClick={() => setIsFullGalleryOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0c2b20] hover:bg-[#133e2f] active:scale-95 text-[#fcfbf7] py-3.5 px-8 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all"
          >
            <span>EXPLORE FULL GALLERY →</span>
          </button>
        </div>
      </div>

      {/* Full Gallery Dedicated Modal Experience */}
      {isFullGalleryOpen && (
        <div
          id="full-gallery-modal"
          className="fixed inset-0 z-50 bg-[#061912]/95 backdrop-blur-md flex flex-col justify-between overflow-y-auto"
        >
          {/* Modal Sticky Top Header */}
          <div className="sticky top-0 z-20 bg-[#061912]/95 border-b border-[#1b533f]/40 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-[#22c55e]" />
              <div>
                <h3 className="text-base font-extrabold text-white tracking-wider uppercase font-editorial">
                  Dandeli Editorial Gallery
                </h3>
                <span className="text-[10px] text-[#86efac]">
                  {filteredItems.length} Photographs
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsFullGalleryOpen(false)}
              className="w-9 h-9 rounded-full bg-[#133e2f] hover:bg-[#1b533f] text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Filter Pills in Modal */}
          <div className="px-4 py-3 bg-[#0c2b20]/60 border-b border-[#1b533f]/30 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#22c55e] text-[#061912]'
                    : 'bg-[#133e2f] text-[#e9e2d0] hover:bg-[#1b533f]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry / Editorial Grid in Modal */}
          <div className="p-4 flex-1 max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActivePhoto(item)}
                  className="bg-[#0c2b20] rounded-2xl overflow-hidden border border-[#1b533f]/50 shadow-md group cursor-pointer flex flex-col"
                >
                  <div className="aspect-[4/3] w-full relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/80 via-transparent to-transparent" />
                    <span className="absolute top-2.5 left-2.5 bg-[#061912]/80 backdrop-blur-md text-[#22c55e] text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider border border-[#22c55e]/30">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-3.5 space-y-1">
                    <h4 className="text-sm font-bold text-white font-editorial leading-snug">
                      {item.title}
                    </h4>
                    {item.caption && (
                      <p className="text-xs text-[#e9e2d0]/75 line-clamp-2">
                        {item.caption}
                      </p>
                    )}
                    <div className="text-[10px] text-[#86efac] flex items-center gap-1 pt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Close Footer Button */}
          <div className="p-4 border-t border-[#1b533f]/40 bg-[#061912] text-center">
            <button
              onClick={() => setIsFullGalleryOpen(false)}
              className="bg-[#133e2f] hover:bg-[#1b533f] text-[#fcfbf7] px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Back to Experience Guide
            </button>
          </div>
        </div>
      )}

      {/* Lightbox Zoom Viewer */}
      {activePhoto && isFullGalleryOpen && (
        <div
          id="photo-lightbox"
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#22c55e] p-1"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activePhoto.image}
              alt={activePhoto.title}
              className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-3 text-white">
              <span className="text-xs font-bold text-[#22c55e] uppercase tracking-wider block">
                {activePhoto.category} • {activePhoto.location}
              </span>
              <h3 className="text-lg font-bold font-editorial">{activePhoto.title}</h3>
              {activePhoto.caption && (
                <p className="text-xs text-gray-300 mt-1">{activePhoto.caption}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
