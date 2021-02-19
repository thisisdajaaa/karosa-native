import { StyleSheet, Dimensions } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export const styles = StyleSheet.create({
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
