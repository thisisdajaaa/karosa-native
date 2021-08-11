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
    borderColor: "white",
    borderWidth: 0.5,
    width: 100,
  },
  buttonInc: {
    backgroundColor: "#0AA351",
    justifyContent: "center",
    flexDirection: "row",
    width: 24,
    borderLeftColor: "grey",
    borderLeftWidth: 0.5,
  },
  buttonDec: {
    backgroundColor: "#0AA351",
    justifyContent: "center",
    flexDirection: "row",
    width: 24,
    borderRightColor: "grey",
    borderRightWidth: 0.5,
  },
  countStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default QuantityStyles;
