import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  columnContainer: {
    flexDirection: "column",
    height: 80,
  },
  columnLabelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  columnInputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 25,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  rowInputContainer: { alignItems: "flex-end" },
  txtLabel: {
    ...theme.textRegular,
    fontWeight: "400",
  },
  totalDigits: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: theme.colors.dark10,
    marginLeft: 2,
  },
  required: {
    ...theme.textRegular,
    marginLeft: 2,
    color: theme.colors.red5,
    fontWeight: "400",
  },
  inputStyle: {
    flexDirection: "column",
    borderWidth: 0,
    padding: 0,
    marginVertical: 0,
  },
  rowInput: {
    ...theme.textRegular,
    textAlign: "right",
  },
});
