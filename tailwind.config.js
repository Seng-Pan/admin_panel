/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':'0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'custom-inset': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'custom-image': "url('../assets/greenbanner.png')",
      },
    },
  },
  plugins: [],
}