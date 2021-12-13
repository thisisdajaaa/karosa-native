/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";
import Constants from "expo-constants";
import { Dimensions, StyleSheet } from "react-native";

const AddressNewTemplateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapContainer: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#ecf0f1",
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  infoContainerWithoutChevron: {
    position: "relative",
  },
  subContainer: {
    backgroundColor: theme.colors.white,
    marginBottom: 10,
  },
  footer: {
    flex: 3,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    margin: 10,
    justifyContent: "center",
  },
  scrollviewContainer: {
    height: 0.93 * Dimensions.get("window").height,
  },
  scrollviewAdjusted: {
    height: 0.5 * Dimensions.get("window").height,
    paddingBottom: Dimensions.get("window").height / 8,
  },
  viewFlex: {
    flex: 1,
  },
  fullWidth: {
    width: "100%",
  },
  bottomButtonStyle: { fontSize: 16 },
});

export default AddressNewTemplateStyles;
