import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile.js';
import { useResumeModal } from '../../context/ResumeContext.jsx';
import Button from '../ui/Button.jsx';
import Tooltip from '../ui/Tooltip.jsx';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { openResume } = useResumeModal();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect loop
  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedText(profileData.roleTyping[0]);
      return;
    }

    const currentRole = profileData.roleTyping[roleIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2400);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % profileData.roleTyping.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, shouldReduceMotion]);

  const floatingChips = [
    { label: 'Java', color: 'border-amber-400/30 text-amber-300', pos: '-top-3 -left-4', delay: 0 },
    { label: 'Spring Boot', color: 'border-emerald-400/30 text-emerald-300', pos: '-top-4 -right-4', delay: 1 },
    { label: 'React', color: 'border-cyan-400/30 text-cyan-300', pos: '-bottom-3 -left-2', delay: 2 },
    { label: 'MySQL', color: 'border-blue-400/30 text-blue-300', pos: '-bottom-4 -right-2', delay: 1.5 }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent-soft rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Availability Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-soft border border-accent/25 text-accent text-xs font-mono mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-warm animate-pulse" />
              <span>{profileData.status}</span>
            </div>

            {/* Intro mono line */}
            <div className="font-mono text-text-muted text-sm md:text-base mb-2 tracking-wide">
              // Hi, I'm
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold text-text tracking-tight mb-3">
              {profileData.name}
            </h1>

            {/* Cycling Role with blinking cursor */}
            <div className="h-9 md:h-11 flex items-center font-mono text-xl sm:text-2xl md:text-3xl text-accent font-semibold mb-6">
              <span>{displayedText}</span>
              <span className="inline-block w-2.5 h-6 md:h-7 ml-1 bg-accent animate-pulse" />
            </div>

            {/* Intro paragraph */}
            <p className="max-w-xl text-text-muted text-base md:text-lg leading-relaxed mb-8">
              {profileData.intro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                href="#projects"
              >
                View Project
              </Button>

              {profileData.resumeAvailable && profileData.resumePath ? (
                <Button
                  variant="outline"
                  size="lg"
                  icon={FileText}
                  onClick={openResume}
                >
                  Download Resume
                </Button>
              ) : (
                <Tooltip text="Web resume without phone number is being finalized">
                  <Button
                    variant="outline"
                    size="lg"
                    icon={FileText}
                    onClick={() => alert("Resume is being prepared for web download. In the meantime, feel free to reach out via email!")}
                  >
                    Resume coming soon
                  </Button>
                </Tooltip>
              )}
            </div>

            {/* Social Icons & Command Palette hint */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 border-t border-border/80 w-full">
              <div className="flex items-center gap-3">
                <Tooltip text="GitHub Profile">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-border bg-bg-elevated text-text-muted hover:text-accent hover:border-accent/40 transition-all hover:-translate-y-0.5"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </Tooltip>

                <Tooltip text="LinkedIn Profile">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-border bg-bg-elevated text-text-muted hover:text-accent hover:border-accent/40 transition-all hover:-translate-y-0.5"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Tooltip>

                <Tooltip text="Send Email">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="p-2.5 rounded-xl border border-border bg-bg-elevated text-text-muted hover:text-accent hover:border-accent/40 transition-all hover:-translate-y-0.5"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* Photo & Floating Chips Column */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-3xl bg-accent-soft blur-2xl -z-10" />

              {/* Outer border wrapper */}
              <div className="w-full h-full rounded-3xl p-1 bg-gradient-to-b from-accent/40 via-border to-border shadow-2xl overflow-hidden relative group">
                <img
                  src={profileData.photo}
                  alt={profileData.name}
                  className="w-full h-full object-cover rounded-[22px] transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback avatar */}
                <div className="hidden w-full h-full rounded-[22px] bg-bg-elevated flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-accent-soft border border-accent/30 text-accent font-mono text-2xl font-bold flex items-center justify-center mb-3">
                    SV
                  </div>
                  <div className="font-heading font-semibold text-text">{profileData.name}</div>
                  <div className="text-xs font-mono text-accent mt-1">{profileData.title}</div>
                </div>
              </div>

              {/* 4 Floating Technology Chips */}
              {floatingChips.map((chip, idx) => {
                if (shouldReduceMotion) {
                  return (
                    <div
                      key={chip.label}
                      className={`absolute ${chip.pos} px-3 py-1.5 rounded-xl border bg-bg-elevated/95 backdrop-blur-md font-mono text-xs font-medium shadow-lg ${chip.color}`}
                    >
                      {chip.label}
                    </div>
                  );
                }

                return (
                  <motion.div
                    key={chip.label}
                    className={`absolute ${chip.pos} px-3 py-1.5 rounded-xl border bg-bg-elevated/95 backdrop-blur-md font-mono text-xs font-medium shadow-lg ${chip.color}`}
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: chip.delay,
                    }}
                  >
                    {chip.label}
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
