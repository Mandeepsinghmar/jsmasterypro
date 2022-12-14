module.exports = {
  content: [
    './pages/**/*.{js, jsx}',
    './components/**/*.{js, jsx}',
    './sections/**/*.{js, jsx}',
    './hoc/**/*.{js, jsx}',
    './data/**/*.{js, jsx}',
    './styles/**/*.{js, jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pro-black-1': '#0D1117',
        'pro-black-2': '#161B22',
        'pro-gray': '#969BA5',
        'pro-shadow': 'rgba(0, 0, 0, 0.1)',
        'pro-border': 'rgba(49, 53, 56, 0.4)',
        'pro-w-white': '#F5F9FF',
        'pro-w-black': '#1F2428',
        'pro-w-gray': '#55616D',
        'pro-w-shadow': 'rgba(224, 240, 255, 0.8)',
        'pro-w-shadow2': 'rgba(212, 233, 255, 0.7)',
        'pro-w-blue': '#E4F0FD',
        'pro-w-border': 'rgba(174, 194, 208, 0.4)',
        'pro-black-400': '#242C38',
        'pro-white-800': '#D0DFFF',
        'pro-white-400': '#A3B3BC',
        'pro-blue-400': '#2190FF',
        'pro-red': '#FF6252',
      },
      boxShadow: {
        'pro-dark': '0px 3px 20px rgba(28, 33, 41, 0.3)',
        'pro-white': '0px 3px 20px rgba(33, 144, 255, 0.07)',
        'pro-black-400': 'inset 0px 1px 0px rgba(255, 255, 255, 0.06)',
      },
    },
    screens: {
      xxs: '330px',
      xs: '400px',
      sx: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1220px',
      '3xl': '1700px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
};
