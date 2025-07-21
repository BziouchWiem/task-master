module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1E293B',
          200: '#0F172A',
          300: '#020617',
        },
        light: {
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
        }
      },
    },
  },
  plugins: [],
}