import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, FileText, ShieldCheck, Loader2 } from 'lucide-react';
import Tag from './Tag.jsx';

function CleanPdfViewer({ url, title }) {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(false);

    const renderPdf = async () => {
      try {
        // Load PDF.js from cdnjs if not already present
        if (!window.pdfjsLib) {
          await new Promise((resolve, reject) => {
            const existingScript = document.querySelector('script[data-pdfjs]');
            if (existingScript) {
              existingScript.addEventListener('load', resolve);
              existingScript.addEventListener('error', reject);
              return;
            }
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
            script.setAttribute('data-pdfjs', 'true');
            script.onload = () => {
              window.pdfjsLib.GlobalWorkerOptions.workerSrc =
                'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
              resolve();
            };
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        const loadingTask = window.pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        if (!isMounted || !canvasRef.current) return;

        // Render at 2x scale for sharp high-DPI rendering
        const scale = 2.0;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
        if (isMounted) setLoading(false);
      } catch (err) {
        console.warn('PDF.js rendering fallback to clean iframe', err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    renderPdf();

    return () => {
      isMounted = false;
    };
  }, [url]);

  if (error) {
    // Fallback: iframe with toolbar and navpanes explicitly disabled
    return (
      <iframe
        src={`${url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        title={title}
        className="w-full h-[68vh] rounded-xl border border-border bg-white shadow-inner"
      />
    );
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-auto p-2">
      {loading && (
        <div className="flex flex-col items-center justify-center gap-3 p-12 text-accent">
          <Loader2 className="w-7 h-7 animate-spin text-accent" />
          <span className="text-xs font-mono text-text-muted">Loading certificate preview...</span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="max-h-[70vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl border border-border/80 bg-white"
        style={{ display: loading ? 'none' : 'block' }}
      />
    </div>
  );
}

export default function CertificateModal({ certificate, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const isPdf = certificate.fileType === 'pdf' || (certificate.fileUrl && certificate.fileUrl.toLowerCase().endsWith('.pdf'));
  const isImage = certificate.fileType === 'image' || (certificate.fileUrl && /\.(jpg|jpeg|png|webp|svg)$/i.test(certificate.fileUrl));
  const hasFile = Boolean(certificate.fileUrl);

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
          className="relative w-full max-w-4xl max-h-[92vh] bg-bg-elevated border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-border bg-bg-subtle flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Tag variant="accent" size="xs">
                  {certificate.issuer}
                </Tag>
                <Tag variant="default" size="xs">
                  {certificate.year}
                </Tag>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-success">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
                {certificate.credentialId && (
                  <span className="text-[11px] font-mono text-text-muted">
                    ID: {certificate.credentialId}
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-text truncate">
                {certificate.title}
              </h3>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              {certificate.link && (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/30 text-xs font-mono text-accent hover:bg-accent hover:text-bg transition-colors"
                  title="Verify on Issuer Website"
                >
                  <span>Verify Online</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {hasFile && (
                <a
                  href={certificate.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-subtle border border-border text-xs font-mono text-text hover:text-accent hover:border-accent/40 transition-colors"
                  title="Open raw document in new window"
                >
                  <span>New Window</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {hasFile && (
                <a
                  href={certificate.fileUrl}
                  download
                  className="p-2 rounded-lg bg-bg-subtle border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-colors"
                  title="Download Certificate File"
                >
                  <Download className="w-4 h-4" />
                </a>
              )}

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-bg-subtle border border-border text-text-muted hover:text-text hover:bg-border/40 transition-colors cursor-pointer"
                aria-label="Close dialog"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content / Document Preview (Clean Viewer with NO browser PDF toolbars) */}
          <div className="p-3 sm:p-5 flex-1 overflow-auto flex flex-col items-center justify-center min-h-[50vh] max-h-[75vh] bg-bg">
            {hasFile ? (
              isPdf ? (
                <CleanPdfViewer url={certificate.fileUrl} title={certificate.title} />
              ) : isImage ? (
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img
                    src={certificate.fileUrl}
                    alt={certificate.title}
                    className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl border border-border/80"
                  />
                </div>
              ) : (
                <CleanPdfViewer url={certificate.fileUrl} title={certificate.title} />
              )
            ) : (
              <div className="text-center p-8 max-w-md">
                <div className="w-16 h-16 rounded-2xl bg-accent-soft border border-accent/20 text-accent flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-text text-lg mb-2">
                  Certificate Document Pending
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  The document for <strong className="text-text">{certificate.title}</strong> ({certificate.issuer}) will be displayed right here as soon as the file is provided.
                </p>
                <div className="p-3 rounded-lg bg-bg-subtle border border-border/80 text-[11px] font-mono text-accent">
                  Expected path: /media/certificates/{certificate.id || 'certificate'}.pdf
                </div>
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="px-5 py-3 border-t border-border bg-bg-subtle flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-text-muted">
            <span className="truncate max-w-md">{certificate.description}</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-bg-elevated border border-border text-text hover:text-accent transition-colors self-end sm:self-auto cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
