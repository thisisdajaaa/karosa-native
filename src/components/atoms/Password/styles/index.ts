/**
 *
 * @format
 *
 */
import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

const PasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    maxHeight: 50,
  },
  txtOTP: {
    ...theme.textTitle,
    color: theme.colors.dark25,
    borderBottomWidth: 2,
    width: 46,
    textAlign: "center",
    marginHorizontal: 5,
    borderBottomColor: theme.colors.black,
    fontWeight: "400",
  },
  hiddenText: {
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
  },
});

export default PasswordStyles;
