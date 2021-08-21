/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

const ImageOverlayStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textViewStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black,
    opacity: 0.8,
  },
  textStyle: {
    color: "white",
  },
});

export default ImageOverlayStyles;
