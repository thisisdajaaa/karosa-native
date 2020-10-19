import { StyleSheet } from "react-native";

export const styleforaddress = StyleSheet.create({
  adressContainer: {
    backgroundColor: "white",
    marginTop: 16,
    width: "100%",
    flexDirection: "column",
    padding: 16,
  },
  NameStyle: {
    fontWeight: "400",
    fontFamily: "Arial",
    fontSize: 16,
    color: "#1C1C1C",
    marginRight: 25,
  },
  DetailText: {
    fontWeight: "400",
    fontFamily: "Arial",
    fontSize: 16,
    color: "#4F4F4F",
  },
  Default: {
    fontWeight: "300",
    fontFamily: "Arial",
    fontSize: 14,
    color: "#4F4F4F",
    alignSelf: "flex-end",
    marginRight: 5,
    position: "absolute",
  },
  touchable: {
    width: "100%",
    marginTop: 16,
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    alignContent: "space-between",
  },
  NewAddStyle: {
    fontWeight: "400",
    fontSize: 16,
    color: "#0AA351",
    alignContent: "space-between",
  },
});
