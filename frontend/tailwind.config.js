/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#428777',
        primary: '#F8F8F8',
        secondary: '#F3FFFC',
        warning: '#F0CA43',
        danger: '#EE4444',
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

