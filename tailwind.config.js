/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        parisienne: 'var(--font-parisienne)',
        montserrat: 'var(--font-montserrat)',
      },
      colors: {
        primary: '#030712',
        secondary: '#FFFFFF',
        special_principal: '#257A9E',
        special_secondary: '#2E99C5',
        special_light: '#4EAED6',
      },
    },
  },
  plugins: [],
};
