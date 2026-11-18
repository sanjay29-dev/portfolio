import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { projectsData } from '../../data/projects.js';
import { profileData } from '../../data/profile.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Card from '../ui/Card.jsx';
import Tag from '../ui/Tag.jsx';
import Button from '../ui/Button.jsx';

export default function FeaturedProjects() {
  const isSingleProject = projectsData.length === 1;
  const project = projectsData[0];

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <Reveal>
          <SectionHeading
            index="03"
            title="Featured Work"
            subtitle="Full-stack engineering built with Spring Boot, React, and MySQL. Back-end focused architecture with real-world business logic."
          />
        </Reveal>

        {isSingleProject ? (
          <div className="space-y-8">
            {/* Full-width Single Featured Card */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-bg-elevated hover:border-accent/40 transition-all duration-300 overflow-hidden shadow-2xl group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left: Project Screenshot Preview */}
                  <div className="lg:col-span-7 relative bg-bg-subtle overflow-hidden border-b lg:border-b-0 lg:border-r border-border flex items-center justify-center p-4 sm:p-6">
                    <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-border/80 shadow-lg relative">
                      <img
                        src={project.screenshots[0].src}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated/80 via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                        <span className="px-2.5 py-1 rounded-md bg-bg/90 border border-border text-accent backdrop-blur-sm">
                          Live Architecture
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-bg/90 border border-border text-text-muted backdrop-blur-sm">
                          {project.screenshots.length} Screenshots
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Project Details */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Meta badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <Tag variant="accent" size="xs">
                          FULL STACK
                        </Tag>
                        <Tag variant="success" size="xs">
                          BUILT SOLO
                        </Tag>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-accent mb-4">
                        {project.subtitle}
                      </p>

                      <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6">
                        {project.tagline}
                      </p>

                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <Tag key={tag} variant="default" size="xs">
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-border flex flex-wrap items-center gap-3">
                      <Button
                        variant="primary"
                        size="md"
                        icon={ArrowRight}
                        href={`/projects/${project.slug}`}
                      >
                        View Case Study
                      </Button>

                      <Button
                        variant="subtle"
                        size="md"
                        icon={Github}
                        href={project.github}
                        target="_blank"
                      >
                        GitHub Repo
                      </Button>
                    </div>

                  </div>

                </div>
              </div>
            </Reveal>

            {/* Quiet dashed 'More projects coming soon' card */}
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-dashed border-border/80 bg-bg/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl border border-border bg-bg-elevated flex items-center justify-center text-text-muted shrink-0">
                    <Layers className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-text text-base">
                      More projects coming soon
                    </h4>
                    <p className="text-xs text-text-muted mt-0.5">
                      Actively building new backend microservices and full-stack solutions.
                    </p>
                  </div>
                </div>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-bg-elevated text-text-muted hover:text-accent hover:border-accent/40 text-xs font-mono transition-colors shrink-0"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Follow on GitHub</span>
                </a>
              </div>
            </Reveal>
          </div>
        ) : (
          /* Multi-project grid fallback (automatically used when 2+ projects are present) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((p, idx) => (
              <Reveal key={p.slug} delay={idx * 0.1}>
                <Card hoverEffect className="flex flex-col justify-between h-full p-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-2">{p.title}</h3>
                    <p className="text-text-muted text-sm mb-4">{p.tagline}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <Button variant="primary" size="sm" href={`/projects/${p.slug}`}>
                      View Case Study
                    </Button>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
