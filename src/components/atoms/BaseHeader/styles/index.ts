/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  mainContainer: { height: 64, backgroundColor: "transparent" },
  leftContainer: {
    position: "absolute",
    top: 25,
    left: 16,
  },
  rightContainer: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 20,
    right: 4,
  },
  title: {
    ...theme.textRegular,
    fontWeight: "700",
    alignSelf: "center",
    position: "absolute",
    top: 27,
    marginRight: 13,
  },
  txtRight: {
    ...theme.link1,
    fontWeight: "400",
    position: "absolute",
    top: 5,
  },
  txtLeft: {
    ...theme.title,
    width: 70,
    height: 50,
    position: "absolute",
    top: 23,
    left: 18,
    fontWeight: "500",
  },
  icon: {
    fontSize: 24,
    color: theme.colors.primary,
  },
});
