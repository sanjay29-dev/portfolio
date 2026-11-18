import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col items-center justify-center p-6 text-center">
      <div className="text-accent font-mono text-sm mb-2">// 404 error</div>
      <h1 className="text-5xl font-heading font-bold mb-4">404 — Route Not Found</h1>
      <p className="text-text-muted mb-6">The page or endpoint you are looking for does not exist.</p>
      <Link to="/" className="px-4 py-2 rounded-lg bg-accent text-bg font-medium hover:bg-cyan-300 transition-colors">
        Return Home
      </Link>
    </div>
  );
}
