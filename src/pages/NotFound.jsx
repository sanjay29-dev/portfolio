import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home as HomeIcon, AlertOctagon } from 'lucide-react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageTransition from '../components/layout/PageTransition.jsx';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-bg text-text bg-grid-pattern selection:bg-accent/20 selection:text-accent flex flex-col justify-between">
        <Navbar onOpenCommandPalette={() => window.dispatchEvent(new CustomEvent('open-command-palette'))} />

        <main className="flex-1 flex items-center justify-center p-6 pt-32 pb-20">
          <div className="max-w-md w-full">
            <Card className="text-center p-8 border-accent/30 shadow-2xl space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-accent-soft text-accent border border-accent/20 mx-auto flex items-center justify-center">
                <AlertOctagon className="w-8 h-8" />
              </div>

              <div>
                <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                  // 404 — ROUTE NOT FOUND
                </div>
                <h1 className="text-3xl sm:text-4xl font-heading font-bold text-text">
                  Endpoint Offline
                </h1>
                <p className="text-text-muted text-sm mt-3 leading-relaxed">
                  The requested resource does not exist on this server. It may have moved or been decommissioned.
                </p>
              </div>

              {/* Diagnostic Snippet */}
              <div className="p-3.5 rounded-xl bg-bg-subtle border border-border font-mono text-xs text-left text-text-muted space-y-1">
                <div className="text-accent">$ curl -I {window.location.pathname}</div>
                <div className="text-red-400">HTTP/1.1 404 Not Found</div>
                <div>Status: route_unreachable</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  icon={HomeIcon}
                  href="/"
                  className="w-full sm:w-auto"
                >
                  Return to Home
                </Button>
                <Button
                  variant="subtle"
                  size="md"
                  href="/projects/pharmacare"
                  className="w-full sm:w-auto"
                >
                  View PharmaCare
                </Button>
              </div>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
