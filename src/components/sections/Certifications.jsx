import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { certificationsData } from '../../data/certifications.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Card from '../ui/Card.jsx';
import Tag from '../ui/Tag.jsx';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-bg-elevated/20">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <Reveal>
          <SectionHeading
            index="05"
            title="Certifications"
            subtitle="Verified technical training certifications in core Java engineering and distributed big data computing."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, idx) => (
            <Reveal key={cert.title} delay={idx * 0.1}>
              <Card hoverEffect className="flex flex-col justify-between h-full p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent border border-accent/20 flex items-center justify-center font-mono font-bold text-lg">
                      {cert.issuer.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag variant="accent" size="xs">
                        {cert.issuer}
                      </Tag>
                      <Tag variant="default" size="xs">
                        {cert.year}
                      </Tag>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-text mb-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 text-success">
                    <CheckCircle className="w-4 h-4" />
                    Verified Completion
                  </span>

                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-text-muted">Credential on record</span>
                  )}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
