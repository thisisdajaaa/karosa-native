import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  varietyImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  rowContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  sellerImage: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  txtSeller: {
    fontSize: 12,
  },
  txtRating: {
    ...theme.textRegular,
    color: theme.colors.black,
  },
  rating: {
    flexDirection: "row",
  },
  txtSold: {
    ...theme.textRegular,
    color: theme.colors.black,
    margin: 10,
  },
  txtSellerInfo: {
    ...theme.textRegular,
    color: theme.colors.orange10,
  },
  txtSellerLabel: {
    ...theme.textLight,
    color: theme.colors.black,
  },
  txtVisitStore: {
    marginLeft: 80,
    ...theme.textRegular,
    color: theme.colors.green10,
    margin: 10,
  },
  txtFooters: {
    ...theme.textLight,
    color: theme.colors.white,
  },
  horizontalContainer: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    alignItems: "center",
  },
  txtProductName: {
    ...theme.textRegular,
    marginLeft: 8,
  },
  iconStyleEllipsis: {
    position: "absolute",
    alignSelf: "flex-end",
    marginHorizontal: 10,
  },
  iconStyleFavorite: {
    marginRight: 35,
  },
  iconStyleShare: {
    margin: 5,
  },
  ratingIconStyle: {
    width: 15,
    height: 15,
  },
  footer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  greenBox: {
    padding: 5,
    backgroundColor: theme.colors.green10,
    alignItems: "center",
    height: 50,
    width: "30%",
    marginHorizontal: 2,
  },
  orangeBox: {
    padding: 15,
    backgroundColor: theme.colors.orange10,
    alignItems: "center",
    height: 50,
    width: "30%",
    marginHorizontal: 2,
  },
  container: {
    flexDirection: "column",
  },
  subContainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
    marginBottom: 10,
  },
  productImage: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  txtPrice: {
    ...theme.textRegular,
    color: theme.colors.green10,
  },
  sellerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtNameAddress: {
    flexDirection: "column",
    justifyContent: "center",
  },
  reviewSeller: {
    alignItems: "center",
  },
});
