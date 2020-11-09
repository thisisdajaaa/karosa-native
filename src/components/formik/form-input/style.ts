import { StyleSheet } from "react-native";

export const formInputStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: "white",
    borderRadius: 3,
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 10,
    borderWidth: 0,
    borderStyle: "solid",
    width: 200,
    height: 50,
    borderColor: "#4F4F4F",
  },
  textStyle: {
    fontSize: 17,
    fontWeight: "400",
  },
  textinputstyle: {
    color: "#0c0c0c",
    fontSize: 16,
    flex: 2,
    fontWeight: "400",

    textAlign: "right",
  },
});
