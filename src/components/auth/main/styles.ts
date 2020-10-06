import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoContainer: {
    position: "absolute",
    top: 30,
    alignSelf: "center",
  },
  helpContainer: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 46,
    right: 20,
  },
  hrContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  hrLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ECECEC",
  },
  noAccContainer: {
    textAlign: "center",
    lineHeight: 19,
    fontWeight: "400",
    fontSize: 16,
  },
  txtHelp: {
    color: "#0AA351",
    fontSize: 16,
    lineHeight: 19,
  },
  txtLogin: {
    width: 70,
    height: 50,
    position: "absolute",
    top: 40,
    left: 20,
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 28,
  },
  txtOr: {
    width: 50,
    textAlign: "center",
    color: "#BDBDBD",
  },
  txtSignUp: {
    fontWeight: "700",
    color: "#0AA351",
  },
});
