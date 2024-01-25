/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./src/assets/social/Meteor.svg')"
      },
      gridTemplateRows: {
        // Simple 16 row grid
        'base': '150px 500px',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'base': '0.4fr 0.6fr',
      }
    },
  },
  plugins: [],
}

