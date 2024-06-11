/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#FFFFFF',
        primary: '#0E4BA2',
        secondary: '',
        warning: '#F0CA43',
        danger: '#EE4444',
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

