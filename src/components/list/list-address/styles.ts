import { StyleSheet } from "react-native";

export const AddressInputStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  pickerContainer: {
    paddingLeft: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  inputStyle: {
    textAlign: "right",
  },
  labelContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 1,
    justifyContent: "space-between",
    height: 45,
    alignItems: "center",
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    padding: 16,
  },
  inputLabel: {
    fontSize: 16,
    marginHorizontal: 16,
  },
  textStyle: {
    alignItems: "center",
    fontSize: 17,
    fontWeight: "400",
  },
  picker: {
    width: "100%",
    height: 50,
    textAlign: "right",
    borderWidth: 0,
    opacity: 0,
    position: "absolute",
    alignSelf: "flex-end",
  },
  inputContainer: {
    alignContent: "flex-end",
    width: "50%",
    height: "100%",
    paddingRight: 16,
  },
});
