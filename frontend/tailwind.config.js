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
        primary: '#BAE3DB',
        secondary: '#5d837b',
        warning: '#F0CA43',
        danger: '#EE4444',
        borderColor: '#EDF1F7',
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

