import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg text-text flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-accent underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-text p-8 max-w-content mx-auto">
      <Link to="/" className="text-accent text-sm font-mono hover:underline mb-8 inline-block">
        ← Back to home
      </Link>
      <h1 className="text-4xl font-heading font-bold">{project.title}</h1>
      <p className="text-accent font-mono mt-2">{project.subtitle}</p>
    </div>
  );
}
