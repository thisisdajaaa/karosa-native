import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  leftContainer: {
    position: "absolute",
    top: 25,
    left: 16,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 25,
  },
  rightContainer: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 20,
    right: 4,
  },
  title: {
    fontWeight: "700",
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    lineHeight: 19,
    justifyContent: "center",
    alignItems: "center",
  },
  txtRight: {
    color: "#0AA351",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "SFProText-Regular",
    position: "absolute",
    top: 5,
  },
  txtLeft: {
    width: 70,
    height: 50,
    position: "absolute",
    top: 23,
    left: 18,
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 28,
    fontFamily: "SFProText-Bold",
  },
});
