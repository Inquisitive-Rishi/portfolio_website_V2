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
        'base': 'repeat(2, minmax(500px, auto))',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'base': 'repeat(2, minmax(350px, auto))',
      }
    },
  },
  plugins: [],
}

