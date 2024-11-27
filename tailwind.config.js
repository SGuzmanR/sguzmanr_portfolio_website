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
        special_principal: '#0E7490',
        special_secondary: '#0B5D73',
        special_light: '#118BAD',
        gradient_end: '#083344'
      },
    },
  },
  plugins: [],
};
