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
        'lm-l-foreground-color': 'var(--light-foreground-color-light-mode)',
        'lm-foreground-color': 'var(--foreground-light-mode)',
        'lm-divider-color': 'var(--divider-light-mode-color)',
        'lm-foreground-hover-color': 'var(--foreground-hover-light-mode)',
        'lm-responsive-menu-color': 'var(--responsive-menu-light-mode)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
