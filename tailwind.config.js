module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "how-we-work-pattern":
          "url('../src/assets/images/bg-pattern-how-we-work-desktop.svg')",
        "footer-pattern":
          "url('../src/assets/images/bg-pattern-footer-desktop.svg')",
      }),
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
