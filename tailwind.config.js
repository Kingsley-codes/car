/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Adjust if your files are elsewhere
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script'],
        great: ['Great Vibes'],
        outfit: ['Outfit']
      },

      animation: {
        floatUp: "floatUp 5s infinite ease-in-out",
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(100vh) scale(0.5)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(-10vh) scale(1.2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}
