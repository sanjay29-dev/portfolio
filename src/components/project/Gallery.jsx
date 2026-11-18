import React, { useState } from 'react';
import { Maximize2, Image as ImageIcon } from 'lucide-react';
import Lightbox from './Lightbox.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function Gallery({ screenshots }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (idx) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-16 md:py-24 border-b border-border">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <Reveal>
          <SectionHeading
            index="01"
            title="Application Screenshots"
            subtitle="Verified screens from the active PharmaCare interface, showcasing real inventory tables, billing flows, and dashboards."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((item, idx) => (
            <Reveal key={item.src} delay={idx * 0.05}>
              <div
                onClick={() => handleOpen(idx)}
                className="group relative rounded-xl border border-border bg-bg-elevated overflow-hidden cursor-pointer hover:border-accent/50 transition-all duration-300 shadow-md hover:-translate-y-1"
              >
                {/* Image preview */}
                <div className="aspect-[16/10] overflow-hidden bg-bg-subtle relative">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-accent text-bg shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4 border-t border-border/80">
                  <p className="text-xs text-text-muted group-hover:text-text transition-colors line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={screenshots}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
