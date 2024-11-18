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
      'none': 'none',
    },
    fontSize: {
      title: 'clamp(1.25rem, 2vw + 1rem, 2rem)',/* 20px to 32px */
      'header-1': 'clamp(1.5rem,2.5vw + 1rem,2.25rem)',/* 24px to 36px */
      'header-2': ' clamp(1.125rem,2vw + 0.875rem,1.75rem)',/* 18px to 28px */
      'header-3': 'clamp(1rem,1.5vw + 0.875rem,1.5rem)',/* 16px to 24px */
      subtitle: 'clamp(0.875rem,1.5vw + 0.75rem,1.25rem)',/* 14px to 20px */
      'body-1': 'clamp(0.75rem,1.25vw + 0.625rem,1.125rem)',/* 12px to 18px */
      'body-2': 'clamp(0.625rem, 1vw + 0.5rem, 1rem)', /* 10px to 16px */
      detail: 'clamp(0.625rem,1vw + 0.5rem,0.875rem)', /* 10px to 14px */
    },
    aspectRatio: {
      'square': '1 / 1',
      '2/3': '2 / 3',
      '4/3': '4 / 3',
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    nextui(),
  ],
}
export default config