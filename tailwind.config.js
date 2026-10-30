/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Accent scale — refined iris/indigo. Change this one scale to rebrand.
        accent: {
          50: '#eef1ff',
          100: '#e0e4ff',
          200: '#c6ccff',
          300: '#a3aaff',
          400: '#7f83fb',
          500: '#635bf4',
          600: '#5343e0',
          700: '#4536bd',
          800: '#392f99',
          900: '#332e7a',
        },
      },
      fontFamily: {
        sans: ['Switzer', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Cabinet Grotesk"', 'Switzer', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      boxShadow: {
        // Layered, low-opacity shadows for a premium, grounded feel.
        soft: '0 1px 2px rgba(16, 24, 40, 0.04), 0 4px 12px -2px rgba(16, 24, 40, 0.06)',
        'soft-lg':
          '0 2px 4px rgba(16, 24, 40, 0.04), 0 12px 28px -6px rgba(16, 24, 40, 0.10), 0 32px 64px -24px rgba(16, 24, 40, 0.14)',
        lift: '0 2px 4px rgba(16, 24, 40, 0.05), 0 18px 40px -12px rgba(83, 67, 224, 0.20)',
        glow: '0 0 0 1px rgba(99, 91, 244, 0.18), 0 10px 30px -8px rgba(99, 91, 244, 0.45)',
        'inner-top': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-in': 'scale-in 0.28s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
