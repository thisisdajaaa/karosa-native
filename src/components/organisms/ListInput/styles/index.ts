/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";

const ListInputStyles = StyleSheet.create({
  variationOneContainer: {
    flexDirection: "column",
  },
  variationTwoContainer: {
    flexDirection: "column",
  },
  variationOneLabelContainer: {
    height: DIMENS.screenHeight * 0.03,
    justifyContent: "flex-start",
  },
  formInputContainer: {
    width: "100%",
    marginLeft: "3%",
  },
  mainRowContainer: {
    flexDirection: "row",
    height: DIMENS.screenHeight * 0.028,
  },
  labelLengthContainer: {
    flexDirection: "row",
  },
  labelContainer: {
    marginTop: SPACING.xss - 4,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  infoContainer: {
    width: "90%",
    height: DIMENS.screenHeight * 0.07,
    flexDirection: "row",
  },
  rowInputContainer: {
    marginTop: SPACING.sm,
  },
  inputContainer: {
    borderWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
  },
  errorContainer: {
    marginTop: SPACING.md,
  },
  columnInputContainer: {
    borderWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    position: "relative",
    bottom: -30,
    left: -10,
  },
  txtLabel: {
    ...theme.textRegular,
    color: theme.colors.dark20,
    fontWeight: "400",
  },
  txtInfo: {
    ...theme.textRegular,
    color: theme.colors.dark10,
    fontWeight: "400",
  },
  txtLength: {
    ...theme.textRegular,
    fontWeight: "400",
    color: theme.colors.dark10,
    marginLeft: 2,
  },
  txtRequired: {
    ...theme.textRegular,
    marginLeft: SPACING.xs,
    color: theme.colors.red5,
    fontWeight: "400",
  },
  txtRowInput: {
    textAlign: "right",
  },
});

export default ListInputStyles;
