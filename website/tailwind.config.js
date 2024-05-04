/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'purple': {
          light: '#7b5ca5',
          DEFAULT: '#482b88',
          dark: '#24175a',
        },
        'green':{
          DEFAULT: '#82c340'
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

