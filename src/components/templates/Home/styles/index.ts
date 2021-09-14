/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";
import { Dimensions } from "react-native";

const HomeStyles = StyleSheet.create({
  txtHeader: {
    ...theme.textBold,
    fontWeight: "700",
  },
  scrollviewContainer: {
    height: 0.93 * Dimensions.get("window").height,
  },
  subContainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
    marginBottom: 10,
  },
  productImage: {
    width: "100%",
    height: 200,
  },
  iconStyleEllipsis: {
    position: "absolute",
    alignSelf: "flex-end",
    marginHorizontal: 10,
  },
  categoriesCard: {
    margin: 10,
    alignContent: "center",
    alignItems: "center",
  },
  categoriesText: {
    width: "100%",
    fontSize: 9,
    textAlign: "center",
  },
});

export default HomeStyles;
