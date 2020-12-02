import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  txtProductStatus: {
    ...theme.textBold,
    marginVertical: 12,
    textAlign: "center",
    fontWeight: "500",
  },
  separator: {
    marginTop: 5,
  },
  spacer: {
    marginTop: 24,
  },
  buttonContainer: {
    marginTop: 12,
    alignSelf: "center",
  },
});
