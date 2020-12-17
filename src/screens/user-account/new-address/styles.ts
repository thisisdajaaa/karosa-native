import { StyleSheet } from "react-native";
import { theme } from "styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  addressContainer: {
    padding: 16,
  },

  textStyle: {
    ...theme.textRegular,
    paddingTop: 5,
    fontWeight: "400",
  },

  submitbuttonParent: {
    alignSelf: "center",
  },
  setDetailStyle: {
    flexDirection: "column-reverse",
    color: theme.colors.primary,
    fontSize: 16,
  },
  inputStyle: {
    flexDirection: "row-reverse",
    textAlign: "right",
  },
  checkboxContainer: {
    flexDirection: "row",
    backgroundColor: theme.colors.white,
    marginTop: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    padding: 16,
  },
  inputLabel: {
    ...theme.textRegular,
  },
  btnSubmtContainer: {
    backgroundColor: theme.colors.white,
    width: "100%",
  },
  txtBtnSubmit: {
    color: theme.colors.white,
  },
});
