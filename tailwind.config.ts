import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'sapphire': '#0D1E4C',
        'lily': '#C48CB3',
        'prim': '#E5C9D7',
        'polo-blue': '#83A6CE',
        'catalina-blue': '#26415E',
        'black-pearl': '#0B1B32',
        'eerie-black': '#1E1E1D',
        'aluminium': '#D9D9D9',
        'light-slate-gray': '#778B8F',
        'cerulean': '#4484CE',
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
    },
  },
  plugins: [],
};
export default config;
