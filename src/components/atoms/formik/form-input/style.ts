import { StyleSheet } from "react-native";

export const formInputStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    marginBottom: 1,
  },
  box: {
    backgroundColor: "white",
    borderRadius: 3,
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 10,
    borderWidth: 0,
    borderStyle: "solid",
    width: "60%",
    borderColor: "#4F4F4F",
  },
  TextStyle: {
    flexDirection: "column",
    paddingTop: 24,
    position: "absolute",
    left: 20,
    fontSize: 17,
    fontWeight: 400,
  },

  textinputstyle: {
    color: "#0c0c0c",
    fontSize: 16,
    flex: 2,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "right",
  },
  ButtonParent: {
    margin: 16,
  },
});
