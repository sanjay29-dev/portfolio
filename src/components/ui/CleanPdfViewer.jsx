import React, { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Renders page 1 of a PDF onto an HTML5 canvas via PDF.js so no browser
 * PDF toolbars, highlighters, or editing controls appear.
 */
export default function CleanPdfViewer({
  url,
  title,
  loadingLabel = 'Loading document preview...',
  fitMode = 'contain',
}) {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(false);

    const renderPdf = async () => {
      try {
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

        // Render at high-DPI supersampled scale for sharp text clarity
        const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
        const scale = fitMode === 'width' ? Math.min(4.0, Math.max(3.0, dpr * 2.0)) : Math.max(2.5, dpr * 1.5);
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport }).promise;
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
  }, [url, fitMode]);

  if (error) {
    return (
      <iframe
        src={`${url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        title={title}
        className={
          fitMode === 'width'
            ? 'w-full max-w-[860px] h-[80vh] rounded-xl border border-border bg-white shadow-inner'
            : 'w-full h-[68vh] rounded-xl border border-border bg-white shadow-inner'
        }
      />
    );
  }

  const isWidthFit = fitMode === 'width';

  return (
    <div
      className={
        isWidthFit
          ? 'relative w-full flex flex-col items-center p-2 sm:p-4'
          : 'relative w-full h-full flex flex-col items-center justify-center overflow-auto p-2'
      }
    >
      {loading && (
        <div className="flex flex-col items-center justify-center gap-3 p-12 text-accent">
          <Loader2 className="w-7 h-7 animate-spin text-accent" />
          <span className="text-xs font-mono text-text-muted">{loadingLabel}</span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={
          isWidthFit
            ? 'w-full max-w-[860px] h-auto rounded-xl shadow-2xl border border-border/80 bg-white'
            : 'max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl border border-border/80 bg-white'
        }
        style={{ display: loading ? 'none' : 'block' }}
      />
    </div>
  );
}
