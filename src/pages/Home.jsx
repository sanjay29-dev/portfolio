import React from 'react';
import { profileData } from '../data/profile.js';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text bg-grid-pattern flex flex-col items-center justify-center p-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6">
        <span className="w-2 h-2 rounded-full bg-warm animate-pulse"></span>
        {profileData.status}
      </div>
      <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 tracking-tight">
        {profileData.name}
      </h1>
      <p className="text-lg md:text-xl text-accent font-mono mb-6">
        {profileData.title}
      </p>
      <p className="max-w-xl text-text-muted text-sm md:text-base mb-8 leading-relaxed">
        {profileData.intro}
      </p>
      <div className="p-4 rounded-xl border border-border bg-bg-elevated text-xs font-mono text-left max-w-md w-full">
        <div className="text-text-muted mb-2">// Phase 0 Verification</div>
        <div className="text-success font-semibold">✓ Project scaffolding complete</div>
        <div className="text-text-muted mt-1">Vite + React + Tailwind + Fonts initialized.</div>
      </div>
    </div>
  );
}
