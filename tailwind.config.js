module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#111111',
      secondary: '#f4f4f4',
      tertiary: '#f8f8f8',
      quaternary: '#ffffff',
      quinary: '#252525',
      menu: '#777777',
      link: '#888888',
    },
    fontFamily: {
      primary: ['Open Sans', 'sans-serif'],
      secondary: ['Dosis', 'sans-serif'],
    },
    fontSize: {
      xsm: '0.7rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    letterSpacing: {
      tight: '-.075em',
      normal: '0',
      wide: '.05em',
      widest: '.1em',
    },
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      boxShadow: {
        'navbar': '0 1px 0px 0px rgba(0, 0, 0, 0.05)',
      }
    }
  },
  plugins: [],
};