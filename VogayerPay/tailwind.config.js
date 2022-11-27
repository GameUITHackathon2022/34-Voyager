const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} 
 @type {Record<"sans" | "serif" | "mono", string[]> & {gilroy: string[]}}
*/
module.exports = {
  plugins: [],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,html,css}",
  ],
  theme: {
    fonts: {
      sans: [...fontFamily.sans],
      serif: [...fontFamily.serif],
      mono: [...fontFamily.mono],
      gilroy: ["SVN Gilroy", ...fontFamily.sans],
    },
    extend: {
      screens: {
        desktop: "768px",
        // => @media (min-width: 768px) { ... }
      },
      fontSize: {
        title60: ["60px", "72px"], // bold
        title42: ["42px", "60px"], // bold
        title32: ["32px", "40px"], // bold
        title24: ["24px", "36px"], // bold
        subtitle20: ["20px", "30px"], // semibold | bold
        subtitle18: ["18px", "28px"], // semibold | medium
        body16: ["16px", "24px"], // bold | medium
        body14: ["14px", "22px"], // semibold
        caption12: ["12px", "18px"], // semibold
      },
      boxShadow: {
        shadow1: "0px 4px 40px rgba(43, 89, 255, 0.08)",
        shadow4: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        shadow8: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        shadow4Revert: "0.0px -2.0px 4.0px 0px rgba(0, 0, 0, 0.1)",
        dropshadow: "0px 4px 40px rgba(255, 95, 35, 0.08)",
        "dropshadow-form": "0px 8px 32px rgba(28, 141, 254, 0.12)",
        depth4: "0px 64px 64px -48px rgba(15, 15, 15, 0.08)",
        "shadow-special": "0px 16px 48px rgba(0, 0, 0, 0.08)",
      },
      height: {
        "header-desktop": "84px",
        "header-mobile": "104px",
        "hover-image": "122px",
        instruction: "700px",
        "banner-desktop": "calc(100vh - 84px)",
        "banner-mobile": "calc(100vh - 104px)",
        "swiper-item": "300px",
      },
      spacing: {
        "header-desktop": "84px",
        "header-mobile": "80px",
        "header-navbar": "358px",
      },
      width: {
        "button-mobile-navbar": "calc(100% - 48px)",
        "button-mobile": "calc(100% - 32px)",
        "swiper-mobile": "calc(100vw - 64px)",
        "hover-image": "150px",
        image: "600px",
        content: "830px",
      },
      minWidth: {
        mobile: "360px",
        "4/5": "80%",
        content: "830px",
      },
      minHeight: {
        screen: "100vh",
        content: "50vh",
        text: "48px",
        "banner-desktop": "600px",
      },
      maxWidth: {
        "8xl": "1320px",
        "1/2": "50%",
        "1/4": "25%",
        "4/5": "80%",
        "3/4": "75%",
        content: "830px",
      },
      borderRadius: {
        "2lg": "50px",
        "3lg": "163px",
        "4lg": "200px",
      },
    },
  },
  plugins: [],
};
