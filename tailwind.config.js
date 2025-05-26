/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./App.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-surface': 'var(--color-primary-surface)',
        'primary-border': 'var(--color-primary-border)',
        'primary-pressed': 'var(--color-primary-pressed)',
        'primary-focus': 'var(--color-primary-focus)',

        neutral: {
          10: 'var(--color-neutral-10)',
          20: 'var(--color-neutral-20)',
          30: 'var(--color-neutral-30)',
          40: 'var(--color-neutral-40)',
          50: 'var(--color-neutral-50)',
          60: 'var(--color-neutral-60)',
          70: 'var(--color-neutral-70)',
          80: 'var(--color-neutral-80)',
          90: 'var(--color-neutral-90)',
          100: 'var(--color-neutral-100)',
        },

        negative: {
          primary: 'var(--color-negative-primary)',
          surface: 'var(--color-negative-surface)',
          border: 'var(--color-negative-border)',
          pressed: 'var(--color-negative-pressed)',
        },

        warning: {
          primary: 'var(--color-warning-primary)',
          surface: 'var(--color-warning-surface)',
          border: 'var(--color-warning-border)',
          pressed: 'var(--color-warning-pressed)',
        },

        success: {
          primary: 'var(--color-success-primary)',
          surface: 'var(--color-success-surface)',
          border: 'var(--color-success-border)',
          pressed: 'var(--color-success-pressed)',
        },

        info: {
          primary: 'var(--color-info-primary)',
          surface: 'var(--color-info-surface)',
          border: 'var(--color-info-border)',
          pressed: 'var(--color-info-pressed)',
        },

        secondary: 'var(--color-secondary)',
        'text-white': 'var(--color-text-white)',
        'text-black': 'var(--color-text-black)',
        'text-custom-gray': 'var(--color-text-custom-gray)',
        'text-custom-green': 'var(--color-text-custom-green)',
        'secondary-text': 'var(--color-secondary-text)',
        'custom-gray': 'var(--color-custom-gray)',
        overlay: 'var(--color-overlay)',
        'overlay-2': 'var(--color-overlay-2)',
        'shape-gray': 'var(--color-shape-gray)',
        'shape-gray-1': 'var(--color-shape-gray-1)',
        'shape-gray-2': 'var(--color-shape-gray-2)',
        'shape-gray-3': 'var(--color-shape-gray-3)',
        'shape-blue': 'var(--color-shape-blue)',
        'shape-orange': 'var(--color-shape-orange)',
        'shape-orange-2': 'var(--color-shape-orange-2)',

        'shape-yellow': 'var(--color-shape-yellow)',
        'shape-yellow-1': 'var(--color-shape-yellow-1)',
        'shape-red': 'var(--color-shape-red)',
        'shape-red-1': 'var(--color-shape-red-1)',
        'shape-green': 'var(--color-shape-green)',
        'shape-green-1': 'var(--color-shape-green-1)',
        'shape-green-2': 'var(--color-shape-green-2)',
        'shape-green-3': 'var(--color-shape-green-3)',
        'shape-black': 'var(--color-shape-black)',
        'toast-border-success': 'var(--color-toast-border-success)',
        'toast-background-success': 'var(--color-toast-background-success)',
        'toast-border-danger': 'var(--color-toast-border-danger)',
        'toast-background-danger': 'var(--color-toast-background-danger)',
        'toast-border-info': 'var(--color-toast-border-info)',
        'toast-background-info': 'var(--color-toast-background-info)',
      },
      fontFamily: {
        roboto_light: 'Roboto-Light',
        roboto_regular: 'Roboto-Regular',
        roboto_medium: 'Roboto-Medium',
        roboto_semibold: 'Roboto-SemiBold',
        roboto_bold: 'Roboto-Bold',
        rubik_light: 'Rubik-Light',
        rubik_regular: 'Rubik-Regular',
        rubik_medium: 'Rubik-Medium',
        rubik_bold: 'Rubik-Bold',
        rubik_semibold: 'Rubik-SemiBold',
      },
    },
    plugins: [],
  },
};
