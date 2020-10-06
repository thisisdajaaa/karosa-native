import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 1,
    paddingRight: 10,
    backgroundColor: "#fff",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  hasListColor: {
    position: "absolute",
    left: 30,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "SFProText-Regular",
  },
  listColor: {
    position: "absolute",
    left: 12,
    fontSize: 30,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "SFProText-Regular",
  },
  rightLabel: {
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "right",
    color: "#4F4F4F",
  },
});
