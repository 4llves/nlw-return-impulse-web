module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx", "index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'nlwReturn': "url('./assets/background.png')",
      },
      colors: {
        brand: {
          300: '#996dff',
          500: '#8257e6'
        }
      },
      borderRadius: {
        md: '4px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
