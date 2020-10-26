import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingRight: 13,
    paddingLeft: 1,
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: "#fff",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  left: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "SFProText-Regular",
  },
  right: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "right",
    color: "#4F4F4F",
  },
  default: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#4F4F4F",
    alignSelf: "flex-start",
  },
});
