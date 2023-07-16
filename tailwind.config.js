/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      cccBlue: '#09192f',
      cccDarkBlue: '#0a192f',
      cccVeryDarkBlue: '#0a1221',
      cccLightBlue: '#172a46',
      cccGrey: '#ccd6f6',
      cccNeonGreen: '#64ffda',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  options: {
    safelist: [/(text|bg|border|outline)-ccc(Blue|DarkBlue|VeryDarkBlue|LightBlue|Grey|NeonGreen)/],
  },
};
