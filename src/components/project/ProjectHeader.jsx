import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, User, Code2 } from 'lucide-react';
import Tag from '../ui/Tag.jsx';
import Button from '../ui/Button.jsx';

export default function ProjectHeader({ project }) {
  return (
    <div className="pt-28 pb-12 border-b border-border">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to all sections</span>
        </Link>

        {/* Title & Metadata */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <Tag variant="accent" size="sm">
              CASE STUDY
            </Tag>
            <Tag variant="success" size="sm">
              BUILT SOLO
            </Tag>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-text tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl font-mono text-accent">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-text-muted leading-relaxed pt-2">
            {project.pitch}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <Tag key={tag} variant="default" size="sm">
                {tag}
              </Tag>
            ))}
          </div>

          {/* Action links */}
          <div className="flex flex-wrap items-center gap-4 pt-6">
            <Button
              variant="primary"
              size="md"
              icon={Github}
              href={project.github}
              target="_blank"
            >
              GitHub Repository
            </Button>

            {project.liveDemo && (
              <Button
                variant="outline"
                size="md"
                icon={ExternalLink}
                href={project.liveDemo}
                target="_blank"
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>

        {/* 4-Tile At a Glance strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-border/80">
          <div className="p-4 rounded-xl border border-border bg-bg-elevated">
            <div className="text-[11px] font-mono text-accent uppercase tracking-wider mb-1">
              THE PROBLEM
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-bg-elevated">
            <div className="text-[11px] font-mono text-accent uppercase tracking-wider mb-1">
              THE SOLUTION
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-bg-elevated">
            <div className="text-[11px] font-mono text-accent uppercase tracking-wider mb-1">
              MY ROLE
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              {project.role}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-bg-elevated">
            <div className="text-[11px] font-mono text-accent uppercase tracking-wider mb-1">
              TIMELINE
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              {project.duration}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
