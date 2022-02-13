/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { isEmpty } from "lodash";
import { theme, DIMENS } from "@app/styles";

const ProductNewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagesContainer: {
    backgroundColor: theme.colors.white,
    alignItems: "flex-start",
  },
  rowFlex: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  listWidth: {
    width: 250,
  },
  image: {
    width: DIMENS.screenWidth,
    height: "100%",
  },
  imageContainer: {
    alignItems: "center",
    marginRight: 4,
    borderRadius: 5,
    height: DIMENS.screenHeight * 0.12,
    justifyContent: "center",
    overflow: "hidden",
    width: DIMENS.screenWidth * 0.22,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  txtSave: {
    ...theme.textRegular,
    color: theme.colors.primary,
    fontWeight: "400",
  },
  txtSaveDisabled: {
    ...theme.textRegular,
    color: theme.colors.dark10,
    fontWeight: "400",
  },
  spacer: {
    marginTop: "20%",
    marginBottom: "20%",
  },
  separator: {
    marginVertical: 5,
  },
  txtAdd: {
    ...theme.textSmall,
    textAlign: "center",
    fontWeight: "300",
    color: theme.colors.black,
  },
});

export const multipleImage = (productImages: string[]) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: theme.colors.light15,
      marginLeft: !isEmpty(productImages) ? 4 : 0,
      borderRadius: 5,
      borderColor: theme.colors.dark10,
      height: DIMENS.screenHeight * 0.12,
      justifyContent: "center",
      overflow: "hidden",
      width: DIMENS.screenWidth * 0.22,
    },
  });
};

export default ProductNewStyles;
