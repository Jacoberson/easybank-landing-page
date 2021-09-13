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
      smallest: "10px",
      smaller: "13px",
      small: "15px",
      regular: "16px",
      body: "18px",
      medium: "20px",
      large: "32px",
      larger: "40px",
    },
    lineHeight: {
      18: "18px",
      20: "20px",
      21: "21.15px",
      25: "25px",
      28: "28px",
      37: "37.6px",
      47: "47px",
    },
    letterSpacing: {
      tight: "-0.14px",
      "tight-16": "-0.16px",
      "tight-20": "-0.2px",
      "tight-23": "-0.23px",
      "tight-29": "-0.29px",
      "tight-36": "-0.36px",
      "tight-57": "-0.57px",
      tighter: "-0.71px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
