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
  container: {
    flex: 1,
  },
  subContainer: { backgroundColor: theme.colors.white, flex: 2 },
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
  flexRow: {
    flexDirection: "row",
  },
  outlineAddress: {
    marginRight: 8,
  },
  searchInput: {
    width: "100%",
    backgroundColor: theme.colors.light5,
  },
  searchContainer: {
    flex: 0,
    width: "100%",
    top: -8,
  },
  searchList: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.light10,
  },
  pinContainer: {
    position: "absolute",
    marginLeft: -24,
    marginTop: -48,
    zIndex: 3,
    top: "50%",
    left: "50%",
  },
  txtButton: {
    ...theme.textRegular,
  },
});

export default AddressSearchTemplateStyles;
