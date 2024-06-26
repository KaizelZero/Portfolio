import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        dm_sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#171717",
        border: "#2C2C2C",
        primary: "#E63946",
        secondary: "#D1D5DB",
      },
    },
  },
  plugins: [],
};
