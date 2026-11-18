import React from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageTransition from '../components/layout/PageTransition.jsx';
import Hero from '../components/sections/Hero.jsx';
import Snapshot from '../components/sections/Snapshot.jsx';
import About from '../components/sections/About.jsx';
import Timeline from '../components/sections/Timeline.jsx';
import Certifications from '../components/sections/Certifications.jsx';
import Contact from '../components/sections/Contact.jsx';

export default function Home() {
  const handleOpenCommandPalette = () => {
    // In Phase 4, this triggers the custom Command Palette modal
    const event = new CustomEvent('open-command-palette');
    window.dispatchEvent(event);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-bg text-text bg-grid-pattern selection:bg-accent/20 selection:text-accent flex flex-col">
        {/* Navigation Bar */}
        <Navbar onOpenCommandPalette={handleOpenCommandPalette} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero onOpenCommandPalette={handleOpenCommandPalette} />

          {/* Recruiter Snapshot Strip */}
          <Snapshot />

          {/* About Section */}
          <About />

          {/* Experience & Education Timeline */}
          <Timeline />

          {/* Certifications Section */}
          <Certifications />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
}
