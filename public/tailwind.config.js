const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      // Cria uma variante 'daltonismo'
      addVariant('daltonismo', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.daltonismo .${e(`daltonismo${separator}${className}`)}`;
        });
      });
    }),
  ],
};
