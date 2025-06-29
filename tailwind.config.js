/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 2s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
        colors: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          accent: 'var(--accent)',
        },
        boxShadow: {
          'neon': '0 0 5px theme(colors.primary), 0 0 20px theme(colors.primary)',
          'neon-accent': '0 0 5px theme(colors.accent), 0 0 20px theme(colors.accent)',
        },
      },
    },
    plugins: [require('daisyui')],
    daisyui: {
      themes: [
        {
          light: {
            "primary": "#3b82f6",
            "secondary": "#6b7280",
            "accent": "#8b5cf6",
            "neutral": "#ffffff",
            "base-100": "#ffffff",
            "base-200": "#f3f4f6",
            "base-300": "#e5e7eb",
          },
          dark: {
            "primary": "#3b82f6",
            "secondary": "#6b7280",
            "accent": "#8b5cf6",
            "neutral": "#000000",
            "base-100": "#000000",
            "base-200": "#111111",
            "base-300": "#222222",
          }
        },
      ],
      darkTheme: "dark",
    },
  }
  