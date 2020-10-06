import { BaseTheme, createTheme } from "@shopify/restyle";

const palette = {
  primary: "#0AA351",
  primaryLight: "#61D597",
  primaryDark: "#02823D",

  black: "#1C1C1C",
  white: "#F0F2F3",
  gray: "#BDBDBD",
  grayDark: "#4F4F4F",
  grayLight: "#ECECEC",

  red: "#E81F1F",
};

const theme: BaseTheme = createTheme({
  colors: {
    ...palette,
    placeholder: palette.grayLight,
    error: palette.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    title: {
      fontSize: 28,
      fontFamily: "SFProText-SemiBold",
      color: palette.black,
    },
    caption: {
      fontSize: 16,
      fontFamily: "SFProText-Regular",
      color: palette.black,
    },
    validatorError: {
      fontSize: 12,
      fontFamily: "SFProText-Regular",
      color: palette.red,
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  sizes: {
    small: "10px",
  },
});

export type Theme = typeof theme;
export default theme;
