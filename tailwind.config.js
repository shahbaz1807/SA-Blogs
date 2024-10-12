/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#FFD11A",
        "bg-color": "#000000",
      },
      fontFamily:{
        "amsterdam": ["New Amsterdam", "sans-serif"],
        "kanit": ["Kanit", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"]
      }
    },
    screens: {
      'sm': '410px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

