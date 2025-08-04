/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss,css}", 
    "./src/**/*.component.{html,ts,scss}",
    "./src/app/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#FF181E',
        primaryColorDark: '#d4141a'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
  safelist: [
    'text-primaryColor',
    'bg-primaryColor',
    'hover:bg-primaryColor',
    'border-primaryColor',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl'
  ]
}

