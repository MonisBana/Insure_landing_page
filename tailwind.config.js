module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "how-we-work-pattern":
          "url('../src/assets/images/bg-pattern-how-we-work-desktop.svg')",
        "how-we-work-pattern-mob":
          "url('../src/assets/images/bg-pattern-how-we-work-mobile.svg')",
        "footer-pattern":
          "url('../src/assets/images/bg-pattern-footer-desktop.svg')",
        "footer-pattern-mob":
          "url('../src/assets/images/bg-pattern-footer-mobile.svg')",
      }),
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
