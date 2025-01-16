/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Inter'
      },
      boxShadow: {
        shape: '0px 0px 0px 1px rgba(255, 255, 255, 0.03) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.03) inset, 0px 8px 8px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.10), 0px 2px 2px 0px rgba(0, 0, 0, 0.10), 0px 0px 0px 1px rgba(0, 0, 0, 0.10)'
      },
      backgroundImage:{
        pattern: 'url(/assets/bg.png)'
      }
    },
  },
  plugins: [],
}

