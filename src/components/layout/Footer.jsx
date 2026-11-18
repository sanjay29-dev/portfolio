import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../../data/profile.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-bg/50 backdrop-blur-sm py-12 text-sm text-text-muted">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Status */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-accent">SV</span>
            <span className="text-border">|</span>
            <span className="font-heading font-medium text-text">Sanjay V</span>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-warm text-[11px] font-mono ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-warm animate-pulse"></span>
              Open to work
            </div>
          </div>
          <p className="text-xs text-text-muted">
            Designed & built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>

        {/* Center: Social links (No Phone!) */}
        <div className="flex items-center gap-4">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-border bg-bg-elevated text-text-muted hover:text-accent hover:border-accent/40 transition-colors"
            aria-label="GitHub profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-border bg-bg-elevated text-text-muted hover:text-accent hover:border-accent/40 transition-colors"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="p-2 rounded-lg border border-border bg-bg-elevated text-text-muted hover:text-accent hover:border-accent/40 transition-colors"
            aria-label="Send email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-bg-elevated text-text-muted hover:text-text hover:border-accent/40 text-xs font-mono transition-colors"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-accent" />
        </button>
      </div>
    </footer>
  );
}
