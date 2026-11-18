import React, { useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function CursorGlow() {
  const shouldReduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Check if device has a fine pointer (mouse/trackpad, not touch)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(mediaQuery.matches);

    if (!mediaQuery.matches || shouldReduceMotion) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, shouldReduceMotion]);

  if (shouldReduceMotion || !isPointerDevice || !isVisible) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-30 transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
      aria-hidden="true"
    >
      <div className="w-[450px] h-[450px] rounded-full bg-accent/[0.035] blur-[100px]" />
    </div>
  );
}
