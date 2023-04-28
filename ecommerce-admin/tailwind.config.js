/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#11999E',
        highlight: '#E3FDFD',
        bgGray: '#fbfafd',
        dashColor: '#003638',
        btnBackground: '#CDFFE8',
        btnSecondary: '#FEF1E6',
        btnSecondaryBorder: '#CC7351',
        btnCategorybg: '#F6E5F5',
        btnCategoryBorder: '#7743DB',
      },
    },
  },
  plugins: [],
}
