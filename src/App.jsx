import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import NotFound from './pages/NotFound.jsx';
import CursorGlow from './components/features/CursorGlow.jsx';
import { ResumeProvider } from './context/ResumeContext.jsx';

export default function App() {
  return (
    <ResumeProvider>
      {/* Subtle cursor-following radial glow (desktop only) */}
      <CursorGlow />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ResumeProvider>
  );
}
