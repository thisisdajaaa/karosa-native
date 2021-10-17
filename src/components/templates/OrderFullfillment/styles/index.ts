import { theme, DIMENS } from "@app/styles";
import { getPlatform } from "@app/utils";

import { StyleSheet, StatusBar } from "react-native";

const mainPadding = {
  paddingLeft: 12,
  paddingRight: 12,
};

const isIos = getPlatform.getInstance() === "ios";

export const styles = StyleSheet.create({
  buttonGroupActive: {
    color: theme.colors.white,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  buttonGroupContainer: {
    width: "100%",
    marginBottom: 0,
    marginVertical: 15,
  },
  buttonGroupInActive: {
    color: theme.colors.black,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  buttonsBadge: {
    position: "absolute",
    top: -2,
    right: 5,
    zIndex: 1,
    elevation: isIos ? 0 : 50,
  },
  buttonsContainer: {
    ...mainPadding,
    paddingTop: 5,
    paddingBottom: 12,
    backgroundColor: theme.colors.white,
  },
  cardContainer: { paddingTop: 13, zIndex: 0, paddingBottom: 20 },
  headerContainer: {
    paddingTop: isIos ? 0 : (StatusBar.currentHeight || 0) + 10,
    backgroundColor: theme.colors.white,
    ...mainPadding,
    paddingBottom: 9,
  },
  headerTopNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconMargin: {
    marginRight: 10,
  },
  textHeader: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
  },
});

export const cardStyles = StyleSheet.create({
  cardBody: {
    flexDirection: "row",
    marginVertical: 10,
  },
  cardBodyContent: {
    flex: 1,
    flexDirection: "column",
  },
  cardBodyOrderTotal: {
    bottom: 0,
    flexDirection: "row",
    position: "absolute",
    alignSelf: "flex-end",
  },
  cardContainer: {
    borderRadius: 10,
    borderColor: theme.colors.white,
  },
  cardFooter: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardFooterButton: {
    width: "auto",
    minWidth: 100,
    height: DIMENS.screenHeight * 0.05,
  },
  cardFooterButtonLeft: {
    backgroundColor: theme.colors.transparent,
    paddingLeft: 0,
  },
  cardFooterSubText: {
    marginLeft: 4,
    marginRight: 13,
  },
  cardFooterTextContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    marginLeft: 5,
    marginRight: 7,
    // ...theme.textLight,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 13,
  },
  orderTotalAmount: {
    color: theme.colors.primary,
    fontWeight: "400",
  },
  orderTotalText: {
    fontWeight: "400",
  },
  productName: {
    fontWeight: "bold",
    marginVertical: 8,
    marginTop: 0,
    textTransform: "capitalize",
  },
});

export const buttonGroupContentStyles = StyleSheet.create({
  badgeInactive: {
    backgroundColor: theme.colors.light15,
  },
  badgeStyling: {
    top: -10,
    right: -20,
    position: "absolute",
  },
  badgeTextStyleBlack: {
    color: theme.colors.black,
  },
  badgeTextStyleWhite: {
    color: theme.colors.white,
  },
});
