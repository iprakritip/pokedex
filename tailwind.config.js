/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grass': '#25D5A8',
        'poison': '#A33EA1',
        'fire': '#E07F17',
        'flying': '#BF71EB',
        'water': '#1783E0',
        'bug': '#5C8519',
        'normal': '#BCC493',
        'ground': '#DBCB3A',
        'fairy': '#DD9DDB',
        'fighting': '#BF2121',
        'psychic': '#FD62B8',
        'rock': '#A1AF5A',
        'steel': '#ADADAD',
        'ice': '#7BD3DC',
        'dark': "#725120",
        'dragon': '#4564F9',
        'ghost':'#57477E'
      },
    },
  },
  plugins: [],
}

