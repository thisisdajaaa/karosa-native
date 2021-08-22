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
  horizontalContainer: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  varietyImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
});

export default ImageOverlayReviewsStyles;
