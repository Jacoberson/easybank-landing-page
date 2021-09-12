module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      primary: {
        "dark-blue": "hsl(233, 26%, 24%)",
        "lime-green": "hsl(136, 65%, 51%)",
        "bright-cyan": "hsl(192, 70%, 51%)",
      },
      neutral: {
        "grayish-blue": "hsl(233, 8%, 62%)",
        "light-grayish-blue": "hsl(220, 16%, 96%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      "public-sans": ["Public Sans", "sans-serif"],
    },
    fontWeight: {
      300: 300,
      400: 400,
      700: 700,
    },
    fontSize: {
      body: "18px",
    },
    lineHeight: {
      21: "21.15px",
    },
    letterSpacing: {
      tight: "-0.14px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
