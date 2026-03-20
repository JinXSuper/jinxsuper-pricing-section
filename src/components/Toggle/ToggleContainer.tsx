'use client';

import React, { useState, useCallback } from 'react';
import { ToggleButton } from './ToggleButton';
import { cn } from '@/utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

interface ToggleContainerProps {
  onToggle: (period: 'yearly' | 'monthly' | 'weekly') => void;
  defaultValue?: 'yearly' | 'monthly' | 'weekly';
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
  withAnimation?: boolean;
}

export const ToggleContainer: React.FC<ToggleContainerProps> = ({
  onToggle,
  defaultValue = 'monthly',
  showLabels = true,
  size = 'md',
  children,
  className,
  withAnimation = true
}) => {
  const [active, setActive] = useState<'yearly' | 'monthly' | 'weekly'>(defaultValue);

  const handleToggle = useCallback((value: 'yearly' | 'monthly' | 'weekly') => {
    setActive(value);
    onToggle(value);
  }, [onToggle]);

  return (
    <div className={cn('flex flex-col items-center gap-8 w-full', className)}>
      <motion.div 
        initial={withAnimation ? { opacity: 0, y: -20 } : undefined}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          'toggle-container p-2 flex gap-2 rounded-2xl glass-morphism',
          size === 'sm' && 'sm p-1 gap-1',
          size === 'lg' && 'lg p-3 gap-3',
        )}
      >
        <div className="toggle-buttons flex gap-2">
          <ToggleButton
            label={showLabels ? "Yearly" : "Y"}
            value="yearly"
            isActive={active === 'yearly'}
            onClick={handleToggle}
          />
          <ToggleButton
            label={showLabels ? "Monthly" : "M"}
            value="monthly"
            isActive={active === 'monthly'}
            onClick={handleToggle}
          />
          <ToggleButton
            label={showLabels ? "Weekly" : "W"}
            value="weekly"
            isActive={active === 'weekly'}
            onClick={handleToggle}
          />
        </div>
      </motion.div>
      
      <AnimatePresence mode="wait">
        {children && (
          <motion.div
            key={active}
            initial={withAnimation ? { opacity: 0, x: 20 } : undefined}
            animate={{ opacity: 1, x: 0 }}
            exit={withAnimation ? { opacity: 0, x: -20 } : undefined}
            transition={{ duration: 0.3 }}
            className="toggle-content w-full flex justify-center"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
