import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    colors: {
      'primary_dark': '#1F2529',
      'secondary_dark': '#363B3F',
      'terciary_dark': '#2C3135',
      'primary_gray': '#C0C0C0',
      //header 2B3135

    }
  }
  },
  plugins: [],
}
export default config
