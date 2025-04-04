import React from 'react';
import { Button } from "@/components/ui/button";

export const JoinWaitlistSection = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">Join the Experience</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Be among the first to experience Life Simulator. Sign up for early access and receive exclusive in-game
          bonuses.
        </p>
        <Button
          size="lg"
          className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
        >
          Join Early Access
        </Button>
      </div>
    </section>
  );
}; 