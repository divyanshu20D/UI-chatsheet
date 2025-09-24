import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        fancy: "0 10px 20px rgba(240, 46, 170, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
