/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme, DIMENS } from "@app/styles";

const AddressDetailsStyles = StyleSheet.create({
  contentContainer: {
    width: DIMENS.screenWidth * 0.65,
  },
  defaultContainer: {
    alignSelf: "flex-start",
  },
  txtName: {
    ...theme.textRegular,
    color: theme.colors.dark20,
    fontWeight: "400",
  },
  txtDetails: {
    ...theme.textRegular,
    color: theme.colors.dark30,
    fontWeight: "400",
  },
  txtDefault: {
    ...theme.textLight,
    fontWeight: "300",
    color: theme.colors.dark30,
  },
});

export default AddressDetailsStyles;
