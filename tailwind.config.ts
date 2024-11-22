import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "0px", // 0px - 319px (use max-width for upper limit)
      "sm-xs": "320px", // 320px - 480px
      sm: "481px", // 481px - 575px
      "md-sm": "576px", // 576px - 767px
      md: "768px", // 768px - 991px
      lg: "992px", // 992px - 1199px
      xl: "1200px", // 1200px - 1399px
      "2xl": "1400px", // 1400px and above
    },
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      colors: {
        "primary-900": "#AC1619",
        "primary-800": "#B8171B",
        "primary-700": "#C4191D",
        "primary-600": "#CF1A1F",
        "primary-500": "#E61D22",
        "primary-400": "#E83338",
        "primary-300": "#EB4A4E",
        "primary-200": "#ED6064",
        "primary-100": "#F0777A",
        "primary-50": "#F28E90",
        "primary-20": "#FFE1E1",
        "primary-10": "#FFF7F7",
      },
      fontFamily: {
        bosch: "var(--font-bosch)",
        poppins: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
};
export default config;
