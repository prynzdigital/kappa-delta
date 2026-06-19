import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors — token-for-token from design-system.md
        primary: '#cca828',
        'primary-hover': '#b8961f',
        'primary-on-dark': '#cca828',
        'brand-dark': '#1a1a2e',
        'brand-dark-hover': '#252542',
        text: '#1a1a2e',
        'text-muted': '#5c5c78',
        'text-on-dark': '#f5f0e8',
        'text-on-gold': '#1a1a2e',
        surface: '#f5f0e8',
        'surface-alt': '#ffffff',
        'surface-mid': '#ede7d9',
        border: '#d4c9b0',
        'border-focus': '#cca828',
        success: '#2d6a4f',
        error: '#b00020',
        // Attribution text on dark surfaces
        'text-attribution': '#a8a8c0',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Type scale from design-system.md
        'display': ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-mobile': ['44px', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '900' }],
        'h1': ['56px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h1-mobile': ['36px', { lineHeight: '1.12', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '1.15', letterSpacing: '0em', fontWeight: '700' }],
        'h2-mobile': ['28px', { lineHeight: '1.2', letterSpacing: '0em', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.25', letterSpacing: '0em', fontWeight: '700' }],
        'h3-mobile': ['22px', { lineHeight: '1.3', letterSpacing: '0em', fontWeight: '700' }],
        'h4': ['20px', { lineHeight: '1.3', letterSpacing: '0.02em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.65', fontWeight: '400' }],
        'body-lg-mobile': ['17px', { lineHeight: '1.65', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-mobile': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.55', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.5', letterSpacing: '0.03em', fontWeight: '400' }],
        'label': ['14px', { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '500' }],
        'nav': ['15px', { lineHeight: '1.0', letterSpacing: '0.05em', fontWeight: '500' }],
        'eyebrow': ['14px', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '40px',
        '2xl': '64px',
        '3xl': '96px',
        'section-mobile': '48px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'full': '9999px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(26,26,46,0.08)',
        'card-hover': '0 6px 20px rgba(26,26,46,0.15)',
        'card-brand': '0 8px 32px rgba(26,26,46,0.30), 0 2px 8px rgba(26,26,46,0.12)',
        'card-brand-hover': '0 16px 48px rgba(26,26,46,0.42), 0 4px 12px rgba(26,26,46,0.18)',
        'modal': '0 16px 48px rgba(26,26,46,0.24)',
        'nav': '0 2px 12px rgba(26,26,46,0.12)',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [
    // scrollbar-hide utility
    function ({ addUtilities }: { addUtilities: (u: Record<string, Record<string, string>>) => void }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
  ],
};

export default config;
