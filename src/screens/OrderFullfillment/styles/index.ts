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
  textHeader: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
  },
});
