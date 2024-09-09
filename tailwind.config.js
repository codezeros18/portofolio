/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        },
        animation: {
          marquee: 'marquee 30s linear infinite',
        },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        blackshit: '#000000',
        blackshit2: '#1C1D20',
        greybackground: '#999D9E',
        cardbackg: '#D6D8DC',
        roundbut: '#455ce9',
        bone: '#E9EAEB'
      },

    },
  },
  plugins: [],
}
