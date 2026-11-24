import React from 'react';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';
import { experienceData } from '../../data/experience.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Card from '../ui/Card.jsx';
import Tag from '../ui/Tag.jsx';

export default function Timeline() {
  const getIcon = (type) => {
    switch (type) {
      case 'internship':
        return Briefcase;
      default:
        return Award;
    }
  };

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <Reveal>
          <SectionHeading
            index="04"
            title="Experience & Training"
            subtitle="Professional training and practical industry internships across Java back-end architecture and cloud services."
          />
        </Reveal>

        <div className="relative border-l border-border/80 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, idx) => {
            const Icon = getIcon(item.type);

            return (
              <Reveal key={item.title + item.period} delay={idx * 0.1}>
                <div className="relative group">
                  {/* Timeline Node Indicator */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-bg border-2 border-accent flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-bg transition-all duration-200">
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>

                  <Card hoverEffect className="space-y-4">
                    {/* Header info */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Tag variant="accent" size="xs">
                            {item.type.toUpperCase()}
                          </Tag>
                          <span className="text-xs font-mono text-warm font-semibold">
                            {item.duration}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-text">
                          {item.title}
                        </h3>
                        <div className="text-base text-accent font-medium mt-0.5">
                          {item.organization}
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs font-mono text-text-muted gap-1">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-accent" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-text-muted" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlights list */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="pt-2 border-t border-border/60 space-y-2">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
