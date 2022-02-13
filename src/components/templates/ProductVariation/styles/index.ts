/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { isEmpty } from "lodash";
import { DIMENS, theme } from "@app/styles";
import { VariationOption } from "@app/redux/shop/models";

const ProductVariationStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "2%",
    width: "90%",
    alignSelf: "center",
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  btnAddVariationContainer: {
    height: 46,
    marginVertical: 16,
    backgroundColor: theme.colors.white,
  },
  btnAddVariationLbl: {
    color: theme.colors.dark20,
    ...theme.textRegular,
  },
});

export const NewVariationStyles = StyleSheet.create({
  optionCardContainer: {
    width: 82,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: theme.colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    position: "relative",
    alignSelf: "flex-start",
    marginRight: 12,
    zIndex: -1,
  },
  deleteContainer: {
    position: "absolute",
    padding: 5,
    right: -12,
    top: -10,
    zIndex: 99,
    borderRadius: 100,
    backgroundColor: theme.colors.red15,
  },
  optionImage: {
    width: "100%",
    height: 70,
    flexGrow: 1,
    resizeMode: "stretch",
    opacity: 0.5,
  },
  optionNamePrimaryContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: theme.colors.primary,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  txtOptionPrimaryName: {
    ...theme.textSmall,
    color: theme.colors.white,
    textAlign: "center",
  },
  optionNameSecondaryContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: theme.colors.primary,
  },
  txtOptionSecondaryName: {
    ...theme.textLight,
    color: theme.colors.white,
    textAlign: "center",
  },
  spacer: {
    marginTop: 16,
  },
  variationNameContainer: {
    flexDirection: "column",
  },
  rowContainer: {
    flexDirection: "row",
    height: DIMENS.screenHeight * 0.028,
  },
  deleteIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteIconMargin: {
    marginRight: 8,
  },
  errorContainer: {
    marginTop: 8,
  },
  variationNameInput: {
    ...theme.textRegular,
    textAlign: "left",
    color: theme.colors.dark20,
    fontWeight: "400",
  },
  variationNameInputContainer: {
    borderWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    marginBottom: 1,
  },
  lblVariationName: {
    ...theme.textRegular,
    color: theme.colors.dark20,
    fontWeight: "400",
  },
  txtDoneOrEdit: {
    ...theme.textRegular,
    color: theme.colors.primary,
    fontWeight: "400",
  },
  columnContainer: {
    flexDirection: "column",
  },
  txtSwitchContainer: {
    height: DIMENS.screenHeight * 0.028,
    flexDirection: "row",
    alignItems: "center",
  },
  txtSwitch: {
    ...theme.textLight,
    color: theme.colors.black,
    textAlign: "left",
  },
  txtSubSwitch: {
    ...theme.textSmall,
    color: theme.colors.light20,
    textAlign: "left",
  },
  switchContainer: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  variationImageContainer: {
    height: 130,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 14,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  variationImageRowMain: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  variationImageSub: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  variationImageContent: {
    paddingVertical: 12,
  },
  btnAdd: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  btnAddLbl: {
    ...theme.textLight,
    color: theme.colors.black,
  },
});

export const VariationModalStyles = StyleSheet.create({
  overlayContainer: {
    height: 250,
    width: DIMENS.screenWidth,
    position: "absolute",
    top: "20%",
    padding: 24,
  },
  iconContainer: {
    alignItems: "flex-end",
  },
  imagePickerContainer: { alignItems: "flex-start" },
  rowContainer: {
    flexDirection: "row",
  },
  txtOptionName: {
    marginRight: 2,
    fontSize: 13.33,
    lineHeight: 16,
  },
  txtLength: {
    ...theme.textListItem,
    fontWeight: "400",
    color: theme.colors.dark10,
    marginLeft: 2,
  },
  txtRequired: {
    color: theme.colors.red5,
  },
});

export const OptionCardStyles = (image: string | null, hasImage: boolean) => {
  return StyleSheet.create({
    optionCard: {
      padding: image && hasImage ? 0 : 8,
      backgroundColor:
        image && hasImage ? theme.colors.white : theme.colors.primary,
    },
  });
};

export const BtnAddStyles = (optionsData: VariationOption[]) => {
  return StyleSheet.create({
    btnAddContainer: {
      width: 70,
      marginLeft: !isEmpty(optionsData) ? 12 : 0,
      height: 50,
      alignSelf: "center",
    },
  });
};

export const OptionNameStyles = (imageSwitchEnabled: boolean) => {
  return StyleSheet.create({
    optionName: {
      marginTop: imageSwitchEnabled ? 48 : 0,
      flexGrow: 1,
    },
  });
};

export default ProductVariationStyles;
