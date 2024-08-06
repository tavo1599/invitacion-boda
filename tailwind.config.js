/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'elegant': ['Great Vibes', 'cursive'],
      },
      colors: {
        'custom-brown': '#90686F',
      }
    },
  },
  plugins: [],
}

