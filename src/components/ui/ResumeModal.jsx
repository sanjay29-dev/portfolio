import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import { profileData } from '../../data/profile.js';
import CleanPdfViewer from './CleanPdfViewer.jsx';

/**
 * Clean on-page modal displaying the resume PDF without browser editing toolbars,
 * paired with a direct Download button.
 */
export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !profileData.resumePath) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-5xl h-[94vh] max-h-[94vh] bg-bg-elevated border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-4 py-3.5 sm:px-5 sm:py-4 border-b border-border bg-bg-subtle flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-heading font-bold text-text truncate">
                {profileData.name} — Resume
              </h3>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={profileData.resumePath}
                download="Sanjay_V_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent text-bg font-mono font-semibold text-xs hover:bg-cyan-300 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg bg-bg-elevated border border-border text-text-muted hover:text-text hover:bg-border/40 transition-colors cursor-pointer"
                aria-label="Close resume preview"
                title="Close (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Clean Resume Preview (no browser editing tools) */}
          <div className="p-3 sm:p-5 flex-1 overflow-y-auto flex flex-col items-center bg-bg">
            <CleanPdfViewer
              url={profileData.resumePath}
              title={`${profileData.name} Resume`}
              loadingLabel="Loading resume preview..."
              fitMode="width"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
