import React from 'react';
import { Gamepad2, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-gold/10 pt-20 pb-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center rotate-45">
                <Gamepad2 className="-rotate-45 text-white" size={24} />
              </div>
              <span className="font-display font-black text-2xl tracking-tighter italic uppercase text-gold">
                Arab<span className="text-white">Grand</span>
              </span>
            </div>
            <p className="text-gold/40 leading-relaxed">
              The ultimate destination for competitive gaming and esports in the Arab world. Join our community and level up your game.
            </p>
            <div className="flex gap-4">
              {[Twitter, Youtube, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center text-gold/40 hover:border-gold hover:text-gold transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-widest mb-8 italic text-gold">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Servers', 'Match Schedule', 'Tournaments', 'News & Media'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gold/40 hover:text-gold transition-colors text-sm font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-widest mb-8 italic text-gold">Support</h4>
            <ul className="space-y-4">
              {['Help Center', 'Terms of Service', 'Privacy Policy', 'Contact Us', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gold/40 hover:text-gold transition-colors text-sm font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-widest mb-8 italic text-gold">Newsletter</h4>
            <p className="text-gold/40 text-sm mb-6">Subscribe to get the latest updates and tournament news.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-dark-card border border-gold/10 rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-white"
              />
              <button className="absolute right-2 top-2 gold-gradient text-white font-display font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-sm slanted-clip">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gold/20 text-xs font-bold uppercase tracking-widest">
            © 2024 Arab Grand. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-10 grayscale invert" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-10 grayscale invert" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-10 grayscale invert" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
