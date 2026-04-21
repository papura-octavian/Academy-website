import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "3rem"
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B5ED7",
          50: "#E9F1FF",
          100: "#D6E4FF",
          200: "#ADC8FF",
          300: "#84ABFF",
          400: "#5B8FFF",
          500: "#2B71F5",
          600: "#0B5ED7",
          700: "#0849A9",
          800: "#06357B",
          900: "#04214E"
        },
        accent: {
          DEFAULT: "#22C55E",
          50: "#E9F9EF",
          100: "#D3F2DE",
          200: "#A7E5BC",
          300: "#7BD89B",
          400: "#4FCB79",
          500: "#22C55E",
          600: "#1A9E4B",
          700: "#13773A",
          800: "#0B5027",
          900: "#042916"
        }
      },
      fontFamily: {
        sans: ["Segoe UI", "Helvetica Neue", "Arial", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(15, 23, 42, 0.25)",
        card: "0 12px 28px -16px rgba(15, 23, 42, 0.35)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
