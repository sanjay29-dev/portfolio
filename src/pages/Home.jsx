import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageTransition from '../components/layout/PageTransition.jsx';
import Hero from '../components/sections/Hero.jsx';
import Snapshot from '../components/sections/Snapshot.jsx';
import About from '../components/sections/About.jsx';
import Skills from '../components/sections/Skills.jsx';
import FeaturedProjects from '../components/sections/FeaturedProjects.jsx';
import Timeline from '../components/sections/Timeline.jsx';
import Education from '../components/sections/Education.jsx';
import Certifications from '../components/sections/Certifications.jsx';
import Contact from '../components/sections/Contact.jsx';

export default function Home() {
  const location = useLocation();

  // Smoothly scroll to section when navigating with hash (e.g., from case study page)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    }
  }, [location]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-bg text-text bg-grid-pattern selection:bg-accent/20 selection:text-accent flex flex-col">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Recruiter Snapshot Strip */}
          <Snapshot />

          {/* 01 — About Section */}
          <About />

          {/* 02 — Technical Skills & Interactive Ecosystem */}
          <Skills />

          {/* 03 — Featured Projects (Hireloop & PharmaCare) */}
          <FeaturedProjects />

          {/* 04 — Experience & Training */}
          <Timeline />

          {/* 05 — Education */}
          <Education />

          {/* 06 — Certifications Section */}
          <Certifications />

          {/* 07 — Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
}
