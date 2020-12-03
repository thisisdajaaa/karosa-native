import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const newAddressStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  logoStyle: { position: "absolute", left: 16, alignSelf: "center" },
  multiListContainer: { height: 144, marginVertical: 18 },
  addressContainer: { marginBottom: 18, marginTop: 6 },

  TextStyle: {
    flexDirection: "column",
    paddingTop: 5,
    position: "absolute",
    left: 17,
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "400",
  },
  checkboxContainer: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    padding: 15,
  },

  submitbuttonParent: {
    margin: 16,
    alignSelf: "center",
  },
  setDetailStyle: {
    flexDirection: "column-reverse",
    color: "#0AA351",
    fontSize: 16,
  },
  inputStyle: {
    flexDirection: "row-reverse",
    textAlign: "right",
  },
  newContainer: {
    backgroundColor: "white",
    marginTop: 1,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    padding: 16,
  },
  inputLabel: {
    fontSize: 12,
  },
  btnSubmtContainer: {
    marginTop: 12,
    backgroundColor: "#0AA351",
    minWidth: 330,
    width: "100%",
  },
  txtBtnSubmit: {
    color: "white",
  },
});
