/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, theme } from "@app/styles";

const AddressSearchTemplateStyles = StyleSheet.create({
  map: {
    zIndex: 3,
    width: DIMENS.screenWidth,
    height: DIMENS.screenHeight,
  },
  mapContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ecf0f1",
  },
  mainContainer: { backgroundColor: theme.colors.white, flex: 1 },
  touchableStyle: { top: 15 },
  buttonContainer: {
    position: "absolute",
    bottom: "2%",
    width: "90%",
    alignSelf: "center",
  },
  buttonPrimary: {
    backgroundColor: theme.colors.primary,
  },
});

export default AddressSearchTemplateStyles;
