/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ssm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      'orange': '#f28705',
      'neutral': '#171717',
      'black': '#000000',
      'white': '#ffffff',
    },
    extend: {},
  },
  plugins: [],
}

