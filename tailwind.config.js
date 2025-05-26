/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./App.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [
    ({addBase}) =>
      addBase({
        ':root': {
          '--color-values': '255 0 0',
          '--color-rgb': 'rgb(255 0 0)',
        },
      }),
  ],
};
