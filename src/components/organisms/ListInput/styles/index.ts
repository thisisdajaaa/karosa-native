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
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  icon: {
    position: "relative",
    left: 0,
    top: -1,
  },
  infoContainer: {
    width: "90%",
    height: DIMENS.screenHeight * 0.07,
    flexDirection: "row",
  },
  rowInputContainer: {
    position: "relative",
  },
  inputContainer: {
    borderWidth: 0,
    borderBottomWidth: 0,
    marginTop: 0,
    marginBottom: 0,
    height: 0,
  },
  columnInputContainer: {
    borderWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    marginBottom: 6,
  },
  columnContainer: {
    position: "relative",
    bottom: -12,
    left: -11,
  },
  txtLabel: {
    ...theme.textListItem,
    color: theme.colors.dark20,
    fontWeight: "400",
  },
  txtValue: {
    ...theme.textListItem,
    color: theme.colors.primary,
    fontWeight: "400",
  },
  txtInfo: {
    ...theme.textRegular,
    color: theme.colors.dark10,
    fontWeight: "400",
  },
  txtLength: {
    ...theme.textListItem,
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
  txtWithIcon: {
    ...theme.textListItem,
    position: "relative",
    left: 7,
    marginRight: 6,
    fontWeight: "400",
  },
  txtRowInput: {
    ...theme.textListItem,
    textAlign: "right",
    color: theme.colors.primary,
    fontWeight: "400",
  },
});

export default ListInputStyles;
