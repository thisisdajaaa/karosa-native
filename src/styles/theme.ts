import palette from "./colors";

const theme = {
  colors: {
    ...palette,
  },
  textTitle: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: "SFProText-Bold",
  },
  textSmall: {
    fontSize: 10,
    lineHeight: 12,
  },
  textLight: {
    fontSize: 12,
    lineHeight: 14.06,
  },
  textListItem: {
    fontSize: 14,
    lineHeight: 16,
  },
  textLightBold: {
    fontSize: 11,
    lineHeight: 14.06,
    fontFamily: "SFProText-Bold",
  },
  textRegular: {
    fontSize: 16,
    lineHeight: 18.75,
    fontFamily: "SFProText-Regular",
  },
  textSemiBold: {
    fontSize: 16,
    lineHeight: 18.75,
    fontFamily: "SFProText-Semibold",
  },
  textPicker: {
    fontSize: 18,
    lineHeight: 18.75,
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
