import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  txtError: {
    ...theme.validatorError,
    fontWeight: "300",
  },
});
