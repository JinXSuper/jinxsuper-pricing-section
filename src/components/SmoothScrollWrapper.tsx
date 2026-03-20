'use client';

import React, { useEffect } from 'react';

export const SmoothScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return <div data-scroll-container>{children}</div>;
};
