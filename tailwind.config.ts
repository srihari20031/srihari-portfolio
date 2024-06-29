/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
          7: "#80D0C7",
          8: "#1a202c",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
        quote: "var(--font-quotes)",
        nunito: "var(--font-nunito)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      boxShadow: {
        'custom-white': '0 0 10px rgba(0, 184, 168, 0.8), 0 0 20px rgba(0, 184, 168, 0.6), 0 0 30px rgba(0, 184, 168, 0.4)',
        
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "custom-gradient":  'linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)',
        'subheading-gradient': 'linear-gradient(135deg, #534E8A, #B0A8B9)',
        "project-bg": "url('/Bg-projects.png')",
        'glow': "url('/Gradient.png')"
      
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        fly: "fly 10s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fly: {
          "0%": {
            transform: "translateX(-20%) translateY(0) rotate(-10deg)",
          },
          "25%": {
            transform: "translateX(25%) translateY(-10vh) rotate(0deg)",
          },
          "50%": {
            transform: "translateX(20%) translateY(-20vh) rotate(10deg)",
          },
          "75%": {
            transform: "translateX(0) translateY(-10vh) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(-20%) translateY(0) rotate(-10deg)",
          },
        },
      },
    },
  },
  
};
