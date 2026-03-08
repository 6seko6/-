import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MatchCard from './components/MatchCard';
import NewsCard from './components/NewsCard';
import SectionHeader from './components/SectionHeader';
import Footer from './components/Footer';
import { Trophy, Users, Target, Zap, ChevronRight } from 'lucide-react';

const MATCHES = [
  {
    team1: { name: 'Falcon Elite', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=falcon', score: 2 },
    team2: { name: 'Desert Kings', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=desert', score: 1 },
    game: 'Rage MP',
    time: 'Live Now',
    isLive: true
  },
  {
    team1: { name: 'Atlas Warriors', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=atlas' },
    team2: { name: 'Nomad Squad', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=nomad' },
    game: 'Rage MP',
    time: 'Tonight 22:00'
  },
  {
    team1: { name: 'Sultan Force', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=sultan' },
    team2: { name: 'Oasis Knights', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=oasis' },
    game: 'Rage MP',
    time: 'March 10, 21:00'
  }
];

const NEWS = [
  {
    title: 'Arab Grand Season 5: New Luxury Vehicles and Properties',
    category: 'Server Update',
    date: 'March 08, 2024',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'The Grand Heist: Join the Biggest Event of the Month',
    category: 'Events',
    date: 'March 07, 2024',
    image: 'https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'New Player Guide: How to Build Your Empire in Arab Grand',
    category: 'Guide',
    date: 'March 05, 2024',
    image: 'https://images.unsplash.com/photo-1464852047516-e50553021cce?auto=format&fit=crop&q=80&w=800'
  }
];

const TEAMS = [
  { name: 'Falcon Elite', game: 'Pro Gang', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Desert Kings', game: 'Top Mafia', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Atlas Warriors', game: 'Elite Police', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Nomad Squad', game: 'Street Racers', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' }
];

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-gold selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Features Section */}
        <section className="py-24 px-6 lg:px-12 bg-dark-card/30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Trophy, title: 'Grand Events', desc: 'Participate in massive server-wide events with huge prizes.' },
              { icon: Users, title: 'Active Community', desc: 'Join thousands of active players in our growing community.' },
              { icon: Target, title: 'Fair Play', desc: 'Advanced anti-cheat and dedicated staff for a fair experience.' },
              { icon: Zap, title: 'High Performance', desc: 'Optimized server scripts for a lag-free gaming experience.' }
            ].map((feature, i) => (
              <div key={i} className="group p-8 border border-gold/10 hover:border-gold/30 transition-all duration-300 rounded-sm bg-dark-card/50 border-glow-gold">
                <div className="w-14 h-14 gold-gradient rounded-sm flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-500 rotate-45 group-hover:rotate-0">
                  <feature.icon className="-rotate-45 group-hover:rotate-0 transition-all duration-500" size={28} />
                </div>
                <h3 className="font-display font-black text-xl uppercase italic tracking-tight mb-4 text-gold">{feature.title}</h3>
                <p className="text-gold/40 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Matches Section */}
        <section id="matches" className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <SectionHeader title="Server Battles" subtitle="Live Turf Wars" className="mb-0" />
              <button className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gold hover:text-white transition-colors">
                View All Battles <ChevronRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {MATCHES.map((match, i) => (
                <MatchCard
                  key={i}
                  team1={match.team1}
                  team2={match.team2}
                  game={match.game}
                  time={match.time}
                  isLive={match.isLive}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section id="teams" className="py-24 px-6 lg:px-12 bg-dark-card/30 relative overflow-hidden">
          {/* Decorative Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[20vw] uppercase italic opacity-[0.03] pointer-events-none whitespace-nowrap select-none text-gold">
            ARAB GRAND
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeader title="Top Factions" subtitle="The Ruling Elite" align="center" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAMS.map((team, i) => (
                <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-gold/10">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-gold font-display font-black text-[10px] uppercase tracking-widest mb-2 block">
                      {team.game}
                    </span>
                    <h4 className="font-display font-black text-2xl uppercase italic tracking-tight text-white group-hover:text-glow-gold transition-all">
                      {team.name}
                    </h4>
                    <div className="h-0.5 bg-gold w-0 group-hover:w-full transition-all duration-500 mt-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title="Server Updates" subtitle="Grand News" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {NEWS.map((news, i) => (
                <NewsCard
                  key={i}
                  title={news.title}
                  category={news.category}
                  date={news.date}
                  image={news.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto relative overflow-hidden rounded-sm gold-gradient p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_0_50px_rgba(184,138,77,0.2)]">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-dark-bg)_1px,_transparent_1px)] bg-[size:20px_20px]" />
            </div>
            
            <div className="relative z-10 text-white max-w-2xl text-center lg:text-left">
              <h2 className="font-display font-black text-4xl md:text-6xl uppercase italic leading-none mb-6">
                Start Your <span className="underline decoration-white/20">Legacy</span> Today
              </h2>
              <p className="text-white/80 text-lg font-bold uppercase tracking-tight">
                Join Arab Grand and experience the most advanced Rage MP server in the region.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="bg-dark-bg text-white font-display font-black text-sm uppercase tracking-widest px-12 py-5 rounded-sm hover:bg-white hover:text-dark-bg transition-all duration-300 slanted-clip">
                Connect Now
              </button>
              <button className="border-2 border-white/20 text-white font-display font-black text-sm uppercase tracking-widest px-12 py-5 rounded-sm hover:border-white transition-all duration-300 slanted-clip-right">
                Join Discord
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
