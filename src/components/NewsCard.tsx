import React from 'react';

interface NewsCardProps {
  title: string;
  category: string;
  date: string;
  image: string;
  key?: React.Key;
}

export default function NewsCard({ title, category, date, image }: NewsCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-sm bg-dark-card border border-dark-border transition-all duration-500 hover:border-neon/30">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="gold-gradient text-white font-display font-black text-[10px] uppercase tracking-widest px-3 py-1 slanted-clip">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-[10px] uppercase font-black tracking-widest text-gold/40 mb-2">
          {date}
        </div>
        <h3 className="font-display font-black text-xl uppercase leading-tight tracking-tight text-white group-hover:text-gold transition-colors mb-4 line-clamp-2 italic">
          {title}
        </h3>
        <button className="text-[10px] uppercase font-black tracking-[0.2em] text-gold/60 group-hover:text-gold transition-colors flex items-center gap-2">
          Read Story <span className="w-8 h-px bg-current" />
        </button>
      </div>
    </div>
  );
}
