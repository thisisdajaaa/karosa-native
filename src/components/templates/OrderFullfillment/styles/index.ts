import { theme } from "@app/styles";
import { getPlatform } from "@app/utils";

import { StyleSheet, StatusBar } from "react-native";

const mainPadding = {
  paddingLeft: 12,
  paddingRight: 12,
};

export const styles = StyleSheet.create({
  buttonGroupContainer: {
    width: "100%",
    marginBottom: 0,
    marginVertical: 15,
  },
  buttonsContainer: {
    ...mainPadding,
    paddingBottom: 12,
    backgroundColor: theme.colors.white,
  },
  cardContainer: { paddingTop: 13 },
  headerContainer: {
    paddingTop:
      getPlatform.getInstance() === "ios"
        ? 0
        : (StatusBar.currentHeight || 0) + 10,
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
    flexDirection: "column",
  },
  cardBodyOrderTotal: {
    flexDirection: "row",
  },
  cardContainer: {
    borderRadius: 10,
    borderColor: theme.colors.white,
  },
  cardFooter: {
    marginTop: 7,
    flexDirection: "row",
  },
  cardHeader: {
    flexDirection: "row",
    alignContent: "center",
  },
  headerTitle: {
    marginLeft: 5,
    marginRight: 7,
    // ...theme.textLight,
    fontWeight: "bold",
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 13,
  },
  orderTotal: {
    color: theme.colors.primary,
  },
});
