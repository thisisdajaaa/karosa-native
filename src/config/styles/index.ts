import { Platform } from "react-native";

import { palette } from "./colors";

const styles = {
  ...palette,
  text: {
    color: palette.dark,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: Platform.OS === "android" ? "SFProText-Regular" : "Avenir",
  },
};

export default styles;
