import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bold: ['var(--roboto-bold)'],
        regular: ['var(--roboto-regular)'],
        light: ['var(--roboto-light)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: '#2B4E2D',
      },
      borderRadius: {
        '30': '30px',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      backgroundImage: {
        'present-gradient': 'linear-gradient(180deg, rgba(43, 78, 45, 0.3) 0%, rgba(42, 77, 43, 0) 100%)',
        'button-green': 'linear-gradient(180deg, #649465 0%, #2B4E2D 100%)',
        'icon-arrow-list': "url('/icon-arrow.svg')",
        'icon-num': "url('/icon-num.png')"
      },
      backgroundColor: {
        'grey': 'rgba(100, 147, 101, 0.1)',
      },
      gap: {
        '30': '30px',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '992px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1200px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1440px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
} satisfies Config;
