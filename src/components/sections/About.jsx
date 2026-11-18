import React from 'react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import { profileData } from '../../data/profile.js';

export default function About() {
  const { codeCard } = profileData.about;

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <Reveal>
          <SectionHeading
            index="01"
            title="About Me"
            subtitle="Bridging reliable back-end architectural patterns with clean, responsive user interfaces."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-text-muted leading-relaxed">
            <Reveal delay={0.1}>
              <p className="text-text">
                {profileData.about.paragraphs[0]}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                {profileData.about.paragraphs[1]}
              </p>
            </Reveal>

            {/* Quick architectural focus points */}
            <Reveal delay={0.3}>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
                <div className="p-3.5 rounded-xl border border-border bg-bg-elevated/60">
                  <div className="text-accent font-semibold mb-1">// Back-End Focus</div>
                  <div className="text-text-muted text-xs leading-normal">
                    RESTful API contracts, Spring Data JPA repositories, Hibernate ORM, and normalized MySQL schemas.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-border bg-bg-elevated/60">
                  <div className="text-accent font-semibold mb-1">// Front-End Integration</div>
                  <div className="text-text-muted text-xs leading-normal">
                    Modular React component hierarchies, state management, and seamless Axios client-server workflows.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Code Editor profile.json */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-bg-elevated shadow-xl overflow-hidden">
                {/* Editor Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-bg-subtle border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-text-muted tracking-wide">profile.json</span>
                  <div className="w-10" />
                </div>

                {/* Editor Code Body */}
                <div className="p-6 font-mono text-xs sm:text-sm text-text-muted leading-relaxed overflow-x-auto select-text">
                  <div className="text-accent">&#123;</div>
                  
                  <div className="pl-4">
                    <span className="text-cyan-300">"name"</span>: <span className="text-emerald-300">"{codeCard.name}"</span>,
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-cyan-300">"role"</span>: <span className="text-emerald-300">"{codeCard.role}"</span>,
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-cyan-300">"education"</span>: <span className="text-emerald-300">"{codeCard.education}"</span>,
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-cyan-300">"focus"</span>: <span className="text-warm">[</span>
                    {codeCard.focus.map((item, idx) => (
                      <React.Fragment key={item}>
                        <span className="text-emerald-300">"{item}"</span>
                        {idx < codeCard.focus.length - 1 && <span className="text-text-muted">, </span>}
                      </React.Fragment>
                    ))}
                    <span className="text-warm">]</span>,
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-cyan-300">"location"</span>: <span className="text-emerald-300">"{codeCard.location}"</span>,
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-cyan-300">"status"</span>: <span className="text-emerald-300">"{codeCard.status}"</span>
                  </div>

                  <div className="text-accent">&#125;</div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
