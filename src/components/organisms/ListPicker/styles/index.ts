/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";

const ListPickerStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  mainRowContainer: {
    flexDirection: "row",
    height: DIMENS.screenHeight * 0.05,
  },
  labelContainer: {
    marginTop: SPACING.sm - 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  txtLabel: {
    ...theme.textRegular,
    color: theme.colors.dark20,
    fontWeight: "400",
  },
  txtRequired: {
    ...theme.textRegular,
    marginLeft: SPACING.xs,
    color: theme.colors.red5,
    fontWeight: "400",
  },
  rowInputContainer: {
    marginTop: SPACING.xss,
  },
  txtValidation: {
    ...theme.validatorError,
    fontWeight: "300",
  },
});

export default ListPickerStyles;
