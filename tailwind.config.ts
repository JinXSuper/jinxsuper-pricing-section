import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          light: 'rgba(255, 255, 255, 0.15)',
          border: 'rgba(255, 255, 255, 0.25)',
          shadow: 'rgba(31, 38, 135, 0.37)',
          active: 'rgba(75, 95, 255, 0.20)',
        },
      },
      backdropFilter: {
        'glass': 'blur(10px) saturate(180%)',
        'glass-sm': 'blur(5px) saturate(150%)',
        'glass-lg': 'blur(20px) saturate(200%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(31, 38, 135, 0.45)',
        'glass-active': '0 12px 50px 0 rgba(75, 95, 255, 0.50)',
      },
      borderRadius: {
        'glass': '10px',
      },
      spacing: {
        'glass': '10px',
      },
      transitionDuration: {
        'glass': '300ms',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
