import palette from "./colors";

const theme = {
  colors: {
    ...palette,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: "SFProText-Bold",
  },
  textLight: {
    fontSize: 12,
    lineHeight: 14,
  },
  textRegular: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "SFProText-Regular",
  },
  textBold: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "SFProText-Bold",
  },
  link1: {
    color: palette.primary,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "SFProText-Regular",
  },
  link2: {
    fontFamily: "SFProText-Regular",
    lineHeight: 14,
    fontSize: 12,
    color: palette.primary,
  },
  validatorError: {
    fontSize: 12,
    fontFamily: "SFProText-Regular",
    lineHeight: 14,
    color: palette.red15,
  },
};

export default theme;
