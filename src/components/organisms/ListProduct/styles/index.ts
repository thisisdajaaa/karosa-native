/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { SPACING, DIMENS, theme } from "@app/styles";

const ListProductStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  subContainerOne: {
    flexDirection: "row",
    marginBottom: SPACING.lg,
  },
  image: {
    width: DIMENS.screenWidth * 0.3,
    height: DIMENS.screenHeight * 0.15,
  },
  topContainer: {
    flexDirection: "column",
    marginLeft: SPACING.lg,
  },
  txtName: {
    ...theme.textBold,
    marginBottom: SPACING.md,
    fontWeight: "500",
    fontStyle: "normal",
  },
  txtPrice: {
    ...theme.textRegular,
    marginBottom: SPACING.md,
    fontWeight: "400",
    fontStyle: "normal",
  },
  badgeContainer: {
    flexDirection: "row",
  },
  wholesaleContainer: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 3,
  },
  txtBadge: {
    ...theme.textLight,
    fontWeight: "700",
    color: theme.colors.white,
    textAlign: "center",
    marginTop: SPACING.xss,
  },
  discountContainer: {
    backgroundColor: theme.colors.orange10,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 3,
  },
  discountWithWholesaleContainer: {
    backgroundColor: theme.colors.orange10,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 3,
    marginLeft: SPACING.sm,
  },
  subContainerTwo: { marginBottom: SPACING.md },
  midContainerOne: {
    flexDirection: "row",
    marginBottom: SPACING.md,
  },
  variationContainerOne: {
    flexDirection: "row",
    position: "absolute",
    left: 0,
  },
  txtLabel: {
    ...theme.textRegular,
    fontWeight: "400",
    fontStyle: "normal",
  },
  txtValue: {
    ...theme.textBold,
    fontWeight: "700",
    fontStyle: "normal",
    marginLeft: 26,
  },
  variationContainerTwo: {
    flexDirection: "row",
    position: "absolute",
    left: 148,
  },
  space: { marginTop: SPACING.sm, marginBottom: SPACING.sm },
  midContainerTwo: {
    flexDirection: "row",
    marginBottom: SPACING.lg * 2,
  },
  botContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  txtDiscontinue: {
    ...theme.textRegular,
    fontWeight: "300",
    marginLeft: SPACING.md,
  },
  txtEdit: {
    marginLeft: SPACING.md,
  },
  buttonContent: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    minWidth: 124,
    width: 91,
    height: 32,
    padding: 0,
    borderWidth: 2,
  },
  txtButton: {
    ...theme.textLight,
    fontWeight: "700",
    color: theme.colors.primary,
  },
  removeIcon: {
    marginTop: SPACING.xss - 1,
  },
  boostContainer: {
    position: "relative",
    left: 20,
    top: -4,
  },
  editIcon: { marginLeft: SPACING.md, marginTop: SPACING.xss - 1 },
});

export default ListProductStyles;
