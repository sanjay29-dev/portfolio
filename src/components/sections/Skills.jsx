import React from 'react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import SkillsGraph from '../features/SkillsGraph.jsx';
import GithubStats from '../features/GithubStats.jsx';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-bg-elevated/20">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12 space-y-12">
        <Reveal>
          <SectionHeading
            index="02"
            title="Technical Skills & Ecosystem"
            subtitle="Centered around Java and Spring Boot backend architecture, spanning full-stack React integration and MySQL data storage."
          />
        </Reveal>

        {/* Interactive Skills Graph & Categories */}
        <Reveal delay={0.1}>
          <SkillsGraph />
        </Reveal>

        {/* Live GitHub Telemetry Strip */}
        <Reveal delay={0.2}>
          <div className="pt-4">
            <GithubStats />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
