/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A7C59',
        sage: '#C4D7D1',
        metal: '#8B8C89',
      },
      fontFamily: {
        sfdisplay: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        sftext: [
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
      },
      letterSpacing: {
        tight: '-0.015em',
        tighter: '-0.022em',
      },
    },
  },
  plugins: [],
}