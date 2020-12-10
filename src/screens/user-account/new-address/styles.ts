import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  addressContainer: { 
    padding: 16,
  },

  textStyle: {
    paddingTop: 5,
    fontSize: 17,
    fontWeight: "400",
  },

  submitbuttonParent: {
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
  checkboxContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 8,
    justifyContent: "space-between",
    alignItems: "center",
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
    backgroundColor: "#0AA351",
    width: "100%",
  },
  txtBtnSubmit: {
    color: "white",
  },
});
