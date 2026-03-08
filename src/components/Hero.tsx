import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2070"
          alt="Luxury Car Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block text-gold font-display font-black text-xs uppercase tracking-[0.5em] mb-6 text-glow-gold">
            The Ultimate Rage MP Experience
          </span>
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tight mb-12 text-white drop-shadow-2xl italic">
            Arab <span className="text-gold text-glow-gold">Grand</span>
          </h1>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="group relative gold-gradient text-white font-display font-black text-xs uppercase tracking-[0.3em] px-12 py-5 rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 slanted-clip shadow-[0_0_30px_rgba(184,138,77,0.3)]">
              Join Server
            </button>
            <button className="group relative border border-gold/30 text-gold font-display font-black text-xs uppercase tracking-[0.3em] px-12 py-5 rounded-sm overflow-hidden transition-all duration-300 hover:bg-gold hover:text-white slanted-clip-right">
              View Store
            </button>
          </div>
        </motion.div>
      </div>

      {/* Side Floating Actions */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-20">
        <button className="bg-gold text-white p-4 flex items-center gap-3 font-display font-black text-[10px] uppercase tracking-widest slanted-clip-right translate-x-4 hover:translate-x-0 transition-transform">
          <Heart size={16} fill="white" />
          <span className="hidden lg:block">Top Players</span>
        </button>
        <button className="bg-white text-dark-bg p-4 flex items-center gap-3 font-display font-black text-[10px] uppercase tracking-widest slanted-clip-right translate-x-4 hover:translate-x-0 transition-transform">
          <ShoppingCart size={16} fill="currentColor" />
          <span className="hidden lg:block">Buy Credits</span>
        </button>
      </div>

      {/* Decorative Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
