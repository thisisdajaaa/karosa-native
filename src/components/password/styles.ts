import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    height: 50,
    maxHeight: 50,
  },
  text: {
    ...theme.textRegular,
    color: theme.colors.dark25,
    borderBottomWidth: 2,
    width: 50,
    height: 50,
    textAlign: "center",
    marginHorizontal: 5,
    borderBottomColor: "black",
    fontWeight: "400",
    paddingHorizontal: 20,
  },
  hiddenText: {
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "green",
  },
});
