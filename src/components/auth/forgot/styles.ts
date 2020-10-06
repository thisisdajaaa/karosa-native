import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backIcon: {
    width: 70,
    height: 50,
    position: "absolute",
    alignSelf: "center",
    top: 40,
    left: 20,
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 28,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  helpContainer: {
    width: 50,
    height: 50,
    position: "absolute",
    alignSelf: "center",
    top: 40,
    right: 8,
  },
  txtHelp: {
    color: "#0AA351",
    fontSize: 16,
    lineHeight: 19,
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoContainer: {
    position: "absolute",
    top: 120,
    alignSelf: "center",
  },
  txtForgotPass: {
    fontWeight: "500",
    fontFamily: "SFProText-Bold",
    lineHeight: 28,
    fontSize: 24,
    color: "#000000",
    marginVertical: 6,
  },
  txtResetPass: {
    fontFamily: "SFProText-Regular",
    fontWeight: "300",
    lineHeight: 19,
    fontSize: 16,
    color: "#000000",
    marginVertical: 6,
  },
  txtLogin: {
    width: 70,
    height: 50,
    position: "absolute",
    top: 20,
    alignSelf: "center",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
  },
});
