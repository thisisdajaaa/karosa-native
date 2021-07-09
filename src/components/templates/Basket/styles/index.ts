/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const BasketStyles = StyleSheet.create({
  tabBarContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
    zIndex: 1,
  },
  text: {
    ...theme.textRegular,
    fontWeight: "400",
    marginLeft: 8,
  },
  container: {
    backgroundColor: theme.colors.transparent,
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  bottomStyleLeft: {
    flexDirection: "row",
  },
  bottomStyleRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomContainer: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtotaltxt: {
    ...theme.textBold,
    color: "#31A14C",
  },
  buttonStyle: {
    margin: 8,
  },
  bottomSection: {
    flexDirection: "column-reverse",
  },
  topBar: {
    width: "90%",
  },
  generalStyle: {
    height: "100%",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  voucherBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  chevronsize: {
    width: "89%",
  },
  labeltxt: {
    paddingLeft: 24,
    ...theme.textBold,
  },
});

export default BasketStyles;
