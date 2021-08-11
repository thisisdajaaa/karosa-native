/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const StoreBarStyles = StyleSheet.create({
  storeNameBarStyle: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  chevronStyle: {
    alignItems: "center",
    flexDirection: "row",
  },
  edittxt: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
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
});

export default StoreBarStyles;
