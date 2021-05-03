/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const CategoriesStyles = StyleSheet.create({
  categoryContainer: {
    alignItems: "center",
    width: 100,
    marginBottom: 10,
  },
  categoryCircle: {
    height: 48,
    width: 48,
    backgroundColor: theme.colors.dark10,
    borderRadius: 100,
  },
  nameContainer: {
    marginTop: 4,
    width: 50,
  },
  txtName: {
    ...theme.textLight,
    textAlign: "center",
    fontWeight: "300",
  },
});

export default CategoriesStyles;
