/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const BasketItemsStyles = StyleSheet.create({
  text: {
    ...theme.textRegular,
    fontWeight: "400",
    marginLeft: 8,
  },
  container: {
    backgroundColor: theme.colors.transparent,
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  productImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  formerPricetxt: {
    ...theme.textRegular,
    color: "light5",
    textDecorationLine: "line-through",
    opacity: 0.5,
  },
  currentPricetxt: {
    ...theme.textBold,
    color: "#31A14C",
  },
  storeNameBarStyle: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  chevronStyle: {
    alignItems: "center",
    flexDirection: "row",
  },
  edittxt: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
  },
  itemSection: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingBottom: 8,
    alignItems: "center",
  },
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  priceTxt: {
    flexDirection: "row",
    marginBottom: 8,
  },
  gap: {
    marginBottom: 4,
  },
});

export default BasketItemsStyles;
