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
  logo: {
    width: 80,
    height: 80,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignSelf: "center",
  },
  txtForgotPass: {
    fontWeight: "bold",
    fontFamily: "SFProText-Regular",
    lineHeight: 14,
    fontSize: 12,
    color: "#0AA351",
    marginVertical: 6,
  },
  txtLogin: {
    width: 70,
    height: 50,
    position: "absolute",
    top: 42,
    alignSelf: "center",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
  },
});
