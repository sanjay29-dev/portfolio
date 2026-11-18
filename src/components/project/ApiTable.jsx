import React from 'react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Card from '../ui/Card.jsx';
import Tag from '../ui/Tag.jsx';

export default function ApiTable({ endpoints }) {
  const getMethodBadge = (method) => {
    switch (method) {
      case 'GET':
        return 'bg-blue-400/10 text-blue-400 border-blue-400/20';
      case 'POST':
        return 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20';
      case 'PUT':
        return 'bg-amber-400/10 text-amber-400 border-amber-400/20';
      case 'DELETE':
        return 'bg-red-400/10 text-red-400 border-red-400/20';
      default:
        return 'bg-bg-subtle text-text-muted border-border';
    }
  };

  return (
    <section className="py-16 md:py-24 border-b border-border">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <Reveal>
          <SectionHeading
            index="04"
            title="REST API Endpoints"
            subtitle="Verified API contracts handled by Spring Boot @RestController classes with validation and status codes."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-bg-elevated overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-bg-subtle font-mono text-xs text-text-muted uppercase tracking-wider">
                    <th className="py-3.5 px-4 sm:px-6 w-24">Method</th>
                    <th className="py-3.5 px-4 sm:px-6">Endpoint Path</th>
                    <th className="py-3.5 px-4 sm:px-6">Function & Domain Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-sm">
                  {endpoints.map((ep, idx) => (
                    <tr
                      key={ep.path + ep.method}
                      className="hover:bg-bg-subtle/50 transition-colors font-body"
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-xs">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-md border font-bold ${getMethodBadge(
                            ep.method
                          )}`}
                        >
                          {ep.method}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 sm:px-6 font-mono text-xs sm:text-sm text-accent whitespace-nowrap">
                        {ep.path}
                      </td>

                      <td className="py-3.5 px-4 sm:px-6 text-text-muted text-xs sm:text-sm leading-relaxed">
                        {ep.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
