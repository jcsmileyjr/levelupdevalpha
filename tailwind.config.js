/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'babygreen': 'rgba(0, 175, 185, .10)',
        'babyblue' :  'rgba(0, 95, 153, .10)',
        'babyorange' : 'rgba(255, 190, 79, .10)',
        'primaryOrange' : '#E07000',
        'primaryGreen' : '#0081A7',
        'primaryGreenDarker' : '#0080A7',
      }
    },
  },
  plugins: [],
}
