module.exports = {
  content: ['index.html'],
  jit: true,  // Aktifkan Just-In-Time (JIT) mode
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px',
      },
      colors: {
        clifford: '#da373d',
        primary: '#14b8a6',
        dark: '#0f172a',
        second: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};