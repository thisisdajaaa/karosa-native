/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ProductSearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: 20,
  },
  row: {
    alignItems: "flex-start",
    width: "100%",
  },
  txtRecentSearch: {
    ...theme.textRegular,
    fontWeight: "400",
    color: theme.colors.dark10,
  },
  flatListContainer: {
    marginTop: 12,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  txtSearchTitle: {
    ...theme.textLightBold,
    fontWeight: "700",
    textAlign: "center",
  },
  item: {
    height: 32,
    backgroundColor: theme.colors.light10,
    padding: 8,
    borderRadius: 3,
    margin: 5,
  },
});

export default ProductSearchStyles;
