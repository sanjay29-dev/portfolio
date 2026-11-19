import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../../data/profile.js';
import Button from '../ui/Button.jsx';

export default function MobileMenu({ isOpen, onClose, navLinks, activeSection, isHome = true }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-xl flex flex-col p-6 md:hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <Link to="/" onClick={onClose} className="flex items-center gap-2">
              <span className="font-mono text-accent font-bold text-lg">SV</span>
              <span className="text-xs text-text-muted font-mono">// navigation</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-text-muted hover:text-text hover:bg-bg-subtle transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col justify-center space-y-6">
            {navLinks.map((link, idx) => {
              const isActive = isHome && activeSection === link.href.replace('#', '');
              const targetHref = isHome ? link.href : `/${link.href}`;

              return (
                <a
                  key={link.name}
                  href={targetHref}
                  onClick={onClose}
                  className={`text-2xl font-heading font-semibold transition-colors flex items-center justify-between ${
                    isActive ? 'text-accent' : 'text-text-muted hover:text-text'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-text-muted">0{idx + 1}</span>
                </a>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-border space-y-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full justify-center"
              icon={FileText}
              href={profileData.resumePath}
              download
            >
              Download Resume
            </Button>

            <div className="flex items-center justify-around pt-2 text-text-muted">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
