/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, theme } from "@app/styles";

const ImagePickerStyles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  variationOneContainer: {
    alignItems: "center",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: theme.colors.dark10,
    height: DIMENS.screenHeight * 0.12,
    justifyContent: "center",
    overflow: "hidden",
    width: DIMENS.screenWidth * 0.22,
  },
  variationTwoContainer: {
    alignItems: "center",
    backgroundColor: theme.colors.dark35,
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: theme.colors.white,
    borderRadius: 50,
    height: DIMENS.screenHeight * 0.14,
    justifyContent: "center",
    overflow: "hidden",
    width: DIMENS.screenWidth * 0.24,
  },
  variationThreeContainer: {
    alignItems: "center",
    backgroundColor: theme.colors.dark35,
    height: DIMENS.screenHeight * 0.23,
    justifyContent: "center",
    overflow: "hidden",
    width: DIMENS.screenWidth,
  },
  image: {
    width: DIMENS.screenWidth,
    height: "100%",
    opacity: 0.5,
    zIndex: 21,
  },
  cameraIcon: {
    zIndex: 1,
    position: "absolute",
  },
  txtAddImg: {
    ...theme.textLight,
    textAlign: "center",
    fontWeight: "300",
    color: theme.colors.dark30,
  },
});

export default ImagePickerStyles;
