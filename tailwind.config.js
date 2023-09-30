const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: '#338EF7',
            secondary: '#338EF7',
            success: '#12A150',
            danger: '#F31260',
            foreground: '#18181B',
            background: '#FAFAFA',
          },
        },
        dark: {
          colors: {
            primary: '#0029E5',
            secondary: '#0029E5',
            success: '#45D483',
            danger: '#C20E4D',
            foreground: '#FAFAFA',
            background: '#18181B',
          },
        },
      },
    }),
  ],
}
