/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        myColor: {
          bold: 'blue',
        },
      },
      fontSize: {
        mySize: '14px',
      },
    },
  },
  plugins: [],
};
