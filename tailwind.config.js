/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Earth Tone palette: warm terracotta, deep forest greens, soft sands, and cream.
      colors: {
        cream: {
          DEFAULT: "#FAF6EF",
          50: "#FDFBF6",
          100: "#FAF6EF",
          200: "#F3ECDD",
          300: "#EADFC8",
        },
        sand: {
          DEFAULT: "#E7D9BE",
          100: "#F2E8D2",
          200: "#E7D9BE",
          300: "#D6C29E",
          400: "#BFA87F",
        },
        terracotta: {
          DEFAULT: "#C2593A",
          50: "#F5E3DB",
          100: "#ECC5B6",
          300: "#D78062",
          500: "#C2593A",
          600: "#A94726",
          700: "#8B3A1F",
        },
        forest: {
          DEFAULT: "#2F4A3A",
          50: "#E5EBE7",
          100: "#B7C6BC",
          300: "#6F8A7A",
          500: "#2F4A3A",
          700: "#223529",
          900: "#14201A",
        },
        ink: "#1F2A24",
      },
      fontFamily: {
        // High-end serif for headings, clean sans-serif for body copy.
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", '"Helvetica Neue"', "Arial", "sans-serif"],
      },
      letterSpacing: {
        "tightest-serif": "-0.02em",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.9s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
