const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './app/javascript/widget/**/*.vue',
    './app/javascript/portal/**/*.vue',
    './app/javascript/shared/**/*.vue',
    './app/javascript/survey/**/*.vue',
    './app/views/**/*.html.erb',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    colors: {
      white: colors.white,
      woot: {
        25: '#e86262',
        50: '#e86262',
        75: '#de5858',
     100: "#de5858",
      200: "#d44e4e",
      300: "#ca4444",
      400: "#c03a3a",
      500: "#b63030",
      600: "#ac2626",
      700: "#a21c1c",
      800: "#981212",
      900: "#8e0808",
      },
      green: {
        50: '#E6F8E6',
        100: '#C4EEC2',
        200: '#9DE29A',
        300: '#6FD86F',
        400: '#44CE4B',
        500: '#00C41D',
        600: '#00B412',
        700: '#00A200',
        800: '#009000',
        900: '#007000',
      },
      yellow: {
        50: '#FEFDE8',
        100: '#FDFCC4',
        200: '#FCF68C',
        300: '#F9E736',
        400: '#F6D819',
        500: '#E6C00C',
        600: '#C69608',
        700: '#9E6b0A',
        800: '#835510',
        900: '#6F4514',
      },
      slate: {
        25: '#F8FAFC',
        50: '#F1F5F8',
        75: '#EBF0F5',
        100: ' #E4EBF1',
        200: ' #C9D7E3',
        300: ' #AEC3D5',
        400: ' #93AFC8',
        500: ' #779BBB',
        600: ' #446888',
        700: ' #37546D',
        800: ' #293F51',
        900: ' #1B2836',
      },
      black: {
        50: '#F7F7F7',
        100: '#ECECED',
        200: '#DDDDE0',
        300: '#C6C7CA',
        400: '#ABACAF',
        500: '#96979C',
        600: '#6E6F73',
        700: '#5A5B5F',
        800: '#3C3D40',
        900: '#1B1C1F',
      },
      red: {
        50: '#FFEBEE',
        100: '#FFCCD1',
        200: '#F69898',
        300: '#EF6F6F',
        400: '#F94B4A',
        500: '#FF382D',
        600: '#F02B2D',
        700: '#DE1E27',
        800: '#D11320',
        900: '#C30011',
      },
    },
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
  variants: {},
  plugins: [
    // eslint-disable-next-line
    require('@tailwindcss/typography'),
  ],
};
