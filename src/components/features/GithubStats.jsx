import React, { useState, useEffect } from 'react';
import { Github, GitFork, Star, Calendar, ExternalLink, Code } from 'lucide-react';
import { fetchGithubStats } from '../../lib/github.js';
import Card from '../ui/Card.jsx';
import Tag from '../ui/Tag.jsx';

export default function GithubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchGithubStats('sanjay29-dev').then((data) => {
      if (mounted) {
        setStats(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!stats) return null;

  return (
    <div className="p-4 sm:p-5 rounded-xl border border-border bg-bg-elevated flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left: Repos & Followers Count */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center shrink-0">
          <Github className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-text text-sm sm:text-base">
              sanjay29-dev
            </span>
            <Tag variant="accent" size="xs">
              LIVE METRICS
            </Tag>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-text-muted mt-0.5">
            <span>{stats.public_repos} Repositories</span>
            <span>•</span>
            <span>{stats.followers} Followers</span>
          </div>
        </div>
      </div>

      {/* Right: Featured Repo & Activity Link */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
        <div className="text-right hidden md:block">
          <div className="text-[11px] font-mono text-text-muted">LATEST WORK</div>
          <div className="text-xs font-mono text-accent">
            {stats.featuredRepo.name} ({stats.featuredRepo.language})
          </div>
        </div>

        <a
          href="https://github.com/sanjay29-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-bg-subtle text-text hover:text-accent hover:border-accent/40 text-xs font-mono transition-colors"
        >
          <span>View GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
