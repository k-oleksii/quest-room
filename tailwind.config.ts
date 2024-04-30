import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      golden: '#fec432',
      orange: '#f2890f',
      lightGray: '#d9d9d9',
      silver: '#a6a6a6',
      silverGray: '#e6e6e6',
      darkGray: '#535353',
      grayishSilver: '#c6c4c2',
      white: '#ffffff',
      charcoal: '#615e5c',
      black: '#000000',
      darkOlive: '#514321',
      purple: '#8a43ff',
    },
    extend: {
      backgroundImage: theme => ({
        'header-pattern':
          'linear-gradient(to bottom, rgba(0, 0, 0, .2) 0%, rgba(0, 0, 0, 0) 60%)',
        'cover-pattern':
          'linear-gradient(0deg, #1c1b1b 5%, rgba(252, 186, 3, 0) 99%)',
        'cover-inner-pattern':
          'radial-gradient(circle, rgba(0,0,0,0.04) 48%, rgba(0,0,0,0.76) 91%)',
      }),
      boxShadow: {
        btn: 'inset -1px -1px 52px -16px rgba(255, 255, 255, 0.3)',
      },
      maxWidth: {
        container: '1080px',
        containerInner: '1178px',
      },
    },
  },
  plugins: [],
};
export default config;
