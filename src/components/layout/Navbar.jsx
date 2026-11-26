import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, FileText } from 'lucide-react';
import { profileData } from '../../data/profile.js';
import { useScrollSpy } from '../../hooks/useScrollSpy.js';
import { useResumeModal } from '../../context/ResumeContext.jsx';
import Button from '../ui/Button.jsx';
import MobileMenu from './MobileMenu.jsx';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openResume } = useResumeModal();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const sectionIds = ['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Accessible Skip Link */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-bg font-mono font-bold text-xs rounded-xl shadow-2xl focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-bg/85 backdrop-blur-md border-b border-border py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Sanjay V - Home"
          >
            <div className="w-9 h-9 rounded-xl border border-accent/30 bg-accent/10 flex items-center justify-center font-mono font-bold text-accent group-hover:border-accent group-hover:bg-accent/20 transition-all duration-200">
              SV
            </div>
            <span className="font-heading font-semibold text-text hidden sm:inline-block tracking-tight text-sm">
              Sanjay V
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-bg-elevated/70 border border-border rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = isHome && activeSection === id;
              const targetHref = isHome ? link.href : `/${link.href}`;

              return (
                <a
                  key={link.name}
                  href={targetHref}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-150 ${
                    isActive
                      ? 'bg-accent/15 text-accent font-semibold'
                      : 'text-text-muted hover:text-text hover:bg-bg-subtle'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Resume Button */}
            {profileData.resumeAvailable && profileData.resumePath && (
              <Button
                variant="outline"
                size="sm"
                icon={FileText}
                onClick={openResume}
                className="hidden sm:inline-flex"
              >
                Resume
              </Button>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg border border-border bg-bg-elevated text-text-muted hover:text-text hover:bg-bg-subtle transition-colors focus:outline-none focus:ring-1 focus:ring-accent"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
        isHome={isHome}
      />
    </>
  );
}
