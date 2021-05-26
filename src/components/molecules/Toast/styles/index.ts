/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

const ToastStyles = StyleSheet.create({
  base: {
    flexDirection: "column",
    height: 72,
    width: "80%",
    borderRadius: 10,
    backgroundColor: theme.colors.toast,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    opacity: 0.95,
  },
  title: {
    ...theme.textLightBold,
    marginBottom: 3,
    color: theme.colors.dark5,
  },
  message: {
    ...theme.textLight,
    color: theme.colors.dark5,
  },
});

export default ToastStyles;
