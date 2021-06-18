/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";

const QuantityStyles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 0.5,
    width: 100,
  },
  buttonInc: {
    justifyContent: "center",
    flexDirection: "row",
    width: 24,
    borderLeftColor: "grey",
    borderLeftWidth: 0.5,
  },
  buttonDec: {
    justifyContent: "center",
    flexDirection: "row",
    width: 24,
    borderRightColor: "grey",
    borderRightWidth: 0.5,
  },
  countStyle: {
    alignContent: "center",
    paddingHorizontal: 10,
  },
});

export default QuantityStyles;
