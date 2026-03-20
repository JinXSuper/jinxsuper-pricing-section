'use client';

import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils/cn';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  currency?: string;
  suffix?: string;
  features: string[];
  theme?: 'green' | 'pink' | 'blue';
  isPrimary?: boolean;
  delay?: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  currency = '$',
  suffix = '',
  features,
  theme = 'blue',
  isPrimary = false,
  delay = 0
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || !glareRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glareRef.current.style.background = `radial-gradient(circle 250px at ${x}px ${y}px, rgba(255,255,255,0.07), transparent)`;
    glareRef.current.style.opacity = '1';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!glareRef.current) return;
    glareRef.current.style.opacity = '0';
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "glass-morphism p-7 flex flex-col gap-6 w-full h-full",
        isPrimary && "scale-[1.02] z-10"
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare overlay */}
      <div
        ref={glareRef}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          zIndex: 2,
        }}
      />
      <div className="space-y-3 relative z-10">
        <h3 className={cn(
          "text-lg tracking-tight",
          theme === 'green' && "text-emerald-400/80",
          theme === 'pink' && "text-pink-400/80",
          theme === 'blue' && "text-blue-400/80"
        )} style={{ fontWeight: 600 }}>
          {title}
        </h3>
        <p className="text-white/40 text-xs leading-relaxed max-w-[240px]" style={{ fontWeight: 300 }}>
          {description}
        </p>
        
        <div className="pt-4 flex items-end tabular-nums gap-1">
          {price !== "Free" && (
            <span className="text-sm text-white/60 mb-2 mr-0.5" style={{ fontWeight: 600 }}>{currency}</span>
          )}
          <span className="text-5xl tracking-tighter text-white" style={{ fontWeight: 600 }}>
            {price}
          </span>
          {suffix && (
            <span className="text-sm text-white/30 mb-1.5 ml-0.5" style={{ fontWeight: 300 }}>{suffix}</span>
          )}
        </div>
      </div>

      <div className="relative z-10">
        <button className={cn(
          "glass-button w-full",
          isPrimary && "primary"
        )}>
          Get Started
        </button>
      </div>

      <div className="flex-1 space-y-3 relative z-10">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 group">
            <div className={cn(
              "w-4 h-4 rounded-full flex items-center justify-center shrink-0",
              theme === 'green' && "bg-emerald-500/15 text-emerald-400/70",
              theme === 'pink' && "bg-pink-500/15 text-pink-400/70",
              theme === 'blue' && "bg-blue-500/15 text-blue-400/70"
            )}>
              <CheckIcon className="w-2.5 h-2.5" />
            </div>
            <span className="pricing-feature flex-1">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
