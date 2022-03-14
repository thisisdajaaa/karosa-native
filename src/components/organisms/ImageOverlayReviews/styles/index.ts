/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

const ImageOverlayReviewsStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
  },
  mainContainer: { flex: 0, marginRight: 10 },
  horizontalContainer: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
  },
});

export default ImageOverlayReviewsStyles;
