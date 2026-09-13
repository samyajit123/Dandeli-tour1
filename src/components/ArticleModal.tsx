import React from 'react';
import { X, Clock, Calendar, User, ArrowRight, Share2, Compass, MessageSquare } from 'lucide-react';
import { ArticleItem } from '../types';
import { FOOTER_DATA } from '../data/dandeliData';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onBookExperience: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onBookExperience,
}) => {
  if (!article) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  const handleWhatsAppConsult = () => {
    const text = `Hi Dandeli Tours! I just read your article "${article.title}" and would like to know more about booking these experiences.`;
    window.open(`https://wa.me/${FOOTER_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      id="article-reader-backdrop"
      className="fixed inset-0 z-50 bg-[#061912]/85 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        id="article-reader-card"
        className="w-full sm:max-w-2xl bg-[#fcfbf7] rounded-t-3xl sm:rounded-3xl border border-[#0c2b20]/15 max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Reader Top Bar */}
        <div className="sticky top-0 z-20 bg-[#fcfbf7]/95 backdrop-blur-md px-5 py-3 border-b border-[#0c2b20]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1b533f]">
              {article.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="w-8 h-8 rounded-full bg-[#f5f1e8] hover:bg-[#eae3d2] text-[#0c2b20] flex items-center justify-center transition-colors"
              title="Share Article"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#f5f1e8] hover:bg-[#eae3d2] text-[#0c2b20] flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Image Banner */}
        <div className="aspect-[16/9] w-full relative overflow-hidden bg-[#0c2b20]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/90 via-[#061912]/30 to-transparent" />

          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="inline-block bg-[#22c55e] text-[#061912] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1.5">
              Destination Editorial
            </span>
            <h1 className="text-2xl sm:text-3xl font-black leading-tight uppercase font-editorial">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Article Metadata Bar */}
        <div className="px-5 py-3 bg-[#f5f1e8] border-b border-[#0c2b20]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#1b533f] font-semibold">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-[#22c55e]" />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#22c55e]" />
              {article.readTime}
            </span>
          </div>
          <span className="flex items-center gap-1 text-[11px] text-[#133e2f]/70">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
        </div>

        {/* Article Body Content */}
        <div className="p-5 sm:p-7 space-y-6 text-[#0c2b20]">
          {/* Excerpt Lead */}
          <p className="text-sm sm:text-base font-semibold text-[#133e2f] leading-relaxed border-l-3 border-[#22c55e] pl-3.5 italic bg-[#f5f1e8]/50 py-2 rounded-r-lg">
            {article.excerpt}
          </p>

          {/* Article Sections */}
          <div className="space-y-5">
            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h2 className="text-base sm:text-lg font-extrabold uppercase font-editorial tracking-tight text-[#0c2b20]">
                  {section.heading}
                </h2>
                <p className="text-xs sm:text-sm text-[#133e2f]/90 leading-relaxed font-normal">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Editorial Callout */}
          <div className="bg-[#0c2b20] text-[#fcfbf7] p-5 rounded-2xl border border-[#1b533f]/50 space-y-3">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#22c55e]" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#22c55e]">
                Ready to Experience This?
              </span>
            </div>
            <h3 className="text-base font-bold uppercase font-editorial text-white">
              All experiences featured in this guide are available through Dandeli Tours.
            </h3>
            <p className="text-xs text-[#e9e2d0]/80">
              Pre-booking guarantees your river raft allocation and forest safari permits.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                onClick={() => {
                  onClose();
                  onBookExperience();
                }}
                className="bg-[#22c55e] text-[#061912] py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Book This Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleWhatsAppConsult}
                className="bg-[#133e2f] text-white py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Ask a Question on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
