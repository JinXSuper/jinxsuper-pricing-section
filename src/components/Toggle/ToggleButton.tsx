'use client';

import React from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface ToggleButtonProps {
  label: string;
  value: 'yearly' | 'monthly' | 'weekly';
  isActive: boolean;
  onClick: (value: 'yearly' | 'monthly' | 'weekly') => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = React.memo(({
  label,
  value,
  isActive,
  onClick,
  icon,
  disabled = false,
  ariaLabel,
  className
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'glass-button min-w-[100px] flex items-center justify-center gap-2',
        isActive && 'active border-[#4B5FFF] bg-opacity-30',
        className
      )}
      onClick={() => !disabled && onClick(value)}
      aria-pressed={isActive}
      aria-label={ariaLabel || label}
      disabled={disabled}
      type="button"
    >
      {icon && <span className="icon">{icon}</span>}
      <span style={{ fontWeight: 600, fontSize: '11px' }}>{label}</span>
    </motion.button>
  );
});

ToggleButton.displayName = 'ToggleButton';
