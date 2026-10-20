/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        background: "#0b0d10",
        surface: {
          DEFAULT: "#12151a",
          hover: "#171b22",
          elevated: "#1b2028",
        },
        border: {
          DEFAULT: "#222731",
          subtle: "#1a1e26",
          strong: "#313846",
        },
        foreground: "#f3f4f6",
        muted: "#9ca3af",
        primary: {
          DEFAULT: "#10b981",
          foreground: "#052e16",
        },
      },
    },
  },
  plugins: [],
}
