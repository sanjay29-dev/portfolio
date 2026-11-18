import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between z-10 w-full" onClick={(e) => e.stopPropagation()}>
          <div className="text-xs font-mono text-text-muted">
            <span className="text-accent">{currentIndex + 1}</span> / {images.length}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-bg-elevated/80 border border-border text-text-muted hover:text-text transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Image & Nav Arrows */}
        <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6" onClick={(e) => e.stopPropagation()}>
          {/* Prev Button */}
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-bg-elevated/90 border border-border text-text hover:text-accent hover:border-accent/40 transition-all shadow-xl"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[75vh] overflow-hidden rounded-xl border border-border shadow-2xl flex items-center justify-center">
            <img
              src={currentImage.src}
              alt={currentImage.caption || 'Project screenshot'}
              className="max-w-full max-h-[75vh] object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-bg-elevated/90 border border-border text-text hover:text-accent hover:border-accent/40 transition-all shadow-xl"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Caption */}
        <div className="z-10 text-center max-w-2xl mx-auto py-2" onClick={(e) => e.stopPropagation()}>
          <p className="text-sm font-body text-text font-medium">
            {currentImage.caption}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
