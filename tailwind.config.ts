import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/sections/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm cream base - never use stark white
        cream: {
          50:  '#FDFAF5',
          100: '#FBF7F1',
          200: '#F6EEE2',
          300: '#EFE2CD',
        },
        // Deep ink - warm near-black with violet undertone
        ink: {
          900: '#2A2438',
          800: '#3D3551',
          700: '#56486A',
          500: '#857399',
          300: '#B7ABC4',
        },
        // Dusty sky blue - never neon
        sky: {
          100: '#EAF2FA',
          200: '#D2E2F0',
          300: '#A8C5E2',
          500: '#7AA5CC',
          700: '#4A7FAB',
        },
        // Warm peach - the soul of the brand
        peach: {
          100: '#FDF1E8',
          200: '#FADFC9',
          300: '#F4C2A1',
          500: '#E89E72',
          700: '#C97A4F',
        },
        // Sage mint - calm, not bright
        sage: {
          100: '#EEF5F0',
          200: '#D9E8DE',
          300: '#B8D8C8',
          500: '#8EBBA5',
          700: '#5F8E7A',
        },
        // Soft lavender
        lavender: {
          100: '#F3EFF7',
          200: '#E4DCEC',
          300: '#D4C5E2',
          500: '#B19BC9',
          700: '#8470A4',
        },
        // Coral - the warm CTA accent
        coral: {
          400: '#EFA68F',
          500: '#E8927C',
          600: '#D67560',
          700: '#B85A47',
        },
      },
      fontFamily: {
        // Distinctive humanist serif - emotional, editorial, NOT clinical
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        // Soft humanist sans for body
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-1': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-2': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        // Warm watercolor gradients - the brand's signature atmosphere
        'aurora': 'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(244, 194, 161, 0.45), transparent 60%), radial-gradient(ellipse 70% 50% at 80% 20%, rgba(168, 197, 226, 0.4), transparent 60%), radial-gradient(ellipse 60% 50% at 50% 90%, rgba(212, 197, 226, 0.35), transparent 60%)',
        'dawn': 'linear-gradient(180deg, #FBF7F1 0%, #FDF1E8 40%, #F3EFF7 100%)',
        'glass-warm': 'linear-gradient(135deg, rgba(253, 241, 232, 0.7) 0%, rgba(251, 247, 241, 0.4) 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.14 0 0 0 0 0.22 0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(42, 36, 56, 0.04), 0 8px 24px -8px rgba(42, 36, 56, 0.08)',
        'glass': '0 1px 2px rgba(42, 36, 56, 0.04), 0 20px 40px -16px rgba(232, 146, 124, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
        'lift': '0 2px 4px rgba(42, 36, 56, 0.04), 0 30px 60px -20px rgba(42, 36, 56, 0.18)',
        'coral-glow': '0 8px 32px -8px rgba(232, 146, 124, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
      },
      animation: {
        'breathe': 'breathe 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-medium': 'float 8s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'reveal': 'reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-12px) translateX(6px)' },
          '66%': { transform: 'translateY(-6px) translateX(-8px)' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(30px, -30px) rotate(360deg)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};

export default config;
