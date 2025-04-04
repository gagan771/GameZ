import React from 'react';
import { GameLevelCard } from "@/components/game-level-card";
import { gameLevels } from '@/data/gameData';

export const GameLevelsSection = () => {
  return (
    <section className="py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">Life Stages</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the complete journey of human life through five distinct stages, each with unique challenges
            and rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameLevels.map((level) => (
            <GameLevelCard key={level.title} {...level} />
          ))}
        </div>
      </div>
    </section>
  );
}; 