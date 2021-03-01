import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingRight: 13,
    paddingLeft: 1,
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: theme.colors.white,
  },
  leftContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  hasImage: {
    ...theme.textRegular,
    position: "absolute",
    left: 34,
    fontWeight: "500",
  },
  image: {
    height: 25,
    width: 25,
    position: "absolute",
    left: 13,
    alignSelf: "center",
  },
  left: {
    ...theme.textRegular,
    fontWeight: "500",
  },
  right: {
    ...theme.link1,
    fontWeight: "400",
    textAlign: "right",
  },
});
