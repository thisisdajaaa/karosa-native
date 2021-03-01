/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { DIMENS, SPACING, theme } from "@app/styles";

const ShopTermsStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  subContainer: {
    justifyContent: "flex-start",
    padding: SPACING.lg + 4.6,
  },
  notNowButtonContainer: {
    backgroundColor: theme.colors.light10,
  },
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  txtNotNow: {
    ...theme.textRegular,
    color: theme.colors.dark20,
  },
  paragContainer: { marginBottom: SPACING.lg * 2 },
  paragHeader: {
    ...theme.textBold,
    marginBottom: SPACING.lg,
    fontWeight: "500",
  },
  paragBody: {
    ...theme.textRegular,
    fontWeight: "400",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "2%",
    alignSelf: "center",
    width: DIMENS.screenWidth * 0.9,
  },
  buttonSpacer: {
    marginVertical: SPACING.sm,
  },
});

export default ShopTermsStyles;
