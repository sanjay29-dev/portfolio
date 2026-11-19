import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Layers, 
  Award, 
  Briefcase, 
  User, 
  X,
  ExternalLink 
} from 'lucide-react';
import { profileData } from '../../data/profile.js';
import { projectsData } from '../../data/projects.js';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const commandItems = [
    // Navigation
    { id: 'nav-about', label: 'Go to About', category: 'Navigation', icon: User, action: () => { window.location.hash = '#about'; onClose(); } },
    { id: 'nav-skills', label: 'Go to Skills & Ecosystem', category: 'Navigation', icon: Layers, action: () => { window.location.hash = '#skills'; onClose(); } },
    { id: 'nav-projects', label: 'Go to Featured Projects', category: 'Navigation', icon: Layers, action: () => { window.location.hash = '#projects'; onClose(); } },
    { id: 'nav-experience', label: 'Go to Experience Timeline', category: 'Navigation', icon: Briefcase, action: () => { window.location.hash = '#experience'; onClose(); } },
    { id: 'nav-certs', label: 'Go to Certifications', category: 'Navigation', icon: Award, action: () => { window.location.hash = '#certifications'; onClose(); } },
    { id: 'nav-contact', label: 'Go to Contact', category: 'Navigation', icon: Mail, action: () => { window.location.hash = '#contact'; onClose(); } },

    // Projects
    ...projectsData.map((p) => ({
      id: `proj-${p.slug}`,
      label: `Project: ${p.title} — Case Study`,
      category: 'Projects',
      icon: Layers,
      action: () => { navigate(`/projects/${p.slug}`); onClose(); }
    })),

    // Actions
    { id: 'act-email', label: 'Copy Email Address', category: 'Actions', icon: Mail, action: () => { navigator.clipboard.writeText(profileData.email); alert('Email copied: ' + profileData.email); onClose(); } },
    { id: 'act-github', label: 'Open GitHub Profile', category: 'Actions', icon: Github, action: () => { window.open(profileData.github, '_blank'); onClose(); } },
    { id: 'act-linkedin', label: 'Open LinkedIn Profile', category: 'Actions', icon: Linkedin, action: () => { window.open(profileData.linkedin, '_blank'); onClose(); } },
  ];

  const filteredItems = commandItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-28 p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: -10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className="w-full max-w-xl rounded-2xl border border-border bg-bg-elevated shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-border bg-bg-subtle/60">
            <Search className="w-5 h-5 text-accent mr-3 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search sections, projects, or actions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-text placeholder:text-text-muted/50 focus:outline-none font-body text-sm sm:text-base"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-text-muted hover:text-text hover:bg-bg-subtle transition-colors ml-2"
              aria-label="Close search"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-text-muted text-sm font-mono">
                No matching results found for "{query}".
              </div>
            ) : (
              filteredItems.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = selectedIndex === idx;

                return (
                  <div
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-accent/15 text-accent font-medium'
                        : 'text-text hover:bg-bg-subtle'
                    }`}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-accent text-bg' : 'bg-bg-subtle text-text-muted border border-border'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm truncate font-body">
                        {item.label}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase text-text-muted ml-2 shrink-0">
                      {item.category}
                    </span>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Keyboard Navigation Legend */}
          <div className="px-4 py-2.5 border-t border-border bg-bg-subtle/40 flex items-center justify-between text-[11px] font-mono text-text-muted">
            <div className="flex items-center gap-3">
              <span>↑↓ to navigate</span>
              <span>↵ to select</span>
              <span>esc to close</span>
            </div>
            <span className="text-accent">Sanjay V Control Room</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
