import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#7c3aed",
        accent: "#06b6d4"
      }
    }
  },
  plugins: []
};

export default config;
