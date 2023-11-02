import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: { max: "640px" },
      md: { min:"641px", max: "768px" },
      lg: { min:"769px", max: "1023px" },
      xl: { min:"1024px", max: "1280px" },
      "2xl": { min:"1281px", max: "1920px" },
    },
    extend: {
      
    },
  },
  plugins: [],
}
export default config
