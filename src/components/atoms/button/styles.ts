import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0AA351",
    justifyContent: "center",
    borderRadius: 3,
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    width: "100%",
    height: 48,
    marginTop: 12,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 19,
    fontStyle: "normal",
    textAlign: "center",
  },
  iconLeft: {
    position: "absolute",
    left: "10.86%",
    top: 11,
  },
  iconRight: {
    position: "absolute",
    right: "10.86%",
    top: 7,
  },
});
