/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E70A09',
      },
      keyframes: {
        heartBeat: {
          '0%': { transform: 'scale(1);' },
          '25%': { transform: 'scale(1.2);' },
          '50%': { transform: 'scale(1.5);' },
          '75%': { transform: 'scale(1.2);' },
          '100%': { transform: 'scale(1);' },
        },
      },
      animation: {
        heartBeat: 'heartBeat 0.3s 0.1s',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
