/**
 *
 * @format
 *
 */

// import Constants from 'expo-constants';
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
    // paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#ecf0f1",
  },
});

export default AddressSearchTemplateStyles;
