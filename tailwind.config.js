/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['"Outfit"']
      },
      backgroundImage: {
        'wave': "url('/public/wave.png')",
      }
    },
  },
  plugins: [],
}

