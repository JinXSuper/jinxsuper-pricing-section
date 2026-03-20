'use client';

import React, { useState, useCallback } from 'react';
import { PricingCard } from '@/components/Pricing/PricingCard';
import { PixelBlast } from '@/components/Backgrounds/PixelBlast';
import { Footer } from '@/components/Footer/Footer';
import { ToggleContainer } from '@/components/Toggle/ToggleContainer';
import { motion, AnimatePresence } from 'framer-motion';

type BillingPeriod = 'yearly' | 'monthly' | 'weekly';

const pricingData: Record<BillingPeriod, { premium: string; enterprise: string; suffix: string }> = {
  weekly: { premium: '9', enterprise: '29', suffix: '/wk' },
  monthly: { premium: '30', enterprise: '99', suffix: '/mo' },
  yearly: { premium: '249', enterprise: '899', suffix: '/yr' },
};

export default function Home() {
  const [period, setPeriod] = useState<BillingPeriod>('monthly');

  const handleToggle = useCallback((value: BillingPeriod) => {
    setPeriod(value);
  }, []);

  const prices = pricingData[period];

  const plans = [
    {
      title: "Basic",
      description: "Perfect for small teams and freelancers to stay organized and on track.",
      price: "Free",
      suffix: "",
      theme: "green" as const,
      features: [
        "Manage up to 5 projects effortlessly.",
        "Store up to 10 GB of essential files.",
        "Track tasks and deadlines easily.",
        "Stay updated with simple reports.",
        "Get quick support via email."
      ],
      delay: 0.1
    },
    {
      title: "Premium",
      description: "Designed for growing teams seeking advanced features and integrations.",
      price: prices.premium,
      suffix: prices.suffix,
      theme: "pink" as const,
      isPrimary: true,
      features: [
        "Handle 20 projects simultaneously.",
        "Access 50 GB of secure storage.",
        "Automate repetitive tasks seamlessly.",
        "Gain insights with advanced reports.",
        "Receive priority email support.",
        "Integrate with essential tools."
      ],
      delay: 0.15
    },
    {
      title: "Enterprise",
      description: "Comprehensive solutions for large-scale operations and complex workflows.",
      price: prices.enterprise,
      suffix: prices.suffix,
      theme: "blue" as const,
      features: [
        "Manage unlimited projects efficiently.",
        "Store extensive data with 200 GB storage.",
        "Optimize workflows with advanced auto.",
        "Analyze data with in-depth reports.",
        "Access 24/7 expert support.",
        "Customize integrations for your needs."
      ],
      delay: 0.2
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-10 relative">
      {/* Pixel Blast Background */}
      <PixelBlast
        color="#B19EEF"
        pixelSize={3}
        patternScale={2}
        patternDensity={1}
        enableRipples={true}
        rippleSpeed={0.3}
        rippleThickness={0.1}
        edgeFade={0.5}
        speed={0.5}
      />

      {/* Background watermark */}
      <div className="bg-text-watermark">Pricing</div>

      {/* Top-down ambient light */}
      <div className="top-light" />

      {/* Toggle */}
      <div className="mt-28 relative z-10">
        <ToggleContainer
          onToggle={handleToggle}
          defaultValue="monthly"
          size="sm"
          withAnimation={true}
        />
      </div>

      {/* Pricing Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={period}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 items-start relative z-10"
        >
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              {...plan}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <Footer className="mt-12" />
    </div>
  );
}
