import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')
const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true, // 👈 enable hover only when supported
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        bg: {
          l: '#FFFFFF',
          d: '#2D2D2D',
        },
        mgray: {
          1: '#242424',
          2: '#595959',
          3: '#BEBEBE',
          4: '#EAEAEA',
          5: '#F9F9F9',
          6: '#D9D9D9',
          d1: '#FEFEFE',
          d2: '#EAEAEA',
          d3: '#4F4F4F',
          d4: '#434343'
        },
        vidva: '#8B2333',
        mgreen: '#10B981',
        mred: '#E83C59',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    boxShadow:{
      '1': '0px 4px 15px 0px #DADADA',
      '2': '10px 10px 30px 0px #E2E2E2, -10px -10px 30px 0px #F2F2F2',
    },
    fontSize: {
      'large-title': 'clamp(1.75rem, 5vw + 0.5rem, 3rem)',       // Large Title
        'title-1': 'clamp(1.5rem, 4.5vw + 0.5rem, 2.5rem)',         // Title 1
        'title-2': 'clamp(1.375rem, 4vw + 0.25rem, 2.25rem)',       // Title 2
        'title-3': 'clamp(1.25rem, 3.5vw + 0.25rem, 1.75rem)',         // Title 3
        'headline': 'clamp(1.125rem, 3vw + 0.25rem, 1.75rem)',      // Headline
        'body': 'clamp(1rem, 2.2vw + 0.25rem, 1.375rem)',      // Body
        'callout': 'clamp(0.875rem, 2vw + 0.2rem, 1.25rem)',        // Callout
        'subheadline': 'clamp(0.8125rem, 1.8vw + 0.2rem, 1.125rem)', // Subheadline
        'footnote': 'clamp(0.75rem, 1.6vw + 0.15rem, 1rem)',        // Footnote
        'caption': 'clamp(0.6875rem, 1.5vw + 0.15rem, 0.875rem)',   // Caption
    },
    aspectRatio: {
      '2/3': '2 / 3',
      '4/3': '4 / 3',
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
    nextui(),
  ],
}
export default config
