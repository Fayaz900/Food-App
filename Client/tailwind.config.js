/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a2e',
          light: '#16213e',
        },
        secondary: {
          DEFAULT: '#0f3460',
          light: '#e94560',
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      textShadow: {
        'burgundy': '4px 3px 0px #800020',
        'burgundy-lite' : '1px 3px 0px #800020',
      }
    }
  },
  plugins: [
    require('tailwindcss-textshadow'),
    function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            'display': 'none',
          }
        }
      })
    }
  ],
}