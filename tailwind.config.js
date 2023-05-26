/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gun-powder': {
          DEFAULT: '#474554',
          50: '#A2A0B1',
          100: '#9795A8',
          200: '#817E95',
          300: '#6D6A81',
          400: '#5A576A',
          500: '#474554',
          600: '#2D2C35',
          700: '#131216',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'torch-red': {
          DEFAULT: '#FF003F',
          50: '#FFB8C9',
          100: '#FFA3BA',
          200: '#FF7A9B',
          300: '#FF527C',
          400: '#FF295E',
          500: '#FF003F',
          600: '#C70031',
          700: '#8F0023',
          800: '#570015',
          900: '#1F0008',
          950: '#030001'
        },
      },
      fontFamily: {
        "kanit": "'Kanit', sans-serif"
      }
    },
  },
  plugins: [],
}

