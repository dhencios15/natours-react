const windmill = require('@windmill/react-ui/config');

module.exports = windmill({
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-background': "url('/img/hero-pattern.svg')",
      },
    },
  },
  variants: {},
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
});
