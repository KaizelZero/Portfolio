/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#171717",
        border: "#2C2C2C",
        primary: "#E63946",
      },
    },
  },
  plugins: [],
};
