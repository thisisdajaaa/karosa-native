/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";

const ImageOverlayStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  textViewStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: 200,
    height: 200,
    opacity: 0.8,
  },
  textStyle: {
    alignItems: "center",
    color: "white",
  },
});

export default ImageOverlayStyles;
