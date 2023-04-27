/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",

  // Path to the tremor module
  "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
  },
  },
  plugins: [],
}