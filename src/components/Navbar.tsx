import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, Twitter, Youtube, Instagram, Facebook, Twitch, LayoutGrid } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { name: 'Home', href: '#' },
    { name: 'Servers', href: '#' },
    { name: 'Community', href: '#' },
  ];

  const rightLinks = [
    { name: 'Store', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Rules', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={cn(
        "w-full transition-all duration-300",
        isScrolled ? "bg-[#111111]" : "bg-[#111111]/90"
      )}>
        <div className="flex h-[100px]">
          
          {/* Left Side (Search) */}
          <div className="w-[15%] min-w-[80px] border-r border-white/5 flex items-center justify-center relative">
            {/* Slanted border effect */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5 transform -skew-x-[15deg] origin-bottom" />
            <button className="text-white hover:text-gold transition-colors">
              <Search size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* Middle Section (Nav + Logo) */}
          <div className="flex-1 flex flex-col relative">
            
            {/* Top Bar */}
            <div className="h-[40px] border-b border-white/5 flex items-center justify-between px-12 text-[10px] uppercase font-bold tracking-[0.2em] text-[#888888]">
              <div className="flex items-center gap-6">
                <span>follow us on:</span>
                <div className="flex gap-4">
                  <Facebook size={12} className="hover:text-gold cursor-pointer transition-colors" />
                  <Twitter size={12} className="hover:text-gold cursor-pointer transition-colors" />
                  <Youtube size={12} className="hover:text-gold cursor-pointer transition-colors" />
                  <Instagram size={12} className="hover:text-gold cursor-pointer transition-colors" />
                  <Twitch size={12} className="hover:text-gold cursor-pointer transition-colors" />
                </div>
              </div>
              <div className="lowercase tracking-normal text-[#888888]">
                this is arab grand, a premium rage mp server
              </div>
            </div>

            {/* Main Nav Links */}
            <div className="flex-1 flex items-center justify-between px-16">
              {/* Left Links */}
              <div className="flex gap-12">
                {leftLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-display font-black text-[13px] uppercase tracking-[0.15em] text-white hover:text-gold transition-colors relative group py-6"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              {/* Right Links */}
              <div className="flex gap-12">
                {rightLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-display font-black text-[13px] uppercase tracking-[0.15em] text-white hover:text-gold transition-colors relative group py-6"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>

            {/* Central Logo Trapezoid */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[120px] w-[200px] z-20">
              {/* The textured background trapezoid */}
              <div className="absolute inset-0 bg-[#222222] logo-trapezoid flex items-center justify-center overflow-hidden">
                {/* Texture overlay (simulating the grunge texture in the image) */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />
                
                {/* Logo Content */}
                <div className="relative z-10 flex flex-col items-center justify-center mt-2">
                  <span className="font-display font-black text-2xl tracking-tighter uppercase italic text-white leading-none">
                    Arab
                  </span>
                  <span className="font-display font-black text-2xl tracking-tighter uppercase italic text-gold leading-none">
                    Grand
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side (Grid Icon) */}
          <div className="w-[15%] min-w-[80px] border-l border-white/5 flex items-center justify-center relative">
            {/* Slanted border effect */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 transform skew-x-[15deg] origin-bottom" />
            <button className="text-white hover:text-gold transition-colors">
              <LayoutGrid size={24} strokeWidth={2.5} />
            </button>
          </div>

        </div>

        {/* Mobile Toggle (Hidden on Desktop) */}
        <button
          className="lg:hidden absolute right-6 top-1/2 -translate-y-1/2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#111111] border-b border-white/10 p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {[...leftLinks, ...rightLinks].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-display font-bold text-lg uppercase tracking-widest text-white hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
