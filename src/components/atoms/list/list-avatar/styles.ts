import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 1,
    paddingRight: 10,
    backgroundColor: "#fff",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  imageContainer: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { height: 5, width: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    borderRadius: 100,
    marginBottom: 9,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  subTitle: { fontWeight: "300", fontSize: 16, lineHeight: 19 },
  title: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "SFProText-Regular",
  },
});
