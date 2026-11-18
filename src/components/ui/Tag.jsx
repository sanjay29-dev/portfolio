import React from 'react';

export default function Tag({
  children,
  variant = 'default',
  size = 'sm',
  className = ''
}) {
  const sizeStyles = {
    xs: "px-2 py-0.5 text-[10px]",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm"
  };

  const variantStyles = {
    default: "bg-bg-subtle text-text-muted border border-border",
    accent: "bg-accent-soft text-accent border border-accent/20",
    warm: "bg-amber-400/10 text-warm border border-amber-400/20",
    success: "bg-emerald-400/10 text-success border border-emerald-400/20",
    outline: "border border-border text-text-muted hover:border-accent/30 hover:text-text transition-colors"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 font-mono rounded-lg transition-colors duration-150 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
