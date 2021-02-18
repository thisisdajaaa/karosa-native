import { StyleSheet, Dimensions } from "react-native";
import { theme } from "@app/styles";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryContainer: {
    alignItems: "center",
    width: 100,
    marginBottom: 10,
  },
  categoryCircle: {
    height: 48,
    width: 48,
    backgroundColor: theme.colors.dark10,
    borderRadius: 100,
  },
  nameContainer: {
    marginTop: 4,
    width: 50,
  },
  txtName: {
    ...theme.textLight,
    textAlign: "center",
    fontWeight: "300",
  },
  image: {
    width: "100%",
    height: 300,
  },
  carouselItem: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  carouselContainer: {
    width: "100%",
  },
  paginationStyle: {
    position: "absolute",
    flexDirection: "column-reverse",
    height: "100%",
    alignSelf: "center",
  },
});
