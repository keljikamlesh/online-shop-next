/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
        colors:{
            'blue-primary' : '#0076d7',
            'black-primary' : '#111111',
            'grey-primary' : '#717171',
            'green-primary' : '#3fb548',
            'borderColor1' : '#ededed'
            },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
