import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Play, RotateCcw, ChevronRight, CheckCircle2, FileCode, Layers, Database } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Card from '../ui/Card.jsx';
import Tag from '../ui/Tag.jsx';
import Button from '../ui/Button.jsx';

export default function ArchitectureExplorer({ architecture }) {
  const shouldReduceMotion = useReducedMotion();
  const [selectedNodeId, setSelectedNodeId] = useState(architecture.nodes[0].id);
  const [isTracing, setIsTracing] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const selectedNode = architecture.nodes.find((n) => n.id === selectedNodeId) || architecture.nodes[0];

  const handleTraceRequest = () => {
    if (isTracing) return;
    setIsTracing(true);
    setActiveStep(0);

    const stepsCount = architecture.nodes.length;
    let current = 0;

    const interval = setInterval(() => {
      current++;
      if (current < stepsCount) {
        setActiveStep(current);
        setSelectedNodeId(architecture.nodes[current].id);
      } else {
        clearInterval(interval);
        setIsTracing(false);
      }
    }, 1200);
  };

  return (
    <section className="py-16 md:py-24 border-b border-border bg-bg-elevated/30">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              index="03"
              title="Architecture Explorer"
              subtitle="Inspect each architectural layer from the React frontend to the Spring Boot service routines and MySQL relational schema."
              className="mb-0 md:mb-0"
            />

            <Button
              variant={isTracing ? 'subtle' : 'primary'}
              size="md"
              icon={isTracing ? RotateCcw : Play}
              onClick={handleTraceRequest}
              disabled={isTracing}
              className="shrink-0"
            >
              {isTracing ? `Tracing Layer ${activeStep + 1}/${architecture.nodes.length}...` : 'Trace a Request'}
            </Button>
          </div>
        </Reveal>

        {/* Diagram & Inspector Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Architecture Pipeline / Flow */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-accent mb-2">// Flow Diagram (Click any layer to inspect)</div>
            
            <div className="flex flex-col space-y-3">
              {architecture.nodes.map((node, index) => {
                const isSelected = selectedNodeId === node.id;
                const isPulseActive = isTracing && activeStep === index;

                return (
                  <div key={node.id} className="relative">
                    <div
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-accent bg-accent-soft/20 shadow-lg shadow-accent/5'
                          : 'border-border bg-bg-elevated hover:border-accent/40'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-9 h-9 rounded-lg font-mono text-xs font-bold flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'bg-accent text-bg'
                              : 'bg-bg-subtle text-accent border border-border'
                          }`}
                        >
                          0{index + 1}
                        </div>

                        <div>
                          <div className="font-heading font-bold text-text text-base sm:text-lg">
                            {node.label}
                          </div>
                          <div className="text-xs font-mono text-text-muted">
                            {node.tech}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isPulseActive && (
                          <span className="flex h-2.5 w-2.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                          </span>
                        )}
                        <ChevronRight className={`w-4 h-4 text-text-muted transition-transform ${isSelected ? 'translate-x-1 text-accent' : ''}`} />
                      </div>
                    </div>

                    {/* Connecting pipe line between nodes */}
                    {index < architecture.nodes.length - 1 && (
                      <div className="w-0.5 h-3 bg-border mx-auto my-0.5" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Node Inspector Side Panel */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="text-xs font-mono text-accent mb-2">// Layer Inspector</div>
            
            <Card className="border-accent/40 shadow-xl space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Tag variant="accent" size="xs">
                    ACTIVE LAYER
                  </Tag>
                  <span className="text-xs font-mono text-text-muted">
                    ID: {selectedNode.id}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-bold text-text">
                  {selectedNode.label}
                </h3>
                <p className="text-sm font-mono text-accent mt-1">
                  {selectedNode.role}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-1.5 pt-4 border-t border-border">
                <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                  Technology Stack
                </div>
                <div className="text-sm font-body text-text font-medium">
                  {selectedNode.tech}
                </div>
              </div>

              {/* Key Files from real repo */}
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="text-xs font-mono text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-accent" />
                  <span>Key Classes / Files</span>
                </div>
                <div className="space-y-1.5 font-mono text-xs">
                  {selectedNode.files.map((file) => (
                    <div
                      key={file}
                      className="px-3 py-1.5 rounded-lg bg-bg-subtle border border-border text-emerald-300 overflow-x-auto"
                    >
                      {file}
                    </div>
                  ))}
                </div>
              </div>

              {/* Real Architectural Role & Example */}
              <div className="space-y-1.5 pt-4 border-t border-border">
                <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                  Operational Example
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {selectedNode.example}
                </p>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
