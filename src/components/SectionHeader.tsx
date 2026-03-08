import React from 'react';
import { cn } from '../lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({ title, subtitle, align = 'left', className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', align === 'center' ? 'text-center' : 'text-left', className)}>
      <span className="text-gold font-display font-black text-xs uppercase tracking-[0.4em] mb-4 block text-glow-gold">
        {subtitle}
      </span>
      <h2 className="font-display font-black text-4xl md:text-6xl uppercase italic tracking-tighter text-white">
        {title}
      </h2>
      <div className={cn('h-1 bg-gold mt-4 w-20', align === 'center' ? 'mx-auto' : '')} />
    </div>
  );
}
