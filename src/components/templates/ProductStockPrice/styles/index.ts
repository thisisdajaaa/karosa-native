/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, theme } from "@app/styles";
import { VariationOption } from "@app/redux/shop/models";

const ProductStockPriceStyles = StyleSheet.create({
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "2%",
    width: "90%",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    position: "relative",
  },
  innerContainer: {
    flexDirection: "column",
  },
  tableHeaderContainer: {
    backgroundColor: theme.colors.gold15,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: DIMENS.screenWidth * 1.2,
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
  },
  txtTableHeader: {
    ...theme.textListItem,
    marginRight: 4,
  },
  txtRequired: {
    color: theme.colors.red5,
  },
  tableColumnPrimary: {
    flexGrow: 2,
    flexBasis: 50,
  },
  tableColumnSecondary: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 60,
  },
  inputContainer: {
    padding: 5,
    height: 28,
    width: 62,
  },
});

export const OptionRowStyles = (index: number, options: VariationOption[]) => {
  return StyleSheet.create({
    optionRowContainer: {
      backgroundColor: theme.colors.white,
      flexDirection: "row",
      padding: 12,
      width: DIMENS.screenWidth * 1.2,
      alignItems: "center",
      marginBottom: index === options.length - 1 ? 12 : 0,
      borderBottomColor: theme.colors.light10,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
};

export default ProductStockPriceStyles;
