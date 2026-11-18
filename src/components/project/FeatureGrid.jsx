import React from 'react';
import { 
  ShieldAlert, 
  Boxes, 
  BellRing, 
  TrendingUp, 
  Receipt, 
  Truck,
  CheckCircle 
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Card from '../ui/Card.jsx';

export default function FeatureGrid({ features }) {
  const iconMap = {
    ShieldAlert,
    Boxes,
    BellRing,
    TrendingUp,
    Receipt,
    Truck
  };

  return (
    <section className="py-16 md:py-24 border-b border-border">
      <div className="max-w-content mx-auto px-5 sm:px-8 md:px-12">
        <Reveal>
          <SectionHeading
            index="02"
            title="Key Technical Features"
            subtitle="Engineered to automate inventory tracking, eliminate expired wastage, and accelerate counter billing."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = iconMap[feat.icon] || CheckCircle;

            return (
              <Reveal key={feat.title} delay={idx * 0.08}>
                <Card hoverEffect className="h-full flex flex-col justify-between p-6">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent border border-accent/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-xl font-heading font-bold text-text mb-2">
                      {feat.title}
                    </h3>

                    <p className="text-text-muted text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
