import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Layers, Sparkles, Cpu, Database, Layout, Cloud } from 'lucide-react';
import { skillsData } from '../../data/skills.js';
import Card from '../ui/Card.jsx';
import Tag from '../ui/Tag.jsx';

export default function SkillsGraph() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNodeId, setActiveNodeId] = useState('spring-boot');
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  const selectedNode = skillsData.graphNodes.find((n) => n.id === (hoveredNodeId || activeNodeId)) || skillsData.graphNodes[0];

  // Helper to check if an edge connects to the active/hovered node
  const isEdgeHighlighted = (from, to) => {
    const target = hoveredNodeId || activeNodeId;
    return from === target || to === target;
  };

  // Find skill details in categories
  const getSkillDetail = (nodeName) => {
    for (const cat of skillsData.categories) {
      const match = cat.skills.find(
        (s) => s.name.toLowerCase().includes(nodeName.toLowerCase()) || nodeName.toLowerCase().includes(s.name.toLowerCase())
      );
      if (match) return match;
    }
    return {
      name: nodeName,
      level: 'Core Skill',
      note: 'Key technology utilized in development workflows',
      inProject: false
    };
  };

  const skillInfo = getSkillDetail(selectedNode.label);

  return (
    <div className="space-y-6">
      {/* Desktop Interactive SVG Graph View (hidden on small screens) */}
      <div className="hidden md:block relative rounded-2xl border border-border bg-bg-elevated p-6 overflow-hidden shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-accent">// Interactive Ecosystem Map</span>
            <Tag variant="accent" size="xs">SVG NODES</Tag>
          </div>
          <span className="text-xs font-mono text-text-muted">Hover or click a node to trace relationships</span>
        </div>

        {/* SVG Canvas */}
        <div className="w-full aspect-[2/1] relative">
          <svg
            viewBox="220 50 580 330"
            className="w-full h-full select-none"
          >
            {/* Connection Edges */}
            {skillsData.graphEdges.map((edge) => {
              const fromNode = skillsData.graphNodes.find((n) => n.id === edge.from);
              const toNode = skillsData.graphNodes.find((n) => n.id === edge.to);
              if (!fromNode || !toNode) return null;

              const highlighted = isEdgeHighlighted(edge.from, edge.to);

              return (
                <line
                  key={`${edge.from}-${edge.to}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={highlighted ? '#22D3EE' : 'rgba(255, 255, 255, 0.12)'}
                  strokeWidth={highlighted ? 2.5 : 1.2}
                  strokeDasharray={highlighted ? '4 2' : 'none'}
                  className="transition-colors duration-200"
                />
              );
            })}

            {/* Nodes */}
            {skillsData.graphNodes.map((node) => {
              const isSelected = (hoveredNodeId || activeNodeId) === node.id;
              const isCenter = node.isCenter;

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => setActiveNodeId(node.id)}
                  className="cursor-pointer"
                >
                  {/* Outer glow ring when selected */}
                  {isSelected && (
                    <circle
                      r={isCenter ? 36 : 28}
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="2"
                      strokeOpacity="0.5"
                      className="animate-pulse"
                    />
                  )}

                  {/* Core Node Circle */}
                  <circle
                    r={isCenter ? 30 : 22}
                    fill={isCenter ? '#171B24' : '#11141B'}
                    stroke={isSelected ? '#22D3EE' : node.inProject ? 'rgba(34, 211, 238, 0.4)' : 'rgba(255, 255, 255, 0.2)'}
                    strokeWidth={isSelected ? 2.5 : 1.5}
                    className="transition-all duration-200 hover:scale-110"
                  />

                  {/* Node Label */}
                  <text
                    textAnchor="middle"
                    dy=".35em"
                    fontSize={isCenter ? 11 : 9}
                    fontFamily="'JetBrains Mono', monospace"
                    fontWeight={isSelected || isCenter ? 700 : 500}
                    fill={isSelected ? '#22D3EE' : '#E6E9EF'}
                    className="pointer-events-none select-none"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Node Telemetry Banner */}
        <div className="mt-4 p-4 rounded-xl border border-border bg-bg-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-heading font-bold text-text text-base">
                {selectedNode.label}
              </span>
              <Tag variant="default" size="xs">
                {selectedNode.category.toUpperCase()}
              </Tag>
              {selectedNode.inProject && (
                <Tag variant="accent" size="xs">
                  USED IN PHARMACARE
                </Tag>
              )}
            </div>
            <p className="text-xs text-text-muted">
              {skillInfo.note}
            </p>
          </div>

          {selectedNode.inProject ? (
            <Link
              to="/projects/pharmacare"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-bg text-xs font-mono font-bold hover:bg-cyan-300 transition-colors shrink-0"
            >
              <span>Used in PharmaCare</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <span className="text-xs font-mono text-text-muted shrink-0">
              Training & Hands-on Lab
            </span>
          )}
        </div>
      </div>

      {/* Fallback View: Grouped Chip Lists (Always shown on mobile, and readable on desktop) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-text-muted">// Category Breakdown</span>
          <span className="text-xs font-mono text-accent">Zero percentage bars • Verified capabilities</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.categories.map((cat) => (
            <Card key={cat.name} hoverEffect className="p-5 h-full flex flex-col justify-between">
              <div>
                <h4 className="font-heading font-bold text-text text-base mb-3 flex items-center justify-between">
                  <span>{cat.name}</span>
                  <span className="font-mono text-xs text-accent">({cat.skills.length})</span>
                </h4>

                <div className="space-y-2.5">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      className="p-2.5 rounded-lg bg-bg-subtle border border-border/80 flex flex-col gap-1 hover:border-accent/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-text">
                          {s.name}
                        </span>
                        {s.inProject ? (
                          <Tag variant="accent" size="xs">
                            PharmaCare
                          </Tag>
                        ) : (
                          <Tag variant="default" size="xs">
                            {s.level}
                          </Tag>
                        )}
                      </div>
                      <p className="text-[11px] text-text-muted leading-relaxed">
                        {s.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
