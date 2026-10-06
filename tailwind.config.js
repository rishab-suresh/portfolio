/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        ink: '#0b0d0c',
        foam: '#eef1ec',
        ember: {
          DEFAULT: '#e85d04',
          soft: '#ff8a3d',
        },
        acid: '#c6f23a',
      },
    },
  },
  plugins: [],
}
