/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const TimelineStyles = StyleSheet.create({
  circle: {
    top: 0,
    right: -6,
    height: 10,
    width: 10,
    borderRadius: 5,
    position: "absolute",
    backgroundColor: theme.colors.primary,
  },
  colorGreen: { color: theme.colors.primary },
  leftContent: {
    borderRightColor: theme.colors.dark10,
    borderRightWidth: 2,
    width: 60,
    paddingRight: 10,
    position: "relative",
    paddingBottom: 15,
  },
  leftContentNoBorder: {
    paddingRight: 10,
    position: "relative",
    paddingBottom: 15,
  },
  mainContainer: {
    flexDirection: "row",
  },
  padLeft: { paddingLeft: 15 },
});

export default TimelineStyles;
