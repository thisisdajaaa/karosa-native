/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

const AddressNewTemplateStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: "2%",
    width: "90%",
    alignSelf: "center",
  },
});

export default AddressNewTemplateStyles;
