import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import NotFound from './pages/NotFound.jsx';
import CursorGlow from './components/features/CursorGlow.jsx';
import CommandPalette from './components/features/CommandPalette.jsx';
import { useHotkey } from './hooks/useHotkey.js';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global Ctrl+K / Cmd+K listener
  useHotkey('k', () => setCommandPaletteOpen((prev) => !prev), true);

  // Custom event listener for buttons triggering command palette
  useEffect(() => {
    const handleOpenPalette = () => setCommandPaletteOpen(true);

    window.addEventListener('open-command-palette', handleOpenPalette);

    return () => {
      window.removeEventListener('open-command-palette', handleOpenPalette);
    };
  }, []);

  return (
    <>
      {/* Subtle cursor-following radial glow (desktop only) */}
      <CursorGlow />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Global Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
}
