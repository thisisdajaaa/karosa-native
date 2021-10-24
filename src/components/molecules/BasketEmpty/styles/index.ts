/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";

const BasketEmptyStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 110,
  },
  image: {
    width: 150,
    height: 150,
  },
  txtContainer: {
    width: 260,
    marginVertical: 32,
  },
  txt: {
    textAlign: "center",
    lineHeight: 18.75,
  },
  btnTitle: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 18.75,
  },
  btn: {
    width: 238,
    height: 48,
    borderRadius: 25,
  },
});

export default BasketEmptyStyles;
