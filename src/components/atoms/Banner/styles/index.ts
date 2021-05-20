/**
 *
 * @format
 *
 */

import { DIMENS } from "@app/styles";
import { StyleSheet } from "react-native";

export const SLIDER_WIDTH = DIMENS.screenWidth;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const BannerStyles = StyleSheet.create({
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
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: "white",
  },
});

export default BannerStyles;
