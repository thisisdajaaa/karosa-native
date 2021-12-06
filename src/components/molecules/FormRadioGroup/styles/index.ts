/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const FormRadioGroupStyles = StyleSheet.create({
  container: {
    width: "95%",
  },
  radioContainer: {
    flex: 1,
    position: "relative",
    left: "-5.5%",
    flexDirection: "row",
    height: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoContainer: {
    position: "relative",
    left: "70.5%",
  },
  txtInfo: {
    ...theme.textSemiBold,
    fontWeight: "500",
  },
});

export default FormRadioGroupStyles;
