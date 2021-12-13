/**
 *
 * @format
 *
 */

// import Constants from 'expo-constants';
import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

const AddressSearchTemplateStyles = StyleSheet.create({
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
    backgroundColor: "#ecf0f1",
  },
  mainContainer: { backgroundColor: theme.colors.white },
  touchableStyle: { top: 10 },
  headerContainer: {
    width: "100%",
    maxWidth: "100%",
    zIndex: 1,
    position: "absolute",
  },
  buttonBottomView: {
    position: "absolute",
    bottom: "1%",
    alignSelf: "center",
    width: "100%",
    padding: "5%",
  },
  buttonPrimary: {
    backgroundColor: theme.colors.primary,
  },
});

export default AddressSearchTemplateStyles;
