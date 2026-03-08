import React from 'react';
import { cn } from '../lib/utils';

interface MatchCardProps {
  team1: { name: string; logo: string; score?: number };
  team2: { name: string; logo: string; score?: number };
  game: string;
  time: string;
  isLive?: boolean;
  key?: React.Key;
}

export default function MatchCard({ team1, team2, game, time, isLive }: MatchCardProps) {
  return (
    <div className="group relative bg-dark-card border border-dark-border p-6 rounded-sm transition-all duration-300 hover:border-neon/50 hover:border-glow">
      {/* Game Tag */}
      <div className="absolute -top-3 left-6 px-3 py-1 bg-dark-bg border border-gold/20 text-[10px] uppercase font-black tracking-[0.2em] text-gold/60 group-hover:text-gold transition-colors">
        {game}
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* Team 1 */}
        <div className="flex-1 flex flex-col items-center gap-3">
          <div className="w-16 h-16 bg-dark-bg rounded-full flex items-center justify-center border border-gold/10 group-hover:border-gold/30 transition-colors overflow-hidden p-2">
            <img src={team1.logo} alt={team1.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <span className="font-display font-black text-sm uppercase tracking-tight text-center text-white">{team1.name}</span>
        </div>

        {/* VS / Score */}
        <div className="flex flex-col items-center gap-2">
          {isLive ? (
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black font-display italic text-white">{team1.score}</span>
              <div className="flex flex-col items-center">
                <span className="text-neon font-black text-xs uppercase tracking-widest animate-pulse">Live</span>
                <span className="text-gold/40 font-black text-lg italic">VS</span>
              </div>
              <span className="text-4xl font-black font-display italic text-white">{team2.score}</span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <span className="text-gold/40 font-black text-2xl italic mb-1">VS</span>
              <span className="text-[10px] uppercase font-black tracking-widest text-gold/60">{time}</span>
            </div>
          )}
        </div>

        {/* Team 2 */}
        <div className="flex-1 flex flex-col items-center gap-3">
          <div className="w-16 h-16 bg-dark-bg rounded-full flex items-center justify-center border border-gold/10 group-hover:border-gold/30 transition-colors overflow-hidden p-2">
            <img src={team2.logo} alt={team2.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <span className="font-display font-black text-sm uppercase tracking-tight text-center text-white">{team2.name}</span>
        </div>
      </div>

      {/* Hover Action */}
      <div className="mt-6 pt-6 border-t border-gold/10 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="text-[10px] uppercase font-black tracking-[0.3em] text-gold hover:text-white transition-colors">
          View Match Details
        </button>
      </div>
    </div>
  );
}
