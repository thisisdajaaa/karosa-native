import { StyleSheet } from "react-native";

export const newAddressStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  logoStyle: { position: "absolute", left: 16, alignSelf: "center" },
  multiListContainer: { height: 144, marginVertical: 18 },
  addressContainer: { marginBottom: 18, marginTop: 6 },
  newContainer: {
    backgroundColor: "white",
    marginTop: 1,
    height: 45,
  },
  TextStyle: {
    flexDirection: "column",
    paddingTop: 10,
    position: "absolute",
    left: 18,
    alignSelf: "center",
    fontSize: 17,
    fontWeight: 400,
  },
  checkboxContainer: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    padding: 15,
  },
  checkbox: {
    alignSelf: "center",
  },
  ButtonParent: {
    margin: 16,
  },
});
