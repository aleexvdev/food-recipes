/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        "main": '#F9F9F9',
        "first": '#FF642F',
        "second": '#D3D2D1',
        "third": '#212121',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

