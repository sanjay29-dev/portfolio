import React from 'react';
import { Layers, Box, Award, GraduationCap } from 'lucide-react';
import { profileData } from '../../data/profile.js';
import Card from '../ui/Card.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function Snapshot() {
  const icons = [Layers, Box, Award, GraduationCap];

  return (
    <section className="py-8 border-y border-border/80 bg-bg-elevated/40 backdrop-blur-sm">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profileData.snapshot.map((tile, idx) => {
            const Icon = icons[idx] || Box;
            return (
              <Reveal key={tile.label} delay={idx * 0.08}>
                <div className="flex items-start gap-3.5 p-4 rounded-xl border border-border/60 bg-bg-elevated hover:border-accent/30 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted mb-1">
                      {tile.label}
                    </div>
                    <div className="text-sm font-medium text-text font-heading leading-snug">
                      {tile.value}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
