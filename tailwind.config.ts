import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F2F0E8',
        ink: '#28261F',
        muted: '#75706A',
        line: '#E5E0D4',
        chip: '#FBFAF4',
        accent: '#D97757'
      },
      fontFamily: {
        serif: ['Newsreader', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      maxWidth: {
        wrap: '1120px'
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'none' }
        },
        float: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-26px,22px) scale(1.08)' }
        },
        sweep: {
          '0%, 18%': { backgroundPosition: '120% 0' },
          '82%, 100%': { backgroundPosition: '-20% 0' }
        }
      },
      animation: {
        rise: 'rise .85s cubic-bezier(.2,.7,.2,1) both',
        float: 'float 9s ease-in-out infinite',
        sweep: 'sweep 5.5s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config;
