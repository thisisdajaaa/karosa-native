import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: 3,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%",
    borderColor: theme.colors.dark30,
  },
  icon: {
    marginRight: 10,
  },
  //temp
  text: {
    ...theme.textRegular,
    color: theme.colors.dark25,
    flex: 2,
    fontWeight: "400",
  },
});
