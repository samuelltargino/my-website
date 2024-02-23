import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lm-cta-color': 'var(--cta-color-light-mode)',
        'lm-cta-hover-color': 'var(--cta-hover-color-light-mode)',
        'lm-l-foreground-color': 'var(--light-foreground-color-light-mode)',
        'lm-foreground-color': 'var(--foreground-light-mode)',
        'lm-divider-color': 'var(--divider-light-mode-color)',
        'lm-foreground-hover-color': 'var(--foreground-hover-light-mode)',
        'lm-responsive-menu-color': 'var(--responsive-menu-light-mode)',
        'lm-cta-active-color': 'var(--cta-active-color-light-mode)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(103%)',
          },
        },
      },
      animation: {
        slide: 'slide 30s linear infinite',
        slideWithDelay: 'slide 30s 15s linear infinite ',
      },
    },
  },
  plugins: [],
}
export default config
