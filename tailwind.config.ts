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
          3: '#EAEAEA',
          4: '#F9F9F9',
          d1: '#FEFEFE',
          d2: '#EAEAEA',
          d3: '#4F4F4F',
          d4: '#434343',
        },
        mgreen: '#10B981',
        mred: '#E83C59',
        mindlink: '#FF6300',
        dred: {
          l: '#E83C59',
          d: '#ED4662',
        },
        dpink: {
          l: '#F472B6',
          d: '#F47CBB',
        },
        dfuchsia: {
          l: '#C355F7',
          d: '#C961FB',
        },
        dpurple: {
          l: '#7848FF',
          d: '#7D4FFF',
        },
        dblue: {
          l: '#2563EB',
          d: '#3971EB',
        },
        dsky: {
          l: '#7DD3FC',
          d: '#8AD9FF',
        },
        dgreen: {
          l: '#10B981',
          d: '#19C089',
        },
        dlime: {
          l: '#A3E635',
          d: '#A5E142',
        },
        dyellow: {
          l: '#FACC15',
          d: '#F5CD2D',
        },
        dorange: {
          l: '#FB923C',
          d: '#FC9948',
        },
        dgray: {
          l: '#8E8E8E',
          d: '#969696',
        },
        dbrown: {
          l: '#854D0E',
          d: '#8C5516',
        },
      },
    },
    fontSize: {
      smallest: '12px',
      detail: '14px',
      body: '16px',
      subtitle: '18px',
      title2: '24px',
      title: '28px',
      header: [
        '32px',
        {
          fontWeight: '500',
        },
      ],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    nextui(),
  ],
}
export default config
