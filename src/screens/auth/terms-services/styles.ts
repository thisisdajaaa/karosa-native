import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  agreeButtonContainer: {
    backgroundColor: theme.colors.primary,
    minWidth: 330,
    width: "100%",
    marginVertical: 6,
  },
  notNowButtonContainer: {
    backgroundColor: theme.colors.light10,
    minWidth: 330,
    width: "100%",
  },
  txtAgreeButton: {
    color: theme.colors.white,
  },
  txtNotNow: {
    color: theme.colors.dark10,
  },
  subContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
  },
  paragContainer: { marginBottom: 30 },
  paragHeader: {
    ...theme.textRegular,
    marginBottom: 20,
    fontWeight: "500",
  },
  paragBody: {
    ...theme.textRegular,
    fontWeight: "400",
  },
  buttonContainer: { position: "absolute", bottom: 20, alignSelf: "center" },
});
