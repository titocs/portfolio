/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Background or Highlighted Text
        'primary-very-dark-blue': '#111729',
        'primary-dark-blue': '#38BDF8',
        'primary-blue': '#38BDF8',
        'dark-grey': '#64748B',
        grey: '#94A3B8',
        'purple-code': '#DF76AF',
        'card-grey': '#20293A',
        'light-blue': '#ADE6FF',
        'dark-blue-font': '#075F86',
      },
      fontFamily: {
        'roboto-mono': ['Roboto Mono'],
        inconsolata: ['Inconsolata'],
      },
    },
  },
  plugins: [],
};
