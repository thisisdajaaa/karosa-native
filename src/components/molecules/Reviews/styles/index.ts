/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ReviewsStyles = StyleSheet.create({
  varietyImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  sellerImage: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },

  txtBlackRegular: {
    ...theme.textRegular,
  },
  txtReviewParagraph: {
    ...theme.textRegular,
    marginHorizontal: 16,
  },
  tagsStyle: {
    backgroundColor: theme.colors.dark5,
    margin: 3,
    padding: 8,
    borderRadius: 16,
    ...theme.textLight,
    color: theme.colors.dark15,
  },

  subContainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
    marginBottom: 10,
  },

  reviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },
  txtNameAddress: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 8,
  },

  iconStyle: {
    width: "100%",
    height: 30,
  },
  buyerContainer: {
    flexDirection: "row",
  },
  likedIcon: {
    marginLeft: 10,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 8,
  },
  buyerGallery: {
    flexDirection: "row",
    margin: 8,
  },
  commentContainer: {
    marginHorizontal: 25,
  },
  ratingContainer: {
    width: 80,
  },
});

export default ReviewsStyles;
