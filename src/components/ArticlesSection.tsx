import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { ARTICLES_DATA } from '../data/dandeliData';
import { ArticleItem } from '../types';

interface ArticlesSectionProps {
  onSelectArticle: (article: ArticleItem) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="articles" className="py-10 bg-[#f5f1e8]/60 border-t border-[#0c2b20]/10">
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-6 space-y-1.5">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#22c55e]" />
            <span className="text-[11px] font-bold tracking-widest text-[#1b533f] uppercase">
              Editorial Guides & Travel Notes
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c2b20] tracking-tight uppercase font-editorial">
            MORE DANDELI INSPIRATION
          </h2>
          <p className="text-xs sm:text-sm text-[#133e2f]/80 max-w-lg">
            Essential stories, packing tips, seasonal guides, and handcrafted weekend itineraries to plan your journey.
          </p>
        </div>

        {/* Horizontally Scrollable Cards on Mobile / Responsive Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="snap-center shrink-0 w-[78vw] max-w-[300px] md:w-auto md:max-w-none bg-[#fcfbf7] rounded-2xl overflow-hidden border border-[#0c2b20]/15 shadow-xs hover:shadow-md transition-all duration-300 active:scale-[0.99] cursor-pointer flex flex-col group"
            >
              {/* Card Image */}
              <div className="aspect-[16/10] w-full relative overflow-hidden bg-[#0c2b20]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/70 via-transparent to-transparent" />

                {/* Category Label */}
                <div className="absolute top-3 left-3 bg-[#fcfbf7]/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs">
                  <span className="text-[10px] font-extrabold text-[#0c2b20] uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                <div className="absolute bottom-2.5 right-3 flex items-center gap-1 text-[10px] font-semibold text-[#fcfbf7] bg-[#0c2b20]/75 backdrop-blur-md px-2 py-0.5 rounded-full">
                  <Clock className="w-3 h-3 text-[#22c55e]" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[#0c2b20] leading-snug font-editorial group-hover:text-[#1b533f] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#133e2f]/80 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Arrow interaction link */}
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#0c2b20] border-t border-[#0c2b20]/10">
                  <span className="tracking-wide text-[11px] uppercase text-[#1b533f]">
                    Read Story
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#f5f1e8] group-hover:bg-[#0c2b20] group-hover:text-[#fcfbf7] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mt-2 md:hidden flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#1b533f]/70">
          <span>Swipe for more guides</span>
          <ArrowRight className="w-3 h-3 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
