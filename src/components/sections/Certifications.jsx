import React, { useState } from 'react';
import { ExternalLink, CheckCircle, Eye, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../../data/certifications.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Card from '../ui/Card.jsx';
import Tag from '../ui/Tag.jsx';
import CertificateModal from '../ui/CertificateModal.jsx';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 md:py-28 bg-bg-elevated/20">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <Reveal>
          <SectionHeading
            index="06"
            title="Certifications & Training"
            subtitle="Verified technical certifications spanning Core Java, Spring Boot architecture, Data JPA, REST APIs, Cloud, and NPTEL distributed computing."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <Reveal key={cert.title} delay={idx * 0.08}>
              <Card hoverEffect className="flex flex-col justify-between h-full p-6">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-accent-soft text-accent border border-accent/20 flex items-center justify-center font-mono font-bold text-xs tracking-wider">
                      {cert.issuer.slice(0, 3).toUpperCase()}
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

                  <h3 className="text-lg font-heading font-bold text-text mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-text-muted text-xs leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 text-success text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-bg text-xs font-mono font-bold transition-all shadow-sm group cursor-pointer"
                      title={`View ${cert.title} Certificate`}
                    >
                      <Eye className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                      <span>View</span>
                    </button>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-text-muted hover:text-accent hover:bg-bg-subtle transition-colors"
                        title="External Verification Link"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Certificate Document Modal Viewer */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
