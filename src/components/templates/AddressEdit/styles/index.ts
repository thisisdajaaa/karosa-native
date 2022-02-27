/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

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
  defaultContainer: {
    marginTop: 12,
  },
  addressPin: {
    marginRight: 12,
  },
  txtLocation: {
    paddingRight: 18,
  },
  accountSettings: {
    marginLeft: "auto",
  },
});

export default AddressNewTemplateStyles;
