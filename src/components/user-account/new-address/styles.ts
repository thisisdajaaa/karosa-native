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
    paddingTop: 5,
    position: "absolute",
    left: 17,
    alignSelf: "center",
    fontSize: 17,
    fontWeight: 400,
  },
  checkboxContainer: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    padding: 15,
  },
  textContainer: {
    flexWrap: "wrap",
    paddingLeft: 16,
  },
  longText: {
    paddingTop: 30,
    flexDirection: "column",
    alignContent: "center",
    color: "#BDBDBD",
    fontSize: 14,
  },
  buttonParent: {
    margin: 16,
  },
  setDetailStyle: {
    flexDirection: "column-reverse",
    color: "#0AA351",
    fontSize: 16,
  },
});
