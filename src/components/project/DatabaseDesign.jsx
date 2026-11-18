import React from 'react';
import { Database, Key, GitFork } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Card from '../ui/Card.jsx';
import Tag from '../ui/Tag.jsx';

export default function DatabaseDesign({ tables }) {
  return (
    <section className="py-16 md:py-24 border-b border-border bg-bg-elevated/20">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <Reveal>
          <SectionHeading
            index="05"
            title="Relational Database Schema"
            subtitle="Normalized MySQL schema with foreign key constraints, indexes on expiry dates, and an audit ledger for stock movements."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tables.map((t, idx) => (
            <Reveal key={t.table} delay={idx * 0.05}>
              <Card hoverEffect className="p-5 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-accent" />
                      <span className="font-mono text-sm font-bold text-text">
                        {t.table}
                      </span>
                    </div>
                    <Tag variant="default" size="xs">
                      TABLE
                    </Tag>
                  </div>

                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                    {t.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-text-muted">
                  <span>InnoDB Engine</span>
                  <span className="text-accent">FK Integrated</span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
