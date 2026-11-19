import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertTriangle, ArrowUpRight, Github } from 'lucide-react';
import { projectsData } from '../data/projects.js';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageTransition from '../components/layout/PageTransition.jsx';
import ProjectHeader from '../components/project/ProjectHeader.jsx';
import Gallery from '../components/project/Gallery.jsx';
import FeatureGrid from '../components/project/FeatureGrid.jsx';
import ArchitectureExplorer from '../components/project/ArchitectureExplorer.jsx';
import DatabaseDesign from '../components/project/DatabaseDesign.jsx';
import ApiTable from '../components/project/ApiTable.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg text-text flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-heading font-bold mb-4">Project Not Found</h1>
        <p className="text-text-muted mb-6">The requested case study does not exist.</p>
        <Button variant="primary" href="/">Return to Home</Button>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-bg text-text bg-grid-pattern selection:bg-accent/20 selection:text-accent flex flex-col">
        {/* Navigation */}
        <Navbar />

        <main className="flex-1">
          {/* 1. Header & At a glance */}
          <ProjectHeader project={project} />

          {/* 2. Screenshots Gallery with Lightbox */}
          <Gallery screenshots={project.screenshots} />

          {/* 3. Key Technical Features */}
          <FeatureGrid features={project.features} />

          {/* 4. Interactive Architecture Explorer */}
          <ArchitectureExplorer architecture={project.architecture} />

          {/* 5. Database Design */}
          <DatabaseDesign tables={project.database} />

          {/* 6. REST API Endpoints */}
          <ApiTable endpoints={project.api} />

          {/* 7. Engineering Challenges & Learnings */}
          <section className="py-16 md:py-24 border-b border-border">
            <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
              <Reveal>
                <SectionHeading
                  index="06"
                  title="Technical Challenges & What I Learned"
                  subtitle="Key architectural hurdles solved while building a high-integrity inventory and transaction engine."
                />
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.challenges.map((item, idx) => (
                  <Reveal key={idx} delay={idx * 0.08}>
                    <Card hoverEffect className="p-6 h-full flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-warm border border-amber-400/20 flex items-center justify-center shrink-0 mt-0.5">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-warm uppercase tracking-wider mb-1">
                          CHALLENGE 0{idx + 1}
                        </div>
                        <p className="text-sm text-text leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* 8. Bottom Navigation Footer */}
          <section className="py-16 bg-bg-elevated/40">
            <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-xs font-mono text-accent mb-1">// Case Study Navigation</div>
                <h4 className="text-2xl font-heading font-bold text-text">
                  Ready to see more code?
                </h4>
                <p className="text-sm text-text-muted mt-1">
                  Explore the full Spring Boot & React source code on GitHub.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="outline" href="/" icon={ArrowLeft}>
                  Back to Home
                </Button>
                <Button variant="primary" href={project.github} target="_blank" icon={Github}>
                  View Repository
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
}
