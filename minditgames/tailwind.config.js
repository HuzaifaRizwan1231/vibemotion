/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the MindIt Games logo (split blue/orange brain)
        brand: {
          ink: '#0B1020',      // app background
          surface: '#10172E',  // card surface
          surface2: '#161D3A', // elevated surface
          border: '#2A2F52',
          blue: {
            DEFAULT: '#38BDF8',
            soft: '#7DD3FC',
            deep: '#0EA5E9',
          },
          orange: {
            DEFAULT: '#FB923C',
            soft: '#FDBA74',
            deep: '#F97316',
          },
          violet: '#7C3AED',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #38BDF8 0%, #7C3AED 50%, #FB923C 100%)',
        'brand-radial': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.16) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 90% 20%, rgba(251,146,60,0.12) 0%, transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 50px rgba(56,189,248,0.18)',
        'glow-orange': '0 0 50px rgba(251,146,60,0.18)',
        card: '0 10px 35px rgba(0,0,0,0.45)',
      },
      animation: {
        'float-slow': 'float 9s ease-in-out infinite',
        'float-slower': 'float 13s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(4deg)' },
        },
        blob: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '100%': { transform: 'translate(40px,30px) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
