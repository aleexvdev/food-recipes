/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        "main": '#F9F9F9',
        "first": '#FF642F',
        "second": '#D3D2D1',
        "third": '#212121',
        'outrageous-orange': {
          '50': '#fff3ed',
          '100': '#ffe5d4',
          '200': '#ffc6a8',
          '300': '#ff9e71',
          '400': '#ff642f',
          '500': '#fe4411',
          '600': '#ef2a07',
          '700': '#c61a08',
          '800': '#9d170f',
          '900': '#7e1710',
          '950': '#440706',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

