import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageTransition from '../components/layout/PageTransition.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';
import Tag from '../components/ui/Tag.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Tooltip from '../components/ui/Tooltip.jsx';
import { 
  Terminal, 
  Code2, 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Database,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { profileData } from '../data/profile.js';

export default function Home() {
  const [demoState, setDemoState] = useState(false);

  const colors = [
    { name: '--bg', hex: '#0B0D12', desc: 'Page background' },
    { name: '--bg-elevated', hex: '#11141B', desc: 'Cards & panels' },
    { name: '--bg-subtle', hex: '#171B24', desc: 'Inputs & hovers' },
    { name: '--border', hex: 'rgba(255,255,255,0.08)', desc: '1px structural borders' },
    { name: '--text', hex: '#E6E9EF', desc: 'Primary typography' },
    { name: '--text-muted', hex: '#9AA3B2', desc: 'Secondary typography' },
    { name: '--accent', hex: '#22D3EE', desc: 'Cyan accent highlight' },
    { name: '--warm', hex: '#F5B544', desc: 'Amber open-to-work' },
    { name: '--success', hex: '#34D399', desc: 'Emerald confirmation' }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-bg text-text bg-grid-pattern selection:bg-accent/20 selection:text-accent flex flex-col">
        {/* Sticky Navigation */}
        <Navbar onOpenCommandPalette={() => alert('Command Palette trigger (Phase 4 integration)')} />

        {/* Main Content Showcase */}
        <main className="flex-1 pt-28 pb-20">
          <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12 space-y-20">

            {/* Header intro */}
            <Reveal>
              <div className="border-b border-border pb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-4">
                  <span className="w-2 h-2 rounded-full bg-warm animate-pulse"></span>
                  Phase 1 — Design System & Style Guide
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight">
                  The Engineer's Control Room
                </h1>
                <p className="mt-4 text-text-muted text-base md:text-lg max-w-2xl leading-relaxed">
                  Design tokens, typography scale, responsive cards, micro-interactions, and navigation components for Sanjay V's personal developer portfolio.
                </p>
              </div>
            </Reveal>

            {/* 1. Color Palette Tokens */}
            <section id="colors">
              <Reveal>
                <SectionHeading
                  index="01"
                  title="Color System & Tokens"
                  subtitle="Defined in CSS variables and Tailwind extensions. Contrast-tested for WCAG AA compliance."
                />
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {colors.map((c, i) => (
                  <Reveal key={c.name} delay={i * 0.05}>
                    <Card hoverEffect className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl border border-border shadow-inner shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div>
                        <div className="font-mono font-semibold text-sm text-text">{c.name}</div>
                        <div className="font-mono text-xs text-accent">{c.hex}</div>
                        <div className="text-xs text-text-muted mt-0.5">{c.desc}</div>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 2. Typography Scale */}
            <section id="typography">
              <Reveal>
                <SectionHeading
                  index="02"
                  title="Typography Hierarchy"
                  subtitle="Space Grotesk for bold headings, Inter for body reading, and JetBrains Mono for code and system telemetry."
                />
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={0.1}>
                  <Card className="space-y-4">
                    <div className="text-xs font-mono text-accent">// Space Grotesk (Headings)</div>
                    <div className="text-4xl md:text-5xl font-heading font-bold text-text">
                      Sanjay V — Java Full Stack Developer
                    </div>
                    <div className="text-2xl md:text-3xl font-heading font-semibold text-text">
                      PharmaCare — Architecture & Schema Explorer
                    </div>
                  </Card>
                </Reveal>

                <Reveal delay={0.2}>
                  <Card className="space-y-4">
                    <div className="text-xs font-mono text-accent">// Inter (Body & Prose)</div>
                    <p className="text-text leading-relaxed text-base md:text-lg max-w-3xl">
                      {profileData.about.paragraphs[0]}
                    </p>
                    <p className="text-text-muted leading-relaxed text-sm">
                      Secondary body copy: Clear contrast, high legibility, 1.6 line height for effortless readability across desktop and mobile screens.
                    </p>
                  </Card>
                </Reveal>

                <Reveal delay={0.3}>
                  <Card className="space-y-3">
                    <div className="text-xs font-mono text-accent">// JetBrains Mono (Telemetry & Labels)</div>
                    <div className="p-4 rounded-xl bg-bg-subtle border border-border font-mono text-xs sm:text-sm text-text-muted space-y-1">
                      <div className="text-accent">sanjay@portfolio:~$ curl -X GET /api/v1/medicines</div>
                      <div className="text-success">&#123; status: 200, latency: "14ms", service: "Spring Boot" &#125;</div>
                    </div>
                  </Card>
                </Reveal>
              </div>
            </section>

            {/* 3. Buttons & Interactive States */}
            <section id="buttons">
              <Reveal>
                <SectionHeading
                  index="03"
                  title="Button Variants & States"
                  subtitle="Micro-animated hover and tap states with Framer Motion, accessible focus rings."
                />
              </Reveal>

              <Reveal delay={0.1}>
                <Card className="space-y-6">
                  <div>
                    <div className="text-xs font-mono text-text-muted mb-3">// Variant styles</div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button variant="primary" icon={ArrowRight}>
                        View Project
                      </Button>
                      <Button variant="outline" icon={FileText}>
                        Download Resume
                      </Button>
                      <Button variant="subtle" icon={Terminal}>
                        Open Terminal
                      </Button>
                      <Button variant="ghost">
                        Ghost Action
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="text-xs font-mono text-text-muted mb-3">// Size options</div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button size="sm" variant="outline">Small Button</Button>
                      <Button size="md" variant="primary">Medium Button</Button>
                      <Button size="lg" variant="primary">Large Button</Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center gap-3">
                    <Tooltip text="Click to test interactive state">
                      <Button
                        variant={demoState ? "primary" : "subtle"}
                        onClick={() => setDemoState(!demoState)}
                        icon={Sparkles}
                      >
                        {demoState ? "State: Active" : "Click to toggle state"}
                      </Button>
                    </Tooltip>
                    {demoState && (
                      <span className="text-xs font-mono text-success flex items-center gap-1.5 animate-in fade-in">
                        <CheckCircle2 className="w-4 h-4" /> State toggled successfully!
                      </span>
                    )}
                  </div>
                </Card>
              </Reveal>
            </section>

            {/* 4. Tags, Badges & Chips */}
            <section id="tags">
              <Reveal>
                <SectionHeading
                  index="04"
                  title="Tags, Badges & Status Chips"
                  subtitle="Designed for tech stacks, status telemetry, and interactive skill nodes."
                />
              </Reveal>

              <Reveal delay={0.1}>
                <Card className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Tag variant="accent">Spring Boot</Tag>
                    <Tag variant="accent">Java 17</Tag>
                    <Tag variant="accent">React.js</Tag>
                    <Tag variant="accent">MySQL</Tag>
                    <Tag variant="default">Hibernate ORM</Tag>
                    <Tag variant="default">REST APIs</Tag>
                    <Tag variant="warm">
                      <span className="w-1.5 h-1.5 rounded-full bg-warm animate-pulse"></span>
                      Open to Work
                    </Tag>
                    <Tag variant="success">✓ Built Solo</Tag>
                    <Tag variant="outline">AWS EC2</Tag>
                  </div>
                </Card>
              </Reveal>
            </section>

            {/* 5. Cards & Code Previews */}
            <section id="cards">
              <Reveal>
                <SectionHeading
                  index="05"
                  title="Card Structures & Code Windows"
                  subtitle="16px border radius, subtle hover elevation, and syntax-styled code cards."
                />
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Standard Card */}
                <Reveal delay={0.1}>
                  <Card hoverEffect className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <Tag variant="accent" size="xs">Back-End</Tag>
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-2">Service Layer Logic</h3>
                      <p className="text-text-muted text-sm leading-relaxed mb-4">
                        Applies FEFO (First Expiry, First Out) rules to allocate batches automatically during sale requests.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 pt-4 border-t border-border font-mono text-xs text-accent">
                      <span>Explore implementation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Card>
                </Reveal>

                {/* Profile JSON Code Card */}
                <Reveal delay={0.2}>
                  <div className="rounded-2xl border border-border bg-bg-elevated overflow-hidden shadow-lg h-full">
                    {/* Header bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-bg-subtle border-b border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <span className="text-xs font-mono text-text-muted">profile.json</span>
                      <div className="w-10"></div>
                    </div>
                    {/* Syntax body */}
                    <div className="p-5 font-mono text-xs sm:text-sm text-text-muted leading-relaxed overflow-x-auto">
                      <div><span className="text-accent">&#123;</span></div>
                      <div className="pl-4">
                        <span className="text-cyan-300">"name"</span>: <span className="text-emerald-300">"{profileData.name}"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">"role"</span>: <span className="text-emerald-300">"{profileData.title}"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">"education"</span>: <span className="text-emerald-300">"B.Tech IT, 2022-2026"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">"focus"</span>: <span className="text-warm">[</span>
                        <span className="text-emerald-300">"Spring Boot"</span>, <span className="text-emerald-300">"REST APIs"</span>, <span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"MySQL"</span>
                        <span className="text-warm">]</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">"location"</span>: <span className="text-emerald-300">"Chennai, India"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">"status"</span>: <span className="text-emerald-300">"open_to_work"</span>
                      </div>
                      <div><span className="text-accent">&#125;</span></div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>

          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
}
