/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E70A09',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
