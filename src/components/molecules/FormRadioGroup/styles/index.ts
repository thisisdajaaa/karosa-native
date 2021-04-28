/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS } from "@app/styles";

const FormRadioGroupStyles = StyleSheet.create({
  container: {
    width: "95%",
    marginLeft: "2%",
  },
  radioContainer: {
    position: "relative",
    left: "-8.5%",
    flexDirection: "row",
    height: DIMENS.screenWidth * 0.08,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default FormRadioGroupStyles;
