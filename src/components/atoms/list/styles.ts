import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 19,
  },
  title: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "SFProText-Regular",
  },
});
