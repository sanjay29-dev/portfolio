import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../../data/experience.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Card from '../ui/Card.jsx';
import Tag from '../ui/Tag.jsx';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-bg-elevated/10">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <Reveal>
          <SectionHeading
            index="05"
            title="Education"
            subtitle="Academic foundations in computer science, software engineering, and database systems."
          />
        </Reveal>

        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <Reveal key={edu.degree} delay={idx * 0.1}>
              <Card hoverEffect className="p-6 sm:p-8 space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent border border-accent/20 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <Tag variant="accent" size="xs">
                          UNDERGRADUATE DEGREE
                        </Tag>
                        <Tag variant="success" size="xs">
                          {edu.grade}
                        </Tag>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-text">
                        {edu.degree}
                      </h3>
                      <div className="text-base text-accent font-medium mt-0.5">
                        {edu.institution}
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:items-end text-xs font-mono text-text-muted gap-2 sm:gap-1">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-text-muted" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                  {edu.description}
                </p>

                {/* Relevant Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="space-y-2.5 pt-4 border-t border-border/60">
                    <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                      <BookOpen className="w-3.5 h-3.5 text-accent" />
                      <span>Key Technical Coursework:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-lg bg-bg-subtle border border-border/80 text-xs font-mono text-text hover:border-accent/30 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Academic Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="pt-4 border-t border-border/60 space-y-2">
                    <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
                      // Academic Highlights
                    </div>
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
