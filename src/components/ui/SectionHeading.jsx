import React from 'react';

export default function SectionHeading({
  index,
  title,
  subtitle,
  align = 'left',
  className = ''
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-12 md:mb-16 max-w-2xl ${alignClass} ${className}`}>
      {index && (
        <div className="text-accent font-mono text-xs md:text-sm tracking-wider uppercase mb-2">
          // {index}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-muted text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
