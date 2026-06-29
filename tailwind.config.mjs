/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0f7f0',
          100: '#d8ecd8',
          200: '#b2d8b2',
          300: '#7dbc7d',
          400: '#4f9b4f',
          500: '#2d7d2d',
          600: '#1e6b1e',
          700: '#155515',
          800: '#0f420f',
          900: '#0a320a',
          DEFAULT: '#1a5c1a',
        },
        lime: {
          DEFAULT: '#8bc34a',
          light: '#aee05a',
          dark:  '#6a9e2e',
        },
        sky: {
          brand: '#4fc3f7',
          dark:  '#0288d1',
        },
        cream: '#f8f6f0',
        charcoal: '#1a1a1a',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem',   { lineHeight: '1.1' }],
        '6xl': ['3.75rem',{ lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};
