'use client';

import React from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface FooterProps {
  authorName?: string;
  portfolioUrl?: string;
  glassEffect?: boolean;
  sticky?: boolean;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  className
}) => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("minimal-footer", className)}
    >
      <a href="https://jinxsuper.vercel.app" target="_blank" rel="noopener noreferrer" className="footer-logo hover:text-white/80 transition-colors">JinXSuper Developer</a>
      <div style={{ fontWeight: 300, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
        &copy; 2026 JinXSuper. All Rights Reserved.
      </div>
    </motion.footer>
  );
};
