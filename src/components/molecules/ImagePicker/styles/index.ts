/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, theme } from "@app/styles";

const ImagePickerStyles = StyleSheet.create({
  variationOneContainer: {
    alignItems: "center",
    backgroundColor: theme.colors.light15,
    borderRadius: 5,
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
  variationFourMainContainer: {
    width: 82,
    height: 76,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: theme.colors.primary,
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
  },
  addIcon: {
    position: "absolute",
    zIndex: 99,
    alignSelf: "center",
  },
  image: {
    width: DIMENS.screenWidth,
    height: "100%",
    opacity: 0.5,
    zIndex: 21,
  },
  variationFourCamera: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    resizeMode: "cover",
    opacity: 0.5,
  },
  variationFourSubContainer: {
    width: 82,
    height: 76,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: theme.colors.primary,
    borderRadius: 5,
  },
  iconContainer: {
    flexGrow: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraIcon: {
    zIndex: 1,
    position: "absolute",
  },
  txtAddImg: {
    ...theme.textSmall,
    textAlign: "center",
    fontWeight: "300",
    color: theme.colors.black,
  },
  txtContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: theme.colors.primary,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  txtVariationFour: {
    color: theme.colors.white,
    ...theme.textLight,
  },
});

export default ImagePickerStyles;
