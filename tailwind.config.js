/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue1: '#0A1128',
        blue2: '#001F54',
        blue3: '#034078',
        mint: '#F1F7ED',
        red1: '#FF1F35'
      }
    },
    container: {
      center: true,
      padding: '2rem'
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require('@tailwindcss/forms'),
  ],
}
